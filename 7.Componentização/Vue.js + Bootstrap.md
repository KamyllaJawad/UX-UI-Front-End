# ✅ **1. Instalando o Bootstrap no Vue.js**
Primeiro, precisamos instalar o **Bootstrap** no nosso projeto Vue.

1️⃣ **Se ainda não tem um projeto Vue, crie um:**  
```sh
vue create meu-projeto
cd meu-projeto
```

2️⃣ **Agora instale o Bootstrap e o Popper.js:**  
```sh
npm install bootstrap
```

3️⃣ **Importe o Bootstrap no projeto**  
Abra o arquivo **`main.js`** e adicione o seguinte código:  

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).mount('#app');
```

✅ **Agora o Bootstrap já está funcionando no seu projeto Vue!** 🎉  

---

# ✅ **2. Usando Bootstrap no Vue.js**
Agora que o Bootstrap está instalado, podemos usar seus componentes para estilizar nossa aplicação.  

---

## 📌 **2.1. Criando um Layout com Bootstrap**
Abra o arquivo **`App.vue`** e substitua pelo seguinte código:  

```vue
<template>
  <div class="container mt-4">
    <h1 class="text-center text-primary">Meu Site com Bootstrap</h1>
    
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Bootstrap</h5>
            <p class="card-text">Este é um card estilizado com Bootstrap.</p>
            <button class="btn btn-primary">Clique Aqui</button>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <img src="https://via.placeholder.com/300" class="img-fluid rounded" alt="Imagem">
      </div>
    </div>
  </div>
</template>

<style>
  /* Estilos personalizados */
  .card {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
</style>
```

### 🔹 O que esse código faz?  
✅ **Usa a classe `container` para centralizar o conteúdo.**  
✅ **Cria um layout de duas colunas com `row` e `col-md-6`**.  
✅ **Adiciona um card estilizado com `card` e `card-body`**.  
✅ **Usa um botão do Bootstrap com `btn btn-primary`**.  

---

## 📌 **2.2. Criando um Navbar com Bootstrap**
Agora, vamos adicionar um **menu de navegação** ao topo do site.  

1️⃣ No **`App.vue`**, adicione este código **antes** do `<div class="container">`:  

```vue
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Meu Site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
```

### 🔹 O que esse código faz?  
✅ Cria um **Navbar responsivo** que colapsa no mobile.  
✅ Usa **Bootstrap classes** como `navbar-dark bg-dark` para um menu escuro.  
✅ Usa `navbar-toggler` para o menu responsivo em telas menores.  

---

## 📌 **2.3. Criando um Formulário Estilizado**
Agora, vamos criar um formulário usando Bootstrap no Vue.  

Adicione o seguinte código ao **`App.vue`**, **abaixo da `row`**:  

```vue
<template>
  <div class="container mt-5">
    <h2 class="text-center text-success">Formulário de Contato</h2>
    <form>
      <div class="mb-3">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" placeholder="Digite seu nome">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Digite seu email">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Mensagem</label>
        <textarea class="form-control" rows="3" placeholder="Digite sua mensagem"></textarea>
      </div>
      
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
  </div>
</template>
```

### 🔹 O que esse código faz?  
✅ Usa **`form-control`** para estilizar os inputs.  
✅ Usa **`mb-3`** para dar espaço entre os campos.  
✅ Usa um **botão verde (`btn btn-success`)** para enviar o formulário.  

---

# ✅ **3. Melhorando a Experiência com Bootstrap Icons**
Se quiser adicionar ícones bonitos ao seu site, instale o **Bootstrap Icons**:  

```sh
npm install bootstrap-icons
```

Agora, no **`main.js`**, importe os ícones:  

```javascript
import 'bootstrap-icons/font/bootstrap-icons.css';
```

Agora você pode adicionar ícones facilmente, por exemplo:  

```vue
<button class="btn btn-primary">
  <i class="bi bi-hand-thumbs-up"></i> Curtir
</button>
```

✅ Isso adiciona um ícone **👍 Curtir** no botão!  

---
Ótimo! Vamos aprender **como criar componentes reutilizáveis no Vue.js** e também como utilizar **BootstrapVue** para facilitar a estilização. Vou explicar cada parte com **detalhes e exemplos práticos** para que você possa entender e aplicar no seu projeto. 🚀  

---

# 🎯 **Parte 1: Criando Componentes Reutilizáveis no Vue.js**  

## ✅ **1.1. O que são Componentes no Vue?**  
No Vue.js, um **componente** é como um "bloco de construção" do seu site. Você pode criar partes do site **separadas**, reutilizá-las em várias páginas e manter o código mais organizado.  

### 📌 **Exemplo prático:**  
- Se temos **vários cards de notícias**, em vez de copiar o mesmo código várias vezes, criamos um **componente único** de Card e usamos ele sempre que precisarmos.  

---

## ✅ **1.2. Criando um Componente de Card**
Agora vamos criar um **componente reutilizável** para um **Card de Notícias**.

### **Passo 1: Criar o Componente**
1️⃣ Dentro da pasta `src/components/`, crie um novo arquivo chamado **`Card.vue`**  
2️⃣ Adicione o seguinte código dentro dele:

```vue
<template>
  <div class="card">
    <img :src="imagem" class="card-img-top" alt="Imagem do Card">
    <div class="card-body">
      <h5 class="card-title">{{ titulo }}</h5>
      <p class="card-text">{{ descricao }}</p>
      <button class="btn btn-primary">Leia mais</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    imagem: String,
    descricao: String
  }
}
</script>

