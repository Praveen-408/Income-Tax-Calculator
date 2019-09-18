import { TaxSlab } from './TaxSlab';

export class SlabCategory 
{
    category : string;
    taxslab : Array<TaxSlab> = [];

    constructor(category : string, taxslabs : Array<TaxSlab>){
        this.category = category;
        this.taxslab = taxslabs;
    }
    
}