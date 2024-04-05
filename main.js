const form = document.getElementById('task-form');

    function addLi() {
        let task = document.getElementById('task').value,
            listNode = document.getElementById('list'),   
            liNode = document.createElement("LI"),
            txtNode = document.createTextNode(task);

            liNode.appendChild(txtNode);
            listNode.appendChild(linode);
    }