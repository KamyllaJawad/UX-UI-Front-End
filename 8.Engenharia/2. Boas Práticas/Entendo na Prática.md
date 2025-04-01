## **1. Engenharia de Requisitos e Planejamento**
Antes de começar a programar, é essencial entender o que precisa ser feito. Isso envolve:
✅ Definir claramente os requisitos do sistema.  
✅ Especificar regras de negócio.  
✅ Criar protótipos e documentações.  

📌 **Exemplo 1 (Sistema de Login):**  
```javascript
class Login {
  constructor() {
    this.users = { "user@email.com": "senha123" };
    this.attempts = {};
  }

  authenticate(email, password) {
    if (!this.users[email]) return "Usuário não encontrado.";
    
    if (this.users[email] !== password) {
      this.attempts[email] = (this.attempts[email] || 0) + 1;
      if (this.attempts[email] >= 3) return "Conta bloqueada!";
      return "Senha incorreta!";
    }

    this.attempts[email] = 0;
    return "Login bem-sucedido!";
  }
}
```

📌 **Exemplo 2 (Carrinho de Compras):**  
```javascript
class Carrinho {
  constructor() {
    this.itens = [];
    this.desconto = 0;
  }

  adicionarItem(produto, preco) {
    this.itens.push({ produto, preco });
  }

  aplicarDesconto(percentual) {
    this.desconto = percentual;
  }

  calcularTotal() {
    const subtotal = this.itens.reduce((sum, item) => sum + item.preco, 0);
    return subtotal * (1 - this.desconto / 100);
  }
}

const carrinho = new Carrinho();
carrinho.adicionarItem("Livro", 50);
carrinho.aplicarDesconto(10);
console.log(carrinho.calcularTotal()); // 45
```

---

## **2. Arquitetura e Design de Software**
Boas práticas de arquitetura tornam o código **organizado e escalável**.  

✅ **Separação de responsabilidades (SRP)** – Cada parte do código tem uma única função.  
✅ **Padrões de projeto (Design Patterns)** – Padrões ajudam a organizar o código.  
✅ **UI/UX** – Seguir boas práticas de interface melhora a experiência do usuário.  

📌 **Exemplo 1 (Módulos Separados - SRP):**  
```javascript
// auth.js
export class Auth {
  login(email, password) {
    return email === "admin@email.com" && password === "1234";
  }
}

// ui.js
import { Auth } from "./auth.js";
const auth = new Auth();
function loginUser() {
  const email = prompt("Digite seu e-mail:");
  const password = prompt("Digite sua senha:");
  console.log(auth.login(email, password) ? "Login OK!" : "Falha!");
}
```

📌 **Exemplo 2 (Factory Pattern):**  
```javascript
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
}

class CarroFactory {
  criarCarro(tipo) {
    switch (tipo) {
      case "sedan": return new Carro("Toyota Corolla");
      case "suv": return new Carro("Honda CR-V");
      default: throw new Error("Tipo inválido");
    }
  }
}

const factory = new CarroFactory();
const meuCarro = factory.criarCarro("suv");
console.log(meuCarro.modelo); // "Honda CR-V"
```

📌 **Exemplo 3: Feedback Visual Imediato(UI/UX)**  

```javascript
// Formulário com validação em tempo real
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
  if (!emailInput.value.includes('@')) {
    emailInput.style.borderColor = 'red';
    document.getElementById('email-error').textContent = 'E-mail inválido';
  } else {
    emailInput.style.borderColor = 'green';
    document.getElementById('email-error').textContent = '';
  }
});
```

📌 **Exemplo 4: Carregamento Assíncrono sem Bloqueio(UI/UX)**  
```javascript
// Mostrar loader durante requisições
async function fetchData() {
  document.getElementById('loader').style.display = 'block';
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    renderData(data);
  } catch (error) {
    showErrorUI();
  } finally {
    document.getElementById('loader').style.display = 'none';
  }
}
```
---

## **3. Desenvolvimento e Codificação**
Para escrever um código limpo e eficiente, seguimos boas práticas como:  
✅ **Código limpo** – Nomes de variáveis claros, sem duplicação de código.  
✅ **Princípios SOLID** – Garantem que o código seja fácil de manter.  
✅ **Uso de versionamento (Git)** – Ajuda a rastrear mudanças.  

📌 **Exemplo 1 (Código Limpo vs Ruim):**  
```javascript
// Ruim
function p(a, b) {
  return a * b;
}

// Bom
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}
```

📌 **Exemplo 2 (Open/Closed Principle - SOLID):**  
```javascript
class Forma {
  area() {
    throw new Error("Método 'area' deve ser implementado");
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }
  area() {
    return Math.PI * this.raio ** 2;
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }
  area() {
    return this.lado ** 2;
  }
}

const formas = [new Circulo(5), new Quadrado(4)];
formas.forEach(forma => console.log(forma.area()));
```

