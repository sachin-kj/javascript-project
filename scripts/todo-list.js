const todoList = ['watch', 'sleep'];

function rendertodo() {
  let elem = '';
  for (let i = 0; i < todoList.length; i++) {
    const a = todoList[i];
    const html = `
      <p>
        ${a}
        <button onclick="deleteTodo(${i})">delete</button>
      </p>
    `;
    elem += html;
  }
  document.querySelector('.js-todo').innerHTML = elem;
}

function addtodo() {
  const input = document.querySelector('.js-name-input');
  const name = input.value.trim();
  if (name === '') return;

  todoList.push(name);
  input.value = '';
  rendertodo();
}

function deleteTodo(index) {
  todoList.splice(index, 1); // remove 1 item at that position
  rendertodo(); // re-render list after deletion
}

// render initial todos on load
rendertodo();
