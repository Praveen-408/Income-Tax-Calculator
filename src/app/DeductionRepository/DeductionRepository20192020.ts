import { DeductionRepository20182019 } from './DeductionRepository20182019';
import { TaxSection } from '../Models/TaxSection';
import { Deduction } from '../Models/Deduction';

export class DeductionRepository20192020 extends DeductionRepository20182019
{
    constructor(){
        super();
    } 
    
    getSection80D() : TaxSection { 
        var section80D : TaxSection = super.getSection80D();
        section80D.maxLimit = 100000;
        return section80D;           
    }

    getSection80TTB() : TaxSection {
        var section80TTB : TaxSection = new TaxSection("80TTB", 50000);
        section80TTB.deductions.push(
            new Deduction("80TTB", "interestOnDeposits80TTB", 0, "80TTB", "Interest on deposits(u/s 80TTB)")
        );
        return section80TTB; 
    }

    getAllTaxSections() : Array<TaxSection> {
        var taxsections : Array<TaxSection> = super.getAllTaxSections();
        taxsections.push(this.getSection80TTB());
        return taxsections;
    }

}