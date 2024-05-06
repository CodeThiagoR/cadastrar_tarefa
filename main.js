$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        let task = $('input').val()
        let list = $('list')
        let item = `<li>${task}</li>`
        $(item).appendTo(list)
    })

    $('button').click(function(){
        (ul).toggle('done')
    })

    $('ul').on('click','li', function() {
        console.log('worked')
        $(this).addClass('concluded');
    });
})