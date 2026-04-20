# 🚀 COMO HOSPEDAR SEU APP GRATUITAMENTE
## MotoDesk — Guia para Leigos

---

## O QUE VOCÊ VAI USAR (TUDO GRATUITO)

| Serviço | Para quê serve | Custo |
|---------|----------------|-------|
| **Firebase** (Google) | Banco de dados em tempo real | Grátis até ~100k pedidos/mês |
| **Vercel** | Hospedar o site na internet | Grátis para sempre (plano Hobby) |
| **GitHub** | Guardar os arquivos | Grátis para sempre |

---

## PASSO 1 — CRIAR O BANCO DE DADOS (Firebase)

### 1.1 Criar conta no Firebase
1. Acesse: https://firebase.google.com
2. Clique em **"Começar"** ou **"Get started"**
3. Faça login com sua conta Google (Gmail)

### 1.2 Criar um projeto
1. Clique em **"Adicionar projeto"**
2. Nome do projeto: `motoDesk` (ou qualquer nome)
3. Desative o Google Analytics (não precisa)
4. Clique **"Criar projeto"** e aguarde

### 1.3 Criar o banco de dados Realtime
1. No menu esquerdo, clique em **"Compilação"** → **"Realtime Database"**
2. Clique **"Criar banco de dados"**
3. Escolha o servidor mais próximo (pode deixar o padrão)
4. Em "Regras de segurança", escolha **"Modo de teste"** (mais fácil pra começar)
5. Clique **"Ativar"**

### 1.4 Pegar as credenciais do Firebase
1. No menu esquerdo, clique na **engrenagem ⚙️** → **"Configurações do projeto"**
2. Role até a seção **"Seus apps"**
3. Clique no ícone **"</>"** (Web)
4. Nome do app: `motoDesk`, clique **"Registrar app"**
5. Vai aparecer um código assim:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "moto-desk-xxx.firebaseapp.com",
  databaseURL: "https://moto-desk-xxx-default-rtdb.firebaseio.com",
  projectId: "moto-desk-xxx",
  storageBucket: "moto-desk-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

6. **COPIE ESSES VALORES** — você vai precisar no próximo passo

---

## PASSO 2 — CONFIGURAR OS ARQUIVOS

1. Abra o arquivo **`firebase-config.js`** num editor de texto (Bloco de Notas, etc.)
2. Substitua cada campo com os seus valores:

```javascript
const firebaseConfig = {
  apiKey: "SEU_API_KEY_AQUI",
  authDomain: "SEU_AUTH_DOMAIN",
  databaseURL: "SUA_DATABASE_URL",    ← OBRIGATÓRIO
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};
export default firebaseConfig;
```

3. Salve o arquivo

---

## PASSO 3 — COLOCAR NO GITHUB

### 3.1 Criar conta no GitHub
1. Acesse: https://github.com
2. Clique **"Sign up"** e crie uma conta gratuita

### 3.2 Criar repositório
1. Clique no **"+"** no canto superior direito → **"New repository"**
2. Nome: `motoDesk` (sem espaços)
3. Deixe como **"Public"**
4. Clique **"Create repository"**

### 3.3 Fazer upload dos arquivos
1. Na página do repositório, clique **"uploading an existing file"**
2. Arraste TODOS os 5 arquivos:
   - `restaurante.html`
   - `motoboy.html`
   - `admin.html`
   - `firebase-config.js`
3. Clique **"Commit changes"** (botão verde)

---

## PASSO 4 — HOSPEDAR NO VERCEL (deixar acessível pela internet)

### 4.1 Criar conta no Vercel
1. Acesse: https://vercel.com
2. Clique **"Sign Up"**
3. Escolha **"Continue with GitHub"** (mais fácil)
4. Autorize o acesso

### 4.2 Importar seu projeto
1. No painel do Vercel, clique **"Add New..."** → **"Project"**
2. Procure seu repositório `motoDesk` e clique **"Import"**
3. Deixe tudo como está e clique **"Deploy"**
4. Aguarde ~1 minuto

### 4.3 Pronto! Seu app está no ar 🎉
- O Vercel vai te dar um link tipo: `https://moto-desk-xyz.vercel.app`
- Cada arquivo vira uma página:
  - `/restaurante.html` → Tela do restaurante
  - `/motoboy.html` → App do motoboy (celular)
  - `/admin.html` → Painel administrativo

---

## COMO USAR NO DIA A DIA

### 🏪 Você (dono do restaurante):
- Acesse: `https://seu-app.vercel.app/restaurante.html`
- Salve esse link nos favoritos do computador

### 🛵 Motoboys:
- Manda o link: `https://seu-app.vercel.app/motoboy.html`
- Eles adicionam à tela inicial do celular (vira um app)

### 📊 Você (painel completo):
- Acesse: `https://seu-app.vercel.app/admin.html`
- Veja todos os pedidos, motoboys online, faturamento

---

## ADICIONAR À TELA INICIAL DO CELULAR (vira app)

### Android (Chrome):
1. Abra o link no Chrome
2. Toque nos **3 pontinhos** (...) no canto superior
3. Toque em **"Adicionar à tela inicial"**
4. Confirme

### iPhone (Safari):
1. Abra o link no Safari
2. Toque no botão de **compartilhar** (quadradinho com seta)
3. Toque em **"Adicionar à Tela de Início"**
4. Confirme

---

## LIMITES DO PLANO GRATUITO

| Firebase (Spark) | Limite gratuito |
|------------------|-----------------|
| Conexões simultâneas | 100 |
| Armazenamento | 1 GB |
| Downloads/mês | 10 GB |
| **Suficiente para:** | ~500 pedidos/dia |

Vercel: sem limite de acessos no plano grátis.

---

## DÚVIDAS FREQUENTES

**P: Preciso de cartão de crédito?**
R: Não! Tanto Firebase quanto Vercel têm plano gratuito sem cartão.

**P: Os dados ficam salvos?**
R: Sim! Ficam no Firebase (Google) de forma permanente.

**P: Posso ter vários motoboys ao mesmo tempo?**
R: Sim! Todos veem as corridas disponíveis em tempo real.

**P: O app funciona no iPhone?**
R: Sim! Funciona em qualquer celular com navegador.

---

## PRECISA DE AJUDA?

Qualquer dúvida, copie a mensagem de erro que aparecer e manda pra quem te ajudou a configurar. 
Os erros mais comuns são de credenciais do Firebase mal copiadas.

---
*MotoDesk v1.0 — Criado com Claude*
