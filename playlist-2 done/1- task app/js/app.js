const taskForm = document.getElementById('tasks-form');
const taskTitle = document.getElementById('task-name');
const taskTable = document.querySelector('table tbody');
const submitBtn = document.getElementById('submit-btn')

const tasks = getDataFromLocalStorage() ?? [];
let status = null;



function renderTasks() {
    let tasks = getDataFromLocalStorage();
    tasks?.forEach(function (item) {
        taskTable.innerHTML += renderTask(item.title, item.id)
    });
};

renderTasks();

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (status == null) {
        let id = parseInt(Math.random() * 100000);
        tasks.push({ id: id, title: taskTitle.value });
        taskTable.innerHTML += renderTask(taskTitle.value, id);
        addDataToLocalStorage(tasks);
    } else {
        let storageData = getDataFromLocalStorage();
        let newData = storageData.map(function (item) {
            if (item.id == status) {
                return {
                    id: status,
                    title: taskTitle.value
                };
            } else {
                return item;
            }
        });
        addDataToLocalStorage(newData)
        btnUpdateToAdd();
        status = null;
        taskTable.innerHTML = "";
        renderTasks();
    };
    taskTitle.value = '';
});

taskTable.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-delete')){
        let item = e.target;
        let id = item.getAttribute('data-id')
        let storageData = getDataFromLocalStorage();
        let newData = storageData.filter(function(item){
            return item.id != id ;
        });
        addDataToLocalStorage(newData);
        item.parentElement.parentElement.remove();

    }
    if(e.target.classList.contains('btn-edit')){
        let item = e.target;
        let taskTdTitle = item.parentElement.previousElementSibling.textContent;
        taskTitle.value = taskTdTitle;
        btnAddToUpdate();
        status = item.getAttribute('data-id')
    }
});
// const deleteBtns = document.querySelectorAll('.btn-delete');
// const editBtns = document.querySelectorAll('.btn-edit');

// deleteBtns.forEach(function (item) {
//     item.addEventListener('click', function () {
//         let id = item.getAttribute('data-id')
//         let storageData = JSON.parse(localStorage.getItem("task-list"))
//         let newData = storageData.filter(function (ele) {
//             return ele.id != id;
//         });
//         localStorage.setItem('task-list', JSON.stringify(newData))
//         item.parentElement.parentElement.remove();
//     })
// })


// editBtns.forEach(function (ele) {
//     ele.addEventListener('click', function () {
//         
//         submitBtn.value = "Update";
//         submitBtn.classList.remove('bg-success')
//         submitBtn.classList.add('bg-info')

//     });
// })

function renderTask(value, id) {
    return `
    <tr>
    <td>${value}</td>
    <td><button class="btn btn-info btn-edit" data-id="${id}">Edit</button></td>
    <td><button class="btn btn-danger btn-delete" data-id="${id}">Delete</button></td>
    </tr>`;
}




function btnAddToUpdate (){
    submitBtn.classList.remove('bg-success')
    submitBtn.classList.add('bg-info')
    submitBtn.value = "Update";
}
function btnUpdateToAdd() {
    submitBtn.classList.remove('bg-info')
    submitBtn.classList.add('bg-success')
    submitBtn.value = "ADD";
}

function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('task-list'));
}
function addDataToLocalStorage(data) {
    return localStorage.setItem('task-list', JSON.stringify(data));
}