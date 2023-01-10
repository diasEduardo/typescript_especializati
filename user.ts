class User{
    protected firstName: String;
    protected lastName: String;
    protected age: Number;

    constructor(firstName:string,lastName:string,age:number){
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName = () =>{
        return `${this.firstName} ${this.lastName}`
    }
}

let user = new User('Eduardo','Defreyn',29);
console.log(user.getFullName())
