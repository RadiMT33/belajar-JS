const text = document.querySelector('#dd')
const test = document.querySelector('#Dropdown')
text.addEventListener("click",function(){
    test.classList.toggle('none')
})

const a = document.querySelector('#aa')
const b = document.querySelector('#bb')
a.addEventListener("click",function(){
    b.classList.toggle('none')
})