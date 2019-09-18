import { IncomeTaxRepository20172018 } from './IncomeTaxRepository20172018';
import { TaxSlab } from '../Models/TaxSlab';
import { Rebate } from '../Models/Rebate';
import { SlabCategory } from '../Models/SlabCategory';

export class IncomeTaxRepository20182019 extends IncomeTaxRepository20172018
{
    constructor(){
        super();
    }

    getIncomeTaxSlab() : Array<SlabCategory> {
        var incomeTaxSlab = super.getIncomeTaxSlab();
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Male").taxslab = [
                new TaxSlab(0, 0, 250000), 
                new TaxSlab(5, 250001, 500000), 
                new TaxSlab(20, 500001, 1000000), 
                new TaxSlab(30, 1000001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Female").taxslab = [
                new TaxSlab(0, 0, 250000), 
                new TaxSlab(5, 250001, 500000), 
                new TaxSlab(20, 500001, 1000000), 
                new TaxSlab(30, 1000001, Number.MAX_VALUE)
            ];
        incomeTaxSlab.find(slabCategory => slabCategory.category == "Senior Citizen").taxslab = [
                new TaxSlab(0, 0, 300000), 
                new TaxSlab(5, 300001, 500000), 
                new TaxSlab(20, 500001, 1000000), 
                new TaxSlab(30, 1000001, Number.MAX_VALUE)
            ];
        return incomeTaxSlab;
    }

    getSurchargeSlab() : Array<TaxSlab> { 
        var surchargeSlab = new Array<TaxSlab>();
        surchargeSlab.push(
            new TaxSlab(0, 0, 5000000), 
            new TaxSlab(10, 5000001, 10000000), 
            new TaxSlab(15, 10000001, Number.MAX_VALUE)
        );
        return surchargeSlab;
    }

    getRebateSlab() : Rebate {
        return new Rebate(350000, 2500);
    }

}