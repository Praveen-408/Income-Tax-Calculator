import { TaxSection } from '../TaxSection';
import { IncomeType } from './IncomeType';
import { DeductionCalculator } from 'src/app/Calculation/DeductionCalculator';

export class IncomeFromHouseProperty extends IncomeType
{
    interestOnHousingLoanSelfOccupied : number;
    incomeFromSelfOccupied : number;
    annaulRentFromLetOut : number;
    municipalTaxesLetOut : number;
    unrealizedRentLetOut : number;
    netAnnualIncomeFromLetOut : number;
    standardDeductionLetOut : number;
    interestOnHousingLoanLetOut : number;
    incomeFromLetOut : number;

    constructor(){
        super();
    }

    computeHouseIncomeDetails(assessmentYear : number){
        this.incomeFromSelfOccupied = 0 - this.interestOnHousingLoanSelfOccupied;
        this.netAnnualIncomeFromLetOut = this.annaulRentFromLetOut - this.municipalTaxesLetOut - this.unrealizedRentLetOut;
        this.standardDeductionLetOut = Math.round(0.3 * this.netAnnualIncomeFromLetOut);
        this.incomeFromLetOut = this.netAnnualIncomeFromLetOut - this.standardDeductionLetOut - this.interestOnHousingLoanLetOut;
        this.incomeAtNormalRate = this.getIncomeFromSelfOccupied(assessmentYear) + this.incomeFromLetOut;
        this.incomeTotal = this.incomeAtSpecialRate + this.incomeAtNormalRate;
    }

    /**
     * 
     * @param assessmentYear 
     * Given Assessment Year, Returns the Income from self occupied house by calculating Interest based on Section24.
     */
    getIncomeFromSelfOccupied(assessmentYear : number) : number {  
        let taxsection : TaxSection = new DeductionCalculator().getSection24(assessmentYear);  
        if(0 - taxsection.maxLimit > this.incomeFromSelfOccupied)
          return 0 - taxsection.maxLimit;
        else
          return this.incomeFromSelfOccupied;
    }
    
}