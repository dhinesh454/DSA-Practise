function Choclatemindistribution(arr,m)
{

 arr.sort((a,b)=>{
    return a-b;
  });


let Min=arr[arr.length-1];///carefull while apply min 
for(i=0;i+m-1<arr.length;i++)

{
   let diff=arr[i+m-1]-arr[i]
   
   if(diff<Min) Min=diff;
}

console.log(Min)
}



let arr = [ 12, 4, 7, 9, 2, 23, 25,
            41, 30, 40, 28, 42, 30,
            44, 48, 43, 50 ];
let m=7;
Choclatemindistribution(arr,m);