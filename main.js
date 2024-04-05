$(document).ready(function() {
    $('form').on('submit', function(event){
        event.preventDefault();
        let task = $('input').val()
        let list = $(".lista")
        let go = `<li>${task}</li>`
        $(go).appendTo(list)
    });

    $('ul').on('click','li', function() {
        console.log('Worked')
        $(this).addClass('done');
    });
})