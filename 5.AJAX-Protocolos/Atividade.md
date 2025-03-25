
## **Atividade Prática: Criando um Site Currículo**

### **Objetivo**
Criar um site currículo pessoal que seja:
1. **Responsivo** (funcione bem em dispositivos móveis e desktops).
2. **Interativo** (com animações e efeitos).
3. **Acessível** (seguindo princípios de UX).
4. **Dinâmico** (use AJAX para carregar informações, se necessário).

---

### **Passo a Passo**

#### **1. Estrutura do Projeto**
Crie uma pasta para o projeto com a seguinte estrutura:
```
/meu-curriculo
  ├── index.html
  ├── styles.css
  ├── script.js
  └── assets/
      ├── imagens/
      └── icones/
```

---

#### **2. Informações que o Site Deve Conter**
O site deve ter as seguintes seções:
1. **Cabeçalho (Header)**:
   - Seu nome e título profissional (ex: "Desenvolvedor Front-End").
   - Uma foto sua ou um ícone representativo.
   - Um menu de navegação para as seções do site.

2. **Sobre Mim**:
   - Uma breve descrição sobre você, suas habilidades e objetivos profissionais.

3. **Experiência Profissional**:
   - Lista de experiências anteriores (empresa, cargo, período e descrição das atividades).

4. **Formação Acadêmica**:
   - Cursos, graduações ou certificações.

5. **Habilidades**:
   - Lista de habilidades técnicas (ex: HTML, CSS, JavaScript, Bootstrap, etc.).

6. **Projetos**:
   - Destaque alguns projetos que você já fez (com imagem, descrição e link, se possível).

7. **Contato**:
   - Formulário de contato ou links para suas redes sociais (LinkedIn, GitHub, etc.).

---

#### **3. Layout com Bootstrap**
Use o **Bootstrap** para criar um layout responsivo. Aqui estão algumas dicas:
- Use o **sistema de grid** do Bootstrap para organizar as seções.
- Adicione um **navbar** no topo para facilitar a navegação.
- Use **cards** para exibir experiências, projetos e habilidades.

Exemplo básico de estrutura:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Currículo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Meu Nome</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#sobre">Sobre Mim</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experiencia">Experiência</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projetos">Projetos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Seções -->
  <section id="sobre" class="container mt-5">
    <h2>Sobre Mim</h2>
    <p>Uma breve descrição sobre você.</p>
  </section>

  <section id="experiencia" class="container mt-5">
    <h2>Experiência Profissional</h2>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Nome da Empresa</h5>
        <p class="card-text">Descrição das atividades.</p>
      </div>
    </div>
  </section>

  <!-- Adicione outras seções aqui -->

  <!-- Rodapé -->
  <footer class="bg-light text-center p-3 mt-5">
    <p>&copy; 2023 Meu Nome</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

---

#### **4. Animações**
Adicione animações para tornar o site mais dinâmico:
- Use **CSS** para animações simples (ex: fade-in, hover effects).
- Use **JavaScript** para interações mais complexas (ex: carregar conteúdo dinamicamente com AJAX).

Exemplo de animação com CSS:
```css
/* Adicione no styles.css */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

section {
  animation: fadeIn 1s ease-in-out;
}
```

Exemplo de animação com JavaScript:
```javascript
// Adicione no script.js
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    setTimeout(() => {
      section.style.opacity = '1';
    }, 300);
  });
});
```

---

#### **5. Princípios de UX**
Respeite os seguintes princípios de UX:
1. **Simplicidade**: Mantenha o design limpo e fácil de navegar.
2. **Consistência**: Use cores, fontes e estilos consistentes em todo o site.
3. **Acessibilidade**: Garanta que o site seja acessível (ex: use contrastes de cores adequados, textos legíveis e atributos `alt` em imagens).
4. **Feedback Visual**: Dê feedback ao usuário (ex: mudar a cor de um botão ao passar o mouse).

---

#### **6. Bônus: Carregamento Dinâmico com AJAX**
Se quiser, use **AJAX** para carregar informações dinamicamente. Por exemplo, carregue a lista de projetos a partir de um arquivo JSON.

Exemplo:
```javascript
// Adicione no script.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('projetos.json')
    .then(response => response.json())
    .then(data => {
      const projetosSection = document.getElementById('projetos');
      data.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${projeto.titulo}</h5>
            <p class="card-text">${projeto.descricao}</p>
          </div>
        `;
        projetosSection.appendChild(card);
      });
    });
});
```

---

### **Critérios de Avaliação**
1. **Layout Responsivo**: O site deve funcionar bem em dispositivos móveis e desktops.
2. **Interatividade**: Use animações e efeitos/alertas/validações para melhorar a experiência do usuário.
3. **Conteúdo Completo**: Todas as seções devem estar preenchidas com informações relevantes.
4. **Boas Práticas de UX**: O site deve ser acessível, consistente e fácil de navegar.

---

### **Entrega**
- Crie um repositório no GitHub e suba o projeto.
- Publique o site usando GitHub Pages ou outro serviço de hospedagem.
- Envie o link do repositório e do site publicado.

---

Pronto! Agora é com você. Mãos à obra e mostre todo o seu potencial! 🚀✨😊