const innerContent = document.querySelector(".innerContent")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const changeBy = document.querySelector(".changeBy")
const reset = document.querySelector(".reset")

increment.addEventListener('click',()=>{
    const countValue = parseInt(innerContent.innerText)
    const changeByValue = parseInt(changeBy.value)
    innerContent.innerText = countValue+ changeByValue;
    
})
decrement.addEventListener('click',()=>{
    const countValue = parseInt(innerContent.innerText)
    const changeByValue = parseInt(changeBy.value)
    innerContent.innerText = countValue-changeByValue;
})
reset.addEventListener('click',()=>{
    innerContent.innerText = 0
})