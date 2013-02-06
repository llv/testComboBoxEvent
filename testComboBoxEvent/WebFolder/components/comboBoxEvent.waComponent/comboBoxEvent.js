
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'comboBoxEvent';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var combobox1 = {};	// @combobox
	// @endregion// @endlock
	var i = 1;
	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$comp.sources.comboBoxTest.selectNext();
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		console.log(i + '. onchange event fired (in component)\r\n');				
		$comp.sourcesVar.logComponentText += i + '. onchange event fired (in component)\r\n';
		$comp.sources.logComponentText.sync();
		i++;
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
