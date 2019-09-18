import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import { AssessmentYear } from '../Models/AssessmentYear';
import { IncomeFromHouseProperty } from '../Models/Income/IncomeFromHouseProperty';
import { IncomeFromCapitalGains } from '../Models/Income/IncomeFromCapitalGains';
import { IncomeFromOtherSources } from '../Models/Income/IncomeFromOtherSources';
import { DeductionCalculator } from '../Calculation/DeductionCalculator';
import { TaxCalculator } from '../Calculation/TaxCalculator';
import { IntersestOnTaxCalculator } from '../Calculation/InterestOnTaxCalculator';

@Component({
  selector: 'app-itcalculation',
  templateUrl: './itcalculation.component.html',
  styleUrls: ['./itcalculation.component.css']
})

export class ITCalculationComponent implements OnInit {

  categoryValues = ['Male', 'Female', 'Senior Citizen', 'Super Senior Citizen'];
  assessmentYears : AssessmentYear[] = [];

  incomeTaxCalculator : FormGroup;
  incomeFromHouseProp : IncomeFromHouseProperty;
  incomeFromCapital : IncomeFromCapitalGains;
  incomeFromOtherSource : IncomeFromOtherSources;
  deductionCalculator : DeductionCalculator;
  interestOnTaxCalculator : IntersestOnTaxCalculator;
  taxCalculator : TaxCalculator;

  totalNormalIncome : number;
  totalSpecialIncome : number;
  totalIncome : number;
  totalDeductions : number;
  netTaxableIncome : number;

  showHousePropertyDetails : boolean = false;
  showCapitalGainsDetails : boolean = false;
  showIncomeFromOtherSourcesDetails : boolean = false;
  showDeductionDetails : boolean = false;
  capitalGainsFlag : boolean = true;
  categoryFlag : boolean = true;
  deduction80TTBFlag : boolean = false;
  calculateFlag : boolean = false;

  constructor(private fb : FormBuilder){   
    this.initializeAssessmentYears();
    this.incomeFromHouseProp = new IncomeFromHouseProperty();
    this.incomeFromCapital = new IncomeFromCapitalGains();
    this.incomeFromOtherSource = new IncomeFromOtherSources();
    this.deductionCalculator = new DeductionCalculator();
    this.taxCalculator = new TaxCalculator();
    this.interestOnTaxCalculator = new IntersestOnTaxCalculator();
    this.netTaxableIncome = 0;
    this.totalNormalIncome = 0;
    this.totalDeductions = 0;
  }

  ngOnInit(){
    this.initialiseFormFields(); 
    this.incomeTaxCalculator.get('assessmentYear').valueChanges.subscribe(change => {
      this.onYearChange();
    });
    this.incomeTaxCalculator.get('category').valueChanges.subscribe(change => {
      this.setDeduction80TTBFlag();
    });
    this.onValueChange();
  }

