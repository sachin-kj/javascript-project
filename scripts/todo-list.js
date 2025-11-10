const todoList = [{
  name :'watch',
  time :'12-02-2022'
},
 {name :'sleep',
time : '02-10-2019'
}];

function rendertodo() {
  let elem = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoobj = todoList[i];
    const name=todoobj.name;
    const time=todoobj.time; 
    const html = `
      <p>
        ${name} ${time}
        <button class="del" onclick="todoList.splice(${i},1);
   ;rendertodo()">delete</button>
      </p>
    `;
    elem += html;
  }
  document.querySelector('.js-todo').innerHTML = elem;
}

function addtodo() {
  const taskinput = document.querySelector('.js-name-input');
  const dateinput=document.querySelector('.js-date');
  const duedate=dateinput.value;
  const name = taskinput.value;
  if (name === '') return;

  todoList.push({
    name:name,
  time : duedate,
});
  taskinput.value = '';
  dateinput.value='';
  rendertodo();
}
function cleartodo(){
  todoList.length=0;
  rendertodo();
  

}

// 
// render initial todos on load
rendertodo();
