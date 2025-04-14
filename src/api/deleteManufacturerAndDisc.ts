export async function deleteManufacturerAndDiscs(id: string): Promise<void> {

    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/manufacturer/delete/${id}`, {
            method: 'DELETE'
        });

        if(!response.ok) {
            throw new Error("Misslyckades med att ta bort tillverkare, försök igen");
        }

        console.log("Tillverkare + tillhörande discar borttagna!");
    } catch (error) {
        console.error('Fel vid borttagningav tillverkare', error);
    }
}