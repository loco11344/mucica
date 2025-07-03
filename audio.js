// script.js
// Aquí puedes añadir cualquier funcionalidad JavaScript que necesites.
// Por ejemplo, podrías crear un reproductor de audio personalizado,
// hacer que las imágenes tengan un efecto al pasar el ratón, etc.

document.addEventListener('DOMContentLoaded', () => {
    console.log('La página ha cargado completamente.');

    // Ejemplo: Pausar todos los audios si se reproduce uno nuevo
    const audios = document.querySelectorAll('audio');

    audios.forEach(audioElement => {
        audioElement.addEventListener('play', () => {
            audios.forEach(otherAudio => {
                if (otherAudio !== audioElement && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
    });

    // Puedes añadir más interacciones aquí si lo deseas.
});