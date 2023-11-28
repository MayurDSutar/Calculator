const input=document.querySelector('.input');
const output=document.querySelector('.output');
const buttons=document.querySelectorAll('.btn');
buttons.forEach(button =>{
    if(button.innerText!=='AC' && button.innerText!=='DEL' && button.innerText!=='=' )
    button.addEventListener('click',distoinput);
     else if( button.innerText=='AC')
     button.addEventListener('click', ()=>{
      input.innerText=null;
    })
})
function distoinput(e){
     let btn=e.target;
    input.innerText= input.innerText+ btn.innerText ;
}

