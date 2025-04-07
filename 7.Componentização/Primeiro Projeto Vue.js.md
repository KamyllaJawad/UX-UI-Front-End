# ✅ **1. Instalando o Vue.js (Método Profissional)**
Para criar um projeto Vue **estruturado e profissional**, usamos o **Vue CLI** (Command Line Interface).  

## 📌 **Passo 1: Verificando se o Node.js está instalado**
O Vue precisa do **Node.js** para funcionar. Para verificar se você já tem o Node instalado:  

1️⃣ **Abra o terminal (cmd, PowerShell ou Git Bash)**  
2️⃣ Digite o seguinte comando:  
   ```sh
   node -v
   ```
Se aparecer um número (ex: `v18.16.0`), **o Node já está instalado**.  

Caso contrário, baixe e instale o Node.js pelo site:  
🔗 [https://nodejs.org/](https://nodejs.org/)  

---

## 📌 **Passo 2: Instalando o Vue CLI**
Agora vamos instalar o **Vue CLI**, a ferramenta que nos ajuda a criar projetos Vue organizados.  

1️⃣ No terminal, digite:  
   ```sh
   npm install -g @vue/cli
   ```
2️⃣ Depois que a instalação terminar, verifique se o Vue CLI está instalado com:  
   ```sh
   vue --version
   ```
Se aparecer algo como `@vue/cli 5.0.8`, significa que o Vue CLI está pronto! 🎉  

---

## 📌 **Passo 3: Criando um Novo Projeto Vue**
Agora vamos criar nosso primeiro projeto Vue **organizado e estruturado**.  

1️⃣ No terminal, vá até a pasta onde deseja criar o projeto:  
   ```sh
   cd caminho/da/sua/pasta
   ```
2️⃣ Crie um novo projeto Vue:  
   ```sh
   vue create meu-projeto-vue
   ```
3️⃣ O Vue vai perguntar qual preset queremos usar. **Escolha: "Default (Vue 3 + Babel + ESLint)"** e pressione `Enter`.  

4️⃣ Aguarde a instalação. No final, entre na pasta do projeto:  
   ```sh
   cd meu-projeto-vue
   ```
5️⃣ Para iniciar o projeto, rode:  
   ```sh
   npm run dev
   ```
6️⃣ Agora, abra o navegador e acesse **http://localhost:5173/**. Você verá a página inicial do Vue funcionando! 🎉  

---

# 📁 **2. Estrutura de Pastas do Vue**
Quando criamos um projeto Vue, várias pastas e arquivos são gerados. Vamos entender **o que cada um faz**.  

📂 **`meu-projeto-vue/`**  
📦 **node_modules/** → Guarda todas as bibliotecas do projeto (não precisamos mexer aqui).  
📂 **public/** → Contém o `index.html`, que é o arquivo principal da página.  
📂 **src/** → **Aqui é onde criamos nossos componentes e organizamos o código!**  
📂 **src/assets/** → Imagens, fontes e arquivos de estilo.  
📂 **src/components/** → Componentes reutilizáveis do Vue (ex: botões, cards, etc.).  
📂 **src/views/** → Páginas completas da aplicação (ex: Home.vue, Sobre.vue).  
📂 **src/router/** → Configuração das rotas do Vue (se ativado no projeto).  
📂 **src/store/** → Guarda o estado global da aplicação (Vuex ou Pinia).  
📂 **src/App.vue** → O **arquivo principal** do Vue onde a aplicação começa.  
📂 **src/main.js** → O ponto de entrada do Vue. É onde o `App.vue` é carregado.  
📄 **package.json** → Lista as bibliotecas instaladas no projeto.  
📄 **vite.config.js** → Arquivo de configuração do Vite (ferramenta de desenvolvimento).  

---

# 🔥 **3. Editando o Primeiro Componente**
Agora que o projeto está rodando, vamos **editar o App.vue** para testar.  

1️⃣ **Abra o projeto em um editor de código** (como o VS Code).  
2️⃣ No arquivo **`src/App.vue`**, substitua o código por este:  

```vue
<template>
  <div>
    <h1>🚀 Olá, Vue.js!</h1>
    <MeuBotao />
  </div>
</template>

<script>
import MeuBotao from "./components/MeuBotao.vue";

export default {
  components: {
    MeuBotao,
  },
};
</script>
```

Agora vamos criar um **componente separado**.

---

# 🎯 **4. Criando um Novo Componente**
Vamos criar um **botão reutilizável**.  

1️⃣ Dentro da pasta `src/components/`, crie um arquivo chamado `MeuBotao.vue`.  

2️⃣ Adicione o seguinte código:  
```vue
<template>
  <button @click="clicar">Clique aqui</button>
</template>

<script>
export default {
  methods: {
    clicar() {
      alert("Você clicou no botão!");
    },
  },
};
</script>

<style>
button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
```
✅ Agora, o **botão aparece na tela e exibe um alerta ao ser clicado!**  

---

# 🔄 **5. Rodando o Projeto Sempre Que Quiser**
Sempre que quiser abrir o projeto novamente:  

1️⃣ No terminal, entre na pasta do projeto:  
   ```sh
   cd meu-projeto-vue
   ```
2️⃣ Inicie o servidor:  
   ```sh
   npm run dev
   ```
3️⃣ O projeto abrirá em **http://localhost:5173/**! 🚀  


---

# ** Utilizando o Vue Router no Projeto**

O **Vue Router** é uma biblioteca oficial do Vue que permite criar **múltiplas páginas** dentro de uma aplicação **Single Page Application (SPA)**.  

💡 **Sem Vue Router** → Todas as páginas do site estariam em um só arquivo, dificultando a organização.  
💡 **Com Vue Router** → Criamos **arquivos separados** para cada página e navegamos entre eles sem recarregar a página.  

---

# ✅ **2. Instalando o Vue Router**
1️⃣ Se ainda não tiver um projeto Vue, crie um:  
```sh
vue create meu-projeto-vue
```
⚡ Escolha **"Default (Vue 3 + Babel + ESLint)"** e aguarde a instalação.  

2️⃣ Entre na pasta do projeto:  
```sh
cd meu-projeto-vue
```
3️⃣ Agora instale o **Vue Router** com o seguinte comando:  
```sh
npm install vue-router@4
```
Isso adicionará o Vue Router ao projeto. 🚀  

---

# ✅ **3. Configurando o Vue Router**
Agora precisamos **configurar o roteamento** no projeto.  

1️⃣ Dentro da pasta **`src/`**, crie uma nova pasta chamada **`router/`**.  
2️⃣ Dentro dessa pasta, crie um arquivo chamado **`index.js`** e cole este código:  

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sobre from '../views/Sobre.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

🔹 Aqui estamos criando um **roteador** com duas páginas:  
✅ **`/` → Página Home** (Carrega o componente `Home.vue`).  
✅ **`/sobre` → Página Sobre** (Carrega o componente `Sobre.vue`).  

---

# ✅ **4. Criando as Páginas**
Agora, vamos criar as páginas para o nosso site!  

1️⃣ Dentro da pasta **`src/`**, crie uma nova pasta chamada **`views/`**.  

2️⃣ Dentro dessa pasta, crie um arquivo chamado **`Home.vue`** e adicione o seguinte código:  

```vue
<template>
  <div>
    <h1>Página Inicial</h1>
    <p>Bem-vindo ao nosso site!</p>
  </div>
</template>
```

3️⃣ Agora, crie outro arquivo chamado **`Sobre.vue`** e adicione:  

```vue
<template>
  <div>
    <h1>Sobre Nós</h1>
    <p>Saiba mais sobre a nossa empresa.</p>
  </div>
</template>
```

✅ Agora temos **duas páginas separadas** no projeto!

---

# ✅ **5. Configurando o Vue para Usar o Router**
Agora precisamos dizer ao Vue que queremos usar o roteador que criamos.  

1️⃣ Abra o arquivo **`src/main.js`** e modifique para ficar assim:  

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Importando o roteador

const app = createApp(App);
app.use(router); // Habilitando o roteador no Vue
app.mount('#app');
```

🚀 **Agora o Vue já sabe que estamos usando múltiplas páginas!**

---

# ✅ **6. Criando Links para as Páginas**
Agora vamos adicionar um **menu de navegação** para alternar entre as páginas.  

1️⃣ Abra o arquivo **`src/App.vue`** e modifique-o para incluir os links:  

```vue
<template>
  <div>
    <nav>
      <router-link to="/">🏠 Home</router-link> |
      <router-link to="/sobre">ℹ️ Sobre</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
nav {
  background-color: #ddd;
  padding: 10px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #333;
}
</style>
```

🔹 **`<router-link to="/">`** → Cria links para as páginas, sem recarregar o site.  
🔹 **`<router-view></router-view>`** → Exibe o conteúdo da página atual.  

---

# ✅ **7. Testando o Projeto**
Agora que está tudo pronto, vamos testar!  

1️⃣ No terminal, inicie o projeto:  
```sh
npm run dev
```
2️⃣ Acesse **http://localhost:5173/** no navegador.  

✅ Você verá a página inicial com os links **"Home" e "Sobre"**.  
✅ Clique em **"Sobre"**, e a página mudará para a de informações!  

🚀 **Parabéns! Você acabou de criar um site com múltiplas páginas no Vue!** 🎉  

