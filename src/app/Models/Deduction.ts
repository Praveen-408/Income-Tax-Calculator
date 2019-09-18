export class Deduction
{
    name? : string;
    title? : string;
    description? : string;
    section : string;
    maxLimit? : number;
    allowed : boolean;

    constructor(section : string, name : string, maxlimit : number, title? : string, description? : string){
        this.name = name;
        this.title = title;
        this.description = description;
        this.section = section;
        this.maxLimit = maxlimit;
    }
    
}

export class Deduction80CCD1 extends Deduction
{
    maxPercentLimitOnGross : number;

    constructor(section : string, name : string, maxlimit : number, maxPercent : number, title? : string, description? : string){
        super(section, name, maxlimit, title, description);
        this.maxPercentLimitOnGross = maxPercent;
    }

}

export class Deduction80CCD2 extends Deduction
{
    maxPercentLimitOnGross : number;

    constructor(section : string, name : string, maxlimit : number, maxPercent : number, title? : string, description? : string){
        super(section, name, maxlimit, title, description);
        this.maxPercentLimitOnGross = maxPercent;
    }

}

export class Deduction80CCG extends Deduction
{
    maxLimitOnGross : number;
    deductionPercent : number;

    constructor(section : string, name : string, maxlimit : number, maxLimitOnGross : number, deductionPercent : number, title? : string, description? : string){
        super(section, name, maxlimit, title, description);
        this.maxLimitOnGross = maxLimitOnGross;
        this.deductionPercent = deductionPercent;
    }
    
}