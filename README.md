# challenge-amigo-secreto_pt-main

# Amigo Secreto - Projeto JavaScript

## Sobre o Projeto
Este é um projeto simples para gerenciar e sortear amigos em um jogo de Amigo Secreto. Ele permite que os usuários adicionem nomes à lista, sorteiem um nome aleatório e limpem a lista após o sorteio. É uma aplicação desenvolvida em HTML, CSS e JavaScript, focada em aprender e praticar manipulação de DOM e uso de funções dinâmicas.

---

## Funcionalidades

- **Adicionar Amigo**: Permite adicionar um nome à lista de amigos.
- **Validação**: Verifica se o nome é válido (apenas letras e espaços) e se já existe na lista.
- **Exibir Lista**: Atualiza e exibe a lista de amigos na tela.
- **Sortear Amigo**: Sorteia um nome aleatório da lista.
- **Limpar Lista Após Sorteio**: Esvazia a lista de amigos após o sorteio.

---

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

---

## Estrutura do Projeto

```plaintext
/
|-- index.html       # Estrutura da interface
|-- style.css        # Estilização visual
|-- app.js           # Lógica e funcionalidades em JavaScript
|-- assets/          # Imagens e outros arquivos
```

---

## Como Usar

1. **Baixe ou clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. **Abra o arquivo `index.html` em qualquer navegador**.

3. **Adicione Nomes**:
   - Insira um nome no campo de texto e clique em "Adicionar".
   - O nome será validado e, se aceito, adicionado à lista exibida na tela.

4. **Sortear Amigo**:
   - Clique no botão "Sortear amigo".
   - O sistema irá verificar se há pelo menos dois nomes na lista antes de sortear.
   - O nome sorteado será exibido em um alerta e a lista será limpa.

---

## Funções Importantes

### `isValidName(writtenName)`
- Verifica se o nome inserido contém apenas letras e espaços.

### `addFriend()`
- Adiciona um novo amigo à lista, validando o nome e evitando duplicatas.

### `updateFriendListDisplay()`
- Atualiza dinamicamente a lista de amigos exibida na interface.

### `drawFriend()`
- Sorteia um nome aleatório da lista e limpa os dados após o sorteio.

---

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Fork o repositório
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Minha nova funcionalidade"
   ```
4. Dê push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request

---

## Autor
- **Luís Cláudio** - Desenvolvedor Jr.