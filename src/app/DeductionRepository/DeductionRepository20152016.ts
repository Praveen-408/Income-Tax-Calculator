import { DeductionRepository20142015 } from './DeductionRepository20142015';
import { TaxSection } from '../Models/TaxSection';

export class DeductionRepository20152016 extends DeductionRepository20142015
{

    constructor(){
        super();
    }
    
    getSection80C() : TaxSection { 
        var section80C : TaxSection = super.getSection80C();
        section80C.maxLimit = 150000;
        return section80C;           
    }

    getSection24() : TaxSection {
        var section24 : TaxSection = super.getSection24();
        section24.maxLimit = 200000;
        return section24;
    }

    getSection80CCE() : TaxSection {
        var section80CCE : TaxSection = super.getSection80CCE();
        section80CCE.maxLimit = 150000;
        return section80CCE; 
    }
}