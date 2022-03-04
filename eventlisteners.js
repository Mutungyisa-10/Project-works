const changetext = ()=>{
    let p = document.querySelector('p')
    p.textContent = 'i changed because of the event listener'
    p.style.border = '3px dotted red'
}
//listen for the click event
let button = document.querySelector('button')
button.addEventListener('click',changetext)
const changeText2 =()=>{
let button = document.getElementById('Rodney')
button.style.border = '3px solid orange'

}