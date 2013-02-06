

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var combobox1 = {};	// @combobox
// @endregion// @endlock
	
	var i = 1;
	//var logText = '';
	
// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		WAF.sources.comboBoxTest.selectNext();
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		console.log(i + '. onchange event fired (not in component)\r\n');
		logText += i + '. onchange event fired (in component)\r\n';
		WAF.sources.logText.sync();
		i++;
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
// @endregion
};// @endlock
