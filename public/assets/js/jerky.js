// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log('ajax page');
$(function() {
    $(".change-order").on("click", function(event) {
      var id = $(this).data("id");
      var newOrder = $(this).data("neworder");
  
      var newOrderState = {
        added: newOrder
      };
  
      // Send the PUT request.
      $.ajax("/api/jerky/" + id, {
        type: "PUT",
        data: newOrderState
      }).then(
        function() {
          console.log("changed purchase to", newOrder);
          console.log(newOrderState);
          

          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newJerky = {
        flavor: $("#ca").val().trim(),
        purchased: $("[name=added]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/jerky", {
        type: "POST",
        data: newJerky
      }).then(
        function() {
          console.log("created new order");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-order").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/jerky/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted order", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".register").on("click", function(event) {
      var id = $(this).data("id");
      var newUserAdd = $(this).data("neworder");
  
      var newState = {
        added: newUserAdd
      };
  
      // Send the PUT request.
      $.ajax("/api/user/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("changed purchase to", newState);
          console.log(newState);
          

          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".register").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newUser = {
        // username: $("#ca").val().trim(),
        // email: $("[name=added]:checked").val().trim(),
        // password: $("[name=added]:checked").val().trim()
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password
      };
  
      // Send the POST request.
      $.ajax("/api/user", {
        type: "POST",
        data: newUser
      }).then(
        function() {
          console.log("created new order");
          console.log(newUser);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  