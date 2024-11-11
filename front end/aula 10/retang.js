class retangulo{
    constructor( altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    //metodo de calcular a area
    getArea() {
        let ret = this.altura * this.largura;
        return ret.toFixed(2);
    }
}
//criando uma instacia do retangulo
const meuRetangulo = new retangulo(8.55, 5.44);
const piso = new retangulo(10.12, 55.36);
const parede = new retangulo(10, 89);
//calculando e exibindo a area3
document.write("<br> Altura: ", meuRetangulo.altura.toFixed(2));
document.write("<br> Largura: ", meuRetangulo.largura.toFixed(2));
document.write("<br> Area: ", meuRetangulo.getArea() + ("<br>"));
document.write("<br> Piso: ", piso.altura.toFixed(2));
document.write("<br> Parede: ", parede.largura.toFixed(2));
document.write("<hr>");

