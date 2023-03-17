function calculaIMC() {
    /* reseta os compos para a condição inicial */
    document.getElementById("altura").style.borderColor = "#ffffff";
    document.getElementById("altura").style.backgroundColor = "#ffffff";
    document.getElementById("peso").style.borderColor = "#ffffff";
    document.getElementById("peso").style.backgroundColor = "#ffffff";
    /* condição de preenchimento do campo */
    if(document.getElementById("peso").value == "") {   /*Se no documento com Id = peso estiver com valor vazio */
        alert("Preencha o peso");                       /*msg de alerta para preencher o espaço peso */
        document.getElementById("peso"). style.borderColor = "red";
        document.getElementById("peso"). style.backgroundColor = "ffe5e5";
        document.getElementById("peso"). focus();       /* foco no campo de peso */
        return false;                                   /* returna falso, pois não conseguiu calcular o IMC */
    }
    if(document.getElementById("altura").value == "") {
        alert("Preencha a altura");
        document.getElementById("altura"). style.borderColor = "red";
        document.getElementById("altura"). style.backgroundColor = "ffe5e5";
        document.getElementById("altura"). focus();
        return false;
    }
    /* Se os campos estuverem preenchidos */
    var peso = parseFloat(document.getElementById("peso").value);       /*parsetFloat = converte o valor/Letra do peso em valor de ponto flutuante/número */
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso/ (altura*altura);
    alert("Seu IMC é: " + resultado);
    return true;
}
