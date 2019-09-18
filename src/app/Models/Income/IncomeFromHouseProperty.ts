import { TaxSection24 } from '../TaxSection';
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
        this.getIncomeAfterApplyingSection24(assessmentYear);
        this.incomeTotal = this.incomeAtSpecialRate + this.incomeAtNormalRate;
    }

    /**
     * 
     * @param assessmentYear 
     * Given Assessment Year, Returns the Income from self occupied house by calculating Interest based on Section24.
     */
    getIncomeAfterApplyingSection24(assessmentYear : number){  
        let taxsection : TaxSection24 = new DeductionCalculator().getSection24(assessmentYear);  
        if(0 - taxsection.maxLimit > this.incomeFromSelfOccupied)
          this.incomeAtNormalRate = 0 - taxsection.maxLimit;
        else
          this.incomeAtNormalRate += this.incomeFromSelfOccupied;
        if(this.incomeAtNormalRate + this.incomeFromLetOut < 0 - taxsection.maxLimitForInterestOnLetOut)
            this.incomeAtNormalRate = 0 - taxsection.maxLimitForInterestOnLetOut;
        else
            this.incomeAtNormalRate += this.incomeFromLetOut;
    }
    
}