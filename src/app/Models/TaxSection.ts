import { Deduction, Deduction80CCG, Deduction80CCD2, Deduction80CCD1 } from './Deduction';

export class TaxSection
{
    name : string;
    deductions? : Array<Deduction> = [];
    maxLimit : number;
    totalDeduction : number;

    constructor(name : string, maxLimit : number){
        this.name = name;
        this.maxLimit = maxLimit;
        this.totalDeduction = 0;
    }

    /**
     * 
     * @param allDeductions 
     * Given All Deduction Form Controls and their values,Computes totalDeductions if the deductions are present
     * in that assessment year based on Deduction Rules. 
     */
    getDeductionValue(allDeductions : any) : number {
        this.totalDeduction = 0;
        Object.keys(allDeductions).forEach((key : string) => {
            let deduction = this.deductions.find(ded=>ded.name == key); //returns undefined if the deduction is not present
            if(deduction != undefined && allDeductions[key] != '')
            {
                    if(allDeductions[key] == true && (this.name == "80U" || this.name == "80DD"))
                        this.totalDeduction += deduction.maxLimit;
                    else
                        this.totalDeduction += allDeductions[key];
            }
        });
        if(this.maxLimit < this.totalDeduction)
            this.totalDeduction = this.maxLimit;
        return this.totalDeduction;
    }

    /**
     * 
     * @param allDeductions 
     * @param grossIncome 
     * Computes Deduction Values for Section 80CCG by applying the Rules for Section 80CCG
     */
    getDeductionValueUnderSection80CCG(allDeductions : any, grossIncome : number) : number {
        this.totalDeduction = 0;
        Object.keys(allDeductions).forEach((key : string) => {
            let deduction = this.deductions.find(ded=>ded.name == key) as Deduction80CCG;
            if(deduction != undefined && allDeductions[key] != ''){
                if(grossIncome <= deduction.maxLimitOnGross)
                    this.totalDeduction += Math.min(allDeductions[key] * deduction.deductionPercent / 100, this.maxLimit);
            }
        });
        return this.totalDeduction;
    } 

    /**
     * 
     * @param allDeductions 
     * @param grossIncome 
     * Computes Deduction Values for Section 80CCD1 by applying the Rules for Section 80CCD1
     */
    getDeductionValueUnderSection80CCD1(allDeductions : any, grossIncome : number) : number {
        this.totalDeduction = 0;
        Object.keys(allDeductions).forEach((key : string) => {
            let deduction = this.deductions.find(ded=>ded.name == key) as Deduction80CCD1;
            if(deduction != undefined && allDeductions[key] != '')
                this.totalDeduction += Math.min(allDeductions[key], grossIncome * deduction.maxPercentLimitOnGross / 100);
        });
        return this.totalDeduction;
    } 

    /**
     * 
     * @param allDeductions 
     * @param grossIncome 
     * Computes Deduction Values for Section 80CCD2 by applying the Rules for Section 80CCD2
     */
    getDeductionValueUnderSection80CCD2(allDeductions : any, grossIncome : number) : number {
        this.totalDeduction = 0;
        Object.keys(allDeductions).forEach((key : string) => {
            let deduction = this.deductions.find(ded=>ded.name == key) as Deduction80CCD2;
            if(deduction != undefined && allDeductions[key] != '')
                this.totalDeduction += Math.min(allDeductions[key], grossIncome * deduction.maxPercentLimitOnGross / 100);
        });
        return this.totalDeduction;
    } 

}