  initialiseFormFields(){
    this.incomeTaxCalculator = this.fb.group(
      {
        assessmentYear : new FormControl("Select"),
        taxPayer : new FormControl({value : 'Individual', disabled : true}),
        category : new FormControl("Select"),
        resdentialStatus : new FormControl({value : 'Resident', disabled : true}),
        income : this.fb.group({
          incomeFromSalary : new FormControl(''),
          incomeFromHouseProperty : new FormControl({value : '', disabled : true}),
          incomeHouseProperty : this.fb.group({
            interestOnHousingLoanSelfOccupied : new FormControl(''),
            incomeFromSelfOccupied : new FormControl({value : '', disabled : true}),
            annaulRentFromLetOut : new FormControl(''),
            municipalTaxesLetOut : new FormControl(''),
            unrealizedRentLetOut : new FormControl(''),
            netAnnualIncomeFromLetOut : new FormControl({value : '', disabled : true}),
            standardDeductionLetOut : new FormControl({value : '', disabled : true}),
            interestOnHousingLoanLetOut : new FormControl(''),
            incomeFromLetOut : new FormControl({value : '', disabled : true})
          }),
          incomeFromCapitalGains : new FormControl({value : '', disabled : true}),
          incomeCapitalGains : this.fb.group({
            shortTermNormal : this.fb.array([
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl('')
            ]),
            shortTermNormalTotal : new FormControl({value : '', disabled : true}),
            shortTermSpecial : this.fb.array([
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl('')
            ]),
            shortTermSpecialTotal : new FormControl({value : '', disabled : true}),
            longTermSpecial1 : this.fb.array([
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl('')
            ]),
            longTermSpecial1Total : new FormControl({value : '', disabled : true}),
            longTermSpecial2 : this.fb.array([
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl(''),
              new FormControl('')
            ]),
            longTermSpecial2Total : new FormControl({value : '', disabled : true})
          }),
          incomeFromOtherSources : new FormControl({value : '', disabled : true}),
          incomeOtherSources : this.fb.group({
            interest : new FormControl(''),
            commission : new FormControl(''),
            winningsFromLottery : new FormControl('')
          }),
          incomeFromProfits : new FormControl(''),
          incomeFromAgriculture : new FormControl('')
        }),
        deductionsTotal : new FormControl({value : '', disabled : true}),
        deductions : this.fb.group({
          lifeInsurance : new FormControl(''),
          annuity : new FormControl(''),
          PPF : new FormControl(''),
          NSC : new FormControl(''),
          ULIP : new FormControl(''),
          MFPensionFund : new FormControl(''),
          houseLoanRePayment : new FormControl(''),
          childrenFee : new FormControl(''),
          FD : new FormControl(''),
          NPF : new FormControl(''),
          NPS : new FormControl(''),
          additionalNPS : new FormControl(''),
          employerNPS : new FormControl(''),
          longTermInfBonds : new FormControl(''),
          equity : new FormControl(''),
          sukanyaSamridhi : new FormControl(''),
          other80C : new FormControl(''),
          total80C : new FormControl({value : '', disabled : true}),
          medicalClaim80D : new FormControl(''),
          medicalPayment80DDB : new FormControl(''),
          interestOnHouseLoan : new FormControl(''),
          interestOnElectricVehicle : new FormControl(''),
          donations80G : new FormControl(''),
          medicalDependent80DD : new FormControl({value : '', disabled : true}),
          normal80DD : new FormControl(''),
          severe80DD : new FormControl(''),
          higherEducation80E : new FormControl(''),
          loanResidentialHouse80EE : new FormControl(''),
          disability80U : new FormControl({value : '', disabled : true}),
          normal80U : new FormControl(''),
          severe80U : new FormControl(''),
          interestOnDeposits80TTA : new FormControl(''),
          interestOnDeposits80TTB : new FormControl(''),
          otherDeductions : new FormControl('')
        }),
        netTaxableIncome : new FormControl({value : '', disabled : true}),
        normalTaxableIncome : new FormControl({value : '', disabled : true}),
        normalTax : new FormControl({value : '', disabled : true}),
        taxSpecailRate : this.fb.group({
          shortTermCapitalGainsSpecialTotal : new FormControl({value : '', disabled : true}),
          taxShortTermCapitalGainsSpecial : new FormControl({value : '', disabled : true}),
          longTermCapitalGainsSpecial1Total : new FormControl({value : '', disabled : true}),
          taxLongTermCapitalGainsSpecial1 : new FormControl({value : '', disabled : true}),
          longTermCapitalGainsSpecial2Total : new FormControl({value : '', disabled : true}),
          taxLongTermCapitalGainsSpecial2 : new FormControl({value : '', disabled : true}),
          winningsFromLotteryTotal : new FormControl({value : '', disabled : true}),
          taxWinningsFromLottery : new FormControl({value : '', disabled : true}),
        }),
        taxAfterRebate : new FormControl({value : '', disabled : true}),
        surCharge : new FormControl({value : '', disabled : true}),
        educationCESS : new FormControl({value : '', disabled : true}),
        secondaryCESS : new FormControl({value : '', disabled : true}),
        totalTax : new FormControl({value : '', disabled : true}),
        returnDueDate : new FormControl('', Validators.required),
        returnCompletionDate : new FormControl('', Validators.required),
        relief : new FormControl(''),
        TDS : new FormControl(''),
        taxPaid : this.fb.array([
          this.getTaxPaidFormGroup()
        ]),
        interest234A : new FormControl({value : '', disabled : true}),
        interest234B : new FormControl({value : '', disabled : true}),
        interest234C : new FormControl({value : '', disabled : true})
      }
    );
  }

