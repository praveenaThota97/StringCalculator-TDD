const addNumbers = (...nums) => {
  
    return nums.reduce((total,num)=>total+num,0);
}; 

module.exports = addNumbers;