import { TaxSection, TaxSection24 } from '../Models/TaxSection';
import { Deduction, Deduction80CCD1, Deduction80CCD2 } from '../Models/Deduction';

export class DeductionRepository
{
    constructor(){
    }

    getSection80C() : TaxSection {
        var section80C : TaxSection = new TaxSection("80C", 100000);
        section80C.deductions.push(           
            new Deduction("80C", "lifeInsurance", 0, "LIC", "Life Insurance premium paid"), 
            new Deduction("80C", "annuity", 0, "ANNUITY", "Payment for annuity plan"), 
            new Deduction("80C", "PPF", 0, "PPF", "Contribution toward provident fund / PPF"), 
            new Deduction("80C", "NSC", 0, "NSC", "Investment in NSC (VIII issue) + Interest"), 
            new Deduction("80C", "ULIP", 0, "ULIP", "Contribution toward ULIP"), 
            new Deduction("80C", "MFPensionFund", 0, "MFPEN", "Contribution toward notified pension fund by MF/UTI"), 
            new Deduction("80C", "houseLoanRePayment", 0, "HL", "Re-payment of housing loan etc"), 
            new Deduction("80C", "childrenFee",  0, "TUTION", "Tuition fees paid for children"), 
            new Deduction("80C", "FD", 0, "FD", "5 Years fixed deposit with PO or Schedule Bank"), 
            new Deduction("80C", "NPF", 0, "NPF", "Contribution toward NPF"), 
            new Deduction("80C", "other80C", 0, "OTHER", "Any other deductable (u/s 80C)"), 
        );
        return section80C;
    }

    getSection80CCD() : TaxSection { 
        var section80CCD : TaxSection = new TaxSection("80CCD", 100000);
        section80CCD.deductions.push(
            new Deduction80CCD1("80CCD", "NPS", 0, 10, "NPS", "Employee's / Self-employed contribution toward NPS (up to 20%) (u/s 80CCD)")
        );
        return section80CCD;           
    }

    getSection80CCE() : TaxSection {
        var section80CCE : TaxSection = new TaxSection("80CCE", 100000);
        return section80CCE;
    }

    getSection80CCD2() : TaxSection { 
        var section80CCD2 : TaxSection = new TaxSection("80CCD2", 100000);
        section80CCD2.deductions.push(
            new Deduction80CCD2("80CCD2", "employerNPS", 0, 10, "ERNPS", "Employer's contribution toward NPS (up to 20%) (u/s 80CCD)")
        );
        return section80CCD2;           
    }   

    getSection80D() : TaxSection {
        var section80D : TaxSection = new TaxSection("80D", 40000);
        section80D.deductions.push( 
            new Deduction("80D", "medicalClaim80D", 0, null, "Medi-claim premium (u/s 80D)")
        );
        return section80D;
    }

    getSection80DDB() : TaxSection {
        var section80DDB : TaxSection = new TaxSection("80DDB", 60000);
        section80DDB.deductions.push( 
            new Deduction("80DDB", "medicalPayment80DDB", 0, "MedicalPayment", "Actual payment towards medical treatment (u/s 80DDB )")
        );
        return section80DDB;
    }

    getSection80G() : TaxSection {
        var section80G : TaxSection = new TaxSection("80G", Number.MAX_VALUE);
        section80G.deductions.push( 
            new Deduction("80G", "donations80G", 0, "donations", "Donations (u/s 80G)")
        );
        return section80G;
    }

    getSection80DD() : TaxSection {
        var section80DD : TaxSection = new TaxSection("80DD", 100000);
        section80DD.deductions.push( 
            new Deduction("80DD", "normal80DD", 50000, "normal", "Deduction for maintenance / medical treatment of dependent (u/s 80DD)"), 
            new Deduction("80DD", "severe80DD", 50000, "severe", "Deduction for maintenance / medical treatment of dependent (u/s 80DD)")
        );
        return section80DD;
    }

    getSection80E() : TaxSection {
        var section80E : TaxSection = new TaxSection("80E", Number.MAX_VALUE);
        section80E.deductions.push( 
            new Deduction("80E", "higherEducation80E", 0, "HigherEducation", "Interest on loan for higher education (u/s 80E)")
        );
        return section80E;
    }

    getSection80U() : TaxSection {
        var section80U : TaxSection = new TaxSection("80U", 100000);
        section80U.deductions.push( 
            new Deduction("80U", "normal80U", 50000, "normal", "Deduction in case of a person with disability (u/s 80U)" ), 
            new Deduction("80U", "severe80U", 50000, "severe", "Deduction in case of a person with disability (u/s 80U)" )
        );
        return section80U;
    }

    getSection24() : TaxSection24 {
        var section24 : TaxSection24 = new TaxSection24("24", 150000,Number.MAX_VALUE);
        return section24;
    }

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
            this.getSection80U()
        );
        return taxsections;
    }
    
}