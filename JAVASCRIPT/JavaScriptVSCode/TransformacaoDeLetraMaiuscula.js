function maiusculo() {
    var letra = document.getElementById("texto").value; /*criação da variável letra, pegar a informação que está no textárea de id=texto */
    letra = letra.toUpperCase();                        /*variável letra recebe ela mesmo, porém, tudo em maiúsculo */
    document.getElementById("texto").value = letra;     /*pega tudo que foi colocado em maiúculo e inclui na área de texto */
}