## 🔹 **1. Configuração Inicial**
Antes de começar a usar o Git, configure seu nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
```

Para verificar suas configurações:

```bash
git config --list
```

---

## 🔹 **2. Criando e Inicializando um Repositório**
Criar um novo repositório Git em um diretório:

```bash
git init
```

Clonar um repositório remoto:

```bash
git clone https://github.com/usuario/repo.git
```

---

## 🔹 **3. Trabalhando com Arquivos**
Verificar o status dos arquivos no repositório:

```bash
git status
```

Adicionar arquivos para serem rastreados pelo Git:

```bash
git add arquivo.txt        # Adiciona um arquivo específico
git add .                  # Adiciona todos os arquivos alterados
```

Criar um commit (salvar as mudanças):

```bash
git commit -m "Descrição do commit"
```

---

## 🔹 **4. Trabalhando com Branches**
Criar uma nova branch:

```bash
git branch nome-da-branch
```

Mudar para outra branch:

```bash
git checkout nome-da-branch
```

Criar e mudar para uma nova branch ao mesmo tempo:

```bash
git checkout -b nome-da-branch
```

Listar todas as branches:

```bash
git branch
```

Juntar (merge) uma branch com a branch principal:

```bash
git checkout main
git merge nome-da-branch
```

Excluir uma branch:

```bash
git branch -d nome-da-branch
```

---

## 🔹 **5. Trabalhando com Repositórios Remotos**
Adicionar um repositório remoto:

```bash
git remote add origin https://github.com/usuario/repo.git
```

Verificar repositórios remotos:

```bash
git remote -v
```

Enviar commits para o repositório remoto:

```bash
git push origin main   # Envia para a branch main
```

Baixar mudanças do repositório remoto:

```bash
git pull origin main   # Atualiza a branch local com a remota
```

Baixar todas as branches e commits:

```bash
git fetch
```

---

## 🔹 **6. Revertendo Alterações**
Descartar mudanças em um arquivo:

```bash
git checkout -- arquivo.txt
```

Desfazer um commit (mantendo as alterações no código):

```bash
git reset --soft HEAD~1
```

Desfazer um commit (removendo as alterações no código):

```bash
git reset --hard HEAD~1
```

Reverter um commit específico:

```bash
git revert ID_DO_COMMIT
```

---

## 🔹 **7. Logs e Histórico**
Ver histórico de commits:

```bash
git log
```

Ver histórico resumido:

```bash
git log --oneline
```

Ver mudanças entre commits:

```bash
git diff
```

---

## 🔹 **8. Stash (Salvar Alterações Temporariamente)**
Se precisar trocar de branch sem perder as alterações:

```bash
git stash
```

Listar stashes salvos:

```bash
git stash list
```

Restaurar o último stash salvo:

```bash
git stash pop
```

Remover um stash salvo:

```bash
git stash drop
```
