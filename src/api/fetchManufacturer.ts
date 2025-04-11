import { Manufacturer } from "../types/manufacturer.js";


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
