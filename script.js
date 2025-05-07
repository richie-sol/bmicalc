

const jsConfetti = new JSConfetti()



const weightEl = document.getElementById("weight")
const heightEl = document.getElementById("height")
const resultEl = document.getElementById("result")
const buttonEl = document.getElementById("calculate")
const messageEl = document.getElementById("message")

const resetEl = document.getElementById("reset")

function displayMessage(message){
    return resultEl.innerHTML = message
}

buttonEl.addEventListener("click", function(){
        let weight = weightEl.value
        let height = heightEl.value
        

        if(weight <= 0 || height <= 0 || weight === "" || height === ""){
            resultEl.innerHTML = `<p>Enter a valid number</p>`
        }
        else{
            height = Number(height) / 100
            const bmi = Number(weight) / (Number(height) * Number(height))
            
            if(bmi < 18.5){
                displayMessage(`<p>Your BMI is: <b style="color:#12A0DC">${bmi.toFixed(1)}</b></p>`)
                messageEl.innerHTML = `<p>You are <b style="color:#12A0DC">underweight</b>😢</p>`
            }else if(bmi >= 18.5 && bmi < 25){
                
                displayMessage(`<p>Your BMI is: <b style="color:#11BD1F">${bmi.toFixed(1)}</b></p>`)
                messageEl.innerHTML = `<p>You have a <b style="color:#11BD1F">healthy weight</b>, that's great 🙌🏽</p>`
                jsConfetti.addConfetti()
            }else if(bmi >= 25 && bmi < 30){
                displayMessage(`<p>Your BMI is: <b style="color:#901E1E">${bmi.toFixed(1)}</b></p>`)
                messageEl.innerHTML = `<p>You are <b style="color:#901E1E">overweight</b>😢</p>`
            }else if(bmi >= 30){
                displayMessage(`<p>Your BMI is: <b style="color:#BD2626">${bmi.toFixed(1)}</b></p>`)
                messageEl.innerHTML = `<p>You are <b style="color:#BD2626">obese</b>, you need to hit the gym🏋🏽‍♂️ 😔</p>`
                
            }
            
        }  
})

resetEl.addEventListener("click", function(){
    weightEl.value = ""
    heightEl.value = ""
    resultEl.innerHTML = ""
    messageEl.innerHTML = ""
})