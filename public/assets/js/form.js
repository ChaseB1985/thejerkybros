// console.log('form function')
// $(function() {
//     if (window.location.pathname === '/') {
//       $('.signup-form').remove()
//       $('.login').on('click', login);
//     }
  
//     if (window.location.pathname === '/register') {
//       $('.login-form').remove()
//       $('.signup').on('click', signup);
//       console.log('click');
//       console.log(signup);
//     }
  
//     if ($('.logout').length) {
//       $('.logout').on('click', logout);
//     }
    
//   })
  
//   function validInput(names) {
//     for(let i=0; i<names.length; i++) {
//       if (!$('[name="'+ names[i] +'"]').val()) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function login(e) {
//     e.preventDefault();
//     if (!validInput(['username', 'password'])) return;
//     $.ajax('/login', {
//       method: 'POST',
//       data: {
//         username: $('[name="username"]').val(),
//         password: $('[name="password"]').val()
//       }
//     }).then(({ user, authToken }) => {
//       $.cookie('auth_token', authToken.token, { expires: 7 });
//       if (!user) throw new Error('invalid username or password');
//       window.location.reload()
//     }).catch((err) => alert(err.responseText))
//   }
  
//   function signup(e) {
//     e.preventDefault();
//     if (!validInput(['username', 'password', 'email'])) return;
//     // $.ajax('/register', {
//     //   method: 'POST',
//     //   data: {
//     //     username: $('[name="username"]').val(),
//     //     email: $('[name="email"]').val(),
//     //     password: $('[name="password"]').val()
//     //   }
//     $.ajax('/register', {
//       type: 'POST',
//       data: {
//         username: $('[name="username"]').val(),
//         email: $('[name="email"]').val(),
//         password: $('[name="password"]').val()
//       }
      
      
//     }).then(({ user, authToken }) => {
//       if (user && authToken.token) {
//         $.cookie('auth_token', authToken.token, { expires: 7 });
//         window.location = '/'
//       } else {
//         throw new Error('something went wrong')
//       }
//     }).catch((err) => alert(err.responseText))
//   }
  
//   function logout(e) {
//     e.preventDefault();
//     $.ajax('/logout', {
//       method: 'DELETE',
//       data: {}
//     }).then(user => {
//       $.removeCookie('auth_token');
//       window.location.reload()
//     })
//   }


// Make sure we wait to attach our handlers until the DOM is fully loaded.

// console.log('form page');
// $(function() {
//     $(".register").on("click", function(event) {
//       var id = $(this).data("id");
//       var newUserAdd = $(this).data("neworder");
  
//       var newState = {
//         added: newUserAdd
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/user/" + id, {
//         type: "PUT",
//         data: newState
//       }).then(
//         function() {
//           console.log("changed purchase to", newState);
//           console.log(newState);
          

//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".signup").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newUser = {
//         // username: $("#ca").val().trim(),
//         // email: $("[name=added]:checked").val().trim(),
//         // password: $("[name=added]:checked").val().trim()
//         "username":req.body.username,
//         "email":req.body.email,
//         "password":req.body.password
//       };
  
//       // Send the POST request.
//       $.ajax("/api/user", {
//         type: "POST",
//         data: newUser
//       }).then(
//         function() {
//           console.log("created new order");
//           console.log(newUser);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".delete-order").on("click", function(event) {
//       var id = $(this).data("id");
  
//       // Send the DELETE request.
//       $.ajax("/api/user/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted order", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });