import { DeductionRepository20132014 } from './DeductionRepository20132014';
import { TaxSection } from '../Models/TaxSection';
import { Deduction, Deduction80CCG } from '../Models/Deduction';

export class DeductionRepository20142015 extends DeductionRepository20132014
{
    
    constructor(){
        super();
    } 
    
    getSection80CCG() : TaxSection { 
        var section80CCG : TaxSection = new TaxSection("80CCG", 25000);
        section80CCG.deductions.push(
            new Deduction80CCG("80CCG", "equity", 0, 1200000, 50, "EQUITY", "Investment under equity saving scheme (u/s 80CCG)")
        );
        return section80CCG;           
    }
    
    getSection80EE() : TaxSection {
        var section80EE : TaxSection = new TaxSection("80EE", 100000);
        section80EE.deductions.push( 
            new Deduction("80EE", "loanResidentialHouse80EE", 0, null, "Interest on loan taken for Residential House (u/s 80EE)")
        );
        return section80EE;
    }
    
    getAllTaxSections() : Array<TaxSection> {
        var taxsections : Array<TaxSection> = super.getAllTaxSections();
        taxsections.push(this.getSection80EE());
        return taxsections;
    }
}