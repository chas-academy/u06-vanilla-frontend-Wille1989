export function showForm(formIdToShow: string) {
    const allFormSections = document.querySelectorAll('#form-section-disc, #form-section-add-manufacturer, #form-section-update-disc, #form-section-update-manufacturer');

    allFormSections.forEach(section => {
        (section as HTMLElement).style.display = 'none';
    });

    const formToShow = document.getElementById(formIdToShow);
    if(formToShow) {
        (formToShow as HTMLElement).style.display = 'flex';
    }

    const homeSection = document.getElementById('home-section');
    if(homeSection) {
        (homeSection as HTMLElement).style.display = 'none';
    }
    
}

export function showHome() {
    const allFormSections = document.querySelectorAll('#form-section-disc, #form-section-add-manufacturer, #form-section-update-disc, #form-section-update-manufacturer');
    allFormSections.forEach(section => {
        (section as HTMLElement).style.display = 'none';
    });

    const homeSection = document.getElementById('home-section');
    if(homeSection) {
        (homeSection as HTMLElement).style.display = 'flex';
    }
}