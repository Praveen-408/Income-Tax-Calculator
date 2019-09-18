import { IncomeTaxRepository20152016 } from './IncomeTaxRepository20152016';
import { TaxSlab } from '../Models/TaxSlab';

export class IncomeTaxRepository20162017 extends IncomeTaxRepository20152016
{
    constructor(){
        super();
    }
    
    getSurchargeSlab() : Array<TaxSlab> { 
        var surchargeSlab = new Array<TaxSlab>();
        surchargeSlab.push(
            new TaxSlab(0, 0, 10000000),
            new TaxSlab(12, 10000001, Number.MAX_VALUE)
        );
        return surchargeSlab;
    }
    
}