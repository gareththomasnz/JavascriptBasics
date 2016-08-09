//var myVariable = 15 + 5;
//var blurb = "the answer is";
//console.log('can you see me ' + blurb + myVariable);
//window.alert('hello world');
//document.write('hello <br> world');

//var myName = "Gareth";
//
//function showName(){
//        console.log("You pressed the button " + myName);
//        }
//
//showName();

//var a = 10;
//var b = 0 + a;
//var c = 25/a;
//var d = a%2;

//console.log(a + b);
//console.log(c);
//console.log(d);

//if(d){
//        console.log("You are odd");       
//}else{
//        console.log("You are even");
//}

//if(b==a){
//        console.log("equal");
//}else{
//      console.log("not equal");  
//}

//switch(a){
//        case 3:
//                console.log('A is three');
//                break;
//        case 5:
//                console.log('A is five');
//                break;
//        default:
//                console.log('A is nothing');                
//}

//for(i=0; i < 15; i++){
//        console.log(i + ' loop value');
//}

//var b = 0;
//while(b < 15){
//      console.log(b + ' loop value');
//      b++;
//}

//var person = {name:"John",age:50,likes:"beer"};
//var people = {One:person,Two:{name:"Mike",age:20,likes:"girls"}};
//
//person.name = "Jane";
//
//console.log(people.Two.name);
//
//console.log(person.name + " is aged " + person.age);

//var a = 15;
//
//var person = ["John", 50, "beer"];
//var people = [person, "Mike", "beer"];
//
//console.log(person[0]);
//console.log(people[1][0]);
//
//people[4] = "new one";
//console.log(people);
//console.log(people.length);

//console.log(console);
//console.log(window);
//console.log(document.URL);


//var changeMe = document.getElementById('changeHTML');
//changeMe.innerHTML = "The paragraph text";

//var car = {
//        name: 'Ford',
//        model: 'Mustang',
//        state: 'stopped',
//        start: function(){
//                car.state = 'on';
//        }
//};
//car.stop = function(){
//        car.state = 'off';
//};
//car.accelerate = function(){
//        car.state = 'moving';
//};
//car.break = function(){
//        car.state = 'breaking';
//};
//
//car.stop();
//console.log(car.state);

//var time = new Date();
//
//console.log(time);

//var milliSeconds = Date.now();
//
//console.log(milliSeconds);

//var createPerson = function(name, age, gender){
//        console.log(arguments);
//}
//
//var me = createPerson('Gareth', '48', 'Male');
//
//console.log(me);

//var Car = function(name, model, year, color){
//        this.name = 'morris';
//        this.model = 'wagon';
//        this.year = '1968';
//        this.color = 'blue';
//};
//console.log(Car);

//function Person(firstName, lastName, age){
//        this.firstName = firstName;
//        this.lastName  = lastName;
//        this.age       = age;
//}
//
//Person.prototype.getAge = function(){
//        return this.age;
//}
//Person.prototype.getFullName = function(){
//        return this.firstName + ', ' + this.lastName;
//}
//var will = new Person('Will', 'Smith', 34);
//var bill = new Person('Bill', 'Gates', 84);
//var steve = new Person('Steve', 'Jobs', 45);
//
//console.log(steve.getFullName());
//console.log(will.getFullName());
//console.log(bill.getFullName());
