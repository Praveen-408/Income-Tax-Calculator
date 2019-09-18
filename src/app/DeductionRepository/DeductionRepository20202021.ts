import { DeductionRepository20192020 } from './DeductionRepository20192020';
import { TaxSection } from '../Models/TaxSection';
import { Deduction } from '../Models/Deduction';

export class DeductionRepository20202021 extends DeductionRepository20192020
{
    constructor(){
        super();
    }  

    
    getSection80EEA() : TaxSection {
        var section80EEA : TaxSection = new TaxSection("80EEA", 60000);
        section80EEA.deductions.push( 
            new Deduction("80EEA", "interestOnHouseLoan", 0, "InterestHouseLoan", "Interest payable on loan for residentials house property (u/s 80EEA )")
        );
        return section80EEA;
    }

    getSection80EEB() : TaxSection {
        var section80EEB : TaxSection = new TaxSection("80EEB",60000);
        section80EEB.deductions.push( 
            new Deduction("80EEB", "interestOnElectricVehicle", 0, "InterestElectricVehicle", "Interest payable on loan for purchase of electric vehicles(u/s 80EEB )")
        );
        return section80EEB;
    }

    //Section 80CCG is removed and Section 80EEA,80EEB are added
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
            this.getSection80TTA(),
            this.getSection80CCD1B(),
            this.getSection80EE(),
            this.getSection80EEA(),
            this.getSection80EEB()
        );
        return taxsections;
    }
}