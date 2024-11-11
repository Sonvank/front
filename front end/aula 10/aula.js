const pessoa = {
nome: ["Mimas","Turbo"],
idade: 666,
sexo: "masculino",
interesse: ["música", "esquiar"],
bio: function() {
    alert(
        this.nome[0] + " " + this.nome[1] + " tem " + this.idade + " anos de idade. ele gosta de " 
        + this.interesse[0] + 
        " e " +
        this.interesse[1] +
        "."
    );
},
saudacao: function () {
    alert("Oi! eu sou " + this.nome[0] + ".");
},
};
pessoa.bio();
pessoa.saudacao();
