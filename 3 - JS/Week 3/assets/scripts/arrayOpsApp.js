// Get elements
const spinner =document.querySelector('#spinner')
const appendBtn = document.querySelector('#appendBtn')
const popBtn = document.querySelector('#popBtn')
const addBtn = document.querySelector('#addBtn')
const multiBtn = document.querySelector('#multiBtn')
const sortBtn = document.querySelector('#sortBtn')
const arrayItems = document.querySelector('#arrVar')
const opResult = document.querySelector('#outputResult')
let arrVars = []
let sortedArray =[]
//append button functionality
const addToArray = appendBtn.addEventListener('click', ()=>{
    // console.log('append button clicked')
    //get value from spinner and add it to the array
    if (arrVars.length <13){
        arrVars.push(spinner.value)
        updateArrayDisplay(arrayItems,arrVars)
        // console.log(arrVars)
        updateSizeDisplay()
    }else{
        alert("Array has a max of 12 values! Array is currently full")
    }
})

//pop buttom functionality
const popItem = popBtn.addEventListener('click', ()=>{
    console.log('pop button clicked')
    //get value from spinner and add it to the array
    if (arrVars.length >0){
        arrVars.pop()
        updateArrayDisplay(arrayItems,arrVars)
        // console.log(arrVars)
        updateSizeDisplay()
    }else{ alert('Array empty! Nothing to remove.') }
})
const updateArrayDisplay = (element,value) =>{
    if(arrVars.length !==0){
           element.textContent = value

    }else{arrayItems.textContent=""}
}


const addArray = addBtn.addEventListener('click', ()=>{
    //map converts values in array into  numbers
    //reduce function adds each value to the total starting from 0
    //toadd is current value in the array
  const addEm = arrVars.map(Number).reduce((total, toAdd) => total+toAdd, 0);
  updateArrayDisplay(opResult,addEm)

})
const multplyEm = multiBtn.addEventListener('click', ()=>{
    //map converts values in array into  numbers
    //reduce function multiples each value with product starting with 1 as product
    //multiplier is current value in the array
  const timesEm = arrVars.map(Number).reduce((product, multiplier) => product*multiplier, 1);
  updateArrayDisplay(opResult,timesEm)

})
const updateSizeDisplay = () =>{
    if (arrVars.length ==1){
        const outString = `There is ${arrVars.length} element in the array`
        updateArrayDisplay(opResult,outString)
    }else if(arrVars.length >1){
        const outString = `There are ${arrVars.length} elements in the array`
        updateArrayDisplay(opResult,outString)
    }else{
    
        updateArrayDisplay(opResult, "Array is currently Empty")
    }
}

const arraySize = sortBtn.addEventListener('click', ()=>{
    if(arrVars.length ==0){
        arrayItems.textContent ="Nothing to sort! Array is Empty!!" 
    }else{
        //splice array to create a copy
        //use a subtract comparison to compare elements then sort
        
        sortedArray = arrVars.splice().sort((a,b) =>a-b)
        console.log(sortedArray)
    updateArrayDisplay(arrayItems,sortedArray)

    }
    
})