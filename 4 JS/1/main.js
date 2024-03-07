//------------------- [ 1 Write a program that allow to user enter number then print it ] --------------------
// var num = +window.prompt('please enter a number');
// console.log('number you enter is [ '+ num + ' ]');


//----------- [2 take number from user then print yes if that number can divide by 3 and 4 otherwise print no] -----------------
// var num = +window.prompt('please enter a number');
// if(num % 3 == 0 && num %4 == 0)
//     console.log('yes');
// else
//     console.log('No');


//----------- [ 3 program that allows the user to insert 2 integers then print the max] -------------------
// var num1 = +window.prompt('please enter first number');
// var num2 = +window.prompt('please enter second number');
// if(num1 > num2)
//     console.log('max is : ' + num1)
// else if (num2 > num1) 
//     console.log('max is : ' + num2)
// else 
//     console.log('two numbers equal each other , or you enter a string')


//----------- [ 4 insert an integer then print negative if it is negative number otherwise print positive.] -------------------
// var num = +window.prompt('please enter a number');
// if(num >= 0)
//     console.log('number is positive')
// else 
//     console.log('number is negative')


//-------------- [ 5 take 3 integers from user then print the max element and the min element. ] --------------- 
// var num1 = +window.prompt('please enter first number');
// var num2 = +window.prompt('please enter second number');
// var num3 = +window.prompt('please enter third number');
// if(num1 > num2 && num1 > num3)
//     console.log('max is : ' + num1)
// else if (num2 > num1 && num2 > num3) 
//     console.log('max is : ' + num2)
// else if (num3 > num1 && num3 > num2) 
//     console.log('max is : ' + num3)
// if(num1 < num2 && num1 < num3)
//     console.log('min is : ' + num1)
// else if (num2 < num1 && num2 < num3) 
//     console.log('min is : ' + num2)
// else if (num3 < num1 && num3 < num2) 
//     console.log('min is : ' + num3)
// else 
//     console.log('three numbers equal each other , or you enter a string')


//------------------ [ 6 insert integer number then check If a number is even or odd] ---------------- 
// var num = +window.prompt('please enter a number');
// if(num % 2 == 0)
//     console.log('number is even')
// else 
//     console.log('number is odd')


//--------------- [ 8 take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant]------------------ 
// var c = window.prompt('please enter char');
// if(c == 'a' ||c == 'e' ||c == 'i' || c == 'o' || c == 'u' || c == 'A' ||c == 'E' ||c == 'I' || c == 'O' || c == 'U')
//     console.log('vowel');
// else
//     console.log('consonant');



//--------------- [ 9 insert integer then print all numbers between 1 to that’s number] ------------------ 
// var num = +window.prompt('please enter a number');
// for(var i =1 ; i<= num ; i++)
//     console.log(i);



//-------------- [ 10 insert integer then print a multiplication table up to 12.] --------------- 
// var num = +window.prompt('please enter a number');
// for(var i =1 ; i<= 12 ; i++)
//     console.log(num + ' * ' + i + ' = ' +num * i);



//------------- [ 11 insert number then print all even numbers between 1 to this number] ------------ 
// var num = +window.prompt('please enter a number');
// for(var i =1 ; i<= num ; i++)
//     if(i %2 == 0)
//         console.log(i);



//--------------- [ 12 Write a program that take two integers then print the power] ------------ 
// var num1 = +window.prompt('please enter first number'); 
// var num2 = +window.prompt('please enter second number'); 
// var p = num1 ; 
// for(var i = 1 ; i < num2 ; i++)
//         p *= num1  
// console.log(num1 + ' ^ ' + num2 + ' = ' + p);


//--------------- [ 12 enter marks of five subjects and calculate total, average and percentage.] ------------------- 
// var mark1 = +window.prompt('please enter first mark'); 
// var mark2 = +window.prompt('please enter second mark');
// var mark3 = +window.prompt('please enter third mark');
// var mark4 = +window.prompt('please enter fourth mark');
// var mark5 = +window.prompt('please enter fifth mark');
// var totalMarks = mark1 + mark2 + mark3 + mark4 + mark5 ;
// var avgMarks = totalMarks / 5 ;
// var percentageMarks = (totalMarks / 500 )* 100 ;
// console.log('total marks = '+ totalMarks + ' , average mark = ' + avgMarks + ' , percentage = ' + percentageMarks)


