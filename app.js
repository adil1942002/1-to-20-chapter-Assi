//===========Chapter : 01================//
alert("Adil");
alert("Raza");
alert("Adilraza1942002@gmail.com");
alert("03202078195");
alert("Pasword");

//===========Chapter : 02================//
var a ;
var myVariable;
myVariable = "Hello, world!";
var teamName = "Developer";
alert(teamName);
var bestMan = "brother";
bestMan = "father";

//===========Chapter : 03================//
var caseQty;
caseQty = 144;
console.log(caseQty);
var num = ("9");
console.log(+num);
var sum;
sum = 2 + 3;
console.log(sum);
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
var myNumber = 5;
myNumber += 3;

//===========Chapter : 04================//
var product_cost = 3.45;
console.log(product_cost);
var nameOfBand;
var myNumber = 10;
console.log(myNumber);
var fullName = "Adil raza";
console.log(fullName);
//===========Chapter : 05================//
var num2 = 20 % 6;
console.log(num2)
var largeNum = 1000 * 2000;
console.log(largeNum);
var variable1 = 100;
var variable2 = 50;
var result = variable1 - variable2;
console.log(result);
var number1 = 100;
var number2 = 2;
var remainder = number1 % number2;
console.log(remainder)
alert(number1 * number2);

//===========Chapter : 06================//
var x = 49;
x++;
 console.log(x);
 var j = 100;
 --j;
 console.log(j);
 var t = 50;
 var p = t++;
 console.log(p);
 var o = 50;
 var z = --o;
console.log(z);
var variable3 = 5;
var variable4 = variable3++;
console.log(variable4)
var myNumber5 = 10;
myNumber5++;
alert("Nayi qeemat: " + myNumber5);

//===========Chapter : 07================//
var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum);
var calculatedNum2 = (2 + 2) * 6;
console.log(calculatedNum2);
var calculatedNum3 = (2 + 2) * (4 + 2);
console.log(calculatedNum3);
var calculatedNum4 = ((2 + 2) * 4) + 2;
console.log(calculatedNum4);
var cost = (2 + 2) * (4 + 10);
console.log(cost);
var units = 2 + (2 * (4 + 10));
console.log(units);
var pressure = (4 / 2) * 4;
console.log(pressure);

//===========Chapter : 08================//
var num4 = "2" + "2";
console.log(num4);
var message = ("Hello," + "Ahmed");
alert(message);
alert("33" + 3);
alert("Pakistan " + "Zindabad");
var result = "Hello" + 10;
var variable1 = "Pakistan ";
var variable2 = "Zindabad";
var result2 = variable1 + variable2;
alert(result2);

//===========Chapter : 09================//
 var firstName = prompt("Enter Your First Name");
var contry = prompt("Enter Your Contry Name","Pakistan");
var yourName = prompt("Enter Your Name");
var DOB = prompt("Enter Your DOB","19-04-2002");
var message = "Enter Your Contry Name";
var contryName = "Pakistan";
var p = prompt(message , contryName);
alert(p);

//===========Chapter : 10================//
var city = "Karachi";
if(city == "Karachi"){
    console.log("The City Of Karachi");
}
var abc1 = 20;
var abc2 = 20;
if(abc1 === abc2){
    var pr = prompt("Enter Your pasword");
}
var zipCode = "10010";
if(zipCode === "10010"){
    alert("Karachi");
}else{
    alert("Please Write Correct City");
}
var xe = 900;
if(xe === 900){
        xe = 300;
}
console.log(xe);

//  ===========Chapter : 11================
 var var1 = 80; 
 var var2 = 60; 
 if (var1 !== var2) {
     console.log("Is Note Equals to Number")
    }
if (var1 >= var2) {
 console.log("Secend Number Is Note grater Number")
}
var variable8 = 10; 
if (variable8 !== 5) {
        variable8 = 5; 
console.log(variable8);
  }
var num10 = 20;
var num11 = 10;
if (num10 !== num11) {
        alert("Congratulations!");
      }
    var firstNamE = prompt("Apna pehla naam likhen:");
    if (firstNamE !== "Adil") {
  alert("No Match"); 
}

