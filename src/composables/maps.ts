const mapbox_token =
  "pk.eyJ1IjoiYmlhbmNhY2xhenphcmlzIiwiYSI6ImNrd2ZrN3BrcDAxZ2wybnBlcnJjNXkzZXMifQ.5pFmQ9w3bMR7wrm70Sonvg";
import { Geolocation } from "@capacitor/geolocation";
const mapboxgl = require('mapbox-gl');
const axios = require('axios');
const idioma = "en";

export interface Location {
    altitude: number|null ;
    latitude: number; 
    longitude: number;
}

export function maps() {
    const posicao = {
        altitude:null,
        latitude:0,
        longitude:0,
    };

    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log("Current position:", coordinates);
    };
    const getCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
            // posicao.altitude = coordinates.coords.altitude,
            posicao.latitude = coordinates.coords.latitude,
            posicao.longitude = coordinates.coords.longitude
            
        return posicao;
        };
        
    
if ("geolocation" in navigator) {
    const localizacao = navigator.geolocation.getCurrentPosition(
      (coordenadas) => {
        const divInfo = document.getElementById("info");
        const divMap = document.getElementById('divMap');
     
        axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordenadas.coords.longitude},${coordenadas.coords.latitude}.json?access_token=${mapbox_token}&language=${idioma}`
        )
        .then((response) => {
          // manipula o sucesso da requisição
          divInfo.innerHTML = `
          <p><b>Logitude:</b> ${coordenadas.coords.longitude} </p> <br>
          <p><b>Latitude:</b> ${coordenadas.coords.latitude} </p> <br>
          <p><b>Altitude:</b> ${coordenadas.coords.altitude} </p> <br>
          <p><b>Velocidade:</b> ${coordenadas.coords.speed} </p> <br>
          <p><b>Timestamp:</b> ${coordenadas.timestamp} </p> <br>
          <p><b>Localização:</b> ${response.data.features[0].place_name} </p> <br>
          <p><b>Logradouro:</b> ${response.data.features[0].properties.address} </p> <br>
          <p><b>Cidade:</b> ${response.data.features[3].text} </p> <br>
          <p><b>Bairro:</b> ${response.data.features[1].text} </p> <br>
          <p><b>Pais:</b> ${response.data.features[5].text} </p> <br>
         `;
         
         mapboxgl.accessToken = mapbox_token;
         const map = new mapboxgl.Map({
            container: 'divMap', // ID da div html que vai renderizar o mapa
            style: 'mapbox://styles/mapbox/navigation-night-v1?optimize=true', // URL css do mapbox
            center: [coordenadas.coords.longitude, coordenadas.coords.latitude], // posição inicial
            zoom: 9 // zoom inicial
          });
           
          // Add geolocate control to the map.
          map.addControl(
            new mapboxgl.GeolocateControl({
              positionOptions: {
                  enableHighAccuracy: true
                },
              trackUserLocation: true,
              showUserHeading: true
              })
          );

          // Set marker options.
          new mapboxgl.Marker({
            color: "#484848",
            draggable: false,
            scale: 0.5
          }).setLngLat([coordenadas.coords.longitude, coordenadas.coords.latitude])
            .addTo(map);


            new mapboxgl.Marker({
              color: "#48aa19",
              draggable: false,
              scale: 0.5
            }).setLngLat([coordenadas.coords.longitude, coordenadas.coords.latitude-0.005])
              .addTo(map);

            // escala
            const scale = new mapboxgl.ScaleControl({
                maxWidth: 75,
                unit: 'metric' // metric, nautical, imperial
            });
            map.addControl(scale);
            
            // scale.setUnit('metric');

            // POPUP
            const markerHeight = 50;
            const markerRadius = 10;
            const linearOffset = 25;
            const popupOffsets = {
                'top': [0, 0],
                'top-left': [0, 0],
                'top-right': [0, 0],
                'bottom': [0, -markerHeight],
                'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                'left': [markerRadius, (markerHeight - markerRadius) * -1],
                'right': [-markerRadius, (markerHeight - markerRadius) * -1]
            };

            const v1 = new mapboxgl.LngLat(coordenadas.coords.longitude, coordenadas.coords.latitude);
            const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
                .setLngLat(v1)
                .setHTML("<h1>My popup</h1>")
                .setMaxWidth("450px")
                .addTo(map);
          
            // controle de navegação
            const nav = new mapboxgl.NavigationControl({
                  visualizePitch: true
              });
              map.addControl(nav, 'top-right');
        })
        .catch((error) => {
          // manipula erros da requisição
          console.error(error);
        });
    }
  );
} else {
  alert("Desculpe, mas a geolocalização não está operante neste dispositivo.");
}
    return {
        printCurrentPosition,
        getCurrentPosition,
        posicao,
    };
}