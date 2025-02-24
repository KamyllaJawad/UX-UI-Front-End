document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os dados do formulário
        const formData = new FormData(form);
        
        // Envia a requisição AJAX (usando Fetch API)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar mensagem");
            }
            return response.json();
        })
        .then(data => {
            console.log("Resposta do servidor:", data);

            // Exibe a mensagem de sucesso
            successMessage.classList.remove("d-none");
            errorMessage.classList.add("d-none");

            // Limpa os campos do formulário
            form.reset();
        })
        .catch(error => {
            console.error("Erro:", error);

            // Exibe a mensagem de erro
            successMessage.classList.add("d-none");
            errorMessage.classList.remove("d-none");
        });
    });
});
