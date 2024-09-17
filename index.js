const input = document.getElementById('input');
const deleteChecked = document.getElementById('deleteChecked');
let list;
let li;
let item = document.getElementById('item');


const addTask = ()=>{
        const inputValue = input.value.trim();


    if(inputValue !== ''){
       li =  document.createElement('li');
       li.innerHTML = '<input type="checkbox" >'+ inputValue + '  <button onclick="deleteTask(this)">Delete</button>';
       item.appendChild(li);


       input.value = '';
    }
    else{
        alert('Please Add a task...')
    }
}



const deleteTask = (btn)=>{
    list = btn.parentNode;
    list.parentNode.removeChild(list);
}

const deletedCheckedTask = ()=>{
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox =>{
        const checkParent = checkbox.parentNode;
        checkParent.parentNode.removeChild(checkParent);
    })
}