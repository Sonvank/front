class Area{
    constructor(x, y, METRO){
        this.x = x;
        this.y = y;
        this.M2 = METRO;
    }
getArea(){
    let ret = this.x * this.y;
    return ret;
}
getOrcamento(){
    let orc = this.getArea() * this.M2;
    return 'Área: ' + this.getArea() + '<br> R$ ' + orc;
}
}
const sala = new Area (7.16, 7.56, 100);
const chao = new Area (7.16, 7.56, 100);
document.write("<br> X: " + sala.getOrcamento());
document.write("<br> Y: " + chao.getOrcamento());

