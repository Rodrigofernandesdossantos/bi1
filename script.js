
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Credenciais fictícias para validação
    const validUsername = 'novoUsuario';
    const validPassword = 'novaSenha123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        // Redireciona para o link específico após a autenticação
        window.location.href = 'https://app.powerbi.com/view?r=eyJrIjoiNjY0OTBjZWYtMjdhNC00N2Q3LWE2MjktNTg3MDQ0MTRjMWVmIiwidCI6Ijg2YzhmMDAxLTYzOTYtNDA5YS04MGQ5LWM4MGU0MDI2NzgzYyJ9';
    } else {
        // Exibe mensagem de erro se as credenciais estiverem incorretas
        errorMessage.textContent = 'Usuário ou senha incorretos';
    }
});
