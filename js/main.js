

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
//document.getElementById("changeHTML").innerHTML = "xxx";
//
//var myVar = "Testing the console";
//console.log( myVar, "Logged!");
//console.info( myVar, "Logged!");
//console.warn( myVar, "Logged!");
//console.debug( myVar, "Logged!");
//console.error( myVar, "Logged!");
//console.log( '%c I see smurfs!', 'color:green; font-weight: bold;');
//console.log( '%c Stand Out!', 'background:green; color:white; font-weight: bold;');
//console.log(document.body);
//var msg = '<B> This is the new message <BR> Did you get it?</B>';
//document.getElementById("changeHTML").innerHTML = '<B> This is the new message <BR> Did you get it?</B>';
//document.getElementById("changeHTML2").innerHTML = msg;
//document.getElementById("changeHTML3").textContent = msg;
//document.getElementById("header").innerHTML = "How are you today?";
//
//console.log(document);

//var myHeader = document.getElementById("header");
//console.log(myHeader.innerHTML);
//var mySpans = document.getElementsByTagName("span");
//console.log(mySpans[0]);
//console.log(mySpans.length);
//for (var i = 0; i < mySpans.length; i++) {
//	console.log(mySpans[i]);
//}


//var myButtons = document.getElementsByClassName("btn-lg");
//console.log(myButtons[0]);
//console.log(myButtons.length);
//for (var i = 0; i < myButtons.length; i++) {
//	myButtons[i].innerHTML = "Button " + i;
//}

//document.getElementById("btnTest").className = "btn-lg";

//var myValues = document.querySelectorAll("a[href*=\"#\"]");


//not working?

//console.log(myValues);
//
//        for(var i = 0; myValues.length; i++){
//                //console.log(myValues[i].innerHTML);
//                //myValues[i].href = "http://www.google.com";
//        }


//var dList = document.getElementsByTagName('div')[3];
//console.log(dList);
//
//console.log(dList.childNodes[1]);

//var uList = document.getElementsByTagName('ul')[1];
//console.log(uList);
//
//var myDiv = document.querySelectorAll('#myList li');
//console.log(myDiv);
//for (var i = 0; i < myDiv.length; i++){
//        console.log(myDiv[i].firstChild.data);
//}

//var headerElement = document.getElementById("header");
//headerElement.innerHTML = 'This is my new Header';
//headerElement.style.color = 'blue';
//headerElement.style.backgroundColor = 'yellow';
//headerElement.style.fontFamily = 'Cambria, "Hoefler Text", "liberation serif", Times, "Times New Roman", serif';
//headerElement.style.border = '5px solid black';
//
//
//var rowElement = document.getElementsByClassName("row");
//console.log(rowElement);
//
//for (var i = 0; i < rowElement.length; i++){
//        rowElement[i].style.backgroundColor = "red";
//        rowElement[i].style.border= '5px solid black';
//}
//
//var headColor = document.getElementsByClassName("jumbotron");
//console.log(headColor);
//
//for (var i = 0; i < headColor.length; i++){
//        headColor[i].style.backgroundColor = 'orange';
//}
//
//var bod = document.body;
//bod.style.color = "blue";
//
//var btnColor = document.getElementsByClassName("btn-lg");
//console.log(btnColor);
//
//for (var i = 0; i < btnColor.length; i++){
//        btnColor[i].style.backgroundColor = '#2DDD23';
//        btnColor[i].style.border= '5px solid purple';
//}

//var rowElement = document.querySelectorAll(".row");
//console.log(rowElement);
//for (i=0; i < rowElement; i++){
//       rowElement[i].className += " newStyle";
//       //rowElement[i].classList.add("newStyle");
//}

//var ul = document.getElementById("myList");
//var li = document.createElement("li");
//li.appendChild(document.createTextNode("List F"));
//li.setAttribute("id", "listF");
//li.classList.add('listClass');
//ul.appendChild(li);

//var myButton = document.getElementById("btnA");
//var btnName  = document.getElementById("btnA").innerHTML;
//var myOutput = document.getElementById("output");
//var btnClick = function(){
//     myOutput.textContent = "You clicked the " + btnName + " button!";   
//};
//myButton.addEventListener("click", btnClick);

//var myButton = document.getElementsByClassName("btn-lg");
//console.log(myButton);
//var myOutput = document.getElementById("output");
//var btnClick = function(){
//     myOutput.textContent = "You clicked the " + this.id + " button!";  
//};
//
//for (var i = 0; i < myButton; i++){
//        myButton[i].addEventListener("click", btnClick, false);
//}

//var myOutput = document.getElementById("output");
//var myMouse = document.getElementById("jumbotron");
//var mouseMover = function(e){
//        console.log(e);
//        console.log(e.x);
//        myOutput.textContent = "x is at " +e.x+ " y is at "+e.y;
//};
//myMouse.addEventListener("mousemove", mouseMover);


//var myOutput = document.getElementById("output");
//var myButton = document.getElementById("submitButton");
//var btnClick = function(){
//        var messageOut;
//        var name = document.getElementById("firstName").value;
//        var email = document.getElementById("email").value;
//        var re = /\S+@\S+\.\S+/;
//                //if(name){messageOut="Hello " + name;}else{messageOut="mysterious person";}
//                if(re.test(email)){messageOut="Valid Email " + name;}else{messageOut="Invalid Email";}
//     myOutput.textContent = messageOut;  
//};
//myButton.addEventListener("click", btnClick);

//document.getElementById("mainButton").addEventListener("click", function(event){
//        event.preventDefault();
//        console.log(event);
//        console.log("clicked");
//        });

//console.log(window);
//console.log(window.screen.height);
//console.log(window.scrollX);
//console.log(window.history.length);
//console.log(window.location);
//console.log(window.navigator.userAgent);
//
//window.open("", "", "width=100, height=100");
//window.resizeTo(250, 250);
//setInterval(function(){
//        console.log("This message will show every 5 seconds");
//        },5000);

//var blinky;
//var myButton = document.getElementById("submitButton");
//blinky = setInterval(changeText, 100);
//function changeText(){
//        var Output = document.getElementById("output");
//        myOutput.style.color = myOutput.style.color == "red" ? "black" : "red";
//}
//function stopChangeText(){
//        clearInterval(blinky);
//}
//myButton.addEventListener("click", stopChangeText);

var elm = document.getElementById("animated");
var stopped;
var requestId = 0;
var starttime;

function render(time){
        if(!stopped){
                elm.style.left = ((Date.now() - starttime) / 8 ) + "px";
                requestId = window.requestAnimationFrame(render);
        }
}
        function start(){
                starttime = Date.now();
                window.requestAnimationFrame(render);
                stopped = false;
        }        
        function stop(){
                if(requestId){
                window.cancelAnimationFrame(requestId);
        }
        stopped = true;
}