  /**
   * Tax Details Paid Form Array
   */
  getTaxPaidFormGroup() : FormGroup {
    return this.fb.group({
      date : new FormControl(''),
      amount : new FormControl('')
    });
  }

  onYearChange(){
    this.setCategoryFlag();
    this.incomeFromHouseProperty();
    this.setCapitalGainsFlag();
    this.setDeduction80TTBFlag();
  }

  onValueChange(){
    this.incomeFromCapitalGains();
    this.calculateGrossIncome();
    this.deductions();
    this.computeTaxableIncome();
    this.specialIncomeTaxes();
    this.applyIncomeTaxSlab();
    this.computeTaxAfterRebate();
    this.computeSurcharge();
    this.computeCESSAndTotalTaxLiable();
  }

  initializeAssessmentYears(){
    for(let i = 0; i <= 10; i++){
      this.assessmentYears.push({yearid : 2000 + (20 - i), year: "20" + (20 - i) + "-" + (21 - i)});
    }
  }

  /**
   * Category Flag For Displaying the Option of Super Senior Citizen from AY 2012-13  
   */
  setCategoryFlag(){
    if(this.assessmentYear <= 2011 && this.categoryFlag == true){
      this.categoryValues.pop();
      this.categoryFlag = false;
      if(this.incomeTaxCalculator.get('category').value == "Super Senior Citizen" )
        this.incomeTaxCalculator.patchValue({
          category : "Senior Citizen"
        });
    }
    else if(this.assessmentYear > 2011 && this.categoryFlag == false){
      this.categoryValues.push("Super Senior Citizen");
      this.categoryFlag = true;
    }
  }

  incomeFromHouseProperty(){
    this.incomeFromHouseProp = Object.assign(this.incomeFromHouseProp, this.incomeTaxCalculator.get('income').get('incomeHouseProperty').value);
    this.incomeFromHouseProp.computeHouseIncomeDetails(this.assessmentYear);
    this.incomeTaxCalculator.get('income').get('incomeHouseProperty').patchValue({
      incomeFromSelfOccupied : this.incomeFromHouseProp.incomeFromSelfOccupied,
      netAnnualIncomeFromLetOut : this.incomeFromHouseProp.netAnnualIncomeFromLetOut,
      standardDeductionLetOut : this.incomeFromHouseProp.standardDeductionLetOut,
      incomeFromLetOut : this.incomeFromHouseProp.incomeFromLetOut
    });
    this.incomeTaxCalculator.get('income').patchValue({incomeFromHouseProperty : this.incomeFromHouseProp.incomeAtNormalRate});
  }

  /**
   * Capital Gains Flag for changing the dates of capital gains based on Assessment Year
   */
  setCapitalGainsFlag(){
    if(this.assessmentYear <= 2016)
    {
      if(this.capitalGainsFlag == true)
        this.incomeTaxCalculator.get('income').get('incomeCapitalGains').reset({});
      this.capitalGainsFlag = false;
    }
    else
      this.capitalGainsFlag = true;
  }

  incomeFromCapitalGains(){
    this.incomeTaxCalculator.get('income').patchValue({ 
      incomeFromCapitalGains : this.incomeFromCapital.categorizeCapitalGains(this.incomeTaxCalculator)
    });
  }

  incomeFromOtherSources(){
    this.incomeFromOtherSource = Object.assign(this.incomeFromOtherSource, this.incomeTaxCalculator.get('income').get('incomeOtherSources').value);
    this.incomeTaxCalculator.get('income').patchValue({
      incomeFromOtherSources : this.incomeFromOtherSource.categorizeIncome()
    });
  }

  calculateGrossIncome(){
    this.totalNormalIncome = +this.incomeFromHouseProp.incomeAtNormalRate + +this.incomeFromCapital.incomeAtNormalRate + +this.incomeFromOtherSource.incomeAtNormalRate + +this.incomeTaxCalculator.get('income').get('incomeFromSalary').value + +this.incomeTaxCalculator.get('income').get('incomeFromProfits').value;
    this.totalSpecialIncome = +this.incomeFromHouseProp.incomeAtSpecialRate + +this.incomeFromCapital.incomeAtSpecialRate + +this.incomeFromOtherSource.incomeAtSpecialRate;
    this.totalIncome = +this.incomeFromHouseProp.incomeTotal + +this.incomeFromCapital.incomeTotal + +this.incomeFromOtherSource.incomeTotal + +this.incomeTaxCalculator.get('income').get('incomeFromSalary').value + +this.incomeTaxCalculator.get('income').get('incomeFromProfits').value;
  }

