export class Rebate
{
    ceilLimit : number;
    rebateAmount : number;

    constructor(ceilLimit : number, rebate : number){
        this.ceilLimit = ceilLimit;
        this.rebateAmount = rebate;
    }

    computeTaxAfterRebate(taxableIncome : number, tax : number) : number {
        if(taxableIncome <= this.ceilLimit)
            tax = Math.max(0, tax - this.rebateAmount);
        return tax;
    }
    
}