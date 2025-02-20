
## 🎯 **Objetivo:**  
Criar um **formulário intuitivo, acessível e responsivo**, garantindo que o usuário tenha uma boa experiência ao preenchê-lo.

📌 **Aplicando boas práticas de UX:**  
✅ **Minimize o esforço cognitivo** → Campos claros, bem organizados.  
✅ **Use padrões conhecidos** → Layout comum de formulário com botão destacado.  
✅ **Destaque as ações principais** → Botão de envio chamativo.  
✅ **Dê feedback visual** → Mensagens de erro/sucesso.  
✅ **Priorize a performance** → Código otimizado e carregamento rápido.  

---

## 🚀 **Código do Formulário**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulário de Contato</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- Container principal -->
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
            
            <!-- Título do Formulário -->
            <h2 class="text-center mb-4">Entre em Contato</h2>

            <!-- Mensagem de sucesso (oculta inicialmente) -->
            <div id="success-message" class="alert alert-success d-none">
                Sua mensagem foi enviada com sucesso! 🎉
            </div>

            <!-- Formulário -->
            <form id="contact-form">
                <div class="mb-3">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="Seu nome" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" placeholder="seuemail@exemplo.com" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Mensagem</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Digite sua mensagem" required></textarea>
                </div>
                
                <!-- Botão de envio -->
                <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-lg">Enviar Mensagem</button>
                </div>
            </form>

        </div>
    </div>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- Script para feedback visual -->
<script>
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
    
    // Exibe a mensagem de sucesso
    document.getElementById("success-message").classList.remove("d-none");

    // Limpa os campos do formulário
    document.getElementById("contact-form").reset();
});
</script>

</body>
</html>
```

---

## 🔥 **Por que esse formulário segue boas práticas de UX?**  

✅ **Minimize o esforço cognitivo** →  
🔹 Campos bem definidos e com placeholders intuitivos.  

✅ **Use padrões conhecidos** →  
🔹 Layout clássico de formulário que os usuários já conhecem.  

✅ **Destaque as ações principais** →  
🔹 **Botão grande e azul (btn-primary)** para indicar ação principal.  

✅ **Dê feedback visual** →  
🔹 Após o envio, uma **mensagem de sucesso** aparece sem precisar recarregar a página.  

✅ **Priorize a performance** →  
🔹 **Código leve e eficiente** usando apenas Bootstrap e JavaScript puro.  

  
