function List (task) {
  this.task = task;
}


$(document).ready(function() {
  $("form.list").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#task").val();

    var newTask = new List(inputTask);

  //  $('<input type="checkbox"/>').append('li');
    $("ul#list").append("<li><input class='form-check-input' type='checkbox'><span class='task'>" + newTask.task + "</span></li>");

    $("ul#list").click(function() {
      $('li').hide();
    });

    $(".result").show();
  });
});
