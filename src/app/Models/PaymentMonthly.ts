export class PaymentMonthly
{
    year : number;
    month : number;
    amountUpto15 : number;
    amountAfter15 : number;
    totalAmount : number;

    constructor(date : number, month : number, year : number, amount : number){
        this.month = month;
        this.year = year;
        this.amountUpto15 = 0;
        this.amountAfter15 = 0;
        this.totalAmount = 0;
        this.parsePaymentDate(date, amount);
    }

    /**
     * 
     * @param date 
     * @param amount
     * Given date and amount, Divides the amount as Paid before or After 15th of the month as it is required
     * for computing Section 234C. 
     */
    parsePaymentDate(date : number, amount : number){
        if(date <= 15)
            this.amountUpto15 += amount;
        else 
            this.amountAfter15 += amount;
        this.totalAmount = this.amountUpto15 + this.amountAfter15;
    }
    
}