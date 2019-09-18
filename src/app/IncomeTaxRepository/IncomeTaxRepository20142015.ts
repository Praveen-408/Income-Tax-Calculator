import { IncomeTaxRepository20132014 } from './IncomeTaxRepository20132014';
import { TaxSlab } from '../Models/TaxSlab';
import { Rebate } from '../Models/Rebate';

export class IncomeTaxRepository20142015 extends IncomeTaxRepository20132014
{
    constructor(){
        super();
    }

    getSurchargeSlab() : Array<TaxSlab> { 
        var surchargeSlab = new Array<TaxSlab>();
        surchargeSlab.push(
            new TaxSlab(0, 0, 10000000),
            new TaxSlab(10, 10000001, Number.MAX_VALUE)
        );
        return surchargeSlab;
    }
    
    getRebateSlab() : Rebate {
        return new Rebate(500000, 2000);
    }

}