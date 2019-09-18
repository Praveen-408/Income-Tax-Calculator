import { IncomeTaxRepository20142015 } from './IncomeTaxRepository20142015';
import { TaxSlab } from '../Models/TaxSlab';
import { SlabCategory } from '../Models/SlabCategory';
import { AgricultaralCeilCategory } from '../Models/AgriculturalCeilCategory';

export class IncomeTaxRepository20152016 extends IncomeTaxRepository20142015
{
    constructor(){
        super();
    }

    getIncomeTaxSlab() : Array<SlabCategory> {
        var incomeTaxSlab = super.getIncomeTaxSlab();
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Male").taxslab = [
                new TaxSlab(0, 0, 250000), 
                new TaxSlab(10, 250001, 500000), 
                new TaxSlab(20, 500001, 1000000), 
                new TaxSlab(30, 1000001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Female").taxslab = [
                new TaxSlab(0, 0, 250000), 
                new TaxSlab(10, 250001, 500000), 
                new TaxSlab(20, 500001, 1000000), 
                new TaxSlab(30, 1000001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Senior Citizen").taxslab = [
                new TaxSlab(0, 0, 300000), 
                new TaxSlab(10, 300001, 500000), 
                new TaxSlab(20, 500001, 1000000), 
                new TaxSlab(30, 1000001, Number.MAX_VALUE)
            ];
        return incomeTaxSlab;
    }

    getAgriculturalCeilLimit() : Array<AgricultaralCeilCategory> {
        var agriculturalCeil = super.getAgriculturalCeilLimit();
        agriculturalCeil.find(agricultaralCeilCategory => agricultaralCeilCategory.category == "Male").ceilLimit = 250000;
        agriculturalCeil.find(agricultaralCeilCategory => agricultaralCeilCategory.category == "Female").ceilLimit = 250000;
        agriculturalCeil.find(agricultaralCeilCategory => agricultaralCeilCategory.category == "Senior Citizen").ceilLimit = 300000;
        return agriculturalCeil;
    }

}