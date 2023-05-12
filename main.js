//23.push
document.write("<h2>push</h2>");
var n=[1,2,3,4,5];

n.push(6);
document.write(n);
document.write('<br>');

//question
var b = [1, 2, 3, 4, 5, 6];
var bRes=b.push(7);
document.write(b);
document.write('<br>');	

var b = [1, 2, 3, 4, 5, 6]
var bResult=b.push(7,8,9,10);
document.write(b);
document.write('<br>');

var lang=["HTML","CSS"];
var langRes=lang.push("JS");
document.write(lang);

//22.pop
document.write("<h2>pop</h2>");
var n=[1,2,3,4,5,6];

n.pop();
document.write(n);
document.write('<br>');

//question
var numbers = [3,4,5,6,7,8,9,10];
var num = numbers.pop();
document.write(numbers);
document.write("<br>");

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']; 
var plant = plants.pop();
document.write(plants);

//27.shift
document.write("<h2>shift</h2>");
var n=[1,2,3,4];

n.shift();
document.write(n);
document.write('<br>');

//34.unshift
document.write("<h2>unshift</h2>");
var n=[1,2,3,4,5];

n.unshift(0);
document.write(n);
document.write('<br>');

//question
var c= [9,8,7,6,5] ;
var cRes=c.unshift(10);
document.write(c);
document.write('<br>');

var c = [1, 2, 3, 4, 5, 6];
var cRes=c.unshift(-2,-1,0);
document.write(c);
document.write('<br>');

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits.unshift("Lemon","Pineapple");
document.write(fruits);

//15.forEach
document.write("<h2>forEach</h2>");
var n=[1,2,3,4];

n.forEach(function(value,index,array){
	console.log(value,index,array);
})
document.write('check console ')
document.write('<br>');


//8.filter
document.write("<h2>filter</h2>");
var n=[1,2,3,4];

n.filter(function(n){
	if(n%2==0){
		document.write(n);
		document.write('<br>');
	}
})
document.write('<br>');


//9.find
document.write("<h2>find</h2>");
var n=[13,45,23,55,10];

m=n.find(function(e){
		return e>18;
})
document.write(m);
document.write("<br>");


//10.findIndex
document.write("<h2>findIndex</h2>");
m=n.findIndex(function(e){
	return e;
})
document.write(m);
document.write("<br>");


//11.findLast
document.write("<h2>findLast</h2>");
var n=[12,32,8,36];

a=n.findLast(function(e){
	return e;
})
document.write(a);
document.write("<br>");


//12.findLastIndex
document.write("<h2>findLastIndex</h2>");
b=n.findLastIndex(function(e){
	return e;
})
document.write(b);
document.write("<br>");

//26.reverse
document.write("<h2>reverse</h2>");
var n=[1,2,3,4,5,6];

c=n.reverse(function(e){
	return e;
})
document.write(c);
document.write("<br>");


//2.concat
document.write("<h2>concat</h2>");
var a=[6,7,8,9,0];
var b=[1,2,3,4,5];

c=b.concat(a);
document.write(c);
document.write("<br>");	

//question
var numbers = [1,2,3];  
var letters = ["a", "b", "c"];
document.write(numbers.concat(letters));
document.write("<br>");

var array1 = [1, 2, 3]; 
var array2 = [4, 5, 6]; 
var array3 = [7, 8, 9];
var arrRes = array1.concat(array2).concat(array3);
document.write(arrRes);
document.write("<br>");

var vowel1 = ["i","o","u"] , vowel2 = ["a","e"];
var vowRes = vowel2.concat(vowel1);
document.write(vowRes);
//1.at()
document.write("<h2>at</h2>");
var a=[10,20,30,40];

document.write(a.at(3));
document.write(a.at(-3));
document.write("<br>");
document.write(a);		//not affect for orginal array

//24.reduce
document.write("<h2>reduce</h2>");
var n=[100,50,250];

n.reduce(function(acc,cul){
	return c=(acc+cul);
},-300)
document.write(c);
document.write(n);		//not affect for orginal array


//28.slice
document.write("<h2>slice</h2>");
let array=[23,43,12,56];

