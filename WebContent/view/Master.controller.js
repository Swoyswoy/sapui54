jQuery.sap.require("sap.ui.TaxiSystem.util.Formatter");

sap.ui.controller("sap.ui.TaxiSystem.view.Master", {
	
	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},
	
	handleSearch : function (evt) {
		
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("TaxiBody", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
		
		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
	
	handleListSelect : function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("Detail", context);
	}
});
