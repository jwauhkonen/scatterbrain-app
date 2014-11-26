Scatterbrain.Collections.Users = Backbone.Collection.extend ({
	url: "api/users",
	model: Scatterbrain.Models.User,
	
	getOrFetch: function (id) {
		var user = this.get(id);
		
		if (!user) {
			user = new Scatterbrain.Models.User({id: id});
			user.fetch({
				success: function () {
					this.add(user);
				}.bind(this)
			});
		} else {
			user.fetch();
		}
		
		return user;
	}
});

Scatterbrain.Collections.users = new Scatterbrain.Collections.Users();