<style scoped>
.card {
  margin: 10px;
}
</style>
```

### 🔹 **Explicação do código acima:**
✅ **Usamos `props`** (`titulo`, `imagem`, `descricao`) para deixar o componente flexível.  
✅ **Agora podemos criar vários Cards diferentes**, passando valores para cada um!  

---

## ✅ **1.3. Usando o Componente em `App.vue`**
Agora vamos **usar o nosso componente de Card** dentro do `App.vue`:

1️⃣ **Abra o arquivo** `App.vue`  
2️⃣ **Importe o componente e use-o passando dados diferentes:**  

```vue
<template>
  <div class="container mt-4">
    <h1 class="text-center text-primary">Notícias</h1>
    <div class="row">
      <div class="col-md-4">
        <Card 
          titulo="Notícia 1" 
          imagem="https://via.placeholder.com/300" 
          descricao="Descrição da primeira notícia."
        />
      </div>
      <div class="col-md-4">
        <Card 
          titulo="Notícia 2" 
          imagem="https://via.placeholder.com/300" 
          descricao="Descrição da segunda notícia."
        />
      </div>
      <div class="col-md-4">
        <Card 
          titulo="Notícia 3" 
          imagem="https://via.placeholder.com/300" 
          descricao="Descrição da terceira notícia."
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  components: {
    Card
  }
}
</script>
```

### 🔹 **Explicação do código acima:**
✅ **Importamos o componente `Card.vue`** no `App.vue`  
✅ **Criamos vários cards reutilizando o mesmo componente**, apenas mudando os dados!  

Agora seu site está muito mais **organizado e fácil de manter!** 🎉  

---

# 🎯 **Parte 2: Usando BootstrapVue para Componentes Prontos**  

Agora que entendemos como criar componentes no Vue, vamos aprender a usar o **BootstrapVue**. Ele facilita ainda mais o desenvolvimento, pois oferece **componentes prontos e estilizados**.  

---

## ✅ **2.1. Instalando o BootstrapVue**
1️⃣ No terminal, dentro do seu projeto, rode:  
```sh
npm install bootstrap-vue
```

2️⃣ **Importe o BootstrapVue no `main.js`**  
Abra `main.js` e adicione:  

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App).mount('#app');
```

Agora podemos usar os **componentes prontos do BootstrapVue!** 🚀  

---

## ✅ **2.2. Criando um Card com BootstrapVue**
Agora vamos refazer o **Card.vue**, mas usando o **BootstrapVue**:

### **📌 Passo 1: Alterar `Card.vue`**
Abra o arquivo `Card.vue` e substitua pelo código abaixo:

```vue
<template>
  <b-card 
    :title="titulo" 
    :img-src="imagem" 
    img-alt="Imagem do Card" 
    img-top 
    class="mb-3">
    
    <p>{{ descricao }}</p>
    <b-button variant="primary">Leia mais</b-button>
  
  </b-card>
</template>

<script>
export default {
  props: {
    titulo: String,
    imagem: String,
    descricao: String
  }
}
</script>
```

### 🔹 **O que mudou?**
✅ Agora usamos o **`b-card`**, um **componente pronto** do BootstrapVue.  
✅ Usamos **`b-button`** para criar um botão estilizado.  
✅ **O design já fica bonito e responsivo sem precisar de CSS extra!**  

---

## ✅ **2.3. Criando um Formulário com BootstrapVue**
Agora vamos criar um **formulário reutilizável** usando **BootstrapVue**.

### **📌 Passo 1: Criar `FormContato.vue`**
Crie um novo arquivo dentro de `components/`, chamado **`FormContato.vue`**, e adicione:

```vue
<template>
  <b-form @submit.prevent="enviarFormulario">
    <b-form-group label="Nome">
      <b-form-input v-model="nome" placeholder="Digite seu nome" required></b-form-input>
    </b-form-group>

    <b-form-group label="Email">
      <b-form-input type="email" v-model="email" placeholder="Digite seu email" required></b-form-input>
    </b-form-group>

    <b-form-group label="Mensagem">
      <b-form-textarea v-model="mensagem" rows="3" placeholder="Digite sua mensagem"></b-form-textarea>
    </b-form-group>

    <b-button type="submit" variant="success">Enviar</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      mensagem: ''
    }
  },
  methods: {
    enviarFormulario() {
      alert(`Mensagem enviada por ${this.nome}`);
    }
  }
}
</script>
```

---

## ✅ **2.4. Usando o Formulário em `App.vue`**
Agora, no `App.vue`, importe e use o formulário:

```vue
<template>
  <div class="container mt-4">
    <h1 class="text-center">Entre em Contato</h1>
    <FormContato />
  </div>
</template>

<script>
import FormContato from './components/FormContato.vue';

export default {
  components: {
    FormContato
  }
}
</script>
```