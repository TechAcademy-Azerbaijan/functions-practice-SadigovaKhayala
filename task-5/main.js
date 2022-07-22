
//task5
function arrs (...arr){
let temp=0;
for(i=0;i<arr.length;i++){
   if(arr[i]>temp){
      temp=arr[i]
   }
}
console.log(temp)}
arrs(1,2,3,4)
