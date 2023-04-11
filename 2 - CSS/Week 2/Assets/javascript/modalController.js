const modal = document.getElementById("popUp");
const openModalBtn = document.getElementById("modalTrigger");
const closeBtn = document.getElementById("closeBtn");

//event listeners
openModalBtn.addEventListener('click', () =>{
    //  console.log('button clicked');
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
  
   modal.style.display = 'none';
})