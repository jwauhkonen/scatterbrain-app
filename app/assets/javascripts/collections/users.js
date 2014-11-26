Scatterbrain.Collections.Users = Backbone.Collection.extend ({
	url: "api/users",
	model: Scatterbrain.Models.User,
	
});

Scatterbrain.Collections.users = new Scatterbrain.Collections.Users();