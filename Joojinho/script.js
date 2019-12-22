// Criar aleatoriedade
function aleat(valor) {
    
    var loopLength = parseInt(valor.toString().length);
    var i = 1;
    var decimal = 1;
    while (i <= loopLength) {
        decimal = decimal * 10;
        i++;
    }
    
    var numAleat = Math.floor(Math.random() * decimal);
    while (numAleat > valor) {
        numAleat = Math.floor(Math.random() * decimal);
    }
    return numAleat;
    
}
function teste() {
    gerarCampo();
    var aa = document.getElementsById("5|12");
    aa.innerHTML = "asdw";
}
var final = '';
function insert(adicionar){
    final = final.concat(adicionar);
}
function send(){
    var campo = document.getElementById("campo");
    campo.innerHTML = final;
}
function gerarCampo() {
    var linhas = document.getElementById("valorLinhas").value;
    var colunas = document.getElementById("valorColunas").value;
    var x = 1;
    var y = 1;
    insert('<table>');
    while(x <= linhas){
        insert('<tr>');
        
        while(y <= colunas){
            insert('<td><div class="blocks" id="');
            insert(x);
            insert('|');
            insert(y);
            insert('"></div></td>');
            y = y+1;
        }
        
        insert('</tr>')
        y = 1;
        x++;
    }
    x = 1;
    insert('</table>')
    send();
}
function first(){
    function idConcat(x,y) {
        var retorno = "";
        retorno = x.concat("|",y)
        console.log(retorno);
        return retorno;
    }
    var numCreatures = document.getElementById("numCreatures").value;
    var linhas = document.getElementById("valorLinhas").value;
    var colunas = document.getElementById("valorColunas").value;
    var i = 1;
    while (i <= numCreatures) {
        document.getElementsById(idConcat(2,5)).innerHTML = "asdw";
        i++;
    }
    /*
    aleat(parseInt(linhas));
    aleat(parseInt(linhas));
    */
}