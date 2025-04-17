
export function hooverDropDown(){
    const hooverEffect = document.getElementById('create-select');

    hooverEffect?.addEventListener('mouseover', () => { 
        hooverEffect.style.backgroundColor = 'lightblue';
        hooverEffect.style.transition = 'transform 0.5s ease-in-out';
    });


    hooverEffect?.addEventListener('mouseout', () => {
        hooverEffect.style.backgroundColor = '';
    });
}

