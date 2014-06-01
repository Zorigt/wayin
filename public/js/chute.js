


$(document).ready(function() {

    //*** media chooser ***//

    var chooser = new Chute.Chooser({
      client_id: '538a49554555875c2e000001', // your client_id
  album:     'ayRveyam'                   // target album shortcut
    });
    
    // completion event
    chooser.on('complete', function(data){
      // optionally close the media chooser
      // sample data returned from server https://github.com/chute/media-chooser-v2#sample-response-data
      chooser.close();
    });
    
    $('#upload-button').on('click', function() {
        // show the chooser
        chooser.show();
    });

    
    
    //*** showing images ***///
    
    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    };
    
    $.getJSON('http://api.getchute.com/v2/albums/ayRveyam/assets/?per_page=9', function(response) {
        var assets = response.data;

        _.each(assets, function(asset) {
        	//asset.id=_.uniqueID('img_');
            var template = _.template($('#asset-template').html(), asset);
            $('.assets').append(template);


			
			
        });


        $('#select').on('click', 'li', function(){
		  		$(this).appendTo("#selected");
		  	});

    });   


	
        
});