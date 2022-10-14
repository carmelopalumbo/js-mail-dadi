// js


// es1
const mailList = ['ciao@gmail.com', 'buonasera@gmail.com', 'arrivederci@outlook.it', 'boolean@hotmail.it', 'classe75@gmail.com', 'zoomclasse75@live.it'];
const inputBtn = document.getElementById('verifica');
let isIntolist = false;
let inputMail = document.getElementById('mymail').value;
let mailOutput = document.getElementById('accesso');

inputBtn.addEventListener('click', function(){
    for( let i = 0; i < mailList.length; i++){
        if(inputMail.toLowerCase() === mailList[i]){
            isIntolist = true;
            break;
        }
    }
    console.log(isIntolist);
    if(isIntolist){
        mailOutput.innerHTML = 'Hai accesso a questa lista mail.';
    }else{
        mailOutput.innerHTML = 'NON hai accesso a questa lista. Inserisci una mail valida.';
    }
})




// es2
const minDado = 1;
const maxDado = 6
const numBtn = document.getElementById('actiondadi');
const container = document.querySelector('.results');
let outputUser;
let outputCpu;
let outputResult;
let numUser = 0;
let numCpu = 0;

numBtn.addEventListener('click', function(){
    container.innerHTML = '';
    numUser = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
    numCpu = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
    console.log(numUser);
    console.log(numCpu);
    outputUser = document.createElement('div');
    outputCpu = document.createElement('div');
    outputUser.innerHTML = `Il tuo numero é ${numUser}`;
    outputCpu.innerHTML = `Il numero della cpu é ${numCpu}`;
    container.append(outputUser);
    container.append(outputCpu);

    outputResult = document.createElement('div');
    if(numUser > numCpu){
        outputResult = 'HAI VINTO!';
    }else if(numCpu > numUser ){
        outputResult = 'Hai perso :( riprova!';
    }else{
        outputResult = 'PAREGGIO!';
    }

    container.append(outputResult);
})