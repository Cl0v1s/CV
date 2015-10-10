$(document).ready(function()
{
  //action lors du click sur le bouton commencer
  $("#next").click(function(){panel.show();});
  $(window).mousewheel(function(){panel.show();});
  //action lors de la redimension de la fenetre
  $(window).resize(function(){panel.redimension();});
});
