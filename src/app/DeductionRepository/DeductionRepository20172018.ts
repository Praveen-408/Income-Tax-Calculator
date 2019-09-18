import { DeductionRepository20162017 } from './DeductionRepository20162017';
import { TaxSection } from '../Models/TaxSection';
import { Deduction } from '../Models/Deduction';

export class DeductionRepository20172018 extends DeductionRepository20162017
{
    
    constructor(){
        super();
    }  
    
    getSection80EE() : TaxSection {
        var section80EE : TaxSection = new TaxSection("80EE", 50000);
        section80EE.deductions.push( 
            new Deduction("80EE", "loanResidentialHouse80EE" , 0, null, "Interest on loan taken for Residential House (u/s 80EE)")
        );
        return section80EE;
    }

    getAllTaxSections() : Array<TaxSection> {
        var taxsections : Array<TaxSection> = super.getAllTaxSections();
        taxsections.push(this.getSection80EE());
        return taxsections;
    }
}