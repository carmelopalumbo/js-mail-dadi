// js

const mailList = ['ciao@gmail.com', 'buonasera@gmail.com', 'arrivederci@outlook.it', 'boolean@hotmail.it', 'classe75@gmail.com', 'zoomclasse75@live.it'];
const inputBtn = document.getElementById('verifica');
let isIntolist = false;
let inputMail = document.getElementById('mymail').value;
let mailOutput = document.getElementById('accesso');

inputBtn.addEventListener('click', function(){
    for( let i = 0; i < mailList.length; i++){
        if(inputMail.toLowerCase() === mailList[i]){
            isIntolist = true;
        }
    }
    if(isIntolist){
        mailOutput.innerHTML = 'Hai accesso a questa lista mail.';
    }else{
        mailOutput.innerHTML = 'NON hai accesso a questa lista. Inserisci una mail valida.';
    }
})