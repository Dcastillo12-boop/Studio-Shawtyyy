const pupumagenes = [
    "foootos/Slaider1.jpeg",
    "foootos/slaider2.jpeg",
    "foootos/slaider3.jpg"
];


let krikri = 0;


const Carruselon = document.getElementById('imgc1');

function nuevas_ideas() {

    krikri = (krikri + 1 ) % pupumagenes.length;
    Carruselon.src = pupumagenes[krikri];
}

setInterval(nuevas_ideas, 2000);



