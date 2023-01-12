abstract class Person{
// cant be instanced

    protected  name:string;
    public abstract score:number;

    constructor(pName:string){
        this.name=pName;
    }

    public abstract getName():string;
}
class Student extends Person{
    public score: number;

    constructor(pName:string,pScore:number){
        super(pName);
        this.score=pScore;
    }

    public getName(): string {
        return this.name;
    }

}


let student = new Student('asdasd',1)
console.log(student.getName());

const getPersonName = (person:Person):string =>{
    return person.getName();
}

console.log(getPersonName(student));
