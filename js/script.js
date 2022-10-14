// js

const mailList = ['ciao@gmail.com', 'buonasera@gmail.com', 'arrivederci@outlook.it', 'boolean@hotmail.it', 'classe75@gmail.com', 'zoomclasse75@live.it'];
const inputBtn = document.getElementById('verifica');
const resetBtn = document.getElementById('annulla');
let isIntolist = false;
let inputMail = document.getElementById('mymail').value;
let mailOutput = document.getElementById('accesso');

console.log(isIntolist);
inputBtn.addEventListener('click', function(){
    for(let i = 0; i < mailList.length; i++){
        if(inputMail.toLowerCase() === mailList[i]){
            isIntolist = true;
        }
    }
    console.log(isIntolist);
    if(isIntolist){
        mailOutput.innerHTML = 'Hai accesso a questa lista mail.';
    }else{
        mailOutput.innerHTML = 'NON hai accesso a questa lista. Inserisci una mail valida.';
    }
    console.log(isIntolist);
})

resetBtn.addEventListener('click', function(){
   document.getElementById('mymail').value = '';
   mailOutput.innerHTML = ' ';
})