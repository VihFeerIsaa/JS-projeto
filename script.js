// Exibir mensagem motivacional
document.addEventListener('DOMContentLoaded', function () {
    const motivacao = document.createElement('button');
    motivacao.textContent = 'Clique para uma mensagem motivacional!';
    motivacao.style.display = 'block';
    motivacao.style.margin = '20px auto';
    motivacao.style.padding = '10px 20px';
    motivacao.style.backgroundColor = '#007acc';
    motivacao.style.color = '#fff';
    motivacao.style.border = 'none';
    motivacao.style.borderRadius = '5px';
    motivacao.style.cursor = 'pointer';

    document.body.appendChild(motivacao);

    motivacao.addEventListener('click', function () {
        alert('Você está no caminho certo! Acredite em si mesma(o) e no seu potencial!');
    });
});
