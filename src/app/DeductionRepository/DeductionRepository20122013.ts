import { DeductionRepository20112012 } from './DeductionRepository20112012';
import { TaxSection } from '../Models/TaxSection';

export class DeductionRepository20122013 extends DeductionRepository20112012
{

    constructor(){
        super();
    }    

    getSection80CCD2() : TaxSection { 
        var section80CCD2 : TaxSection = super.getSection80CCD2();
        section80CCD2.maxLimit = Number.MAX_VALUE;
        return section80CCD2;           
    }
}