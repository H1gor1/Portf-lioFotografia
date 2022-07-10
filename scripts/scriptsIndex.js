var nmrImg = 0;
var img = [];
var imgBlur = [];
var tempo = 6;
var contador = 1;

img[0] = "./images/img1.jpg";
img[1] = "./images/img2.jpg";
img[2] = "./images/img3.jpg";

imgBlur[0] = "./images/img1Blur.png";
imgBlur[1] = "./images/img2Blur.png";
imgBlur[2] = "./images/img3Blur.png";

function imagesInterval(){
    var contentBackground = document.getElementById("content");
    document.getElementById("image").src = img[nmrImg];
    contentBackground.style.backgroundImage = "url(" + imgBlur[nmrImg] + ")";

    nmrImg = (nmrImg + 1) % img.length;
}
setInterval(imagesInterval, tempo*1000);

function mudarImg(){
    console.log(contador);
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
