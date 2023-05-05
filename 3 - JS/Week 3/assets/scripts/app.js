//get elements
const originalWord = document.querySelector("#originalWord")
const submitBtn = document.querySelector(".submitBtn")
const outputMessage = document.querySelector("#outputMessage")

//Exercise1 Algorithm
submitBtn.addEventListener('click', (event) =>{
event.preventDefault();    
console.log('Button was clicked')
//convert original word into an array of characters
const splitOriginalWord = originalWord.value.split('').map( (letter) => {return letter});
console.log(splitOriginalWord) //check if above worked
//put the character in reverse to form a reversed word
const reversedSplit = splitOriginalWord.slice().reverse() //creates new reversed array without modifying original
console.log(reversedSplit)
//compare the two strings i.e. original and reversed - if similar return a respose
if (originalWord.value ===""){
    outputMessage.textContent = `Enter a word to be checked`
}else if (splitOriginalWord.join('') === reversedSplit.join('')){
    outputMessage.textContent = `${originalWord.value} is a palindrome`;
}else{
    outputMessage.textContent = `${originalWord.value} is not a palindrome`
}
})