Scatterbrain.Routers.Router = Backbone.Router.extend ({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		
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
	},
	
	routes: {
		"": "homePage",
		"users": "usersIndex",
		"users/:id": "userShow",
		"songs": "songsIndex",
		"songs/:id": "songShow",
		"songs/new": "songNew",
		"segments": "segmentsIndex",
		"tags": "tagsIndex",
		"tags/:id": "tagShow"
	},
	
	homePage: function () {
		Scatterbrain.Collections.songs.fetch();
		Scatterbrain.Collections.tags.fetch();
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
	
	songsIndex: function () {
		Scatterbrain.Collections.songs.fetch();
		var indexView = new Scatterbrain.Views.SongsIndex({collection: Scatterbrain.Collections.songs});
		this._swapView(indexView);
	},
	
	songShow: function (id) {
		var song = Scatterbrain.Collections.songs.getOrFetch(id);
		Scatterbrain.Collections.tags.fetch();
		var showView = new Scatterbrain.Views.SongShow({model: song, collection: Scatterbrain.Collections.tags});
		this._swapView(showView);
	},
	
	songNew: function () {
		var newView = new Scatterbrain.Views.NewSong({collection: Scatterbrain.Collections.songs});
		this._swapView(newView);
	},
	
	segmentsIndex: function () {
		Scatterbrain.Collections.segments.fetch();
		var indexView = new Scatterbrain.Views.SegmentsIndex({collection: Scatterbrain.Collections.segments});
		this._swapView(indexView);
	},
	
	tagsIndex: function () {
		Scatterbrain.Collections.tags.fetch();
		var indexView = new Scatterbrain.Views.TagsIndex({collection: Scatterbrain.Collections.tags});
		this._swapView(indexView);
	},
	
	tagShow: function (id) {
		var tag = Scatterbrain.Collections.tags.getOrFetch(id);
		var showView = new Scatterbrain.Views.TagShow({model: tag});
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