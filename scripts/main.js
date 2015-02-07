$( document ).ready(function() {
    console.log( "ready!" );

    var ractive = new Ractive({
      // The `el` option can be a node, an ID, or a CSS selector.
      el: 'container',

      // We could pass in a string, but for the sake of convenience
      // we're passing the ID of the <script> tag above.
      template: '#template-page',

      // Here, we're passing in some initial data
      data: {
        content: 'BLalblal'
        }
    });

    $("nav ul li a").on( "click", function(e) {
      e.preventDefault();
      var linkName = $(this).attr("href");
      
      console.log(linkName);

      var contactContent = "Contact";
      var homeContent = "Home";

      if(linkName == "contact") {
        ractive.set( 'content', contactContent);
      }

      if(linkName == "home") {
        ractive.set( 'content', homeContent);
      }

    });
});
