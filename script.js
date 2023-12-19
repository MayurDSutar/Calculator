const input=document.querySelector('.input');
const output=document.querySelector('.output');
const buttons=document.querySelectorAll('.btn');
buttons.forEach(button =>{
    if(button.innerText!=='AC' && button.innerText!=='DEL' && button.innerText!=='=' )
    button.addEventListener('click',distoinput);
     else if( button.innerText=='AC')
     button.addEventListener('click', ()=>{
      input.innerText='0';
      output.innerText='';
    }); else if(button.innerText=='=')
    button.addEventListener('click', ()=>{
        output.innerText=eval(input.innerText);
    });else if(button.innerText==='DEL')
    button.addEventListener('click',()=>{
        input.innerText=input.innerText.substring(0,(input.innerText.length)-1);
    })

})
function distoinput(e){
     let btn=e.target;
     if(input.innerText=='0')input.innerText='';
    input.innerText= input.innerText+ btn.innerText ;
}
document.addEventListener('keydown',(e)=>{
    if(!isNaN(e.key) || ['+','-','/','*','%'].includes(e.key)){
        output.innerText='';
        if(input.innerText=='0')input.innerText='';
        input.innerText+=e.key;
    }else if(e.key==='Enter'|| e.key==='='){
        output.innerText=eval(input.innerText);
        input.innerText=output.innerText;
    }
})