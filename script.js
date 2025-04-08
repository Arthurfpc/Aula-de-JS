function mostrarCuriosidades(){
    const curiosidades = document.getElementById('curiosidades');

    if (curiosidades.classList.contains('hidden')) {
        curiosidades.classList.remove('hidden')
    } else {
        curiosidades.classList.add('hidden')
    }

}