document.addEventListener('DOMContentLoaded', function() {
    let count = parseInt(localStorage.getItem('shareCount')) || 0;
    document.getElementById('count').innerText = count;

    if (count >= 5) {
        window.location.href = 'https://bit.ly/4f3OqOZ';
    }
});

document.getElementById('share-button').addEventListener('click', function() {
    const message = encodeURIComponent("COMEÇAR A FÁTURAR HOJE NO AVIATOR CLIQUE NESSE LINK PARA CRIAR CONTA E COMEÇAR A APOSTAR https://record.elephantbet.com/_0NLnTSoJHykWqcfzuvZcQGNd7ZgqdRLk/1/");
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

document.getElementById('confirm-button').addEventListener('click', function() {
    // Verificar se o usuário realmente compartilhou
    let userConfirmed = confirm("Você compartilhou o link com 5 contatos?");
    if (userConfirmed) {
        let count = parseInt(localStorage.getItem('shareCount')) || 0;
        count += 5; // Incrementa em 5 para simular que o usuário compartilhou com 5 contatos
        localStorage.setItem('shareCount', count);
        document.getElementById('count').innerText = count;

        if (count >= 5) {
            window.location.href = 'https://bit.ly/4f3OqOZ';
        }
    } else {
        alert("Por favor, compartilhe o link com 5 contatos antes de confirmar.");
    }
});
