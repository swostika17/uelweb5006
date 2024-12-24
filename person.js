class person{
    constructor (name, age, email){
        this.name=name;
        this.age=age;
        this.email=email;

    }
    getpersonInfo(){
        return "Name:"+ this.name+"age:"+this.age+"email"+this.email
    }
}
module.exports=person