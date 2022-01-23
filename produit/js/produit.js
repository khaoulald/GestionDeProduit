var globalData;

function bringData(){
    $.get("produi.json", function(data){
        console.log(data);
        globalData = data;
        filltable()
    });
}

bringData();


function filltable(){
    globalData.forEach(element => {
        var provider_info = element.fournisseur["RS"] +'<br>' + element.fournisseur["Adresse"];
        $('#tb').append($('<tr>')
        .append($('<td>').append(element.id))
        .append($('<td>').append(element.Désignation))
        .append($('<td>').append(element.prix))
        .append($('<td>').append(element.catégorie))
        .append($('<td>').append(element.disponibilité))
        .append($('<td>').append(provider_info))

    )});
}
$(document).ready(function(){
    $("#search").on("keyup",function(){
        var value =$(this).val().toLowerCase();
        $("#tb tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)

        });
    });
    }); 
    function sortTable(column, type) {

        //Get and set order
        //Use -data to store wheater it will be sorted ascending or descending
        var order = $('.table thead tr>th:eq(' + column + ')').data('order');
        order = order === 'ASC' ? 'DESC' : 'ASC';
        $('.table thead tr>th:eq(' + column + ')').data('order', order);
    
    
        $('#tb tr').sort(function(a, b) {
    
          a = $(a).find('td:eq(' + column + ')').text();
          b = $(b).find('td:eq(' + column + ')').text();
          switch (type) {
            case 'text':
              return order === 'ASC' ? a.localeCompare(b) : b.localeCompare(a);
              break;
            case 'number':
              return order === 'ASC' ? a - b : b - a;
              break;
    
          }
    
        }).appendTo('.table tbody');
      }
      $('#ID').click(function() {
        sortTable(0, 'number');
      });
      $('#DES').click(function() {
        sortTable(1, 'text');
      });
      $('#PRX').click(function() {
        sortTable(2, 'number');
      });
      $('#CAT').click(function() {
        sortTable(3, 'text');
      });
      $('#DISP').click(function() {
        sortTable(4, 'text');
      });
      $('#FOUR').click(function() {
        sortTable(5, 'text');
      });
    







