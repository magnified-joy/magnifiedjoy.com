$(function() {

// create a map in the "map" div, set the view to a given place and zoom
/*var map = L.map('map-2d',{ zoomControl:false }).setView([43.0830517,-89.4064204], 12);

var Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16
}).addTo(map);*/

$('#carousel').carouFredSel({
        items: 3,
        width: "102%",
        responsive: true,
        prev: {
            button: '.carousel-container .prev'
        },
        next: {
            button: '.carousel-container .next'
        }
    });
  
$('#thumbnails').carouFredSel({
        items: 5,
        width: "102%",
        responsive: true,
        prev: {
            button: '.carousel-container .prev'
        },
        next: {
            button: '.carousel-container .next'
        }
    });

});