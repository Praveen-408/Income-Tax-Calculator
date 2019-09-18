import { IncomeTaxRepository20112012 } from './IncomeTaxRepository20112012';
import { TaxSlab } from '../Models/TaxSlab';
import { SlabCategory } from '../Models/SlabCategory';
import { AgricultaralCeilCategory } from '../Models/AgriculturalCeilCategory';

export class IncomeTaxRepository20122013 extends IncomeTaxRepository20112012
{
    constructor(){
        super();
    }

    getIncomeTaxSlab() : Array<SlabCategory> {
        var incomeTaxSlab = super.getIncomeTaxSlab();
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Male").taxslab = [
                new TaxSlab(0, 0, 180000), 
                new TaxSlab(10, 180001, 500000), 
                new TaxSlab(20, 500001, 800000), 
                new TaxSlab(30, 800001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Senior Citizen").taxslab = [
                new TaxSlab(0, 0, 250000), 
                new TaxSlab(10, 250001, 500000), 
                new TaxSlab(20, 500001, 800000), 
                new TaxSlab(30, 800001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.push(
                new SlabCategory("Super Senior Citizen", [
                    new TaxSlab(0, 0, 500000), 
                    new TaxSlab(20, 500001, 800000), 
                    new TaxSlab(30, 800001, Number.MAX_VALUE)])
        );
        return incomeTaxSlab;
    }

    getAgriculturalCeilLimit() : Array<AgricultaralCeilCategory> {
        var agriculturalCeil = super.getAgriculturalCeilLimit();
        agriculturalCeil.find(agricultaralCeilCategory => agricultaralCeilCategory.category == "Male").ceilLimit = 180000;
        agriculturalCeil.find(agricultaralCeilCategory => agricultaralCeilCategory.category == "Senior Citizen").ceilLimit = 250000;
        agriculturalCeil.push(
            new AgricultaralCeilCategory("Super Senior Citizen", 500000), 
            );
        return agriculturalCeil;
    }

}