import { IncomeTaxRepository20162017 } from './IncomeTaxRepository20162017';
import { TaxSlab } from '../Models/TaxSlab';
import { Rebate } from '../Models/Rebate';

export class IncomeTaxRepository20172018 extends IncomeTaxRepository20162017
{
    constructor(){
        super();
    }
    
    getSurchargeSlab() : Array<TaxSlab> { 
        var surchargeSlab = new Array<TaxSlab>();
        surchargeSlab.push(
            new TaxSlab(0, 0, 10000000),
            new TaxSlab(15, 10000001, Number.MAX_VALUE)
        );
        return surchargeSlab;
    }

    getRebateSlab() : Rebate {
        return new Rebate(500000, 5000);
    }
    
}