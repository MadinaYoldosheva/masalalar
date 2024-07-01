
`use strict`
//  let s=0
//  let x=prompt("'x'ning qiymatini kiriting")
//  let n=prompt("'x'ning qiymatini kiriting")
//  for(let i=2;i<=2*n;i+=2){
// s+=Math.pow(-1,n-1)*1/Math.pow(x,i);
//  }


//  console.log(s.toFixed(3));
// let name1;  
// console.log(name1);
// 18
// 25
// 45
// 90


// function Age(x) {
//     if(x<=18){
//         console.log("siz kichik ekansiz");
//     }
//     else if(x<=25){
//         console.log("18+");
//     }
//     else if(x<=45){
//         console.log("25+");
//     }
//     else if(x<90){
//         console.log("45+");
//     }
//     else if (x>=90){
//         console.log("90+");
//     } 
// }
// Age(92)




// if(x%3==0 && x%5==0){
//     console.log("fizzbuzz");
// }
// else if(x%3==0 && x%5!=0){
//     console.log("fizz");
// }
// else if(x%5==0 && x%3!=0){
//     console.log("buzz");
// }
// else{
// console.log("bolajon boshqa son kiritaqol");
// }




// let x = 47;
// switch (x) {
//     case 18:
//         console.log("18+");
//         break;
//     case 25:
//         console.log("25+");
//         break;
//     case 45:
//         console.log("45+");
//         break;
//     case 90:
//         console.log("90+");
//         break;
//     default:
//         console.log("siz bu yoshlardan hech birida emassiz!");
//         break;
// }


// function Hisoblash(a1,a2,amal) {
//     if (amal=="+") {
//         console.log(a1+a2);
//     }
//     else if(amal=="-"){
//         console.log(a1-a2);
//     }
//     else if(amal=="*"){
//         console.log(a1*a2);
//     }
//     else if(amal=="/"){
//         console.log(a1/a2);
//     }

// }
// Hisoblash(2,4,"/");

// function Hisoblash(a1,a2,amal) {
//     switch (amal) {
//         case "+":
//             console.log(a1+a2);
//             break;
//             case "-":
//                 console.log(a1-a2);
//                 break;
//                 case "*":
//             console.log(a1*a2);
//             break;
//             case "/":
//             console.log(a1/a2);
//             break;
//         default:
//             break;
//     } 

// }
// Hisoblash(2,9,"/");

// function ToqJuft(x) {
//     x=prompt("x ning qiymatini kiriting")
//     if(x%2!=0){
//         console.log(`${x}: Toq son`);
//     }
//     else{
//         console.log(`${x}: Juft son`);
//     }
// }
// ToqJuft()
// console.log('30'-'10'-5);

// let natija
// const calc=['+','-','*','/',5,8]
// function Calc(a,b,c){
//     a=calc[4]
//     b=calc[5]
// if(c==calc[0]){
//     natija=a+b
// }
//  else if(c==calc[1]){
//     natija=a-b
//  }
//  else if(c==calc[2]){
//     natija=a*b
//  }
//  else if(c==calc[3]){
//     natija=a/b
//  }
//  console.log(natija);

// }
// Calc(2,5,'+')


// const calc1=['+','-','*','/',5,8]


// let hisob = [];
// let natija;
// let a = prompt('a ning son qiymatini kiriting');
// let b = prompt('b ning son qiymatini kiriting');
// let c = prompt('amal kiriting');


// a = parseFloat(a);
// b = parseFloat(b);

// hisob.push(a);
// hisob.push(b);
// hisob.push(c);

// if (hisob[2] == '+') {
//     natija = hisob[0] + hisob[1];
// } 
// else if (hisob[2] == '-') {
//     natija = hisob[0] - hisob[1];
// } 
// else if (hisob[2] == '*') {
//     natija = hisob[0] * hisob[1];
// } 
// else if (hisob[2] == '/') {
//     natija = hisob[0] / hisob[1];
// }
// console.log(natija);


// function writeGenres(){
//     for(let i=0;i<=2;i++){
//         seriesDB.genres[i]=prompt(yaxshi korgan janring: ${i+1});
//     }
// }
// writeGenres();


// let hisob = [];
// let natija;
// function hisoblash() {
//     for(let i=0;i<=2;i++){
//         hisob.push(i)=prompt(`hisoblash uchun kerakli qaydlar kiritish:${i+1}`)
//     }
// }

// hisoblash()

// if (hisob[2] == '+') {
//     natija = hisob[0] + hisob[1];
// } 
// else if (hisob[2] == '-') {
//     natija = hisob[0] - hisob[1];
// } 
// else if (hisob[2] == '*') {
//     natija = hisob[0] * hisob[1];
// } 
// else if (hisob[2] == '/') {
//     natija = hisob[0] / hisob[1];
// }
// console.log(`${hisob[0]} ${hisob[2]} ${hisob[1]}=${natija}`);


// for(let i=10;i>=0;i--){
//     console.log(i);
// }

// let a=4,b=4,c=3,d=5
// let y=0
// for(let x=c;x<=d;x+=2){
// y+=Math.pow((Math.sin(a*x)+Math.pow(b,2*c))/(Math.pow(b*b+Math.pow(Math.cos(x),2))),1/3)-Math.sin(x*x)/(a*b)
// }
// console.log(y);


// let massiv=[1,21,3,4,59,6,75,8,9]

// for(let i=massiv.length-1;i>=0;i--){
//    console.log(massiv[i]);
// }

// for(let x=1;x<=100;x++){
//    if(x%3==0 && x%5==0){
//       console.log("fizzbuss");
//   }
//   else if(x%3==0 && x%5!=0){
//       console.log("fizz");
//   }
//   else if(x%5==0 && x%3!=0){
//       console.log("buss");
//   }
//   else{
//   console.log(x);
//   }
// }