let slice=array.slice(2);
let slice1=array.slice(1,3);
document.write(slice,slice1);
document.write("<br>");		//not affect for orginal array

// var number = [1, 2, 3, 4, 5, 6];
// var num = number.slice(2,3);
// document.write(num);					//dout

//31.splice
document.write("<h2>splice</h2>");

 let arraySplice=[1,5,6,5,6];

let splice=arraySplice.splice(3);
let splice1=arraySplice.splice(0,2);
document.write("<p> This check for console </p>");
console.log(splice);
console.log(splice1);
console.log(arraySplice);	//affect for orginal array

//question
var fruits = ['apple', 'orange', 'banana', 'grapes'];
let fruitsRes=fruits.splice(0,4);
console.log(fruits);


var fruits = ['apple', 'orange', 'banana', 'grapes'];
let fruitsRes1=fruits.splice(2,2);
console.log(fruits);

var a = [10, 20, 30, 40];
var aRes = a.splice(0,4);
document.write(aRes);
document.write("<br>");

var numbers = [3,4,5,6,7,8,9,10];
var number = numbers.splice(7,1);
var number1 = numbers.splice(0,0,0,1,2)
document.write(numbers);
document.write("<br>");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitsResult = fruits.splice(0,1);
var fruit = fruits.splice(4,0,"Pineapple");
document.write(fruits);
document.write("<br>");

var  color = ['red', 'blue' , 'yellow'];
var colorRes = color.splice(2,0,"purple");
document.write(color);
document.write("<br>");

var color = ['red', 'blue' , 'yellow'];
var colors = color.splice(2,0,['green', 'purple', 'black']);
document.write(color);
document.write("<br>");

var language = ['html', 'css', 'js', 'reactjs'];
var lang = language.splice(1,1,"bootstrap");
document.write(language);
document.write("<br>");

var number = [1, 2, 3, 4, 5, 6];
var num = number.splice(5,1,7,8);
document.write(number);
document.write("<br>");

var chocolates = ['dairymilk', 'ferroro', 'galaxy', 'twix', 'mars', 'bounty' ];
var cho = chocolates.splice(0,3);
document.write(cho);
document.write("<br>");

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
var plant = plants.splice(1,2);
document.write(plant);
document.write("<br>");

var chocolates = ['dairymilk', 'ferroro', 'galaxy', 'twix', 'mars', 'bounty' ];
var choco = chocolates.splice(2,2);
document.write(choco);
document.write("<br>");

var arr = ["AngularJS","Node.js","JQuery","Bootstrap","ReactJS"];
var arrayRes = arr.splice(3,2);
document.write(arrayRes);

//7.fill()
document.write("<h2>fill</h2>");
let items=['apple', 'orange', 'grapes','mango'];

items.fill('banana');
document.write(items);			//affect for orginal array

//30.sort()
document.write("<h2>sort</h2>");
let sort=[2,4,-6,7,-2,5,-3];

 let sortResult=sort.sort();
document.write(sort);
document.write(sortResult);		//affect for orginal array	

//32.toLocaleString
document.write("<h2>toLocaleString</h2>");
let local=['3',"apple",'-',"orange",8,new Date()];

let res=local.toLocaleString();
document.write(res);
document.write(local);   	//affect for orginal array

//33.toString
document.write("<h2>toString</h2>");
let item=["tamil","english",43,-10,new Date()];

let string=item.toString();
document.write(string);
document.write(item);		//affect for orginal array

//17.indexOf
document.write("<h2>indexOf</h2>");
let index=["HTML","CSS","JavaScript",15,"React"];

document.write(index.indexOf(15,0));
document.write(index.indexOf("React"));
document.write(index);			//not affect of orginal values

//join

//question
document.write("<h2>join</h2>");
var className = [ 'btn', 'btn-primary', 'btn-active'];
document.write(className.join(" "));
document.write("<br>");

var className = [ 'btn', 'btn-primary', 'btn-active'];
document.write(className.join("-"));
document.write("<br>");

var decimal = [3, '.', 1, 4, 1, 5, 9];
document.write(decimal.join(""));


//map

// var arrayMap=[2,4,3,6,7,2];

// var result=arrayMap.map(e){
	// return e%2;
// }

// document.write(result);
// document.write(arrayMap);