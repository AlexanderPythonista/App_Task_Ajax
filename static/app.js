$(document).ready(function() {

    
    // Show Tasks
    function loadTasks() {
        $.ajax({
            url: "show_tasks.php",
            type: "POST",
            success: function(data) {
                $("#tasks").html(data);
            }
        });
    }

    loadTasks();

    // Add Task
    $("#addBtn").click( function(e) {
        e.preventDefault();
    
        
        
        task = $("#taskValue").val();
   
        
        $.ajax({
            url: "add_task.php",
            type: "POST",
            data: {task},
            success: function(data) {
                loadTasks();
                $("#taskValue").val('');
                if (data == 0) {
                    alert("Something wrong went. Please try again.");
                }
            }
        });
    }
    );

    // Remove Task
    $(document).on("click", ".removeBtn", function(e) {
        e.preventDefault();
        id = $(this).data('id');
        
        
        $.ajax({
            url: "remove_task.php",
            type: "POST",
            data: {id},
            success: function(data) {
                loadTasks();
                if (data == 0) {
                    alert("Something wrong went. Please try again.");
                }
            }
        });
    });
});

