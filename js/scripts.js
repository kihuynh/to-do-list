function List (task) {
  this.task = task;
}


$(document).ready(function() {
  $("form.list").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#task").val();

    var newTask = new List(inputTask);

    $("ul#list").append("<li><span class='task'>" + newTask.task + "</span></li>");

    $(".result").show();
  });
});
