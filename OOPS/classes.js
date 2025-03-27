class CreateUser{
    constructor(Fname,Lname,age){
        this.Fname=Fname
        this.Lname=Lname
        this.age=age
    }
    getBirthYear(){
       return new Date().getFullYear() - this.age;
    }
    getFullName(){
       return this.Fname+" "+this.Lname
    }
}
const user1 =new CreateUser("Priyanshu ", "Tamta", 22)