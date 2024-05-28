var taskNumber = 0;


document.getElementById("submit-btn").addEventListener("click", addTask())


function addTask() {
let userinput = document.getElementById("input").value 
const task = document.createElement("div");
task.setAttribute("id", taskNumber);
taskNumber++;
task.innerText = userinput;
document.body.appendChild(task);
}