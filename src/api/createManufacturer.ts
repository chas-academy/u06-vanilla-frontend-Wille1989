import { Manufacturer } from "../types/manufacturer.js";

export async function createManufacturer(name: string, country: string): Promise<Manufacturer |null> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/manufacturer/create', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, country })
        });

        const data = await response.json();
        console.log("tillverkare skapad!", data);

        return data.data;
    } catch (error) {
        console.error("Misslyckade att skapa tillverkare!", error);
        return null;
    }
}