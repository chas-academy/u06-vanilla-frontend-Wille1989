export function setupManufacturerHomeSection() {
    const expandEffect = document.getElementById('manufacturer-section');
    expandEffect?.addEventListener('mouseover', () => {
        expandEffect.style.transform = 'scale(1.05)';
        expandEffect.style.transition = 'transform 0.2s ease-in-out';
    });

    expandEffect?.addEventListener('mouseout', () => {
        expandEffect.style.transform = 'scale(1)';
    });
}

export function setupDiscHomeSection() {
    const expandEffect = document.getElementById('disc-section');

    expandEffect?.addEventListener('mouseover', () => {
        expandEffect.style.transform = 'scale(1.05)';
        expandEffect.style.transition = 'transform 0.2s ease-in-out';
    });

    expandEffect?.addEventListener('mouseout', () => {
        expandEffect.style.transform = 'scale(1)';
    });
}