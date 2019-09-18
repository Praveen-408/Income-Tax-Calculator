export class CESS 
{
    educationalCESSRate : number;
    secondaryCESSRate : number;
    allowSecondaryCESS : boolean;

    constructor(educationalRate : number, secondaryRate : number, allowSecondary : boolean){
        this.educationalCESSRate = educationalRate;
        this.secondaryCESSRate = secondaryRate;
        this.allowSecondaryCESS = allowSecondary;
    }

    computeEducationalCESS(tax : number) : number {
        return Math.round(tax * this.educationalCESSRate / 100);
    }

    computeSecondaryCESS(tax : number) : number {
        return Math.round(tax * this.secondaryCESSRate / 100);
    }
    
}