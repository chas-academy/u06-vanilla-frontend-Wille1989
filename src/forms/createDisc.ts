
import { fetchManufacturer } from "../api/fetch/fetchManufacturer.js";
import { showForm, showHome } from "../ui/formvisibility.js";
import { showMessage } from "../ui/ui.js";

export async function showAddDiscForm() {
    const formContainer = document.getElementById('form-container') as HTMLElement;
    const button = document.getElementById('add-disc-btn') as HTMLButtonElement;
    
    if (!formContainer) return;

        formContainer.innerHTML =
            `<h2>Lägg till ny disc </h2>
                <form id = "add-disc-form" >
                    
                    <label for="manufacturer">Tillverkare</label>
                    <select id="manufacturer" name="manufacturer" required>
                        <option value="" disabled selected>Välj tillverkare</option> 


                    <label for= "title" > Titel: </label>
                    <input type = "text" id = "title" name = "title" required >

                    <label for="type">Typ:</label>
                    <select id="type" name="type" required>
                        <option value="Distance Driver">Distance Driver</option>
                        <option value="Driver">Driver</option>
                        <option value="Mid-Range">Mid-Range</option>
                        <option value="Putter">Putter</option>
                    </select>

                    <label for= "speed"> Speed: </label>
                    <input type = "number" id = "speed" name = "speed" required>

                    <label for= "turn"> turn: </label>
                    <input type = "number" id = "turn" name = "turn" required>

                    <label for= "fade"> fade: </label>
                    <input type = "number" id = "fade" name = "fade" required>

                    <label for= "glide"> glide: </label>
                    <input type = "number" id = "glide" name = "glide" required>

                    <button type="submit"> Spara disc </button>
                </form>`;


                
        const form = document.getElementById('add-disc-form') as HTMLFormElement;
        const manufacturerSelect = document.getElementById('manufacturer') as HTMLSelectElement;
        const manufacturers = await fetchManufacturer();

        manufacturers.forEach((manufacturer) => {
            const option = document.createElement('option');
            option.value = manufacturer._id;
            option.textContent = manufacturer.name;
            manufacturerSelect.appendChild(option)
        });



        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const newDisc = {
                title: (document.getElementById('title') as HTMLInputElement).value,
                type: (document.getElementById('type') as HTMLSelectElement).value,
                speed: parseInt((document.getElementById('speed') as HTMLInputElement).value),
                turn: parseInt((document.getElementById('turn') as HTMLInputElement).value),
                fade: parseInt((document.getElementById('fade') as HTMLInputElement).value),
                glide: parseInt((document.getElementById('glide') as HTMLInputElement).value),
                manufacturer: (document.getElementById('manufacturer') as HTMLSelectElement).value,
            };

            const response = await fetch('https://u05-wbsp.onrender.com/api/discs/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDisc)
            });

            if (response.ok) {
                showMessage('Ny Disc skapades!', 'success');
                form.reset();
            } else {
                showMessage('Misslyckades att skapa disc', 'error');
            }
            
        });

        const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.className = 'form-cancel-btn';
            cancelBtn.textContent = 'Tillbaka';
        
            cancelBtn.addEventListener('click', () => {
                showHome();
        });
        
        form.appendChild(cancelBtn);

        showForm('form-section-disc');
    };