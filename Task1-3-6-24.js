//--------------------------------Q1---------------------------------
//create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %;
let x = 250 ;
let zakat = 2.5;
let y = (x / 100) *  zakat;
console.log(y); 



//--------------------------------Q2---------------------------------
//Array Tasks : 
// Correct the syntax error:
 
//[ 1,7  9  45, ]
//solution : 
let a = [ 1,7,9,45]
console.log(a);
//hint:  declare the array + add comma between values inside array + add semicolon at the wnd of array

// ["Str" "alex","moh"
//sloution:
let b = ["Str", "alex","moh"];
console.log(b);
//hint: declare the array + add comma between values inside array + add sequare bracket at the end 


//'the','fox' 'over' lazy, 'dog',  ]
//sloution:
let c = ['the','fox', 'over', 'lazy', 'dog'];
console.log(c);
//hint: declare the array + add comma between values inside array + write lazy as a string (inside single quotatiom like all values)




//-------------------------------Q3---------------------------------
//What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
// the index of "Banana" is 1
let indexB = fruits.indexOf("Banana");
console.log(indexB);
//the index of "Tomato" is 0
let indexT = fruits.indexOf("Tomato");
console.log(indexT);




//------------------------------Q4------------------
//Create an array represents your:
//1- Favorite Food (2)
let Food = ["Makmurah" , "Mansaf"];
console.log(Food);
//2- Favorite Sport (3)
let Sport = ["Yoga" , "Pilates", "Walk"];
console.log(Sport);
//3- Favorite Movie (2)
let Movie = ["Django" , "I am a legend"];
console.log(Movie);


//--------------Q5----------------
//Create a Variable to return the first element in an array 
//Ex: firstOfArray([1,4,5]) => 1
let arr11 = [10, 9, 8 , 7];
let first1 = arr11[0];
console.log(first1);

//Ex: firstOfArray(["t","u","g","x"]) => "t"
let arr22 = ["n","o","u","r"];
let first2 = arr22[0];
console.log(first2);


//-------------------Q6----------------------------
//Create a Variable to return the lastOfArray element in an array 
//Ex: lastOfArray([1,4,5]) => 5
let last1=arr11[arr11.length -1];
console.log(last1);
//Ex: lastOfArray(["t","u","g","x"]) => "x"
let last2=arr22[arr22.length -1];
console.log(last2);

//--------------------Q7------------------------
//Using console make this array to be like this one (push, unshift, shift, pop)
//var array = [0,5,7,9] => [1,3,4,6,8,9,10]
var array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);
console.log(array);



//----------------------Q8----------------------------
//Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
//[1,3,4,6,8,9,10]
//var array2 = [5,9,-7,3.5];
array.shift();
array.shift();
array.shift();
array.shift();
array.shift();
array.unshift(5);
array.pop();
array.push(-7,3.5);
var array2 = array;
console.log(array2);

//----------------------Q9---------------------------------
//Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8

var arr1 = [5, 3, 8, -2, 6, 1, -4, -6, 2, 9];
var arr2 = [];
var min = arr1[0];
var position;
var max = arr1[0];
for (i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) max = arr1[i];
}
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] != "x") {
            if (min > arr1[j]) {
                min = arr1[j];
                position = j;
            }
        }
    }
    arr2[i] = min;
    arr1[position] = "x";
    min = max;
}
console.log(arr2);