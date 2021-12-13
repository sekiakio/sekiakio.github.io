setting();

function setting(){
    setMouseMode($.cookie('mousemode'));
}

$('input[name="mousemode"]:radio').change(function () {
  var mode = $(this).val();
  setMouseMode(mode);
  $.cookie("mousemode", mode);
});

function setMouseMode(mode) {
  switch (mode) {
    case "mouse-sekiakio":
      CursorFollower(5, 4);
      break;
    case "mouse-sato":
        setSatoMode();
      break;
    case "mouse-normal":
      CursorFollower(0, 0);
      break;
  }
}

function setSatoMode() {
  CursorFollower(1, 1);
  $(".follower").css("background-size", "280px 400px");
  $(".follower").css("width", "280px");
  $(".follower").css("height", "400px");
  $(".follower span").css("background-image", 'url("./images/mouse.png")');
}
