var panel = {

  open: false,
  current: undefined,

  show: function()
  {
    //définition du contenu courant
    this.current = moves;
    this.open = true;
    //mouvement du panneau de droite
    if($(window).width() >= 670)
    {
      $("#panel").animate({'left': "50%"}, 200, "swing");
      $("#show").animate({'left' : "30%"}, 200, "swing");
    }
    else
    {
      $("#panel").animate({'left': "340px"}, 200, "swing");
      $("#show").animate({'left' : "170px"}, 200, "swing");
    }
    //changement du texte du background-position
    $("#next").val("Suivant");
  },

  redimension: function()
  {
    if($(window).width() >= 670 && this.open)
    {
      $("#panel").animate({'left': "50%"}, 200, "swing");
      $("#show").animate({'left' : "30%"}, 200, "swing");
    }
    else if(this.open)
    {
      $("#panel").animate({'left': "340px"}, 200, "swing");
      $("#show").animate({'left' : "170px"}, 200, "swing");
    }
  },
};
