export class IncomeType 
{
    public incomeAtSpecialRate : number;
    public incomeAtNormalRate : number;
    public incomeTotal : number;
    
    constructor(){
        this.incomeAtNormalRate = 0;
        this.incomeAtSpecialRate = 0;
        this.incomeTotal = this.incomeAtNormalRate + this.incomeAtSpecialRate;
    }
}