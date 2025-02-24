
## **🎯 Objetivo da Atividade**  
Criar uma **página de busca de usuários** usando **AJAX** para consumir a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) e exibir os resultados com **Bootstrap**.  

---

## **📌 Requisitos**  
1️⃣ Criar um campo de **entrada (input)** para pesquisar usuários  
2️⃣ Criar um **botão** para iniciar a busca  
3️⃣ Exibir os resultados dentro de um **card do Bootstrap**  
4️⃣ Se houver erro ou usuário não encontrado, mostrar uma mensagem amigável  

---

## **🚀 Código Base**  
Complemente este código para funcionar corretamente:  

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Busca de Usuários</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <h2 class="text-center mb-4">🔍 Buscar Usuário</h2>
        
        <!-- Campo de entrada e botão -->
        <div class="input-group mb-3">
            <input type="number" id="userId" class="form-control" placeholder="Digite o ID do usuário (1 a 10)">
            <button id="searchButton" class="btn btn-primary">Buscar</button>
        </div>

        <!-- Área para exibir os resultados -->
        <div id="userInfo" class="mt-4"></div>
    </div>

    <script>
        document.getElementById("searchButton").addEventListener("click", function() {
            let userId = document.getElementById("userId").value;

            // TODO: Completar a requisição AJAX usando fetch()
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(user => {
                    // TODO: Exibir os dados do usuário no HTML
                    document.getElementById("userInfo").innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                                <p class="card-text"><strong>Telefone:</strong> ${user.phone}</p>
                                <p class="card-text"><strong>Empresa:</strong> ${user.company.name}</p>
                            </div>
                        </div>
                    `;
                })
                .catch(error => {
                    // TODO: Exibir mensagem de erro amigável
                    document.getElementById("userInfo").innerHTML = `
                        <div class="alert alert-danger">Usuário não encontrado!</div>
                    `;
                });
        });
    </script>
</body>
</html>
```

---

## **📋 Passos a seguir**  
🔹 **Copiar** o código base para um arquivo `index.html`  
🔹 **Ler** e entender os comentários no código  
🔹 **Completar** a função `fetch()` para buscar o usuário  
🔹 **Testar** com IDs válidos (1 a 10) e inválidos (exemplo: 99)  
🔹 **Personalizar** a exibição dos dados (cores, fontes, botões)  
🔹 Mostrar **spinner de carregamento** enquanto a busca acontece  
🔹 Permitir buscar **mais de um usuário** e exibi-los em cards diferentes  
🔹 Adicionar um botão para **limpar os resultados**  

---

### **🧑‍🏫 Dica**
💡 Utilize o **DevTools (F12)** → Aba **Network** → **Fetch/XHR**  
Isso ajudará a entender como as requisições AJAX funcionam!  

