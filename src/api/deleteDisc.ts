

export async function deleteDisc(id: string): Promise<void> {

    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/discs/delete/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error("misslyckades att ta bort disc, försök igen");
        }

        console.log("Disc Borttagen!");
    } catch (error) {
        console.error('Fel vid borttagning av disc:', error);
    }
}