export class CapitalGains
{
    totalGain : number;
    slabRate : number;
    type : string;
    title : string;

    constructor(title : string, type : string, slabRate : number){
        this.title = title;
        this.type = type;
        this.slabRate = slabRate;
        this.totalGain = 0;
    }

    /**
     * 
     * @param gains 
     * given Capital Gain Value of a type, Returns the Total of these gains.
     */
    calculateTotalGain(gains : Array<number>) : number {
        this.totalGain = 0;
        gains.forEach(element => {
            this.totalGain += +element;
        });
        return this.totalGain;
    }

    /**
     * 
     * @param totalGain 
     * Given totalGains of a particular Capital Gain, Computes and returns the Tax on this capital Gains
     */
    getTaxOnCapitalGains(totalGain : number) : number {
        return Math.round((this.slabRate / 100) * totalGain);
    }

}