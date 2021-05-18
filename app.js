function tabelaPreco() {
    $.ajax({
        url: 'https://pizzaria.roxo.dev.br/',
        method: 'get',
        success(data) {
            $('#tabela').html(('<tr><td>Sabor</td><td>Valor</td></tr>'))
            data.forEach(function(item) {
                var valBRL = JSON.stringify(item.valor);
                valBRL = valBRL.slice(1, length - 1)
                valBRL = valBRL.replaceAll('.', ',');
                $('#tabela').append(`<tr><td>` + item.nome + `</td><td>` + `R$ ${valBRL}` + `</td></tr>`)
            });
        }
    });
}
tabelaPreco();

function preencherSelect() {
    var qtd = $('#selSabores').val(),
        $select1 = $('#sabor1'),
        $select2 = $('#sabor2'),
        $select3 = $('#sabor3');
    $.getJSON('https://pizzaria.roxo.dev.br/', function(data) {

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
    })

}

function campos() {
    if ($('#selSabores').val() == 1) {
        $('.col1').addClass('active');
        $('.col2').removeClass('active');
        $('.col3').removeClass('active');

    } else if ($('#selSabores').val() == 2) {
        $('.col1').addClass('active');
        $('.col2').addClass('active');
        $('.col3').removeClass('active');
      
    } else if ($('#selSabores').val() == 3) {
        $('.col1').addClass('active');
        $('.col2').addClass('active');
        $('.col3').addClass('active');
    }

    preencherSelect();

}

var sabor1 = 0;
var sabor2 = 0;
var sabor3 = 0;

function pegarSabor1() {
    sabor1 = $('#sabor1').val();
    sabor1 = parseFloat(sabor1);
}

function pegarSabor2() {
    sabor2 = $('#sabor2').val();
    sabor2 = parseFloat(sabor2);
}

function pegarSabor3() {
    sabor3 = $('#sabor3').val();
    sabor3 = parseFloat(sabor3);    
}


function calcValor() {
    
    if (parseInt($('#selSabores').val()) == 1) {
        var total1 = (sabor1);
        $('#valor').val((total1).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        
    }
    if ($('#selSabores').val() == 2) {
        var total2 = (sabor1 / 2) + (sabor2 / 2);
        $('#valor').val((total2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
       
    }
    if ($('#selSabores').val() == 3) {
        var total3 = (sabor1 / 3) + (sabor2 / 3) + (sabor3 / 3);
        $('#valor').val((total3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        
    }
}