window.Scatterbrain = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new Scatterbrain.Routers.Router({$rootEl: $("#content")});
	  Backbone.history.start()
  }
};