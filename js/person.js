var person = {
    name : "Ivan",
    age : 25,
    hiredYear : 2017
}

person.sayAll = function (){
    for(var i in this){
        console.log(i + " is " + this[i]);
    }
}
