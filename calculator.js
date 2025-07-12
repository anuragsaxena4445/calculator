

// // let a=12;

// let string= " ";
// let button= document.querySelectorAll('.button');
// Array.from(button).forEach((button)=>{ 
//     button.addEventListener('click', (e)=>{
//    console.log(e.target.innerHTML=='=');{
//     string=eval(string);
//     document/querySelector('input').value==string;
//    }
//    else{
//     console.log(e.target)
//     string= string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//    }
//    } 
//     }) 

// console.log("rfrfrf"); 

// // let string = "";
// // let buttons = document.querySelectorAll('.button');
// // Array.from(buttons).forEach((button)=>{
// //   button.addEventListener('click', (e)=>{
// //     if(e.target.innerHTML == '=') }
// //   )}   
// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
