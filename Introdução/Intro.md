# Frameworks de Estilização - Bootstrap vs. HTML/CSS Puro e Fundamentos de Layout

## Parte 1: HTML e CSS Puro

### O que são?
- **HTML (HyperText Markup Language)**: Linguagem de marcação para estruturar conteúdo
- **CSS (Cascading Style Sheets)**: Linguagem de estilo para apresentação visual

### Vantagens:
- **Controle total** sobre o design
- **Performance** (arquivos menores sem código desnecessário)
- **Sem dependências** externas

### Desvantagens:
- **Tempo de desenvolvimento** maior
- **Consistência** entre navegadores requer mais trabalho
- **Responsividade** precisa ser implementada manualmente

### Exemplo básico:
```html
<!-- HTML -->
<button class="btn-primary">Clique aqui</button>

<!-- CSS -->
<style>
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

## Parte 2: Bootstrap

### O que é?
Framework CSS front-end open-source que fornece componentes pré-estilizados e sistema de grid para desenvolvimento responsivo.

### Vantagens:
- **Rapidez** no desenvolvimento
- **Responsividade** embutida
- **Consistência** visual e entre navegadores
- **Componentes prontos** (navbar, cards, modals, etc.)
- **Comunidade grande** e documentação extensa

### Desvantagens:
- **Tamanho do arquivo** maior (pode impactar performance)
- **Customização limitada** se não for bem entendido
- **Design genérico** (sites podem parecer similares)

### Exemplo equivalente:
```html
<!-- Com Bootstrap (após incluir o CSS) -->
<button class="btn btn-primary">Clique aqui</button>
```

## Parte 3: Comparação Direta

| Característica       | HTML/CSS Puro       | Bootstrap           |
|----------------------|---------------------|---------------------|
| Tempo de desenvolvimento | Mais lento        | Mais rápido         |
| Curva de aprendizado  | Mais suave          | Requer aprender framework |
| Personalização       | Total               | Possível, mas dentro do sistema |
| Tamanho             | Mínimo necessário   | Maior (todo o framework) |
| Componentes         | Criar do zero       | Prontos para uso     |
| Responsividade      | Implementar manual  | Já inclusa          |

## Parte 4: Fundamentos de Layout

### 1. Modelo de Caixa (Box Model)
- Todo elemento é uma caixa com: conteúdo, padding, border e margin
- Fundamental para entender espaçamento e dimensionamento

### 2. Display
- **block**: Ocupa toda a largura (div, p, h1)
- **inline**: Só ocupa espaço necessário (span, a)
- **inline-block**: Combina características de ambos
- **flex** e **grid**: Modelos modernos de layout

### 3. Position
- **static**: Padrão, segue o fluxo normal
- **relative**: Posicionamento relativo à sua posição normal
- **absolute**: Posicionamento relativo ao ancestral posicionado mais próximo
- **fixed**: Posicionamento relativo à viewport
- **sticky**: Híbrido entre relative e fixed

### 4. Sistemas de Grid
- **Bootstrap Grid**: Baseado em 12 colunas, usa classes como `col-md-6`
- **CSS Grid**: Sistema nativo do CSS mais poderoso e flexível
- **Flexbox**: Ideal para alinhamento em uma dimensão

### 5. Responsividade
- **Media queries** (@media no CSS)
- **Unidades relativas** (%, vw, vh, rem, em)
- **Mobile-first** vs Desktop-first

## Parte 5: Quando usar cada abordagem

### Use HTML/CSS puro quando:
- O projeto é pequeno e simples
- Performance crítica é necessária
- Você precisa de design totalmente único
- Você quer aprender os fundamentos profundamente

### Use Bootstrap quando:
- Você precisa desenvolver rapidamente
- O projeto é médio/grande com muitos componentes
- Consistência entre navegadores é importante
- A equipe já conhece o framework

## Conclusão

Ambas as abordagens têm seu lugar no desenvolvimento front-end. Como profissionais de UX/UI, é importante entender ambas para poder:
1. Prototipar rapidamente com Bootstrap
2. Criar designs customizados quando necessário
3. Tomar decisões informadas sobre qual abordagem usar em cada projeto

Na próxima aula, vamos colocar isso em prática criando um layout simples com ambas as abordagens!

## Exercício Prático
Crie uma navbar responsiva:
1. Primeiro usando apenas HTML/CSS
2. Depois usando Bootstrap
Compare o tempo de desenvolvimento e o resultado final.
