import { DeductionRepository20172018 } from './DeductionRepository20172018';
import { TaxSection, TaxSection24 } from '../Models/TaxSection';
import { Deduction80CCD1 } from '../Models/Deduction';

export class DeductionRepository20182019 extends DeductionRepository20172018
{
    
    constructor(){
        super();
    }  

    getSection80CCD() : TaxSection { 
        var section80CCD : TaxSection = new TaxSection("80CCD",150000);
        section80CCD.deductions.push(
            new Deduction80CCD1("80CCD" , "NPS", 0 , 20, "NPS", "Employee's / Self-employed contribution toward NPS (up to 20%) (u/s 80CCD)")
        );
        return section80CCD;           
    }

    getSection24() : TaxSection24 {
        var section24 : TaxSection24 = super.getSection24();
        section24.maxLimitForInterestOnLetOut = 200000;
        return section24;
    }
    
}