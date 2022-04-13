$(document).ready(function() {

  var form = $('#form'),
      name = $('#name'),
      email = $('#email'),
      message = $('#message'),
      info = $('#info'),
      loader = $('#loader'),
      submit = $("#submit");
  
  form.on('input', '#name, #email, #message', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });
  
  submit.on('click', function(e) {
    info.html('Loading...').css('color', 'red').slideDown();
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {          
          name.val('');
          email.val('');
          message.val('');
          info.html('Message sent!').css('color', 'green').slideDown();
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if($.trim(name.val()) === "") {
      name.css('border-color', 'red');
      valid = false;
    }
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }

});