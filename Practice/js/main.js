$(function () {
    $("button").click(function () {
        $(".test").hide();
    })


    $("p").click(function () {
        $(this).hide();
    });

    // $("#p1").mouseenter(function () {
    //     alert("entered p1");
    // })

    // $("#p1").hover(function () {
    //     alert("entered p1");
    // })

    // $("#p1").mouseleave(function(){
    //     alert("leave p1");
    //   });

    // $("#p1").mousedown(function(){
    //     alert("mouse down p1");
    //   });

    $("input").focus(function () {
        $(this).css("background-color", "pink");
    });
    $("input").blur(function () {
        $(this).css("background-color", "pink");
    });


    $("#loremP").on({
        mouseenter: function(){
          $(this).css("background-color", "orange");
        },  
        mouseleave: function(){
          $(this).css("background-color", "red");
        }, 
     
    })

    $("#hide").click(function(){
        $("#p2").hide(1000);
      });
      $("#show").click(function(){
        $("#p2").show(1000);
      });


      $("#fadeBtn").click(function(){
        $(".box1").fadeToggle();
        $(".box2").fadeToggle("slow");
        $(".box3").fadeToggle(3000);
      });

      $(".div-1").click(function(){
        $(".div-2").slideToggle("5000");
        $("#btnS").click(function(){
            $("#div-2").stop();
          });
      });

      $("#btnA").click(function(){
        $(".div-anim").animate({right: '100px'});
      });

      $("#btnA2").click(function(){
        $(".div-anim").animate({
          left: '300px',
          opacity: '0.5',
          height: '200px',
          width: '200px'
        });
      });

      $(".btn-4").click(function(){
        $(".div-p").css("color", "pink").slideUp(2000).slideDown(2000);
      });
      $(".btn-5").click(function(){
      $(".div-p").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    })


    $("#btn10").click(function(){
        alert("Text: " + $("#test").text());
      });
      $("#btn11").click(function(){
        alert("HTML: " + $("#test").html());
      });
      $("#btn12").click(function(){
        $("#test").remove();
      });
      $("#btn13").click(function(){
        $("#p10").css({"background-color": "pink", "font-size": "200%"});

        $("#btn14").click(function(){
            $.get("demo_test.asp", function(data, status){
              alert("Data: " + data + "\nStatus: " + status);
            });
          });

        //   bunu basa dusmedim
      });

})