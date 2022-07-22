// task 1
let a;//100;//100 manat   100
let b;//20//30 manat
let c; //1//2 manat        2
function sum(count){
   let  price ;
   if(count<1000||count>=100){
   c=count%10+((parseInt(count/10)%10)%2)*10;// teklik
   b=parseInt((parseInt(count/10)%10)/2)// onluq
   a=parseInt(count/100)// yuzluk
}
   if(count<100){
   c=count%10+((parseInt(count/10)%10)%2)*10;
   b=parseInt((parseInt(count/10)%10)/2)
   a=0
}
if(count<10){
      a=0;
      b=0;
      c=count; }
   price=a*100+b*30+c*2
 console.log(price)}
   sum(33);



