
const startBtn = document.querySelector('.start-btn')
const session = document.querySelector('.minutes')
const resetBtn = document.getElementById('reset-btn')
const secondDiv = document.querySelector('.seconds')
let freshStart = true

let myInterval;
let isRunning = false;
let totalSeconds;

const startTimer = () => {

    if (isRunning) return;

    isRunning = true;
    startBtn.textContent = 'STOP';

    if (freshStart) {
        const sessionAmount = Number.parseInt(session.textContent);
        totalSeconds = sessionAmount * 60;
        freshStart = false;
    }

    myInterval = setInterval(updateSeconds, 1000);
};

const stopTimer = () => {
    clearInterval(myInterval)
    isRunning = false;
    startBtn.textContent = 'START'
}


//reiniciar el timer
const resetTimer = () => {
    isRunning = false;
    clearInterval(myInterval)
    freshStart = true

    session.textContent = '25'
    secondDiv.textContent = '00'

};

const updateSeconds = () => {
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');

    totalSeconds--;

    
    if (totalSeconds < 0) {
        stopTimer();
       
        return;
    }

    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
    } else {
        secondDiv.textContent = secondsLeft;
    }
    minuteDiv.textContent = `${minutesLeft}`
};


startBtn.addEventListener('click', () => {
    //if timer is running we make it stop
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});


resetBtn.addEventListener('click', () => {
        resetTimer()
        startTimer()
})

//funcion que agrega tareas a un lu
const tarea = document.getElementById('task-input')
const numPom = document.getElementById('number-pom')
const saveBtn = document.getElementById('save-task-btn')
const taskList = document.getElementById('task-list')
const inputForm = document.querySelector('.input-form');
const btnDelete = document.getElementById('btn-delete-task')


let firtstask = true;
saveBtn.addEventListener('click', () => {



    const taskText = tarea.value.trim();

    if (taskText !== '') {
        const newTask = document.createElement('li');


        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✅';
        deleteBtn.className = 'delete-task-btn';
        if(firtstask){
            alert('Press the ✅ when you have finished the task')
            firtstask = false;
        }
        


        deleteBtn.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        });


        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteBtn);

        // agrega la nueva tarea a la lista principal
        taskList.appendChild(newTask);

        tarea.value = '';
    }
});