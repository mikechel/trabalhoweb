function listar() {
    $.ajax({
        url: 'https://pizzaria.roxo.dev.br/',
        method: 'get',
        success(data) {
            $('#tabela').html(('<tr><td>Sabor</td><td>Valor</td></tr>'))
            data.forEach(function(item) {
                var valorBR = JSON.stringify(item.valor);                   
                valorBR = valorBR.slice(1, length-1)
                valorBR = valorBR.replaceAll('.',',');

                $('#tabela').append('<tr><td>' + item.nome + '</td><td>' + `R$ ${valorBR}` + '</td></tr>')
                //?$('#tabela').append('<tr><td>' + item.nome + '</td><td>' + item.valor + '</td></tr>')
                //com o append ele concatena a nova lista na que ja foi gerada. usando o html, o codigo gera uma lista nova e atualizada
                
            });
        }
    });
}
listar();

function preencherSelect() {
    $('.tab menu a').on("click",function(){
        var qtd = $(this).val();
    });
    var $select1 = $('#sabor1');
    var $select2 = $('#sabor2');
    var $select3 = $('#sabor3');

    $.getJSON('https://pizzaria.roxo.dev.br/', function(data) {
        //$select1.html('')
        //$select2.html('')
        //$select3.html('')
        if (qtd == 1) {
            for (let i = 0; i < data.length; i++) {
                $select1.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
            }
        } else if (qtd == 2) {
            for (let i = 0; i < data.length; i++) {
                $select1.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
                $select2.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
            }
        } else if (qtd == 3) {
            for (let i = 0; i < data.length; i++) {
                $select1.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
                $select2.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
                $select3.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
            }
        }
    });

}

//pega o valor
var sabor1 = 0;
var sabor2 = 0;
var sabor3 = 0;

function getSabor1() {

    sabor1 = $('#sabor1').val();
    sabor1 = parseFloat(sabor1)
    console.log(sabor1)
    //onfocusout
}

function getSabor2() {
    sabor2 = $('#sabor2').val();
    sabor2 = parseFloat(sabor2)
    console.log(sabor2)
    //onfocusout
}

function getSabor3() {
    sabor3 = $('#sabor3').val();
    sabor3 = parseFloat(sabor3)
    console.log(sabor3)
    //onfocusout
}


$('.sabores .tab-menu a').first().addClass('active');
$('.sabores .item').first().addClass('active');

$('.sabores .tab-menu a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('.sabores .tab-menu a, .sabores .item').removeClass('active');
    $('sabores .item').removeClass('active');

    $(this).addClass('active');
    $(itemId).addClass('active');
});

