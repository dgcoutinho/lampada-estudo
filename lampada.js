// Selecionando os elementos corretamente
const turnOn = document.getElementById('turnOn'); // Corrigido: getElementByID -> getElementById
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

//Função para verificar se está quebrada
function isLampBroken(){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}



// Função para ligar a lâmpada
function lampOn() {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg'; // Caminho para a imagem da lâmpada ligada
        }
    }

// Função para desligar a lâmpada
function lampOff() {
    if ( !isLampBroken () ) {
      lamp.src = './img/desligada.jpg'; // Caminho para a imagem da lâmpada desligada
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'; 

}

// Adicionando os eventos aos botões
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);

