class parent {
    constructor(){
        this.fatherName = 'Ibrahim Khalilullah'
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getfullName(){
        return this.name + ' ' +this.fatherName;
    }
}

const baby =new child ('Ramjan');
const baby2 =new child ('ali');
console.log(baby. getfullName());
console.log(baby2.getfullName());

