# 🕹️ Game Store API

API REST desenvolvida em **Node.js** para simular o backend de uma **loja de games**, com gerenciamento de **produtos** e **categorias**, utilizando relacionamento entre entidades.

O projeto foi criado com foco em boas práticas de backend, modelagem de dados e validações.

---

## 🚀 Tecnologias utilizadas

- Node.js  
- NestJS  
- TypeORM  
- MySQL  
- class-validator  
- TypeScript  

---

## 📦 Estrutura do Projeto

O sistema possui duas entidades principais:

### 🧩 Produto
Representa os jogos disponíveis na loja.

**Atributos:**
- `id` (number)
- `nome` (string)
- `plataforma` (string)
- `preco` (decimal)
- `estoque` (number | null)

> 🔹 O campo `estoque` pode ser **nulo**, permitindo produtos de **mídia digital** (estoque ilimitado).

---

### 🗂️ Categoria
Define o tipo de mídia do produto.

**Atributos:**
- `id` (number)
- `midia` (string)  
  Exemplo: `Física`, `Digital`

---

## 🔗 Relacionamento entre as entidades

- Um **Produto** pertence a **uma Categoria**
- Uma **Categoria** pode conter **vários Produtos**

📌 **Relacionamento:**  
`Produtos (ManyToOne) → Categorias`

---

## 🧠 Regras de negócio implementadas

- Produtos digitais podem não possuir estoque
- Produtos físicos possuem controle de estoque
- Validações são feitas via DTOs
- Campos como `nome` e `plataforma` são obrigatórios
- Valores monetários não podem ser negativos

---
