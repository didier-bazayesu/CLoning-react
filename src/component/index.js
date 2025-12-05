class Person {
    
    #name = "didier";
    constructor(name,age){

        this.name = name;
        this.age = age
    }

    get greet(){
    console.log(this.age);
    };

    set change (value){
        if(this.age < 18){
            this.age = this.age +2;
        }

    }
}

let Person1 = new Person('didier',10);
Person1.change = 21;
console.log(Person1);
