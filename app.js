const addNumbers = (...nums) => {
//   for(var i=0;i<nums.length;i++){
//       console.log(nums[i]);
//       if(nums[i]<0){
//           console.log("Negative are not allowed");
//       }
//   }
var numberArray=[];
var strArray= Array.from(nums[0]);
 //console.log(strArray);
 for(var i=0;i<strArray.length;i++){
     try{
        if(!isNaN(parseInt(strArray[i])) && parseInt(strArray[i])<0){
            throw new Error ("Negatives not allowed"+strArray[i]);
            break;
         }
         if(!isNaN(parseInt(strArray[i])) && parseInt(strArray[i])>0){
            numberArray.push(parseInt(strArray[i]));
            
         }
     }finally{

     }
     
    
 }
 console.log(numberArray+"numberArray");
    return numberArray.reduce((total,num)=>total+num,0);
    
    
}; 

module.exports = addNumbers;