import { Disc } from "../src/types/disc";
import { Manufacturer } from "./types/manufacturer";

export async function fetchDiscs(): Promise<Disc[]> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/discs/index');
        const data = await response.json();
        console.log(data);
        return data.data as Disc[];
    } catch (error) {
        console.error('Couldnt get the discs', error);
        return [];
    }
}

export async function fetchManufacturer(): Promise<Manufacturer[]> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/manufacturer/index');
        const data = await response.json();
        console.log(data);
        return data.data as Manufacturer[];
    } catch (error) {
        console.error('Couldnt get the manufacturers', error);
        return [];
    }
}