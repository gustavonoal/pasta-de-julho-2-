const emojis = document.querySelectorAll(".emoji");
const mensagemEl = document.getElementById("mensagem");
const sendBtn = document.getElementById("sendBtn");
let selectRating = null;
emojis.forEach(emoji => {
    emoji.addEventListener("click", () => {
        emojis.forEach(e => e.classList.remove("selected"));
        emoji.classList.add("selected");
        selectRating = emoji.getAttribute("data-rating");
        mensagemEl.textContent = `Você selecionou ${selectRating} de 5. Clique em Enviar.`;
    });
});
sendBtn.addEventListener("click", () => {
    if (!selectRating) {
        mensagemEl.textContent = "Selecione uma avaliacão antes de enviar";
        return;
    }
    mensagemEl.textContent = `Obrigado pela avaliacão de ${selectRating} de 5!`;
    sendBtn.disabled = true;
    emojis.forEach(e => e.computedStyleMap.pointerEvents = "none")
});