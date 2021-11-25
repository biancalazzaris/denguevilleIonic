import { Geolocation } from "@capacitor/geolocation";

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
        
    return {
        printCurrentPosition,
        getCurrentPosition,
        posicao,
    };
}