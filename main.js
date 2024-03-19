const button = document.querySelector('button')
const inputField = document.querySelector('input')
const todoList = document.querySelector('.todo-list')
const emptyList = document.querySelector('.empty-list-message')

let activities = []

showContent()

button.addEventListener('click',function(){
    const newActivity = inputField.value

    if(newActivity.length != 0){
        activities.push(newActivity)
        showContent()
    }else{
        alert('Non hai inserito un\'attività da svolgere!')
    }
})



//funzioni
function showContent(){
    todoList.innerHTML = ''
    emptyList.innerHTML = ''

    if(activities.length > 0){
        activities.forEach(function(activity,index){
            todoList.innerHTML += `
            <li class="todo-item">
                <div class="todo-check">
                  <img src="img/check.svg" alt="Check Icon" />
                </div>
                <p class="todo-text">${activity}</p>
              </li>`
        })

        const checks = document.querySelectorAll('.todo-check')
        checks.forEach(function(check,index){
            check.addEventListener('click',function(){
                activities.splice(index,1)
                showContent()
            })
        })
    
    }else{
        emptyList.innerHTML = 'Sembra non ci siano attività da svolgere'
    }   
}