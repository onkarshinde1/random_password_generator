const upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet ="abcdefghijklmnopqrstuvwxyz"
const numberSet ="1234567890"
const symbolSet ="!@£$%^&*()_+"

// selectors
const passBox = document.getElementsByTagName("pass-box")
const totalChar =document.getElementById("upper-case")
const upperInput =document.getElementById("upper-case")
const lowerInput =document.getElementById("upper-case")
const numberInput =document.getElementById("upper-case")
const symbolInput =document.getElementById("upper-case")



const getRandomData =(dataset) =>{
    return dataSet[Math.floor(Math.random() * dataset.length)]
}

const generatePassword =(pasword = "") =>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }

}