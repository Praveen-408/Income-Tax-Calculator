import { IncomeTaxRepository20182019 } from './IncomeTaxRepository20182019';
import { CESS } from '../Models/CESS';

export class IncomeTaxRepository20192020 extends IncomeTaxRepository20182019
{
    constructor(){
        super();
    }

    getCESSSlab() : CESS {
        return new CESS(4, 0, false);
    }
    
}