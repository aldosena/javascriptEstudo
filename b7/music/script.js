document.body.addEventListener('keyup',(event)=>{
    console.log('TECLA: ', event.code);
    console.log('tecla:', event.code.toLowerCase());
    playSound(event.code.toLowerCase());
}); 

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector(`#input`).value; // ler o texto digitado
    console.log('Musica', song);
    if (song !== ''){
        let songArray = song.split('');
        console.log('asong:', songArray);
        playComposition(songArray);
    };
});

function playSound(sound){
    // usa templatestring para juntar a string
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement){ // se o objeto for encontrado 
        console.log('Objeto encontrado');
        audioElement.currentTime = 0; // coloca no começo do audio
        audioElement.play(); // tocar
    };
    if (keyElement){
        keyElement.classList.add('active');

        // atençao com o tempo e o fechamento das chaves
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    };
}

function playComposition(songArray){
    let espere = 0;
    for (let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, espere);
        espere += 250;
    };// for
} // comp