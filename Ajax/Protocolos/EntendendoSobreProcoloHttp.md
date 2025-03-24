
# **📌 O que são Métodos HTTP?**  
Os **métodos HTTP** (ou **verbos HTTP**) são comandos utilizados para indicar a ação que queremos realizar ao fazer uma requisição a um servidor.  

Quando um navegador ou aplicativo se comunica com um servidor via **HTTP (Hypertext Transfer Protocol)**, ele envia um **método HTTP** para indicar **o tipo de operação** que deseja executar.  

🔹 Exemplo simples:  
📩 Quando você **envia um formulário de contato**, o navegador pode usar um método HTTP chamado **POST** para enviar os dados ao servidor.  

---

# **📌 Quais são os principais métodos HTTP?**  

Os métodos mais usados são:  

| Método  | Descrição  | Quando usar?  | Segurança  |
|---------|-----------|--------------|------------|
| **GET**  | Recupera dados do servidor (somente leitura)  | Buscar informações públicas, como produtos de uma loja  | Os dados ficam visíveis na URL (não seguro para dados sensíveis)  |
| **POST**  | Envia dados ao servidor para processamento  | Criar novos registros, enviar formulários  | Mais seguro, pois os dados não aparecem na URL  |
| **PUT**  | Atualiza um recurso existente no servidor  | Modificar dados de um usuário, atualizar um post  | Pode substituir dados inteiros, cuidado para não sobrescrever informações importantes  |
| **PATCH**  | Atualiza **parcialmente** um recurso  | Mudar apenas o nome de um usuário sem alterar outras informações  | Melhor que o PUT quando só queremos atualizar um campo específico  |
| **DELETE**  | Remove um recurso no servidor  | Excluir uma conta de usuário ou deletar um comentário  | Pode ser perigoso se não tiver confirmação ou autenticação  |

Agora, vamos entender **cada um desses métodos em detalhes** com exemplos.  

---

# **📌 1️⃣ Método GET – Buscar Informações**  

✅ O **GET** é utilizado para **obter** informações do servidor.  
⚠️ **Os dados são enviados na URL** (menos seguro).  

### **📍 Exemplo: Buscar um usuário**
```html
<a href="https://api.exemplo.com/users?id=5">Buscar Usuário</a>
```
Isso enviaria uma requisição **GET** ao servidor, e ele responderia algo assim:
```json
{
  "id": 5,
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```
🛡️ **Segurança:**  
❌ Nunca use GET para enviar **senhas ou informações sensíveis**, pois elas ficam visíveis na URL.  

---

# **📌 2️⃣ Método POST – Enviar Dados**  

✅ O **POST** é usado para **enviar** informações ao servidor.  
⚠️ **Os dados NÃO ficam visíveis na URL** (mais seguro).  

### **📍 Exemplo: Criar um novo usuário via AJAX**
```javascript
fetch("https://api.exemplo.com/users", {
    method: "POST",
    body: JSON.stringify({
        nome: "João",
        email: "joao@email.com"
    }),
    headers: { "Content-Type": "application/json" }
})
```
Isso enviaria os dados do usuário para o servidor.  

🛡️ **Segurança:**  
✅ O POST é melhor para formulários e login, pois os dados não ficam expostos.  
⚠️ **Sempre valide os dados no servidor** para evitar ataques de **injeção de código**.  

---

# **📌 3️⃣ Método PUT – Atualizar um Recurso**  

✅ O **PUT** substitui **todo** um recurso existente no servidor.  
⚠️ **Se um campo for omitido, ele pode ser apagado!**  

### **📍 Exemplo: Atualizar um usuário**
```javascript
fetch("https://api.exemplo.com/users/5", {
    method: "PUT",
    body: JSON.stringify({
        nome: "Maria Souza",
        email: "maria@email.com"
    }),
    headers: { "Content-Type": "application/json" }
})
```
Isso substituiria **todos os dados do usuário** com ID 5.  

🛡️ **Segurança:**  
✅ Use autenticação para garantir que apenas o usuário correto possa modificar os dados.  
⚠️ **Confirme antes de sobrescrever dados importantes!**  

---

# **📌 4️⃣ Método PATCH – Atualização Parcial**  

✅ O **PATCH** atualiza **apenas partes** de um recurso.  
⚠️ **Diferente do PUT, ele não sobrescreve tudo.**  

### **📍 Exemplo: Atualizar só o nome do usuário**
```javascript
fetch("https://api.exemplo.com/users/5", {
    method: "PATCH",
    body: JSON.stringify({ nome: "Maria Souza" }),
    headers: { "Content-Type": "application/json" }
})
```
Isso **mudaria apenas o nome**, sem alterar o e-mail.  

🛡️ **Segurança:**  
✅ Melhor que PUT para atualizações pequenas.  
⚠️ **Ainda requer autenticação e validação no servidor.**  

---

# **📌 5️⃣ Método DELETE – Remover um Recurso**  

✅ O **DELETE** remove um recurso do servidor.  
⚠️ **Se não tiver confirmação, pode causar perda de dados!**  

### **📍 Exemplo: Deletar um usuário**
```javascript
fetch("https://api.exemplo.com/users/5", {
    method: "DELETE"
})
```
Isso excluiria o usuário **com ID 5**.  

🛡️ **Segurança:**  
✅ Exigir **confirmação antes de deletar**.  
✅ Apenas usuários **autenticados** devem poder excluir dados.  

---

# **📌 Segurança: Como proteger os métodos HTTP?**  

🔒 Para evitar ataques, siga estas boas práticas:  

✅ **Autenticação** – Use tokens de autenticação (exemplo: JWT) para verificar se o usuário tem permissão para acessar os dados.  

✅ **Validação no Servidor** – Nunca confie só na validação do front-end. Sempre valide os dados no back-end antes de processá-los.  

✅ **CORS (Cross-Origin Resource Sharing)** – Controle quais domínios podem acessar a API para evitar ataques de terceiros.  

✅ **Rate Limiting** – Limite a quantidade de requisições por segundo para evitar **ataques de força bruta**.  

✅ **Logs e Monitoramento** – Sempre registre as requisições para detectar possíveis ataques.  

---

# **📌 Resumo Final**
| Método  | O que faz?  | Quando usar?  | Segurança  |
|---------|-----------|--------------|------------|
| **GET**  | Busca dados do servidor  | Quando queremos visualizar algo (ex: perfil do usuário)  | ❌ Não seguro para dados sensíveis  |
| **POST**  | Envia dados para o servidor  | Criar conta, enviar formulário  | ✅ Mais seguro que GET  |
| **PUT**  | Atualiza **todo** um recurso  | Modificar dados de um usuário  | ⚠️ Pode sobrescrever informações  |
| **PATCH**  | Atualiza **parte** de um recurso  | Alterar só um campo, como nome ou email  | ✅ Melhor para mudanças pequenas  |
| **DELETE**  | Remove um recurso  | Deletar conta, apagar comentário  | ⚠️ Exigir confirmação para evitar exclusões acidentais  |

