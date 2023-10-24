$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown();
    })

})

$("form").on("submit", function (e) {

    e.preventDefault();

    let listaDeTarefa = $("ul")
    const tarefa = $("#novaTarefa").val();
    const novoItem = $ ("<li></li>").text(tarefa);
    $(listaDeTarefa).append(novoItem);
    $("#novaTarefa").val("");
})

$('ul').on('click', 'li', function() {



    $(this).css('text-decoration', 'line-through');



});


