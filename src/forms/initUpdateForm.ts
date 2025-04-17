import { getDiscsById } from "../api/fetch/fetchSpecifikDisc.js";
import { getManufacturer } from "../api/fetch/fetchSpecifikManufacturer.js";

import { showUpdateManufacturerForm } from "./updateManufacturer.js";
import { showUpdateDiscForm } from "./updateDisc.js";

import { showForm } from "../ui/formvisibility.js";


export async function initUpdateManufacturerForm(id: string): Promise<void> {
    try {

        const manufacturer = await getManufacturer(id);
        await showUpdateManufacturerForm(manufacturer);

        showForm('form-section-update-manufacturer');
        console.log("Initierar uppdateringsformulär med ID:", id);

    } catch (error) {

        console.error('Kunde inte initera uppdateringsformuläret:', error);
    }
}

export async function initUpdateDiscForm(id: string): Promise<void> {

    try {

        const disc = await getDiscsById(id);
        await showUpdateDiscForm(disc);

        showForm('form-section-update-disc');
        console.log("Initierar uppdateringsformulär med ID:", id);
    } catch (error) {
        
        console.error('Kunde inte initiera Uppdateringsformuläret för Disc:', error);
    }
}