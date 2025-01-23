//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendList = [];


// Verificar se o nome é válido.
function isValidName(writtenName) { 
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(writtenName);
}

// Limpar espaço de digitação.
function clearName() {
    document.getElementById('amigo').value = '';
}

// Adicionar nome a lista friendList
function addFriend() {
    let writtenName = document.getElementById('amigo').value
    if (writtenName == '') {
        alert("Por favor, insira um nome.");
    } else if (friendList.includes(writtenName)) {
        alert('Nome já existente na lista');
    } else if (isValidName(writtenName)) {
        friendList.push(writtenName);
        console.log(friendList);
        updateFriendListDisplay()
    } else {
        alert("Digite apenas letras.");
    } clearName();
    }
    
    function drawFriend() {
        let listLength = friendList.length // Verifica tamanho da lista
        if (listLength <= 1) {
        alert('A lista não tem gente suficiente para o sorteio. Adicione pelo menos 2 nomes.')
    } else {
        let listLength = friendList.length; // Atualiza o comprimento da lista
        let sortedName = friendList[parseInt(Math.random() * listLength)]; // Sorteia um nome
        alert(`O nome sorteado foi ${sortedName}`); // Exibe o nome na tela
        updateFriendListDisplay()
    }
}

function updateFriendListDisplay() {
    const listElement = document.getElementById('friendList'); // Seleciona o elemento da lista
    listElement.innerHTML = ""; // Limpa a lista existente

    for (let friend of friendList) {
        let listItem = document.createElement('li'); // Cria um elemento <li>
        listItem.textContent = friend; // Define o texto como o nome do amigo
        listElement.appendChild(listItem); // Adiciona o <li> à lista
    }
}