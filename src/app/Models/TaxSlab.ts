export class TaxSlab 
{
    minValue : number;
    maxValue : number;
    slabrate : number;

    constructor(slabRate : number, minValue : number, maxValue : number){
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.slabrate = slabRate;
    }

    /**
     * 
     * @param taxableIncome 
     * Given Taxable Income, Returns the Tax computed for a Particular Tax Slab Range. 
     */
    runIncomeTaxResult(taxableIncome : number) : number {
        let amountTaxable = 0;
        if(taxableIncome >= this.minValue){
            if(taxableIncome <= this.maxValue)
                amountTaxable = taxableIncome - this.minValue;
            else 
                amountTaxable = this.maxValue - this.minValue; 
        }
        return Math.round(amountTaxable * this.slabrate / 100);
    }

    getSurchargeRate(taxableIncome : number) : boolean {
        if(taxableIncome <= this.maxValue && taxableIncome >= this.minValue)
            return true;
        return false;
    }
    
}