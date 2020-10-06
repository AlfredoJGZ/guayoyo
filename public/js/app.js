document.addEventListener("DOMContentLoaded", function(){
    var map = L.map('map').setView([10.270077, -67.588663], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([10.270077, -67.588663]).addTo(map)
        .bindPopup('Guayoyo Café - Pub & Lounge')
        .openPopup(); 

    
    $(".page-link").on("click",()=>{
        $(".pagination").parent("nav").addClass("d-none");
    });
        
    
});






