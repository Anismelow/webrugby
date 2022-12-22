var i =0;
var imagenes=[];
var tiempo=900;


imagenes[0]="../asset/img/portadaLuca1.jpg";
imagenes[1]="../asset/img/portadaLcas.avif";
// imagenes[2]="https://sdamorebieta.eus/wp-content/uploads/2022/12/81909584-BA16-4FE0-A88E-7EBB8729066E-1200x850.jpeg";

function imagenesSlaider(){
    var slaider= document.getElementById("slaider");

    if(i<imagenes.length){
        slaider.style.backgroundImage= `url(${imagenes[i]})`;
        i++;
    }
    else{
        i=0;
    }

    setTimeout("imagenesSlaider()", tiempo);
}

window.onload="imagenesSlaider";
