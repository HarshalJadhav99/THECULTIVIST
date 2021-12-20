// FIRST COLAPSE

$(document).ready(function () {
  $("#watch-me").click(function () {
    $("#show-me:hidden").show("slow");
  });
  $("#watch-me").click(function () {
    if ($("watch-me").prop("checked") === false) {
      $("#show-me").hide();
    }
  });
});
// SECOND COLLAPSE
$(document).ready(function () {
  $("#watch-me2").click(function () {
    $("#show-me2:hidden").show("slow");
  });
  $("#watch-me2").click(function () {
    if ($("watch-me2").prop("checked") === false) {
      $("#show-me2").hide();
    }
  });
});
//THIRD COLLAPSE
$(document).ready(function () {
  $("#watch-me3").click(function () {
    $("#show-me3:hidden").show("slow");
  });
  $("#watch-me3").click(function () {
    if ($("watch-me3").prop("checked") === false) {
      $("#show-me3").hide();
    }
  });
});
//FOURTH COLLAPSE
$(document).ready(function () {
  $("#watch-me4").click(function () {
    $("#show-me4:hidden").show("slow");
  });
  $("#watch-me4").click(function () {
    if ($("watch-me4").prop("checked") === false) {
      $("#show-me4").hide();
    }
  });
});
