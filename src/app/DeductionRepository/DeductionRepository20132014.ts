import { DeductionRepository20122013 } from './DeductionRepository20122013';
import { TaxSection } from '../Models/TaxSection';
import { Deduction, Deduction80CCG } from '../Models/Deduction';

export class DeductionRepository20132014 extends DeductionRepository20122013
{

    constructor(){
        super();
    }  
    
    getSection80CCG() : TaxSection { 
        var section80CCG : TaxSection = new TaxSection("80CCG",25000);
        section80CCG.deductions.push(
            new Deduction80CCG("80CCG", "equity", 0 ,1000000, 50, "EQUITY", "Investment under equity saving scheme (u/s 80CCG)")
        );
        return section80CCG;           
    }

    getSection80TTA() : TaxSection {
        var section80TTA : TaxSection = new TaxSection("80TTA",10000);
        section80TTA.deductions.push( 
            new Deduction("80TTA", "interestOnDeposits80TTA", 0 ,"Interest on deposits in saving account (u/s 80TTA)")
        );
        return section80TTA;
    }

    //Section 80CCF is removed and 80CCG,80TTA are added.
    getAllTaxSections() : Array<TaxSection> {
        var taxsections : Array<TaxSection> = [];  
        taxsections.push(
            this.getSection80C(),
            this.getSection80CCD(),
            this.getSection80CCE(),
            this.getSection80CCD2(),
            this.getSection80D(),
            this.getSection80DDB(),
            this.getSection80G(),
            this.getSection80DD(),
            this.getSection80E(),
            this.getSection80U(),
            this.getSection80CCG(),
            this.getSection80TTA()
            );
        return taxsections;
    }
    
}