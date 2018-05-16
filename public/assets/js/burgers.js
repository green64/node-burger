// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});

// $(function() {
//   $(".change-devoured").on("click", function(event) {
//     var id = $(this).data("id");
//     console.log(id);
//     var newDevoured = $(this).data("newdevoured");

//     var newDevouredState = {
//       devoured: newDevoured
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newDevouredState
//     }).then(
//       function() {
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#bur").val().trim(),
//       devoured: $("[name=devoured]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
