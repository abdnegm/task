class Task{
    constructor() {
        this.card = document.createElement("div");
        this.card.id = "card" + taskCount;
        this.card.className = "card";
        document.getElementById("grid").appendChild(this.card);
        
        var br = document.createElement("br");
        this.card.appendChild(br);
        
        this.title = document.createElement("INPUT");
        this.title.placeholder = "Title";
        this.title.style.width = "20vw";
        this.title.style.fontSize = "14pt";
        this.title.style.textAlign = "center";
        this.title.style.align = "center";
        this.title.style.fontWeight = "900";
        this.title.id = "title" + taskCount;
        this.card.appendChild(this.title);

        var br = document.createElement("br");
        this.card.appendChild(br);

        this.info = document.createElement("INPUT");
        this.info.placeholder = "More information";
        this.info.id = "info" + taskCount;
        this.info.style.width = "25vw";
        this.card.appendChild(this.info);
        
        var br = document.createElement("br");
        this.card.appendChild(br);

        this.editButton = document.createElement("BUTTON");
        this.editButton.innerHTML = "&#9998;";
        this.editButton.id = "edit" + taskCount;
        this.editButton.addEventListener("mousedown", function() {
            var num = this.id.substring(4);
            document.getElementById("title" + num).disabled = !document.getElementById("title" + num).disabled;
            document.getElementById("info" + num).disabled = !document.getElementById("info" + num).disabled;
        });
        this.card.appendChild(this.editButton);
        
        this.removeButton = document.createElement("BUTTON");
        this.removeButton.innerHTML = "&#128465;";
        this.removeButton.id = "remove" + taskCount;
        this.removeButton.addEventListener("mousedown", function() {
            swal({
                title: "Are you sure?",
                text: "Are you sure you want to delete this task?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    var num = this.id.substring(6);
                    document.getElementById("grid").removeChild(document.getElementById("card" + num));
                    delete tasks[parseInt(num)];
                }
            });
        });
        this.card.appendChild(this.removeButton);
        
        this.finishTask = document.createElement("BUTTON");
        this.finishTask.innerHTML = "&#10004;";
        this.finishTask.id = "finish" + taskCount;
        this.finishTask.addEventListener("mousedown", function() {
            var num = this.id.substring(6);
            document.getElementById("grid").removeChild(document.getElementById("card" + num));
            delete tasks[parseInt(num)];
            tasksCompleted += 1;
            document.getElementById("combo").innerHTML = tasksCompleted + "x COMBO"
        });
        this.card.appendChild(this.finishTask);
    }
}

var taskCount = 0;
var tasksCompleted = 0
var tasks = {};
function addTask() {
    tasks[taskCount] = new Task();
    taskCount += 1;
}
addTask();