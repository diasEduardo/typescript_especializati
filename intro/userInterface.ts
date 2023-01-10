interface UserInterface{
    firstName: String;
    lastName: String;
    age: Number;

    getFullName ():string;

}
const getUser = (user:UserInterface): string=>{
    return `${user.firstName} ${user.lastName}, age: ${user.age} `
}

class UserEx implements UserInterface{
    firstName: String;
    lastName: String;
    age: Number;

    constructor(firstName:string,lastName:string,age:number){
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName = () =>{
        return `${this.firstName} ${this.lastName}`
    }
}
