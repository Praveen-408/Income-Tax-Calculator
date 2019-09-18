import { IncomeType } from './IncomeType';

export class IncomeFromOtherSources extends IncomeType
{
    interest : number;
    commission : number;
    winningsFromLottery : number;
    slabRate : number;
    
    constructor(){
        super();
        this.slabRate = 30;
    }

    getTaxOnLotteryWinnings() : number { 
        return Math.round(this.slabRate * this.incomeAtSpecialRate / 100);
    }

    categorizeIncome() : number {
        this.incomeAtNormalRate = +this.interest + +this.commission;
        this.incomeAtSpecialRate = +this.winningsFromLottery;
        this.incomeTotal = +this.incomeAtNormalRate + +this.incomeAtSpecialRate; 
        return this.incomeTotal;     
    }
  
}