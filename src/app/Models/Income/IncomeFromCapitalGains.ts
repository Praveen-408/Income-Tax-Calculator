import { CapitalGains } from '../CapitalGains';
import { FormGroup} from '@angular/forms';
import { IncomeType } from './IncomeType';

export class IncomeFromCapitalGains extends IncomeType
{
    shortTermCapitalGainsNormal : number;
    shortTermCapitalGainsSpecial : number;
    longTermCapitalGainsSpecial1 : number;
    longTermCapitalGainsSpecial2 : number;

    capitalGains : Array<CapitalGains> = [];

    constructor(){
        super();
        this.initializeCapitalGains();
        this.shortTermCapitalGainsNormal = 0;
        this.shortTermCapitalGainsSpecial = 0;
        this.longTermCapitalGainsSpecial1 = 0;
        this.longTermCapitalGainsSpecial2 = 0;
    }

    initializeCapitalGains(){
        this.capitalGains.push(
            new CapitalGains("ShortTermNormal", "normal", 0),
            new CapitalGains("ShortTermSpecial", "special", 15),
            new CapitalGains("LongTermSpecial1", "special", 20),
            new CapitalGains("LongTermSpecial2", "special", 10)
        );
    }

    //Given Capital Gain Values, Categorizes and Computes total Capital Gains of each type.
    categorizeCapitalGains(incomeTaxCalculator : FormGroup) : number {
        this.capitalGains.forEach(capitalGain => {
            if(capitalGain.title == "ShortTermNormal")
                this.shortTermCapitalGainsNormal = capitalGain.calculateTotalGain((incomeTaxCalculator.get('income').get('incomeCapitalGains').get('shortTermNormal').value));
            else if(capitalGain.title == "ShortTermSpecial")
                this.shortTermCapitalGainsSpecial = capitalGain.calculateTotalGain(incomeTaxCalculator.get('income').get('incomeCapitalGains').get('shortTermSpecial').value);
            else if(capitalGain.title == "LongTermSpecial1")
                this.longTermCapitalGainsSpecial1 = capitalGain.calculateTotalGain(incomeTaxCalculator.get('income').get('incomeCapitalGains').get('longTermSpecial1').value);
            else if(capitalGain.title == "LongTermSpecial2")
                this.longTermCapitalGainsSpecial2 = capitalGain.calculateTotalGain(incomeTaxCalculator.get('income').get('incomeCapitalGains').get('longTermSpecial2').value);
        });

        incomeTaxCalculator.get('income').get('incomeCapitalGains').patchValue({
            shortTermNormalTotal : this.shortTermCapitalGainsNormal,
            shortTermSpecialTotal : this.shortTermCapitalGainsSpecial,
            longTermSpecial1Total : this.longTermCapitalGainsSpecial1,
            longTermSpecial2Total : this.longTermCapitalGainsSpecial2
        });

        this.incomeAtNormalRate = +this.shortTermCapitalGainsNormal;
        this.incomeAtSpecialRate = +this.shortTermCapitalGainsSpecial + +this.longTermCapitalGainsSpecial1 + +this.longTermCapitalGainsSpecial2;
        this.incomeTotal = this.incomeAtNormalRate + this.incomeAtSpecialRate;
        return this.incomeTotal;
    }
    
}