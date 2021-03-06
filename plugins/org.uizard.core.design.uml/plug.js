/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.uizard.org/License
 * version: 3.0.0
 * This is the module example for YUI_DOCS
 * @module org.uizard.core.design.uml
 **/

/**
 * This is an UIzard code generator.  
 * UIzard starts with this code generator.
 * @class org.uizard.core.design.uml
 **/
org.uizard.core.design.uml = function () {
	/**
	 * This presents the current browser version
	 * @property name
	 **/
	this.name = "design.uml";
	
	/**
	 * This presents the current browser version
	 * @property stencilCSS
	 **/
	this.stencilCSS = "org.uizard.stencil.uml/stencil.uml.css";
	
	/**
	 * This presents the current browser version
	 * @property windowManager
	 **/
	this.windowManager = null;
	
};

org.uizard.core.design.uml.prototype = {
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * @constructor
	 **/
	init: function () {
			//console.log(this.name);
			
		this.windowManager = core.mainLayout.windowManager;
		
		//Loading CSS
		this.loadCSS();
		
		//Add Project Item
		this.addProjectItem();
		
		//Add Toolbar
		this.addToolbar();
		
		//Add Main Menu
		this.addMainMenu();
		
		//Add Context Menu
		this.addContextMenu();
		
		// temp
		this.addToolBox();
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * @method loadCSS
	 **/
	loadCSS: function () {
		$("head").append("<link>");
	    var css = $("head").children(":last");
	    css.attr({
	    	rel:  "stylesheet",
	    	type: "text/css",
	    	href: "stencil/" + this.stencilCSS
	    });
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * First written: Sung-tae Ryu 
	 * Latest modified: Sung-tae Ryu 
	 * @method addProjectItem() 
	 * @return void
	 **/
	addProjectItem: function () {

		$("div[id='projectNew']").find(".projectTypes").append("<div class='projectWizardFirstButton' project-type='umlp' style='height:40px; padding:8px; border-bottom:1px solid #ccc; cursor:pointer;'><img src='plugins/org.uizard.core.design.uml/image/icon_classDiagram.png' style='width:40px; height:40px; vertical-align:middle; margin-bottom:3px;' /><span style='margin-left:5px;'>Class Diagram</span></div>");
		
		$("div[id='projectNew']").find(".projectItems").append("<div class='projectWizardSecondButton all umlp' style='float:left; width:70px; height:70px; margin:5px; cursor:pointer;' description='  Class Diagram을 위한 프로젝트를 생성합니다.' projecttype='UML'><img src='plugins/org.uizard.core.design.uml/image/icon_classDiagram.png' style='width:40px; height:40px; vertical-align:middle; margin-bottom:3px;' /><br /><a>Class Diagram</a></div>");
		$("div[id='projectNew']").find(".projectItems").append("<div class='projectWizardSecondButton all umlp' style='float:left; width:70px; height:70px; margin:5px; cursor:pointer;' description='  State Diagram을 위한 프로젝트를 생성합니다.' projecttype='UML'><img src='plugins/org.uizard.core.design.uml/image/icon_stateDiagram.png' style='width:40px; height:40px; vertical-align:middle; margin-bottom:3px;' /><br /><a>State Diagram</a></div>");
		$("div[id='projectNew']").find(".projectItems").append("<div class='projectWizardSecondButton all umlp' style='float:left; width:70px; height:70px; margin:5px; cursor:pointer;' description='  Sequence Diagram을 위한 프로젝트를 생성합니다.' projecttype='UML'><img src='plugins/org.uizard.core.design.uml/image/icon_sequenceDiagram.png' style='width:40px; height:40px; vertical-align:middle; margin-bottom:3px;' /><br /><a>Sequence Diagram</a></div>");	
	
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * First written: Sung-tae Ryu 
	 * Latest modified: Sung-tae Ryu 
	 * @method addToolbar() 
	 * @return void
	 **/
	addToolbar: function () {
		
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * First written: Sung-tae Ryu 
	 * Latest modified: Sung-tae Ryu 
	 * @method addMainMenu() 
	 * @return void
	 **/
	addMainMenu: function () {
		
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * First written: Sung-tae Ryu 
	 * Latest modified: Sung-tae Ryu 
	 * @method addContextMenu() 
	 * @return void
	 **/
	addContextMenu: function () {
		
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * This operates the initialization tasks for layout, actions, plugins...
	 * First written: Sung-tae Ryu 
	 * Latest modified: Sung-tae Ryu 
	 * @method addToolBox() 
	 * @return void
	 **/
	addToolBox: function () {
		var self = this;
		
		$("#toolBox").append("<div id='toolUML_title' class='toolTitle'>UML Tool</div>");
		
		
		
		//Title : Class Diagram		
		$("#toolBox").append("<div id='toolUML_classDiagram' class='toolCategory categoryIcon'>Class Diagram</div>");
		
		//Class Diagram Tool : Class
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Class'><div id='toolUML_ClassDiagram_Class' class='toolItem itemIconSquare'>Class</div></a>");
		
		//Class Diagram Tool : Package
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Package'><div id='toolUML_ClassDiagram_Package' class='toolItem itemIconSquare'>Package</div></a>");
		
		//Class Diagram Tool : Association
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Association'><div id='toolUML_ClassDiagram_Association' class='toolItem itemIconLine'>Association</div></a>");
		
		//Class Diagram Tool : Inheritance
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Inheritance'><div id='toolUML_ClassDiagram_Inheritance' class='toolItem itemIconLine'>Inheritance</div></a>");
		
		//Class Diagram Tool : Aggregation
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Aggregation'><div id='toolUML_ClassDiagram_Aggregation' class='toolItem itemIconLine'>Aggregation</div></a>");
		
		//Class Diagram Tool : Composition
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Composition'><div id='toolUML_ClassDiagram_Composition' class='toolItem itemIconLine'>Composition</div></a>");
		
		//Class Diagram Tool : Interface
		$("#toolBox").append("<a href='#' action='addUMLClassDiagram_Interface'><div id='toolUML_ClassDiagram_Interface' class='toolItem itemIconLine'>Interface</div></a>");
		
		
		
		//Title : State Diagram		
		$("#toolBox").append("<div id='toolUML_stateDiagram' class='toolCategory categoryIcon'>State Diagram</div>");
		
		//State Diagram Tool : State
		$("#toolBox").append("<a href='#' action='addUMLStateDiagram_State'><div id='toolUML_StateDiagram_State' class='toolItem itemIconSquare'>State</div></a>");
		
		//State Diagram Tool : Start
		$("#toolBox").append("<a href='#' action='addUMLStateDiagram_Start'><div id='toolUML_StateDiagram_Start' class='toolItem itemIconSquare'>Start</div></a>");
		
		//State Diagram Tool : End
		$("#toolBox").append("<a href='#' action='addUMLStateDiagram_End'><div id='toolUML_StateDiagram_End' class='toolItem itemIconSquare'>End</div></a>");
		
		//State Diagram Tool : Transition
		$("#toolBox").append("<a href='#' action='addUMLStateDiagram_Transition'><div id='toolUML_ClassDiagram_Interface' class='toolItem itemIconLine'>Transition</div></a>");
		
		
		
		//Title : Sequence Diagram		
		$("#toolBox").append("<div id='toolUML_sequenceDiagram' class='toolCategory categoryIcon'>Sequence Diagram</div>");
		
		//Sequence Diagram Tool : Timeline
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Timeline'><div id='toolUML_SequenceDiagram_Timeline' class='toolItem itemIconSquare'>Timeline</div></a>");
		
		//Sequence Diagram Tool : Actor
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Actor'><div id='toolUML_SequenceDiagram_Actor' class='toolItem itemIconSquare'>Actor</div></a>");
		
		//Sequence Diagram Tool : Sequence
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Sequence'><div id='toolUML_SequenceDiagram_Sequence' class='toolItem itemIconSquare'>Sequence</div></a>");
		
		//Sequence Diagram Tool : Initialize
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Initialize'><div id='toolUML_SequenceDiagram_Initialize' class='toolItem itemIconLine'>Initialize</div></a>");
		
		//Sequence Diagram Tool : Return
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Return'><div id='toolUML_SequenceDiagram_Return' class='toolItem itemIconLine'>Return</div></a>");
		
		//Sequence Diagram Tool : Asynchronous
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Asynchronous'><div id='toolUML_SequenceDiagram_Asynchronous' class='toolItem itemIconLine'>Asynchronous</div></a>");
		
		//Sequence Diagram Tool : Synchronous
		$("#toolBox").append("<a href='#' action='addUMLSequenceDiagram_Synchronous'><div id='toolUML_SequenceDiagram_Synchronous' class='toolItem itemIconLine'>Synchronous</div></a>");
		
		
		
		//Title : Activity Diagram		
		$("#toolBox").append("<div id='toolUML_activityDiagram' class='toolCategory categoryIcon'>Activity Diagram</div>");
		
		//Activity Diagram Tool : Start
		$("#toolBox").append("<a href='#' action='addUMLActivityDiagram_Start'><div id='toolUML_ActivityDiagram_Start' class='toolItem itemIconSquare'>Start</div></a>");
		
		//Activity Diagram Tool : End
		$("#toolBox").append("<a href='#' action='addUMLActivityDiagram_End'><div id='toolUML_ActivityDiagram_End' class='toolItem itemIconSquare'>End</div></a>");

		//Activity Diagram Tool : Activity
		$("#toolBox").append("<a href='#' action='addUMLActivityDiagram_Activity'><div id='toolUML_ActivityDiagram_End' class='toolItem itemIconSquare'>Activity</div></a>");
		
		//Activity Diagram Tool : Parallel_Vertical
		$("#toolBox").append("<a href='#' action='addUMLActivityDiagram_ParallelVertical'><div id='toolUML_ActivityDiagram_ParallelVertical' class='toolItem itemIconSquare'>Parallel(Vertical)</div></a>");
		
		//Activity Diagram Tool : Parallel_Horizontal
		$("#toolBox").append("<a href='#' action='addUMLActivityDiagram_ParallelHorizontal'><div id='toolUML_ActivityDiagram_ParallelHorizontal' class='toolItem itemIconSquare'>Parallel(Horizontal)</div></a>");
		
		//Activity Diagram Tool : ControlFlow
		$("#toolBox").append("<a href='#' action='addUMLActivityDiagram_ControlFlow'><div id='toolUML_ActivityDiagram_ControlFlow' class='toolItem itemIconLine'>ControlFlow</div></a>");
		
		
		
		//Title : Usecase Diagram		
		$("#toolBox").append("<div id='toolUML_usecaseDiagram' class='toolCategory categoryIcon'>Use Case Diagram</div>");
		
		//Usecsae Diagram Tool : Usecase
		$("#toolBox").append("<a href='#' action='addUMLUsecaseDiagram_Usecase'><div id='toolUML_UsecaseDiagram_Usecase' class='toolItem itemIconSquare'>Use case</div></a>");
		
		//Usecsae Diagram Tool : Usecase_round
		$("#toolBox").append("<a href='#' action='addUMLUsecaseDiagram_Usecase_round'><div id='toolUML_UsecaseDiagram_Usecase_round' class='toolItem itemIconSquare'>Use case(round)</div></a>");
		
		//Usecsae Diagram Tool : Extends
		$("#toolBox").append("<a href='#' action='addUMLUsecaseDiagram_Extends'><div id='toolUML_UsecaseDiagram_Extends' class='toolItem itemIconLine'>Extends</div></a>");
		
		//Usecsae Diagram Tool : Includes
		$("#toolBox").append("<a href='#' action='addUMLUsecaseDiagram_Includes'><div id='toolUML_UsecaseDiagram_Includes' class='toolItem itemIconLine'>Includes</div></a>");
		
		
		
		//Add Fuctions
		//Class Diagram : Class
		$("a[action=addUMLClassDiagram_Class]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.class";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Class Diagram : Packabe
		$("a[action=addUMLClassDiagram_Package]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.package";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Class Diagram : Association
		$("a[action=addUMLClassDiagram_Association]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.association";
			//classdiagram.association
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Class Diagram : Inheritance
		$("a[action=addUMLClassDiagram_Inheritance]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.inheritance";
			//classdiagram.inheritance
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Class Diagram : Aggregation
		$("a[action=addUMLClassDiagram_Aggregation]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.aggregation";
			//classdiagram.aggregation
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Class Diagram : Composition
		$("a[action=addUMLClassDiagram_Composition]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.composition";
			//classdiagram.composition
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Class Diagram : Interface
		$("a[action=addUMLClassDiagram_Interface]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/classdiagram.interface";
			//classdiagram.interface
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter, {dashed:true});	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		


		//State Diagram : State
		$("a[action=addUMLStateDiagram_State]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/statediagram.state";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//State Diagram : Start		
		$("a[action=addUMLStateDiagram_Start]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/statediagram.start";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//State Diagram : End
		$("a[action=addUMLStateDiagram_End]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/statediagram.end";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//State Diagram : Transition
		$("a[action=addUMLStateDiagram_Transition]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/statediagram.transition";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
	
		
		//Sequence Diagram : Timeline
		$("a[action=addUMLSequenceDiagram_Timeline]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.timeline";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Sequence Diagram : Actor
		$("a[action=addUMLSequenceDiagram_Actor]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.actor";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter, {proportion:[2,3]});	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Sequence Diagram : Actor
		$("a[action=addUMLSequenceDiagram_Sequence]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.sequence";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Sequence Diagram : Initialize
		$("a[action=addUMLSequenceDiagram_Initialize]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.initialize";
			//sequencediagram.initialize
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter, {dashed:true});	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Sequence Diagram : Return
		$("a[action=addUMLSequenceDiagram_Return]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.return";
			//sequencediagram.return
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter, {dashed:true});	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Sequence Diagram : Asynchronous
		$("a[action=addUMLSequenceDiagram_Asynchronous]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.asynchronous";
			//sequencediagram.asynchronous
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Sequence Diagram : Synchronous
		$("a[action=addUMLSequenceDiagram_Synchronous]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/sequencediagram.synchronous";
			//sequencediagram.synchronous
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		
		
		//Activity diagram : Start
		$("a[action=addUMLActivityDiagram_Start]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/activitydiagram.start";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//Activity diagram : End
		$("a[action=addUMLActivityDiagram_End]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/activitydiagram.end";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//Activity diagram : Activity
		$("a[action=addUMLActivityDiagram_Activity]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/activitydiagram.activity";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//Activity diagram : Parallel_Vertical
		$("a[action=addUMLActivityDiagram_ParallelVertical]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/activitydiagram.parallel_vertical";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//Activity diagram : Parallel_Horizontal
		$("a[action=addUMLActivityDiagram_ParallelHorizontal]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/activitydiagram.parallel_horizontal";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//Activity Diagram : ControlFlow
		$("a[action=addUMLActivityDiagram_ControlFlow]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/activitydiagram.controlflow";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Usecase Diagram : Usecase(box)
		$("a[action=addUMLUsecaseDiagram_Usecase]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/usecasediagram.usecase";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Usecase Diagram : Usecase(round)
		$("a[action=addUMLUsecaseDiagram_Usecase_round]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/usecasediagram.usecase_round";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square", shapeAdapter);	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});
		
		//Usecase Diagram : Extends
		$("a[action=addUMLUsecaseDiagram_Extends]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/usecasediagram.extends";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter, {dashed:true});	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
		//Usecase Diagram : Includes
		$("a[action=addUMLUsecaseDiagram_Includes]").click(function () {
			var shapeAdapter = "org.uizard.stencil.uml/usecasediagram.includes";
			
			if (self.windowManager.window[self.windowManager.activeWindow].designer) {
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line", shapeAdapter, {dashed:true});	
				self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
			}
			else {
				m.er("Active window does not have a desginer!", "plugin: design.uml");
			}
		});	
		
	}
};