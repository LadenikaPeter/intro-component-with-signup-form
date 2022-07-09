document.querySelector(".btn").addEventListener("click", function(){
    var firstName = document.querySelector("#input-firstname").value;
    var lastName = document.querySelector("#input-lastname").value;
    var email = document.querySelector("#exampleInputEmail1").value;
    var password = document.querySelector("#exampleInputPassword1").value;
   
   
    if ((firstName === "")&&(lastName === "")&&(email === "")&&(password === "")){
       $("span").removeClass("hide");
       $("img").removeClass("hide");
       $("input").addClass("invalid");
    }else if (firstName === ""){
        $(".firstname-err-span"). removeClass("hide");
        $(".test-err").removeClass("hide");
        $("#input-firstname").addClass("invalid");
    } else if (lastName === ""){
        $(".lastname-err-span").removeClass("hide");
        $(".test-err2").removeClass("hide");
        $("#input-lastname").addClass("invalid")
    } else if (email === ""){
        $(".email-err-span").removeClass("hide");
        $(".test-err3").removeClass("hide");
        $("#exampleInputEmail1").addClass("invalid");
    } else if (password === "") {
        $(".password-err-span").removeClass("hide");
        $(".test-err4").removeClass("hide");
        $("#exampleInputPassword1").addClass("invalid");
    }else{
        return
    }

    if(email === ""){
       var placeholder =  $(".please-work");
        placeholder.attr("placeholder", "email@example/com");
        $(".please-work").addClass("please")
        
    }else{
        return
    }
         
});