// let a='Madina'

// for(let i=0;i<a.length;i++){
//     const sana
// }

// function foydalanuvchi(mantiqiy, username, password) {
//     const dasturchi = {
//         username1: 'Madina',
//         password1: '454545'
//     };

//     if (mantiqiy === true) {
//         username = dasturchi.username1;
//         password = dasturchi.password1;
        
//         alert(`username1=${username}, password1=${password}`);
//     }
//      else {
//         if (dasturchi.username1 === username && dasturchi.password1 === password) {
//             // console.log("ikkisi ham teng");
//             alert("ikkisi ham teng");
//         } else if (dasturchi.username1 === username) {
//             // console.log("usernamelar teng");
//             alert("usernamelar teng");
//         } else if (dasturchi.password1 === password) {
//             // console.log("passwordlar teng");
//             alert("passwordlar teng");
//         } else {
//             // console.log("hech qaysi teng emas");
//             alert("hech qaysi teng emas");
//         }
//     }
// }

// function stringToBooleanTernary(str) {
//    return str.toLowerCase() === 'true' ? true : false;
// }
// let str = prompt("Mantiqiy qiymat kiriting (true/false):");
// let mantiqiy = stringToBooleanTernary(str);

// let username = prompt('Username kiriting:');
// let password = prompt('Password kiriting:');

// foydalanuvchi(mantiqiy, username, password);

// let x=document.getElementById("btn")


// // 1:
// x.addEventListener("mousedown",mouseEvent)
// x.addEventListener("mouseup",mouseEvent1)
// function mouseEvent(x){
//     document.getElementById("natija1").innerHTML+="mosedown<br>";
// }
// function mouseEvent1(x){
// document.getElementById("natija1").innerHTML+="mouseup<br>"
// }


// 2:
// x.addEventListener("mouseover",mouseEvent1)
// function mouseEvent(x){
//     document.getElementById("natija1").innerHTML+="moseover<br>";
// }

// 3:
// let x=document.getElementById("btn")
// x.addEventListener("click",()=>{
//     x.style.backgroundColor="yellow"
// })

// 4:
// let input1=document.getElementById("input1")

// input1.addEventListener("keydown",(event)=>{
//     console.log(event.key);
// })

// 5:

// let input1=document.getElementById("input1")

// input1.addEventListener("keypress",(event)=>{
//     console.log(event.key);
// })

// 6:

// let input1=document.getElementById("input1")

//  let press=0;
// x.addEventListener("click",()=>{
//     x.style.backgroundColor="yellow"
//     press++;
//     if(press%2==0){
//         x.style.backgroundColor="green" 
//     }
// })
  
// 7:

// document.getElementById("btn1").addEventListener("click",raqam)
// function raqam(){
//     document.getElementById("natija1").innerHTML = Math.random();
// }
// function removeHandler(){
//     document.getElementById("btn1").removeEventListener("click",raqam)
// }

// 8:

// const input = document.getElementById('input1');
//     const output = document.getElementById('natija1');
    
//     input.addEventListener('keyup', () => {
//         output.textContent = `${input.value}`;
//     });
// 9:
// const input = document.getElementById('input1');
// const message = document.getElementById('natija1');

// input.addEventListener('focus', () => {
//     message.textContent = "focus";
// });

// 10:
// const input = document.getElementById('input1');
// const message = document.getElementById('natija1');

// input.addEventListener('focus', () => {
//     message.textContent = "focus";
// });
// input.addEventListener('blur', () => {
//     message.textContent = "blur";
// });
// let a=2,b,c=7
// console.log(`a=${a} c=${c}`);
// b=a
// a=c
// c=b

// console.log(`a=${a} c=${c}`);


// let s=0
// for(let i=1;i<=100;i++){
//     s+=i
// }
// console.log(s);

// let a="hello", b
// b=a[a.length-1]




// let b
// function teskariTahlash(a){
    
//     b=a[a.length-1]
//     for(let i=a.length-2;i>=0;i--){
//         b+=a[i]
//        }
//        console.log(b);
// }
// teskariTahlash("36756756867")


// let a=[2,78,56,43,90,44]
// let max=a[0]
// for(let i=0;i<a.length;i++){
// if(max<a[i]){
//     max=a[i]
// }
// }
// console.log(max);



// let ismlar=[]
// let a=["Madina","Sevinch","Sorabek","Jonpo'lat","Mohina","Islom"]
// for(let i=0;i<a.length;i++){
//     b=a[i]
//         if(b.length>6){
//             ismlar.push(b)
//         }       
// }
// for(let j=0;j<ismlar.length;j++){
//     console.log(ismlar[j]);
// }

// let a = ['SaMalYot', 'UchDi'];
// for (let i = 0; i < a.length; i++) {
//     let b = a[i];
//     let yangi = '';
//     for (let j = 0; j < b.length; j++) {
//         if (b[j] >= 'A' && b[j] <= 'Z') {
//             yangi += b[j].toLowerCase(); 
//         } else {
//             yangi += b[j].toUpperCase();
//         }
//         a[i]=yangi
//     }
//    console.log(a[i]);
// }
// let a=7, c, d='Yulduz'
// console.log(d+c-a);


// const hello=(name,cb)=>{
//     const greetings="Hello,"+name+cb(greetings);
// };
// hello("Ayyubxon",(greet)=>{
//     alert(greet);
// });
function cbFunction(cb, qiymat1, qiymat2) {
    cb(qiymat1, qiymat2);
}
function asosiy(qiymat1, qiymat2) {
    console.log(`${qiymat1} ${qiymat2}`);
}
cbFunction(asosiy, "Hello", "World");

