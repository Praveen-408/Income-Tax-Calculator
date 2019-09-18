export class TaxLeftOverMonthly
{
    year : number;
    month : number;
    amountUpto15 : number;
    amountAfter15 : number;

    constructor(month : number, year : number){
        this.month = month;
        this.year = year;
        this.amountUpto15 = 0;
        this.amountAfter15 = 0;
    }
    
}