  setDeduction80TTBFlag(){
    if((this.category == "Senior Citizen" || this.category == "Super Senior Citizen") && this.assessmentYear >= 2019)
      this.deduction80TTBFlag = true;
    else 
      this.deduction80TTBFlag = false;
  }

  deductions(){
    this.totalDeductions = this.deductionCalculator.calculateDeductionAmount(this.incomeTaxCalculator, this.totalIncome);
    this.incomeTaxCalculator.patchValue({
      deductionsTotal : this.totalDeductions
    });
  }

  computeTaxableIncome(){
    this.netTaxableIncome = this.totalIncome - +this.totalDeductions;
    if(this.netTaxableIncome < 0) 
      this.netTaxableIncome = 0;
    this.incomeTaxCalculator.patchValue({
      netTaxableIncome : this.netTaxableIncome
    });

    let totalNormalIncomeAfterDeductions : number = this.totalNormalIncome - +this.totalDeductions;
    if(totalNormalIncomeAfterDeductions < 0)
      totalNormalIncomeAfterDeductions = 0 ;
    this.incomeTaxCalculator.patchValue({
      normalTaxableIncome : totalNormalIncomeAfterDeductions
    });
  }

  applyIncomeTaxSlab(){
    this.taxCalculator.taxLiableAtNormalRate = this.taxCalculator.calculateNormalTax(this.totalNormalIncome, this.assessmentYear, this.incomeTaxCalculator.get('income').get('incomeFromAgriculture').value, this.category);
    this.incomeTaxCalculator.patchValue({
      normalTax : this.taxCalculator.taxLiableAtNormalRate
    });

  }

  specialIncomeTaxes(){
    this.taxCalculator.calculateSpecialTax(this.incomeFromCapital, this.incomeFromOtherSource, this.incomeTaxCalculator);
  }

  computeTaxAfterRebate(){
    this.taxCalculator.taxLiableAtSpecialRate = this.incomeFromCapital.incomeAtSpecialRate + this.incomeFromOtherSource.incomeAtSpecialRate;
    this.incomeTaxCalculator.patchValue({
      taxAfterRebate :  this.taxCalculator.calculateTaxAfterRebate(this.netTaxableIncome, this.assessmentYear)
    });
  }

  computeSurcharge(){
    this.taxCalculator.surcharge = this.taxCalculator.calculateSurcharge(this.totalNormalIncome, this.category);
    this.incomeTaxCalculator.patchValue({
      surCharge : this.taxCalculator.surcharge
    });
  }

  computeCESSAndTotalTaxLiable(){
    this.taxCalculator.calculateCESSAndTotalTax(this.assessmentYear);
    this.incomeTaxCalculator.patchValue({
      educationCESS : this.taxCalculator.educationalCESS,
      secondaryCESS : this.taxCalculator.secondaryCESS,
      totalTax : this.taxCalculator.totalTaxLiable
    });
  }

  addNewTaxPaidDetails(){
    (<FormArray>this.incomeTaxCalculator.get('taxPaid')).push(this.getTaxPaidFormGroup());
  }

  deleteTaxPaid(index : number){
    (<FormArray>this.incomeTaxCalculator.get('taxPaid')).removeAt(index);
    if((<FormArray>this.incomeTaxCalculator.get('taxPaid')).length == 0)
      this.addNewTaxPaidDetails();
  }

  calculateInterest(){
    this.calculateFlag = true;
    if(this.incomeTaxCalculator.valid)
      this.interestOnTaxCalculator.calculateInterest(this.incomeTaxCalculator);
  }
  
  get assessmentYear(){
    return this.incomeTaxCalculator.get('assessmentYear').value == "Select" ? 2020 : this.incomeTaxCalculator.get('assessmentYear').value;
  }

  get category(){
    return this.incomeTaxCalculator.get('category').value == "Select" ? "Male" : this.incomeTaxCalculator.get('category').value;
  }

}
