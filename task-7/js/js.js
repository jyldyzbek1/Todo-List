    const form = document.querySelector(".form")
    const input = document.querySelector(".todo-input");
    const btn = document.querySelector(".todo-add");
    const todoList = document.querySelector(".todo-list")

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });


    btn.addEventListener("click", function() {
        const myTodoList = document.createElement("div");


        myTodoList.classList.add("todo-item");
        todoList.append(myTodoList);


        myTodoList.innerText = input.value
        input.value = ''
        
        myTodoList.addEventListener('click', function() {
            myTodoList.remove()
        })
    })