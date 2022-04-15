//Function for adding numbers
const addNumbers = (strNumbers) =>{
    var delimeterVar=';',numbers='';//Initialization of variables
    //Check for emprty string
    if(strNumbers == ""){
        return 0;
    }else{
        //Check for delimeters - string starting with '//'
        if(strNumbers.includes('//')){
            delimeterVar=strNumbers.charAt(2);//getting value of delimeter
            var strNumbersTemp=strNumbers.split('\n');
            strNumbers=strNumbersTemp[1];
         }
        // converting the string array to number array
        const num=strNumbers.replaceAll(';',',');
        numbers = num.replace(/(\r\n|\n|\r)/gm,',').split(',').map(n=>parseInt(n,10));
        
        //Check if the value is number or not
        if(numbers.some(n=>Number.isNaN(n))){
            throw new Error('Not a number');
        }
        //Will not allow negative numbers for adding
        if(numbers.some(n=>n<0)){
            throw new Error('Negatives not allowed');
        }
        return numbers.reduce((total,num)=>total+num,0);// returning the sum
        }
    
};
module.exports = addNumbers;