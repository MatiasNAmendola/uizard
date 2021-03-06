/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.uizard.org/License
 * version: 3.0.0
 * This is the module example for YUI_DOCS
 * @module project
 **/

/**
 * This is an UIzard code generator.  
 * UIzard starts with this code generator.
 * @class _new.dialog
 * @extends project
 **/
org.uizard.core.project._new.dialog = function () {
	/**
	 * This presents the current browser version
	 * @property dialog
	 * @type Object
	 * @default null
	 **/
	this.dialog = null;
};

org.uizard.core.project._new.dialog.prototype = {
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @constructor
	 * @param {Object} option The option for dialog. 
	 **/
	init: function (option) {
		this.dialog = new org.uizard.core.dialog.wizard();
		this.dialog.init(option);
		
		return this;
	}
};