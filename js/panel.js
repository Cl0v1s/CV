var panel = {

  open: false,
  current: undefined,
  index: -1,
  list: [moves],

  show: function(self)
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
    //lancement de la première page
    this.next(this);
    //ajout de la nouvelle action au bouton suivant
    $("#next").unbind();
    var self = this;
    $("#next").click(function(){self.next(self);});
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

  next: function(self)
  {
    if(self.current != undefined)
      self.current.destroy();
    self.index++;
    self.current = self.list[self.index];
    self.current.initialize();
  },
};
