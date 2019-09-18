import { IncomeTaxRepository20192020 } from './IncomeTaxRepository20192020';
import { Rebate } from '../Models/Rebate';

export class IncomeTaxRepository20202021 extends IncomeTaxRepository20192020
{
    constructor(){
        super();
    }
    
    getRebateSlab() : Rebate {
        return new Rebate(500000, 12500);
    }
}