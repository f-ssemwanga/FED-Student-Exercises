

//odds or evens checker - Week 2 - Task 1
const oddEvens = () =>{
    let num = parseInt(prompt("Please enter a number: "))
    if (isNaN(num)){
        alert("Invalid input detected! Enter a number")
        oddEvens()
    }else if (num%2==0){
        alert(`${num} is even`)
    }else{
        alert(`${num} is odd`)
    }
}
 oddEvens()
//random generator - Week 2 Task 2

const highLowGame = () =>{
    const compGuess = Math.floor(Math.random()*10)
    // console.log(compGuess)
   while (true){
        let userGuess = parseInt(prompt("Guess my number by entering a value between 1 and 10: "))
        if (userGuess>compGuess){
            alert("Too High")
        } else if(userGuess<compGuess){
            alert("Too Low")

        }else{
           alert('Correct! You Guessed it!')
           break
        }

   }
    
}
highLowGame()

//FizzBuzz - Week 2 - Task 3
const fizzBuzz = () =>{
    let userNum = parseInt(prompt("Enter a number: "))
    if (isNaN(userNum)){
        alert ('Make sure you have entered a number!')
        fizzBuzz()
    }else if(userNum%3 ==0){
        alert("Fizz")
    }else if(userNum%5 ==0){
        alert("Buzz")
    }else if (userNum%3 == 0 && userNum%5 ==0){
        alert("FizzBuzz")
    }else{
        alert (userNum)
    }
}
fizzBuzz()