import { Manufacturer } from "../../types/manufacturer.js";

import { fetchManufacturer } from "../fetch/fetchManufacturer.js";
import { initUpdateManufacturerForm } from "../../forms/initUpdateForm.js";


export function showAllManufacturer(): void {
    fetchManufacturer().then((manufacturers) => {
      const mList = document.getElementById('manufacturer-list');
  
      if (mList) {
        mList.innerHTML = '';
  
        manufacturers.forEach((manufacturer: Manufacturer) => {
          const mLi = document.createElement('li');
  
          // Lägg till struktur
          mLi.innerHTML = `
            <div class="manufacturer-info">
              <strong>${manufacturer.name}</strong>
              <span>Land: ${manufacturer.country}</span>
            </div>
          `;
  
          // Skapa redigera-knapp
          const editBtn = document.createElement('button');
          editBtn.textContent = "Redigera";
          editBtn.classList.add("edit-btn");
          editBtn.addEventListener('click', () => {
            initUpdateManufacturerForm(manufacturer._id);
          });
  
          mLi.appendChild(editBtn);
          mList.appendChild(mLi);
        });
      }
    });
  }