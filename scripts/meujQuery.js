$(document).ready(function() {
    //Facer unha páxina web sobre altas de incidencias empregando Ajax
    //(páxina incidencia.html) tendo en conta que:
    //A data inicial que se amosará será por defecto a do día actual
    var f = new Date();
    var data = f.getDate() + "/" + [f.getMonth() + 1] + "/" + f.getFullYear();
    $("#data").val(data);
    //A aula seleccionarase dun despregable de aulas obtido dinamicamente da táboa aulas
    $.getJSON("servidor/cargarAulas.php", function(au) {
        //selecciona cada fila de aulas (each)
        $.each(au, function() {
            $("#aula").append("<option value='" + this.codigo + "'>" + this.nome + "</option> ");
        });
    });
    //Tanto o profesor que comunica a incidencia como o profesor que a resolve
    //serán obtidos dinamicamente da táboa de profesores
    $.getJSON("servidor/cargarProfesores.php", function(prof) {
        $.each(prof, function() {
            $("#profeComunica,#profeResolve").append("<option value='" + this.codigo + "'>" + this.nome +
                " " + this.apelidos + "</option> ");
        });
    });
    //Hai que dotar de contido aos botóns e ligazóns que existen na páxina programando o evento asociado
    //BOTON RESTABLECER
    $("#limpar").click(function() {
        $("#form1").each(function() {
            this.reset();
        });
        $("#data").val(data);
    });
    //BOTON ENVIAR
    $("#enviar").click(function() {
        $.post("servidor/altaIncidencia.php",
            $("#form1").serialize(),
            alert("ENVIADO")
        );
    });
    //LINK BAIXAS
    //LINK MODIFICAR
    //LINK LISTAR
    $("a:contains(xestion), a:contains(alta)").attr("href", "incidencia.html");
    $("a:contains(lista)").attr("href", "listado.html");
    $("a:contains(baixa)").hide();
    $("a:contains(modif)").hide();

   
    
    /***************************
     $("li a:contains(modificaci)").click(function() {
        var valores = "";
        //Obtenemos todos los valores contenidos en los <td> de la fila seleccionada
        fecha = $("tr td:eq(1)").text();
        aula = $("tr td:eq(2)").text();
        comunica = $("tr td:eq(3)").text();
        resolve = $("tr td:eq(4)").text();
        descrip = $("tr td:eq(5)").text();
        //Redireccionamos a pagina incidencias y pasamos valores por URL
        window.location.href = "/incidencia/incidencia.html?var1="+fecha+"&var2="+aula+
        "&var3="+comunica+"&var4="+resolve+"&var5="+descrip+"";

        //Cargamos valores en pagina de altas para modificar
        $("#data").text(fecha);
        $("#aula").append('<option value="' + this.codigo + '">' + aula + '</option>');
        $("#profeComunica").append('<option value="' + this.codigo + '">' + comunica + '</option>');
        $("#profeResolve").append('<option value="' + this.codigo + '">' + resolve + '</option>');
        $("#descricion").text(descrip);

    });   
       ***********************************/

    //borrar o contido de #listado
    $("#listado").text("");
    //cargar o contido de #listado
    var cod=1;
    var t = "<table style='border: 1px solid black'><tr><th>CODIGO</th><th>DATA</th><th>NOME</th>" +
        "<th>PROFESOR COMUNICA</th><th>PROFESOR RESOLVE</th><th>DESCRIPCIÓN</th><th>RESOLTA</th></tr>";
    $.getJSON("servidor/listado.php", function(data) {
        //selecciona cada fila da tabla iincidencias
        $(data).each(function() {
            t += '<tr onclick="opmenu('+cod+++');"><td>' + this.codigo + '</td><td>' + this.data + '</td><td>' + this.nome +
                '</td><td>' + this.comunica + '</td><td>' + this.resolve + '</td><td>' +
                this.descricion + '</td><td>' + this.resolta + '</td></tr>';
        });
        t += "</table>";
        $("#listado").append(t);
    });

     //borrar rexistro
    $("li a:contains(baixa)").click(function() {
        $.post("servidor/eliminarIncidencia.php", {
            codigo: borra
        });
    });
    
});


    var code;
    var borra;

    function opmenu(cod){
         $("tr:eq(" + code + ")").css("background-color","white");
         code = cod;
         $("tr:eq(" + cod + ")").css("background-color","red");

         $("a:contains(baixa)").show();
         $("a:contains(modif)").show();
         borra = $("tr:eq(" + code + ") input").val();
    }