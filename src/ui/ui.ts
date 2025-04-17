export function showMessage(message: string, type = "info", duration = 3000) {
    const msgBox = document.getElementById('message-area');
    if(!msgBox) return;

    msgBox.textContent = message;
    msgBox.className = "";
    msgBox.classList.add(type);
    msgBox.style.display = "block";

    setTimeout(() => {
        msgBox.style.display = "none";
    }, duration);
}