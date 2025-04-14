import { showAllDiscs, showAllManufacturer } from "../eventListeners.js";
import { showAddDiscForm } from "../forms/createDisc.js";

/*
export function showSection (idToShow: string) {
    const allSections = document.querySelectorAll('section');


    allSections.forEach(section => {
        section.classList.remove('visible');
    });

    const target = document.getElementById(idToShow);
    if(target) {
        target.classList.add('visible');
    }

    console.log("🧭 showSection körs med:", idToShow);
}

export function navigateTo (target: string) {
    showSection (target);

    switch (target) {
        case "home-section":
            showAllDiscs();
            showAllManufacturer();
            break;
    }
}

export function navigationButtons () {
    const navButtons = document.querySelectorAll('.navigationButton');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = (button as HTMLButtonElement).dataset.target;
            if(target) navigateTo(target);
        });
    });
}*/