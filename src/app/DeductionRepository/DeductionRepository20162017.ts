import { DeductionRepository20152016 } from './DeductionRepository20152016';
import { TaxSection } from '../Models/TaxSection';
import { Deduction } from '../Models/Deduction';

export class DeductionRepository20162017 extends DeductionRepository20152016
{
    constructor(){
        super();
    }

    getSection80C() : TaxSection {   
        var section80C : TaxSection =super.getSection80C();
        section80C.deductions.push(new Deduction("80C", "sukanyaSamridhi", 0, "SS", "Deposit with Sukanya Samridhi Accounts"));
        return section80C;
    }

    getSection80CCD() : TaxSection { 
        var section80CCD : TaxSection = super.getSection80CCD();
        section80CCD.maxLimit = 150000;
        return section80CCD;           
    }

    getSection80CCD1B() : TaxSection { 
        var section80CCD1B : TaxSection = new TaxSection("80CCD1B", 50000);
        section80CCD1B.deductions.push(
            new Deduction ( "80CCD1B", "additionalNPS", 50000, "ADDNPS", "Additional contribution towards NPS [u/s 80CCD(1B)]")
        );
        return section80CCD1B;           
    }

    getSection80D() : TaxSection { 
        var section80D : TaxSection = super.getSection80D();
        section80D.maxLimit = 60000;
        return section80D;           
    }

    getSection80DDB() : TaxSection { 
        var section80DDB : TaxSection = super.getSection80DDB();
        section80DDB.maxLimit = 80000;
        return section80DDB;           
    }

    getSection80DD() : TaxSection {
        var section80DD : TaxSection = new TaxSection("80DD", 125000);
        section80DD.deductions.push( 
            new Deduction("80DD", "normal80DD", 75000, "normal", "Deduction for maintenance / medical treatment of dependent (u/s 80DD)"), 
            new Deduction("80DD", "severe80DD", 50000, "severe", "Deduction for maintenance / medical treatment of dependent (u/s 80DD)")
        );
        return section80DD;
    }
 
    getSection80U() : TaxSection {
        var section80U : TaxSection = new TaxSection("80U", 125000);
        section80U.deductions.push( 
            new Deduction("80U", "normal80U", 75000, "normal" , "Deduction in case of a person with disability (u/s 80U)" ), 
            new Deduction("80U", "severe80U" , 50000, "severe" , "Deduction in case of a person with disability (u/s 80U)" )
        );
        return section80U;
    }

    //Section 80EE is removed, 80DD and 80U are redefined and 80CCD1B is added
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
            this.getSection80TTA(), 
            this.getSection80CCD1B(), 
        );
        return taxsections;
    }
    
}