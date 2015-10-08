var moves = {
  //définit element suivant
  next: undefined,

  initialize: function()
  {
    //affichage du block
    $("#moves").css("display", "block");
    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 0, label: 'Compétences', level: 1, color: "#164654"},
        {id: 1, label: 'Web', level: 2, color: "#24758c"},
        {id: 2, label: 'Client', level: 3, color: "#2e9ab9"},
        {id: 3, label: 'Serveur', level :3, color: "#2e9ab9"},
        {id: 4, shape: 'image', image: 'assets/icons/langage/php.png'},
        {id: 5, shape:'image', image: 'assets/icons/langage/dotnet.png'},
        {id: 6, shape:'image', image: 'assets/icons/langage/python.png'},
        {id: 7, shape:'image', image: 'assets/icons/langage/javascript.png'},
        {id: 8, shape:'image', image: 'assets/icons/langage/jquery.png'},
        {id: 9, shape:'image', image: 'assets/icons/langage/css3.png'},
        {id: 10, shape:'image', image: 'assets/icons/langage/less.png'},
        {id: 11, shape:'image', image: 'assets/icons/langage/html5.png'},
        {id: 12, label: 'Applications', level: 2, color:"#24758c"},
        {id: 13, shape:'image', image: 'assets/icons/langage/c_.png'},
        {id: 14, shape:'image', image: 'assets/icons/langage/c.png'},
        {id: 15, shape:'image', image: 'assets/icons/langage/cpp.png'},
        {id: 16, shape:'image', image: 'assets/icons/langage/java.png'},
        {id: 17, shape:'image', image: 'assets/icons/langage/android.png'},
        {id: 18, shape:'image', image: 'assets/icons/langage/windows.png'},
        {id: 19, shape:'image', image: 'assets/icons/langage/android.png'},
        {id: 20, shape:'image', image: 'assets/icons/langage/windows.png'},
        {id: 21, label: 'Scripts', level: 2, color: "#24758c"},
        {id: 22, shape:'image', image: 'assets/icons/langage/python.png'},
        {id: 23, shape:'image', image: 'assets/icons/langage/ruby.png'},
        {id: 24, shape:'image', image: 'assets/icons/langage/linux.png'},
        {id: 25, label: 'Méthodes de travail', level: 2, color: "#24758c", font: {size: 12}},
        {id: 26, label: 'Méthodes agiles', level: 3, color: "#2e9ab9", font: {size: 12}},
        {id: 27, label: 'Méthodes classiques', level: 3, color:"#2e9ab9", font: {size: 12}},








    ]);

    // create an array with edges
    var edges = new vis.DataSet([
      {from: 0, to: 1},
      {from: 0, to: 12},
      {from: 0, to: 21},{from: 0, to: 25},
      {from: 1, to: 2}, {from: 1, to:3}, //origin to web
      {from: 3, to: 4}, {from:3, to: 5},{from:3, to: 6}, //server to langage
      {from: 2, to: 7},  {from: 2, to: 9},{from: 2, to: 11},  // client to langage
      {from: 11, to: 19}, {from: 11, to: 20},
      {from: 9, to: 10}, //css3 to less
      {from: 7, to: 8}, //js to jquery
      {from: 12, to: 13},{from: 12, to: 14},{from: 12, to: 15},{from: 12, to: 16},
      {from: 16, to: 17},{from: 13, to: 18},
      {from: 21, to: 22}, {from: 21, to: 23}, {from: 21, to:24},
      {from: 25, to: 26}, {from: 25, to: 27}

    ]);

    // create a network
    var container = document.getElementById('viewport');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {nodes: {borderWidth: 0, font: {color: 'white', size: '21', face: "Arctic"}, shape: 'circle', },
      physics: {
        timestep: 0.05,
      }
  };

    // initialize your network!
    var network = new vis.Network(container, data, options);

  },

  destroy: function()
  {
    $("#moves").css("display", "none");
  },
};
