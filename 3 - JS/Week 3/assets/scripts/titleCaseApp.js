const bookTitle = document.querySelector('.inputValue')
const convertedText = document.querySelector('#bookOutput')
const convertBtn = document.querySelector('#convertBtn')


convertBtn.addEventListener('click', () =>{
    console.log('Button was clicked') //check that the button works
    const lowerCaseVersion = bookTitle.value.toLowerCase();
    const titleCase = lowerCaseVersion.charAt(0).toUpperCase() +lowerCaseVersion.slice(1)

    convertedText.textContent =titleCase
} );