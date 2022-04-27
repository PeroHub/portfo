// Program to print first name and last name

let fullName = document.getElementById("name")


const logout = (value1, value2) => {
    fullName.classList.add("type")
    return fullName.textContent = `${value1}  ${value2}`
}


// Object of first and last name
const nameObject =  {
    fName: "I Am Peter",
    lname: "Ime."
}

const final = logout(nameObject.fName, nameObject.lname)




// console.log(final)


// Popup message

let viewPop = document.querySelector(".menu")
let mainCon = document.querySelector(".viewpro")
let pop = document.createElement("p");

viewPop.addEventListener('click', (e) => {
    
    pop.textContent = "Toogle is coming shortly, stay put for now......";
    pop.classList.add("Animapop")
    mainCon.append(pop)

    setTimeout(() => {
        pop.textContent = ""
    },4000)
    
    
})

