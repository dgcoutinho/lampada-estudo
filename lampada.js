// Selecionando os elementos corretamente
const turnOnOff = document.getElementById('turnOnOff'); // Corrigido: getElementByID -> getElementById
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

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar'
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}





// Adicionando os eventos aos botões
turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);

