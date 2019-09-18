import { DeductionRepository20102011 } from './DeductionRepository20102011';
import { TaxSection } from '../Models/TaxSection';
import { Deduction } from '../Models/Deduction';

export class DeductionRepository20112012 extends DeductionRepository20102011
{
    constructor(){
        super();
    }  

    getSection80CCF() : TaxSection { 
        var section80CCF : TaxSection = new TaxSection("80CCF", 20000);
        section80CCF.deductions.push(
            new Deduction("80CCF", "longTermInfBonds", 0, "LTIB", "Long-term infrastructure bonds (u/s 80CCF)")
        );
        return section80CCF;           
    }

    getAllTaxSections() : Array<TaxSection> {
        var taxsections : Array<TaxSection> = super.getAllTaxSections();
        taxsections.push(this.getSection80CCF());
        return taxsections;
    }
    
}