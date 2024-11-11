function iniciarJogo(){
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    while (true){
        const chute = parseInt(prompt("Digite um numero de 1 a 100:"));
        tentativas++;

        if(chute < numeroAleatorio){
            alert("Tente um número maior.");
        } else if(chute > numeroAleatorio){
            alert("Tente um número menor.");
        }else{
            alert(`Parábens! Você adivinhou o número em ${tentativas} tentativas`);
            break;
        }
    }
}

iniciarJogo();