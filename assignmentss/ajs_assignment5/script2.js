// let btn = document.getElementsByTagName('button');


// // adding input values in the input box

// for(let i = 0 ; i < btn.length ;i++){
//     Object.values(btn)[i].addEventListener("click",(event)=>{
//         // console.log(event)
//         let inputBox = document.getElementById("input-values");
//         let inputContent = inputBox.value;
//         inputContent += event.target.innerHTML;
//         inputBox.value = inputContent;
//     })
// }

const eq = '123+67-18+-*2';
for (let i = 0 ; i < eq.length ;i++){
    if (eq[i]== "+"){eq[i]= "+" }
    if (eq[i]== "-"){eq[i]= "-" }
}

// const obj = {
//     name: 'kunal',
//     address: {
//         street: '15c',
//         landmark: 'Ajay mendical hall'
//     }
// }

// console.log(obj['name'])