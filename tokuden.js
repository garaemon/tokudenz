$(function() {
  $("#submitinput").click(function(e) {
    var date = $("#dateinput").val();
    var tel = $("#telinput").val();
    var dateObj = isodate.parse(date);
    // start counter
    var LOOP_MILSEC = 100;
    $(".inputs").html("");
    
    function tick() {
      var now = new Date();
      var leftMilSecs = dateObj.getTime() - now.getTime();
      var leftSecs = leftMilSecs / 1000.0;
      if (leftSecs < 0)
        location.href = "tel:" + tel;
      else {
        //setTimeout(tick, LOOP_MILSEC);
        $(".inputs").html("<h3 class=\"resttime\">残り"
                          + " <span class=\"restsec\">" + leftSecs
                          + "秒!</span></h3>"
                          + "<h3>" + tel + "に電話します</h3>");
        tick();
      }

      
    };
    //setTimeout(tick, LOOP_MILSEC);
    tick()
  });
});