//------------- [ 13 month number and print number of days in that month.] ---------------
// var month = +window.prompt('please enter month number');
// if(month == 1 ||month == 3 || month == 5 || month == 7 || month ==8 || month ==10 || month == 12 )
//     console.log('31 days');
// else if(month == 4 ||month == 6 || month == 9 || month == 11 )
//     console.log('30 days');
// else if (month == 2)
//     console.log('28 / 29 days');
// else
//     console.log('please enter number between 1 and 12');



//------------ [ 14  input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade] -------------------- 
// var mark1 = +window.prompt('please enter first mark'); 
// var mark2 = +window.prompt('please enter second mark');
// var mark3 = +window.prompt('please enter third mark');
// var mark4 = +window.prompt('please enter fourth mark');
// var mark5 = +window.prompt('please enter fifth mark');
// if(mark1 >= 90)
//     console.log('mark1 grade : A');
// else if (mark1 < 90 && mark1 >=80) 
//     console.log('mark1 grade : B');
// else if (mark1 < 80 && mark1 >=70) 
//     console.log('mark1 grade : C');
// else if (mark1 < 70 && mark1 >=60) 
//     console.log('mark1 grade : D');
// else if (mark1 < 60 && mark1 >=40) 
//     console.log('mark1 grade : E');
// else 
//     console.log('mark1 grade : F');
// and so on to rest of marks....

// -------------------------- [ 15 to print total number of days in month] -----------------
// var month = +window.prompt('please enter month number');
// switch(month){
//     case 1 :
//     case 3 :
//     case 5 :
//     case 7 :
//     case 8 :
//     case 10 :
//     case 12 :
//         console.log('31 days');
//         break ;

//     case 4 :
//     case 6 :
//     case 9 :
//     case 11 :
//         console.log('30 days');
//         break ;

//     case 2 :
//         console.log('28 / 29 days');
//         break ;
// }


//------------------------ [ 16 check whether an alphabet is vowel or consonant ] ------------------- 
// var c = window.prompt('please enter char');
// switch (c){
//     case 'a':
//     case 'A':
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':
//         console.log('vowel');
//         break;
//     default:
//         console.log('consonant');
//         break;
// }


//------------------------ [ 17 maximum between two numbers ] ------------------- 
// var num1 = +window.prompt('please enter first number');
// var num2 = +window.prompt('please enter second number');
// switch (num1 >= num2) {
//     case true:
//         console.log('max is : ' + num1);
//         break;
//     case false:
//         console.log('max is : ' + num2);
//     default:
//         console.log('please enter numbers');
//         break;
// }



//------------------------ [ 18 check whether a number is even or odd ] ------------------- 
// var num = +window.prompt('please enter a number');
// switch (num % 2 == 0) {
//     case true:
//         console.log('even');
//         break;
//     case false:
//         console.log('odd');
//     default:
//         console.log('please enter number');
//         break;
// }



//------------------------ [ 19 check whether a number is positive or negative or zero ] ------------------- 
// var num = +window.prompt('please enter a number');
// switch (num > 0) {
//     case true:
//         console.log('positive');
//         break;
//     case false:
//         switch (num == 0) {
//             case true:
//                 console.log('zero');
//                 break;
//             case false:
//                 console.log('negative');
//                 break;
//         }
//     default:
//         console.log('please enter number');
//         break;
// }


//------------------- [ 20 create Simple Calculator] --------------- 
// var num1 = +window.prompt('please enter first number');
// var num2 = +window.prompt('please enter second number');
// var operator = window.prompt('please enter operator');
// switch(operator){
//     case '+' :
//         console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
//         break;
//     case '-' :
//         console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
//         break;
//     case '*' :
//         console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
//         break;
//     case '/' :
//         console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
//         break;
// }