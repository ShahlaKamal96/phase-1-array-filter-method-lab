// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


function findMatching(array, string){
const result= array.filter((element)=>element.toLowerCase()===string.toLowerCase());
return result;
}


function fuzzyMatch(array,string){
    const result=array.filter(function(element){
        return (element.slice(0,1)===string.slice(0,1));
        
    });
    return result;
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function matchName(array,string){
   const result=array.filter((element) => element.name === string);
   return result;
  }
