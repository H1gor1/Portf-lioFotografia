/*
    Basicamente o script é para controle das fotos do carrosel de fotos da página inicial, ele muda a imagem sozinho de 6 em 6 segundos e tem botões para que o usuário possa mudar
*/

var nmrImg = 0; //Variável que controla a imagem atual.
var img = []; //Vetor que guarda as imagens
var imgBlur = []; //Vetor que guarda as imagens com blur
var tempo = 6; //Variável que define os segundos que cada imagem irá mudar
var contador = 1; //Variável contador que é usada nas funções que mudam a imagem com o click do usuário

img[0] = "./images/img1.jpg";
img[1] = "./images/img2.jpg";
img[2] = "./images/img3.jpg";

imgBlur[0] = "./images/img1Blur.png";
imgBlur[1] = "./images/img2Blur.png";
imgBlur[2] = "./images/img3Blur.png";

function imagesInterval(){ //Esta função é a que muda as imagens a cada 6 segundos sem a interação do usuário
    var contentBackground = document.getElementById("content"); //A variável contentBackground armazena o elemento content.
    document.getElementById("image").src = img[nmrImg]; //Troco a src do elemento img que está dentro do content
    contentBackground.style.backgroundImage = "url(" + imgBlur[nmrImg] + ")"; //Mudo o background do elemento content atráves do css.

    nmrImg = (nmrImg + 1) % img.length; //Aumento a variável que controla a imagem atual e faço resto da divisão pelo tamanho do vetor que armazena as imagens, fazendo que o valor não extrapole o tamanho do vetor.
}
setInterval(imagesInterval, tempo*1000); //Seto um intervalo de tempo para que a função seja executada, nesse caso 6 segundos.


//Esta função e a próxima são quase iguais, elas basicamente ao usuário clicar no botão passa para a próxima ou para a imagem anterior, faço o controle através de ifs e verifico a variável contador.
function mudarImg(){
    var contentBackground = document.getElementById("content");

    if (contador == 1){
        contentBackground.style.cssText = 
        "background-image: url(./images/img2Blur.png);"
        document.getElementById("image").src = "./images/img2.jpg";

        return contador = contador + 1;
    } else if (contador == 2){
        contentBackground.style.cssText = 
        "background-image: url(./images/img3Blur.png);"
        document.getElementById("image").src = "./images/img3.jpg";

        return contador = contador + 1;
    } else if (contador == 3){
        contentBackground.style.cssText = 
        "background-image: url(./images/img1Blur.png);"
        document.getElementById("image").src = "./images/img1.jpg";
        
        return contador = contador - 2;
    }

}

function voltarImg(){
    var contentBackground = document.getElementById("content");

    if (contador == 3){
        contentBackground.style.cssText = 
        "background-image: url(./images/img1Blur.png);"
        document.getElementById("image").src = "./images/img1.jpg";

        return contador = contador - 2;
    } else if (contador == 2){
        contentBackground.style.cssText = 
        "background-image: url(./images/img2Blur.png);"
        document.getElementById("image").src = "./images/img2.jpg";

        return contador = contador + 1;
    } else if (contador == 1){
        contentBackground.style.cssText = 
        "background-image: url(./images/img3Blur.png);"
        document.getElementById("image").src = "./images/img3.jpg";
        
        return contador = contador + 1;
    }
}
