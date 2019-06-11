(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "basicvalue",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				Height: 150,
				Width: 150 
			} 
		}
	}

	var dataItem={
		Time: "10-Jun-19 00:00:00",
		Value: 50
	}

	symbolVis.prototype.init = function(scope, elem) {
		scope.Oras=dataItem.Time
		scope.Val=dataItem.Value
	 };

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 

