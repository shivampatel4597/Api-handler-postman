console.log("this is index.js file")
let parameterNumber = 0;
function stringToElementConversion(string) {
    let newParam = document.createElement('div')
    newParam.innerHTML = string
    console.log(newParam)
    return newParam.firstElementChild;

}
let parametersBox = document.getElementById("parametersBox")
let jsonRadio = document.getElementById("jsonRadio")
let paramsRadio = document.getElementById("paramsRadio")
let jsonRequestBox = document.getElementById("jsonRequestBox")
let addParams = document.getElementById("addParams")

// utility function to convert string to element

parametersBox.style.display = 'none'

jsonRadio.addEventListener('click', () => {
    parametersBox.style.display = 'none'
    jsonRequestBox.style.display = "block"
})

paramsRadio.addEventListener('click', () => {
    jsonRequestBox.style.display = "none"
    parametersBox.style.display = 'block'
})

// adding new parameters field
addParams.addEventListener("click", () => {
    let params = document.getElementById("params");
    let string = `<div class="parametersbox mt-4 d-flex justify-content-start align-items-center gap-3">
                <label>Parameter ${parameterNumber + 2}</label>
                 <input type="text" class="form-control mb-2" id="parameterKey1" placeholder="Enter parameter ${parameterNumber + 2} key">
                    <input type="text" class="form-control mb-2" id="parameterValue1" placeholder="Enter parameter ${parameterNumber + 2} value">
                    <button  class="deleteParam bg-danger rounded text-white fs-6">-</button>
               
            </div>`

    let paramElment = stringToElementConversion(string)
    params.appendChild(paramElment)



    // delete params
    let deleteParam = document.getElementsByClassName("deleteParam")

    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove()

        })

    }
    parameterNumber++;
})






//  