// ===========Chapter : 12================
var var13 = 90;
var var14 = 30;
if (var13 >= var14) {
        alert("Value of var1 is greater than or equal to var2");
      } else {
            alert("Value of var1 is less than var2");
          }
         var marks = prompt("Enter your marks:");
        var percentage = (marks / 100) * 100;
        if (percentage >= 90) {
  alert("Grade: A");
} else if (percentage >= 70) {
      alert("Grade: B");
    } else if (percentage >= 50) {
          alert("Grade: C");
        } else {
              alert("Grade: Fail");
            }
var aaa = 9;
if (aaa === 10) {
        alert("a is 10");
      } else {
            alert("The correct value of a is " + aaa);
  }
var city = prompt("Enter a city:");
if (city === "Karachi") {
      alert("Acknowledging that it is Karachi");
    } else if (city === "Lahore") {
          alert("Acknowledging that it is Lahore");
} else {
      alert("Different city");
    }
    
    // ===========Chapter : 13================
    var a = 10; 
    var b = 10; 
    var c = 20; 
    var d = 20; 
    if (a === b && c === d) {
            alert("true");  
    }
    if (a === b || c === d) {
            alert("true");  
        }
        var Name = prompt("Enter name");
    var age = prompt("Enter Age");
    if (Name === "Adil" || Name === "Ahmed" && age < 17) {
            console.log("true");
          }
        var var1 = 5;
        var var2 = 10;
        if (var1 < var2 || var1 > var2) {
              alert("Alert message");
            }
            var firstName = "Adil";
            var lastName = "Raza";
            var userFirstName = prompt("Enter your first name:");
            var userLastName = prompt("Enter your last name:");
            if (userFirstName === firstName && userLastName === lastName) {
                  alert("Names match!");
                }
                
                // ===========Chapter : 14================//
                   var password = prompt("Enter Password")
                    if (password !== "") {
                            if (password.length <= 5) {
                                  alert("Password must be greater than 5");
                                } else {
                                      alert("OK");
                                    }
                  }
            var a = 1;
            var c = "max"
            if (a === 1) {
                    if (c === "Max") {
                  alert("OK");
                }
              }
            if (a === 1 && c === "Max") {
                    alert("OK");
                  }
                var var15 = 5;
                var var16 = 5;
                if (var15 === var16) {
                      if (var15 <= var16) {
                alert("Alert message");
              }
            }
            
            // ===========Chapter : 15================//
            var myArray = [];
            var myArray = ["Hello"];
            var alphabet = ["h", "i", "j", "k"];
            alert(alphabet[2]);
            var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var length = alphabet.length;
alert(length);
var myArray = ["Apple"];
myArray[1] = "Banana";
alert(myArray[1]);

// ===========Chapter : 16================//
var myArray = ["Hello"];
myArray.push("World");
alert(myArray[myArray.length - 1]);
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);

// ===========Chapter : 16================//
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(3, 2, 1);
var myArray = ["Apple"];
myArray.unshift("Banana");
alert(myArray[0]);
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "elephant", "tiger");
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);

// ===========Chapter : 17-20================//
for (var i = 0; i < 10; i++) {
    console.log("Muhmmad Adil Raza Attari");
  }
for (var i = 0; i <= 12; i++) {
        console.log("Muhmmad Adil Raza Attari");
}
for (var j = 0; j < 100; j++) {
            console.log("Muhmmad Adil Raza Attari");
  }
for (var k = 3; k > 0; k--) {
                console.log("Muhmmad Adil Raza Attari");
  }
var array = ["ahmed","adil","ubaid","abid"];
for(var i = 0; i < array.length; i++){
console.log("Abid hussain san's")
}

var flag = true;
var pets = ["Dog","Cat","loin","Fox"];
var usersName = ["ahmed","adil","ubaid","abid"]
var pro = prompt("Enter user neme");
for(var i = 0; i > usersName.length; i++){
 if(pro === usersName.length){

}
console.log(pro)
}
for (var i = 0; i < pets.length; i++) {
    console.log(flag)
}
for (var i = 0; i < 10; i++) {
    if (i === 1) {
      alert(i);
      break;
    }

  }

  





