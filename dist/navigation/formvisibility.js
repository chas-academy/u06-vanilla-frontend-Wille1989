export function showForm(formIdToShow) {
    const allFormSections = document.querySelectorAll('#form-section-disc, #form-section-add-manufacturer, #form-section-update-disc, #form-section-update-manufacturer');
    allFormSections.forEach(section => {
        section.style.display = 'none';
    });
    const formToShow = document.getElementById(formIdToShow);
    if (formToShow) {
        formToShow.style.display = 'flex';
    }
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
        homeSection.style.display = 'none';
    }
}
export function showHome() {
    const allFormSections = document.querySelectorAll('#form-section-disc, #form-section-add-manufacturer, #form-section-update-disc, #form-section-update-manufacturer');
    allFormSections.forEach(section => {
        section.style.display = 'none';
    });
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
        homeSection.style.display = 'flex';
    }
}
