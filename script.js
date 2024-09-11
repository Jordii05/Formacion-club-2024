
    function intercambiarImagenesYTexto(IdTitular, IdSuplente, IdTextoTitular, IdTextoSuplente) {
        const imagenTitular = document.getElementById(IdTitular);
        const imagenSuplente = document.getElementById(IdSuplente);
        const textoTitular = document.querySelector(`#${IdTextoTitular}`);
        const textoSuplente = document.querySelector(`#${IdTextoSuplente}`);

        // Intercambiar imágenes
        const tempSrc = imagenTitular.src;
        imagenTitular.src = imagenSuplente.src;
        imagenSuplente.src = tempSrc;

        // Intercambiar texto
        const tempTexto = textoTitular.innerHTML;
        textoTitular.innerHTML = textoSuplente.innerHTML;
        textoSuplente.innerHTML = tempTexto;
}

document.getElementById('cambiarArqueroTorne').addEventListener('click', function() {
    intercambiarImagenesYTexto('facu', 'torne', 'infoFacu', 'infoTorne');
});
document.getElementById('cambiarAlanTorne').addEventListener('click', function() {
    intercambiarImagenesYTexto('juani', 'torne', 'infoJuani', 'infoTorne');
});
document.getElementById('cambiarJuaniTorne').addEventListener('click', function() {
    intercambiarImagenesYTexto('santif', 'torne', 'infoSantif', 'infoTorne');
});
document.getElementById('cambiarValenTorne').addEventListener('click', function() {
    intercambiarImagenesYTexto('valen', 'torne', 'infoValen', 'infoTorne');
});


document.getElementById('cambiarArqueroDuglas').addEventListener('click', function() {
    intercambiarImagenesYTexto('facu', 'duglas', 'infoFacu', 'infoDuglas');
});
document.getElementById('cambiarJuaniDuglas').addEventListener('click', function() {
    intercambiarImagenesYTexto('santif', 'duglas', 'infoSantif', 'infoDuglas');
});
document.getElementById('cambiarValenDuglas').addEventListener('click', function() {
    intercambiarImagenesYTexto('valen', 'duglas', 'infoValen', 'infoDuglas');
});


document.getElementById('cambiarJuaniAlan').addEventListener('click', function() {
    intercambiarImagenesYTexto('juani', 'alan', 'infoJuani', 'infoAlan');
});
document.getElementById('cambiarMatiAlan').addEventListener('click', function() {
    intercambiarImagenesYTexto('mati', 'alan', 'infoMati', 'infoAlan');
});
document.getElementById('cambiarGerardAlan').addEventListener('click', function() {
    intercambiarImagenesYTexto('gerard', 'alan', 'infoGerard', 'infoAlan');
});


document.getElementById('cambiarJuveBauti').addEventListener('click', function() {
    intercambiarImagenesYTexto('juve', 'bauti', 'infoJuve', 'infoBauti');
});
document.getElementById('cambiarNicoBauti').addEventListener('click', function() {
    intercambiarImagenesYTexto('nico', 'bauti', 'infoNico', 'infoBauti');
});
document.getElementById('cambiarGerardBauti').addEventListener('click', function() {
    intercambiarImagenesYTexto('gerard', 'bauti', 'infoGerard', 'infoBauti');
});