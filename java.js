let randomNumber;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Número sorteado:', randomNumber); // Para depuração
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button[onclick="checkGuess()"]').disabled = false;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessList').innerHTML = '';
    document.getElementById('statusMessage').textContent = 'Número sorteado!';
    document.getElementById('statusMessage').style.color = 'blue';
}

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');
    
    if (userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Informe um número válido entre 1 e 100';
        resultMessage.style.color = 'red';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Tente um número maior';
        resultMessage.style.color = 'orange';
        addGuessToList(userGuess);
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Tente um número menor';
        resultMessage.style.color = 'orange';
        addGuessToList(userGuess);
    } else if (userGuess === randomNumber) {
        resultMessage.textContent = 'Parabéns, você acertou o número!';
        resultMessage.style.color = 'green';
        addGuessToList(userGuess);
    }
}

function addGuessToList(guess) {
    const guessList = document.getElementById('guessList');
    const listItem = document.createElement('li');
    listItem.textContent = `Seu palpite: ${guess}`;
    guessList.appendChild(listItem);
}
