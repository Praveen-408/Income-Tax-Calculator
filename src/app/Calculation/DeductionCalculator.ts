import { FormGroup } from '@angular/forms';
import { DeductionRepository } from '../DeductionRepository/DeductionRepository';
import { DeductionRepository20102011 } from '../DeductionRepository/DeductionRepository20102011';
import { DeductionRepository20112012 } from '../DeductionRepository/DeductionRepository20112012';
import { DeductionRepository20122013 } from '../DeductionRepository/DeductionRepository20122013';
import { DeductionRepository20132014 } from '../DeductionRepository/DeductionRepository20132014';
import { DeductionRepository20142015 } from '../DeductionRepository/DeductionRepository20142015';
import { DeductionRepository20152016 } from '../DeductionRepository/DeductionRepository20152016';
import { DeductionRepository20162017 } from '../DeductionRepository/DeductionRepository20162017';
import { DeductionRepository20172018 } from '../DeductionRepository/DeductionRepository20172018';
import { DeductionRepository20182019 } from '../DeductionRepository/DeductionRepository20182019';
import { DeductionRepository20192020 } from '../DeductionRepository/DeductionRepository20192020';
import { DeductionRepository20202021 } from '../DeductionRepository/DeductionRepository20202021';
import { TaxSection, TaxSection24 } from '../Models/TaxSection';

export class DeductionCalculator
{

    deductionRepository : DeductionRepository;

    constructor(){
    }

    /**
     * 
     * @param assessmentYear 
     * Given an Assessment Year, returns the respective DeductionRepository.
     */
    getDeductionRepository(assessmentYear : number){
        switch(assessmentYear){
            case 2010 : this.deductionRepository = new DeductionRepository20102011(); break;
            case 2011 : this.deductionRepository = new DeductionRepository20112012(); break;
            case 2012 : this.deductionRepository = new DeductionRepository20122013(); break;
            case 2013 : this.deductionRepository = new DeductionRepository20132014(); break;
            case 2014 : this.deductionRepository = new DeductionRepository20142015(); break;
            case 2015 : this.deductionRepository = new DeductionRepository20152016(); break;
            case 2016 : this.deductionRepository = new DeductionRepository20162017(); break;
            case 2017 : this.deductionRepository = new DeductionRepository20172018(); break;
            case 2018 : this.deductionRepository = new DeductionRepository20182019(); break;
            case 2019 : this.deductionRepository = new DeductionRepository20192020(); break;
            case 2020 : this.deductionRepository = new DeductionRepository20202021(); break;
        }
    }

    /**
     * 
     * @param incomeTaxCalculator 
     * @param grossIncome 
     * Given Form Controls and grossIncome, Returns the deduction values of each Section based on Assessment Year.
     */
    calculateDeductionAmount(incomeTaxCalculator : FormGroup, grossIncome : number) : number {
        var assessmentYear : number = incomeTaxCalculator.get('assessmentYear').value == "Select" ? 2020 : incomeTaxCalculator.get('assessmentYear').value;
        let formControls = incomeTaxCalculator.get('deductions').value;
        this.getDeductionRepository(assessmentYear);
        var taxsections : Array<TaxSection> = this.deductionRepository.getAllTaxSections();

        let deduction80C : number = 0;
        let deduction80CCD : number = 0;
        let maxLimit80CCE : number = 0;
        let deduction80CCD1B : number = 0;
        let deduction80CCD2 : number = 0;
        let deduction80DD : number = 0;
        let deduction80CCF : number = 0;
        let deduction80U : number = 0;
        let deduction80CCG : number = 0;
        let otherDeductions : number = 0;

        taxsections.forEach(section => {
            if(section.name == "80C")
                deduction80C = section.getDeductionValue(formControls);
            else if(section.name == "80CCD")
                deduction80CCD = section.getDeductionValueUnderSection80CCD1(formControls, grossIncome);
            else if(section.name == "80CCE")
                maxLimit80CCE = section.maxLimit;
            else if(section.name == "80CCD1B")
                deduction80CCD1B = section.getDeductionValue(formControls);
            else if(section.name == "80CCD2")
                deduction80CCD2 = section.getDeductionValueUnderSection80CCD2(formControls, grossIncome);
            else if(section.name == "80DD")
                deduction80DD = section.getDeductionValue(formControls);
            else if(section.name == "80CCF")
                deduction80CCF= section.getDeductionValue(formControls);
            else if(section.name == "80U")
                deduction80U = section.getDeductionValue(formControls);
            else if(section.name == "80CCG")
                deduction80CCG = section.getDeductionValueUnderSection80CCG(formControls, grossIncome);
            else
                otherDeductions += section.getDeductionValue(formControls);
        });
        let totalDeductions80C : number = Math.min(maxLimit80CCE, (deduction80C + deduction80CCD)) + deduction80CCD1B + deduction80CCD2 + deduction80CCF + deduction80CCG;
        let totalDeductions : number = totalDeductions80C + deduction80DD + deduction80U + otherDeductions; 

        incomeTaxCalculator.get('deductions').patchValue({
            total80C : totalDeductions80C,
            medicalDependent80DD : deduction80DD,
            disability80U : deduction80U,
        });
        return totalDeductions;
    }

    /**
     * 
     * @param assessmentYear 
     * Given Assessment Year, Returns TaxSection24
     */
    getSection24(assessmentYear : number) : TaxSection24 {
        this.getDeductionRepository(assessmentYear);
        return this.deductionRepository.getSection24();
    }
}

