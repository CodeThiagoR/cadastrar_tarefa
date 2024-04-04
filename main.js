const form = document.getElementById('task-form');

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputTask = document.getElementById('taskName');

    let line = '<tr>';
    line += `<td>${inputTask.value}</td>`;
    line += '</tr>';

    lines += line;

    const bodyTab = document.querySelector('tbody');
    bodyTab.innerHTML = lines;

    inputTask.value = '';

});