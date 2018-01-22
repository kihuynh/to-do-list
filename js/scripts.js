function List (task) {
  this.task = task;
}


 $(document).ready(function() {
  $("form.list").submit(function(event) {
     event.preventDefault();

    var inputTask = $("input#task").val();
    var newTask = new List(inputTask);

   $("ul#list").append("<li><input class='form-check-input' type='checkbox' id='checkbox'><span class='task'>" + newTask.task + "</span></li>");


   $("ul#list").children("li").click(function() {
     $(this).remove();
   });


    $(".result").show();
  });
});


//  $("#checkbox").change(function() {
//    if (this.checked) {
//      value= $(this).val();
//      $("#list li").filter(function() {
//        return $(this).text() == $this.value;
//      }) .remove();
//    }
//  });
