var panel = {

  open: false,
  current: undefined,
  index: -1,
  list: [moves, learn],

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
    this.next(this, false);
    //ajout de la nouvelle action au bouton suivant
    $("#next").unbind();
    $(window).unbind();
    var self = this;
    $("#next").click(function(){self.next(self);});
    $(window).mousewheel(function(e){self.scroll(self, e);});
  },

  scroll: function(self, e)
  {
    if(e.deltaY < 0)
      self.next(self);
    else if(e.deltaY > 0)
      self.prev(self);
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

  next: function(self, animate)
  {
    if(self.index == self.list.length -1 )
      return;
    if(self.current != undefined)
      self.current.destroy();
    self.index++;
    self.current = self.list[self.index];
    if(animate != false)
    {
      $("#panel").animate({'left': '100%'}, 200, "swing", function()
      {
        self.current.initialize();
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
      });
    }
    else
    {
      self.current.initialize();
    }
  },

  prev: function(self, animate)
  {
    if(self.current != undefined || self.index == 0)
      self.current.destroy();
    self.index--;
    self.current = self.list[self.index];
    if(animate != false)
    {
      $("#panel").animate({'left': '100%'}, 200, "swing", function()
      {
        self.current.initialize();
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
      });
    }
    else
    {
      self.current.initialize();
    }
  },
};