📌 **Exemplo 3: Fluxo de Trabalho Padrão(Versionamento com Git)**  
```bash
# Criando uma nova feature
git checkout -b feature/user-authentication
git add .
git commit -m "Implementa validação de senha com regex"
git push origin feature/user-authentication

# Mesclando após revisão
git checkout main
git merge --no-ff feature/user-authentication
```

📌 **Exemplo 4: Resolução de Conflitos(Versionamento com Git)**
```bash
# Quando ocorre conflito:
git fetch origin
git rebase origin/main
# Resolver conflitos manualmente nos arquivos marcados
git add .
git rebase --continue
```

---

## **4. Testes e Qualidade de Software**
Garantir que o software funciona corretamente é essencial.  
✅ **TDD (Test-Driven Development)** – Escrevemos testes antes da implementação.  
✅ **Testes automatizados** – Ajudam a evitar erros futuros.  
✅ **Boas práticas de cobertura de testes** – Testamos os principais fluxos do sistema.  

📌 **Exemplo 1 (Teste Unitário com Jest):**  
```javascript
// math.js
export function multiplicar(a, b) {
  return a * b;
}

// math.test.js
import { multiplicar } from "./math.js";
test("Multiplicar 2 * 3 deve retornar 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});
```

📌 **Exemplo 2 (Teste de Integração):**  
```javascript
// api.js
export async function buscarUsuario(id) {
  const resposta = await fetch(`https://api.example.com/users/${id}`);
  return resposta.json();
}

// api.test.js
import { buscarUsuario } from "./api.js";
test("Deve buscar um usuário válido", async () => {
  const usuario = await buscarUsuario(1);
  expect(usuario).toHaveProperty("nome");
});
```

---

## **5. Segurança no Desenvolvimento**
Evitar falhas de segurança é fundamental.  
✅ **Proteção contra ataques (OWASP)** – Evitamos SQL Injection, XSS, etc.  
✅ **Criptografia de dados** – Protegemos informações sensíveis.  

📌 **Exemplo 1 (Prevenção de XSS):**  
```javascript
// Inseguro (não faça isso!)
document.getElementById("comentario").innerHTML = userInput;

// Seguro
document.getElementById("comentario").textContent = userInput;
```

📌 **Exemplo 2 (Criptografia de Senhas com bcrypt):**  
```javascript
import bcrypt from "bcrypt";

async function criarUsuario(email, senha) {
  const hash = await bcrypt.hash(senha, 10);
  armazenarNoBanco(email, hash);
}

async function verificarSenha(senhaDigitada, hash) {
  return await bcrypt.compare(senhaDigitada, hash);
}
```

---

## **6. Manutenção e Sustentabilidade do Código**
O software deve ser fácil de manter ao longo do tempo.  
✅ **Refatoração contínua** – Melhoramos o código sem mudar sua funcionalidade.  
✅ **Boas práticas de documentação** – Explicamos o código para novos desenvolvedores.  
✅ **Monitoramento e logs** – Ajudam a detectar erros rapidamente.  

📌 **Exemplo 1 (Refatoração):**  
```javascript
// Antes
function processarDados(dados) {
  let resultado = [];
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].idade > 18) {
      resultado.push(dados[i].nome);
    }
  }
  return resultado;
}

// Depois
function processarDados(dados) {
  return dados
    .filter(pessoa => pessoa.idade > 18)
    .map(pessoa => pessoa.nome);
}
```

📌 **Exemplo 2 (Documentação JSDoc):**  
```javascript
/**
 * Calcula o IMC (Índice de Massa Corporal).
 * @param {number} peso - Peso em quilogramas.
 * @param {number} altura - Altura em metros.
 * @returns {number} O valor do IMC arredondado.
 */
function calcularIMC(peso, altura) {
  return Math.round(peso / (altura ** 2));
}
```
📌 **Exemplo 3: Logs Estruturados(Monitoramento e logs)**  
```javascript
// logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Uso em uma rota
app.post('/login', (req, res) => {
  try {
    // lógica de login
    logger.info('Login attempt', { user: req.body.email });
  } catch (error) {
    logger.error('Login failed', { error, user: req.body.email });
  }
});
```

📌 **Exemplo 4: Monitoramento de Performance(Monitoramento e logs)**  
```javascript
// Trackeando métricas de performance
const start = process.hrtime();

// Operação crítica
processLargeDataset();

const diff = process.hrtime(start);
console.log(`Operação levou ${diff[0]} segundos e ${diff[1]} nanosegundos`);

// Enviando para ferramentas como New Relic/Sentry
metrics.track('data_processing_time', diff[0]);
```
---

## **Conclusão**
Seguir boas práticas no desenvolvimento de software torna os sistemas mais **eficientes, seguros e fáceis de manter**. Aplicamos:
- **Planejamento** antes de codificar.  
- **Arquitetura organizada** com separação de responsabilidades.  
- **Código limpo e modular** com nomes descritivos.  
- **Testes para garantir qualidade** antes da entrega.  
- **Segurança** contra falhas e ataques.  
- **Manutenção e documentação** para facilitar futuras melhorias.  
