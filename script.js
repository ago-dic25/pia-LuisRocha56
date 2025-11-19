let map;
let marker;

window.addEventListener('scroll', function() {
    const navLinks = document.querySelector('.nav-links');

    if (window.scrollY > 50) {
        navLinks.classList.add('scrolled');
    } else {
        navLinks.classList.remove('scrolled');
    }
});

function descargar(ruta) {
    const link = document.createElement("a");
    link.href = ruta;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 25.6866, lng: -100.3161 }, // centro inicial
        zoom: 12
    });

    marker = new google.maps.Marker({
        position: { lat: 25.6866, lng: -100.3161 },
        map: map
    });
}

function irAlMapa(lat, lng) {
    const posicion = { lat: lat, lng: lng };

    map.panTo(posicion);
    map.setZoom(15);

    marker.setPosition(posicion);

    // opcional: scroll automático hacia el mapa
    document.getElementById("mapa").scrollIntoView({
        behavior: 'smooth'
    });
}

