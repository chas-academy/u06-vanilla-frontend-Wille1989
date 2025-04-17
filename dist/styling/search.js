export function setupSearchHover() {
    const search = document.getElementById('search');
    if (search) {
        search.style.transition = 'background-color 0.3 ease-in-out';
        search === null || search === void 0 ? void 0 : search.addEventListener('mouseover', () => {
            search.style.backgroundColor = 'lightblue';
        });
        search === null || search === void 0 ? void 0 : search.addEventListener('mouseout', () => {
            search.style.backgroundColor = '';
        });
    }
}
