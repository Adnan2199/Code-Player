            //Email Validification 
            
            function emailval(email) {
                var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (email == null || email == "") {
                    $("#wrongmail").html("Please Enter an Email ID");
                    return(false);
                } else if ( regex.test(email) == false ) {
                    $("#wrongmail").html("Please Enter a Valid Email ID");
                    return(false);
                } else {
                    return(true);
                }
            }
            
            //Password Validification

            function passstr(password) {
                var strength = 0;
                if (password == null || password == "") {
                    $("#wrongpass").html("Please Enter a Password");
                    return(false);
                } else if(password.length < 7) {
                    $("#wrongpass").html("Password should be atleast 7 characters");
                    return(false);
                } else if (password.match('^[0-9]+$') || password.match(/^[a-zA-Z\s]+$/)) {
                    $("#wrongpass").html("Password should contain alphabets as well as numbers");
                    return(false);
                } else {
                    return(true);
                }
            }

            //Password Confirmation 

            function passconfirm(password,confirmpass) {
                if(password == confirmpass) {
                    return(true);
                } else {
                    $("#wrongconfirmpass").html("Passwords do not match");
                    return(false);
                }
            }

            $("#signup").click(function() {
                var email = $("#email").val();
                var password = $("#pass").val();
                var confirmpass = $("#confirmpass").val();
                if ( emailval(email) == false ) {
                    $("#pass").css("position","relative");
                    $("#pass").css("top","10px");
                } else if ( passstr(password) == false ) {
                    $("#confirmpass").css("position" , "relative");
                    $("#confirmpass").css("top","10px");
                    $("#signup").css("position","relative");
                    $("#signup").css("top","5px");
                } else if ( passconfirm(password,confirmpass) == false ) {
                    $("#signup").css("position","relative");
                    $("#signup").css("top","5px");
                } else {
                    alert("Account Created Successfully");
                }
            })