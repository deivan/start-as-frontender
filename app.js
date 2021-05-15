// const DNIPRO = new google.maps.LatLng(48.44919859, 35.0255331);
let map;

function initMap() {
    let marker, infoWindow, poly, polyLine, polygone;

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.44919859, lng: 35.0255331 },
      zoom: 11,
      // mapTypeId: "satellite",
      // disableDefaultUI: true,
    //   mapTypeControl: true,
    //     mapTypeControlOptions: {
    //     style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    //     position: google.maps.ControlPosition.TOP_CENTER,
    //     },
    //     zoomControl: true,
    //     zoomControlOptions: {
    //     position: google.maps.ControlPosition.LEFT_CENTER,
    //     },
    });
    // map.addListener('click', e => {
    //     console.log(e, e.latLng.lat(), e.latLng.lng())
    //     //map.panTo({ lat: e.latLng.lat(), lng: e.latLng.lng()});
    // });

    // marker = new google.maps.Marker({
    //     position: { lat: 48.44919859, lng: 35.0255331 },// could be LatLng object
    //     map,
    //     title: "Hello World!",
    //     //icon: 'https://lh3.googleusercontent.com/ogw/ADGmqu_YpRPJFPqeacmDdkdv8EWgBIo71GkpBcNmWkKAsKI=s32-c-mo'
    //     //animation: google.maps.Animation.DROP,
    // });
    // marker.addListener('click', e => {
    //     //map.setCenter(marker.getPosition());
    //     //infoWindow.open(map, marker);
    // });

    // infoWindow = new google.maps.InfoWindow({
    //     content: `<h1>Title</h1><p>Any HTML content could be here</p>`,
    // });

    // poly = [
    //     { lat: 48.465879721, lng: 34.7272866025 },
    //     { lat: 48.556856294, lng: 34.8447029844 },
    //     { lat: 48.474984729, lng: 35.2148049131 },
    //     { lat: 48.364248201, lng: 35.0651161924 },
    // ];
    // polyLine = new google.maps.Polyline({
    //     path: poly,
    //     geodesic: true,
    //     strokeColor: "#FF4400",
    //     strokeOpacity: .7,
    //     strokeWeight: 3,
    // });
    // polyLine.setMap(map); // .setMap(null);

    // poligone = new google.maps.Polygon({
    //     paths: poly,
    //     strokeColor: "#4400FF",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 4,
    //     fillColor: "#008800",
    //     fillOpacity: 0.35,
    // });
    // poligone.setMap(map);

    // const geocoder = new google.maps.Geocoder();
    // document.getElementById("submit").addEventListener("click", () => {
    //     geocodeAddress(geocoder, map);
    // });

    // const directionsService = new google.maps.DirectionsService();
    // const directionsRenderer = new google.maps.DirectionsRenderer({
    //     map: map,
    // });
    // document.getElementById("route").addEventListener("click", () => {
    //     makeRoute(directionsService, directionsRenderer);
    // });

  }

function getGeoLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                console.log(pos);
            },
            () => {
                console.error('Error: The Geolocation service failed.');
            }
        );
    } else {
        console.error('Error: Your browser doesn\'t support geolocation.');
    }      
}

function geocodeAddress(geocoder, map) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
            console.log(results[0]);
            map.panTo(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else {
            console.warn(`Geocode was not successful for the following reason: ${status}`);
        }
    });
}

function makeRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
          origin: document.getElementById("from").value,
          destination: document.getElementById("to").value,
          travelMode: google.maps.TravelMode.WALKING,
        },
        (result, status) => {
            if (status === 'OK' && result) {
                directionsRenderer.setDirections(result);
            } else {
                console.warn(`Directions request failed due to ${status}`);
            }
        }
    );
}