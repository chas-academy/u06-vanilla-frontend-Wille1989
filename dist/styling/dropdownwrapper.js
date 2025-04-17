export function hooverDropDown() {
    const hooverEffect = document.getElementById('create-select');
    hooverEffect === null || hooverEffect === void 0 ? void 0 : hooverEffect.addEventListener('mouseover', () => {
        hooverEffect.style.backgroundColor = 'lightblue';
        hooverEffect.style.transition = 'transform 0.5s ease-in-out';
    });
    hooverEffect === null || hooverEffect === void 0 ? void 0 : hooverEffect.addEventListener('mouseout', () => {
        hooverEffect.style.backgroundColor = '';
    });
}
