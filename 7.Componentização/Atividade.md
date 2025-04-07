## 🎓 **Atividade Prática — Meu Currículo com Vue + Bootstrap + Formulário AJAX**

### 🎯 **Objetivo:**
Criar um site de **currículo online** usando Vue.js, com foco em **componentização**, **boas práticas de layout responsivo** com **BootstrapVue**, e um **formulário de contato com envio via AJAX**.

---

## ✅ **Requisitos obrigatórios do currículo (em componentes):**

### 📌 **1. Navbar (`NavbarCurriculo.vue`)**
- Fixa no topo.
- Com links internos para rolar até as seções (`href="#sobre"`, etc).
- Usar `<b-navbar>` do BootstrapVue.

---

### 👤 **2. Foto + Título (no topo da página)**
- Sua **foto de perfil**.
- Seu nome completo.
- Seu título profissional (Ex: Desenvolvedor Front-end).

---

### 🧾 **3. Sobre Mim (`Sobre.vue`)**
- Pequena descrição sobre você: formação, habilidades e objetivo profissional.

---

### 💼 **4. Experiências (`Experiencias.vue`)**
- Pelo menos **duas experiências ou projetos**.
- Usar `v-for` para listar dinamicamente a partir de um array.

---

### 🧠 **5. Stacks / Tecnologias (`Stacks.vue`)**
- Mostrar suas tecnologias principais (HTML, CSS, JS, Vue, Git, etc).
- Pode usar badges, ícones ou lista com estilo Bootstrap.

---

### 🖥️ **6. Portfólio GitHub (`Portfolio.vue`)**
- Mostrar links de pelo menos **dois repositórios/projetos**.
- Pode ser em formato de cards, botões ou lista.

---

### 📬 **7. Contato com formulário AJAX (`Contato.vue`)**
- Deve conter um **formulário com os campos:**
  - Nome
  - E-mail
  - Mensagem

- Enviar os dados via **AJAX** (usando `fetch()` ou `axios`) para um endpoint real ou simulado (pode usar https://formsubmit.co ou webhook.site se não tiver backend).
- Após o envio, mostrar uma mensagem de sucesso sem recarregar a página.

📌 Exemplo com `fetch()`:
```js
fetch("https://formsubmit.co/seu-email@exemplo.com", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name: this.nome,
    email: this.email,
    message: this.mensagem
  })
})
.then(response => response.json())
.then(data => {
  this.sucesso = true;
})
.catch(error => {
  console.error("Erro ao enviar", error);
});
```

---

### 📥 **8. Footer (`FooterCurriculo.vue`)**
- Créditos simples no rodapé, como:  
  `© 2025 - Seu Nome | Todos os direitos reservados`

---

## 🧱 **Estrutura esperada:**

```
src/
├── components/
│   ├── NavbarCurriculo.vue
│   ├── Sobre.vue
│   ├── Experiencias.vue
│   ├── Stacks.vue
│   ├── Portfolio.vue
│   ├── Contato.vue
│   └── FooterCurriculo.vue
├── App.vue
└── main.js
```

---

## 🧠 **Boas práticas esperadas:**

- Componentes organizados e reutilizáveis.
- Estilo visual agradável com BootstrapVue.
- Responsividade garantida (flex/grid ou classes Bootstrap).
- Separação de lógica (dados) e estrutura (HTML).
- Uso de `props`, `data`, e `v-for` quando necessário.

---

## 📊 Avaliação sugerida (total: 10 pontos):

| Critério                                  | Pontos |
|------------------------------------------|--------|
| Uso correto de componentes Vue           | 2 pts  |
| Layout responsivo com BootstrapVue       | 2 pts  |
| Conteúdo completo e organizado           | 2 pts  |
| Formulário com envio AJAX funcionando    | 2 pts  |
| Criatividade e estilo visual             | 2 pts  |

