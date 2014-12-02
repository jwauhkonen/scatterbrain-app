window.Scatterbrain = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new Scatterbrain.Routers.Router({$rootEl: $("#content")});
	  Backbone.history.start()
	  
	  emojify.setConfig({
	      img_dir          : 'assets',  // Directory for emoji images
	      ignored_tags     : {                // Ignore the following tags
	          'SCRIPT'  : 1,
	          'TEXTAREA': 1,
	          'A'       : 1,
	          'PRE'     : 1,
	          'CODE'    : 1
	      }
	  });
  }
};