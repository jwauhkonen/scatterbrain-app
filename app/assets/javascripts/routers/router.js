Scatterbrain.Routers.Router = Backbone.Router.extend ({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		"": "homePage",
		"users": "usersIndex",
		"users/:id": "userShow"
	},
	
	homePage: function () {
		var homeView = new Scatterbrain.Views.HomePage();
		this._swapView(homeView);
	},
	
	usersIndex: function () {
		Scatterbrain.Collections.users.fetch();
		var indexView = new Scatterbrain.Views.UsersIndex({collection: Scatterbrain.Collections.users});
		this._swapView(indexView);
	},
	
	userShow: function (id) {
		var user = Scatterbrain.Collections.users.getOrFetch(id);
		var showView = new Scatterbrain.Views.UserShow({model: user});
		this._swapView(showView);
	},
	
	_swapView: function (view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		
		this.$rootEl.html(view.render().$el);
		this._currentView = view;
	}
	
});