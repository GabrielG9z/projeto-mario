const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

    mario.classList.add('jump');    

    // setTimeout Recebe uma função, e um tempo de execução
    setTimeout(() =>{

        mario.classList.remove('jump');

    }, 500);
   
}

//  setInterval espera receber uma função e um intervalo de tempo pra executá-la
const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    // O + transforma uma string em número ao menos nessa função
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',"");

    
    

    console.log(marioPosition);

     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {

        // Aqui definimos a animação do tubo e as condições para que o jogo continue ou pare
         pipe.style.animation = 'none';
         pipe.style.left = `${pipePosition}px`;

         /* let audio = document.querySelector('audio');
         audio.innerHTML = "sons/game-over.mp3"; */
        

        //  Aqui definimos as propriedades do Mario, modelando a imagem e definindo as condições para realizar as determinadas ações, como (marioPosition) para definir onde a imagem irá parar quando a condição acima não for verdadeira, (mario.src) para mudar a imagem exibida quando o Mario bate no pipe, (mario.style) para modelarmos o tamanho da imagem e como ela será exibida na tela.
         mario.style.animation = 'none';
         mario.style.bottom = `${marioPosition}px`;
         mario.src = './imagens/game-over.png';
         mario.style.width = '75px';
         mario.style.marginLeft = "50px"

        //  clearInterval(variável) faz com que depois de validarmos as condições acima, caso sejam falsas pare o loop.
         clearInterval(loop);
     }
}, 10)

document.addEventListener('keydown', jump);
