import { IncomeTaxRepository20102011 } from './IncomeTaxRepository20102011';
import { TaxSlab } from '../Models/TaxSlab';
import { SlabCategory } from '../Models/SlabCategory';

export class IncomeTaxRepository20112012 extends IncomeTaxRepository20102011
{
    constructor(){
        super();
    }

    getIncomeTaxSlab() : Array<SlabCategory> {
        var incomeTaxSlab = super.getIncomeTaxSlab();
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Male").taxslab = [
                new TaxSlab(0, 0, 160000), 
                new TaxSlab(10, 160001, 500000), 
                new TaxSlab(20, 500001, 800000), 
                new TaxSlab(30, 800001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Female").taxslab = [
                new TaxSlab(0, 0, 190000), 
                new TaxSlab(10, 190001, 500000), 
                new TaxSlab(20, 500001, 800000), 
                new TaxSlab(30, 800001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Senior Citizen").taxslab = [
                new TaxSlab(0, 0, 240000), 
                new TaxSlab(10, 240001, 500000), 
                new TaxSlab(20, 500001, 800000), 
                new TaxSlab(30, 800001, Number.MAX_VALUE)
            ];
        return incomeTaxSlab;
    }
  
}