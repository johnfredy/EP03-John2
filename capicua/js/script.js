window.onload = function()
{
    var sierpinski = false;

    var escalaCapicua = function(niveles)
    {
        var pascal = [];
        var numero=1;
        var multi=1;
        
        for(var j = 1; j <= niveles; j++){
            var resul=multi*multi;
            var texto=multi+" x "+multi+" = "+resul;
            pascal.push(texto);
            numero=numero*10;
            multi+=numero;
        }
        return pascal;

    };

    var imprimeCapicua = (function imprimeCapicua(nivel)
    {
        var txt = "";
        var capicua = escalaCapicua(nivel);
        var colorCelda = "";
        nom_div("pascal").innerHTML = "";
        for(var i = 0; i < capicua.length; i++)
        {
            txt += "<div align = 'center' class = 'nivel' style = 'padding-bottom: "+10+"px;'>"+capicua[i];
           
        }
        nom_div("pascal").innerHTML = txt;
        return imprimeCapicua;
    })(2);

    nom_div("rango").addEventListener('change', function(event)
    {
        nom_div("txtrango").innerHTML = this.value;
        imprimeCapicua(Number(this.value));
    });

    function nom_div(div)
    {
        return document.getElementById(div);
    }
};