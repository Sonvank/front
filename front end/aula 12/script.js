class Aluno {
    constructor(nome, nota1, nota2, nota3){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.media = (nota1 + nota2 + nota3) / 3;
        if(this.media >= 7){
            this.situacao = "aprovado";
        } else if (this.media >=5 ){
            this.situacao = "recuperação";
        }else {
            this.situacao = "reprovado";
        }
    }
}

function ArmazenaDados(){
    nome = document.getElementById("nome").value;
    nota1 = parseFloat (document.getElementById ("n1").value);
    nota2 = parseFloat (document.getElementById ("n2").value);
    nota3 = parseFloat (document.getElementById ("n3").value);
    aluno = new Aluno(nome, nota1, nota2, nota3);
    localStorage.setItem("aluno", JSON.stringify(aluno));
};
function RecuperarDados(){
    const alunoRecuperado= localStorage.getItem("aluno");
    const aluno0bj = JSON.parse(alunoRecuperado);
    document.getElementById("nomeAluno").innerHTML =aluno0bj.nome;
    document.getElementById("nota1Aluno").innerHTML =aluno0bj.nota1.toPrecision(3);
    document.getElementById("nota2Aluno").innerHTML =aluno0bj.nota2.toPrecision(3);
    document.getElementById("nota3Aluno").innerHTML =aluno0bj.nota3.toPrecision(3);
    document.getElementById("mediaAluno").innerHTML =aluno0bj.media.toPrecision(3);
    document.getElementById("statusAluno").innerHTML =aluno0bj.situacao;
    if (aluno0bj.situacao ==="APROVADO"){
        document.getElementById("dadosAluno").style.backgroundColor = "#cee2e8";
        document.getElementById("statusAluno").style.color = "#0d6efd";
    }
    else{
        document.getElementById("dadosAluno").style.backgroundColor = "#ffcccc";
    };
};