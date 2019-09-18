import { TaxSlab } from '../Models/TaxSlab';
import { Rebate } from '../Models/Rebate';
import { CESS } from '../Models/CESS';
import { SlabCategory } from '../Models/SlabCategory';
import { AgricultaralCeilCategory } from '../Models/AgriculturalCeilCategory';

export class IncomeTaxRepository
{

    constructor(){
    }

    getIncomeTaxSlab() : Array<SlabCategory> {
        var incomeTaxSlab : Array<SlabCategory> = [];
        incomeTaxSlab.push(
            new SlabCategory("Male", [
                new TaxSlab(0, 0, 160000), 
                new TaxSlab(10, 160001, 300000), 
                new TaxSlab(20, 300001, 500000), 
                new TaxSlab(30, 500001, Number.MAX_VALUE)]), 
            new SlabCategory("Female", [
                new TaxSlab(0, 0, 190000), 
                new TaxSlab(10, 190001, 300000), 
                new TaxSlab(20, 300001, 500000), 
                new TaxSlab(30, 500001, Number.MAX_VALUE)]), 
            new SlabCategory("Senior Citizen", [
                new TaxSlab(0, 0, 240000), 
                new TaxSlab(10, 240001, 300000), 
                new TaxSlab(20, 300001, 500000), 
                new TaxSlab(30, 500001, Number.MAX_VALUE)]), 
            );
        return incomeTaxSlab;
    }

    //Agricultural Slab Limit is same as Capital Gains Applicabilty Limit.
    getAgriculturalCeilLimit() : Array<AgricultaralCeilCategory> {
        var agriculturalCeil = Array<AgricultaralCeilCategory>();
        agriculturalCeil.push(
            new AgricultaralCeilCategory("Male", 160000), 
            new AgricultaralCeilCategory("Female", 190000), 
            new AgricultaralCeilCategory("Senior Citizen", 240000), 
            );
        return agriculturalCeil;
    }

    getSurchargeSlab() : Array<TaxSlab> { 
        var surchargeSlab = new Array<TaxSlab>();
        surchargeSlab.push(
            new TaxSlab(0, 0, Number.MAX_VALUE)
        );
        return surchargeSlab;
    }

    getRebateSlab() : Rebate {
        return new Rebate(0, 0);
    }

    getCESSSlab() : CESS {
        return new CESS(2, 1, true);
    }

}