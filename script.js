const input=document.querySelector('.input');
const output=document.querySelector('.output');
const buttons=document.querySelectorAll('.btn');
buttons.forEach(button =>{
    if(button.innerText!=='AC' && button.innerText!=='DEL' && button.innerText!=='=' )
    button.addEventListener('click',distoinput);
     else if( button.innerText=='AC')
     button.addEventListener('click', ()=>{
      input.innerText='0';
      output.innerText=null;
    });else if(button.innerText=='=')
    button.addEventListener('click', ()=>{
        output.innerText=eval(input.innerText);
    })
})
function distoinput(e){
     let btn=e.target;
     if(input.innerText=='0')input.innerText=null;
    input.innerText= input.innerText+ btn.innerText ;
}

