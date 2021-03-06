/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.uizard.org/License
 * version: 3.0.0
 * This is the module example for YUI_DOCS
 * @module object
 **/

/**
 * This is an UIzard code generator.  
 * UIzard starts with this code generator.
 * @class line
 * @extens ui
 **/
org.uizard.core.object.ui.line = function () {
	/**
	 * This presents the current browser version
	 * @property target
	 * @type Object
	 * @default null
	 **/
	this.target = null;
	
	/**
	 * This presents the current browser version
	 * @property timestamp
	 * @type Object
	 * @default null
	 **/
	this.timestamp = null;

	/**
	 * This presents the current browser version
	 * @property focus
	 * @type Object
	 * @default null
	 **/
	this.focus = true;
	
	/**
	 * This presents the current browser version
	 * @property isDrag
	 * @type Object
	 * @default null
	 **/
	this.isDrag = false;
	
	/**
	 * This presents the current browser version
	 * @property isDrawFinished
	 * @type Object
	 * @default null
	 **/
	this.isDrawFinished = false;
	
	/**
	 * This presents the current browser version
	 * @property selectedNode
	 * @type Object
	 * @default null
	 **/
	this.selectedNode = null;
	
	/**
	 * This presents the current browser version
	 * @property sx
	 * @type Object
	 * @default null
	 **/
	this.sx = null;
	
	/**
	 * This presents the current browser version
	 * @property sy
	 * @type Object
	 * @default null
	 **/
	this.sy = null;
	
	/**
	 * This presents the current browser version
	 * @property ex
	 * @type Object
	 * @default null
	 **/
	this.ex = null;
	
	/**
	 * This presents the current browser version
	 * @property ey
	 * @type Object
	 * @default null
	 **/
	this.ey = null;
	
	/**
	 * This presents the current browser version
	 * @property prevX
	 * @type Object
	 * @default null
	 **/
	this.prevX = null;
	
	/**
	 * This presents the current browser version
	 * @property prevY
	 * @type Object
	 * @default null
	 **/
	this.prevY = null;
	
	/**
	 * This presents the current browser version
	 * @property id
	 * @type Object
	 * @default null
	 **/
	this.id = null;
	
	/**
	 * This presents the current browser version
	 * @property name
	 * @type String
	 * @default null
	 **/
	this.name = null;	
	
	/**
	 * This presents the current browser version
	 * @property x
	 * @type Object
	 * @default null
	 **/
	this.x = null;
	
	/**
	 * This presents the current browser version
	 * @property y
	 * @type Object
	 * @default null
	 **/
	this.y = null;
	
	/**
	 * This presents the current browser version
	 * @property width
	 * @type Number
	 * @default null
	 **/
	this.width = null;
	
	/**
	 * This presents the current browser version
	 * @property height
	 * @type Number
	 * @default null
	 **/
	this.height = null;
	
	/**
	 * This presents the current browser version
	 * @property thickness
	 * @type Number
	 * @default 0.5
	 **/
	this.thickness = 0.5;
	
	/**
	 * This presents the current browser version
	 * @property connector
	 * @type Object
	 * @default null
	 **/
	this.connector = null;
	
	/**
	 * This presents the current browser version
	 * @property status
	 * @type Object
	 * @default null
	 **/
	this.status = null;
	
	/**
	 * This presents the current browser version
	 * @property status
	 * @type Object
	 * @default null
	 **/
	this.headType = null;	
	
	/**
	 * This presents the current browser version
	 * @property status
	 * @type Object
	 * @default null
	 **/
	this.tailType = null;		
	
	/**
	 * This presents the current browser version
	 * @property dashed
	 **/
	this.dashed = false;	
	
	/**
	 * This presents the current browser version
	 * @property attrList
	 * @type Array
	 * @default Array("id", "name", "sx", "sy", "ex", "ey", "thickness")
	 **/
	this.attrList = new Array("id", "name", "sx", "sy", "ex", "ey", "thickness");
};

org.uizard.core.object.ui.line.prototype = {
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @constructor 
	 * @param {Object} target The target.
	 **/
	init: function (target, dashed) {
		var self = this;
		
		//Set 
		this.target = target;
		this.dashed = dashed;
		this.timestamp = new Date().getTime();
		
		this.connector = $.makeArray();
		this.connector['head'] = null;
		this.connector['tail'] = null;
		
		
		//Set the properties
		this.id = "line";
		this.name = "line_"+this.timestamp;	
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
		


		//Set Mouse Down Event in Canvas
		$(target).find("canvas").mousedown(function (e) {
			if (!self.focus) {
				return false;
			}
			
			//Calculate the position (x, y) in Canvas Axis
			var parentOffset = $(this).parent().offset(); 
			x = e.pageX - parentOffset.left;
			y = e.pageY - parentOffset.top;
			
			
			if (self.sx) {
				self.sx = parseInt(self.sx);
			}
			
			if (self.sy) {
				self.sy = parseInt(self.sy);
			}
			
			if (self.ex) {
				self.ex = parseInt(self.ex);
			}
			
			if (self.ey) {
				self.ey = parseInt(self.ey);		
			}
			
			
			//Select Body of Line
			if ( ( (self.sx - 5 < x && x < self.ex + 5) || (self.ex - 5 < x && x < self.sx + 5) ) && ( (self.sy - 5 < y && y < self.ey + 5) || (self.ey - 5 < y && y < self.sy + 5) ) ) { //Body Selection
				//Calculate the constant for Line Function : y = ax + b
				var a;
				var b1, b2;
				var c = 5;
				
				if ( self.ex - self.sx != 0) {
					a = (self.ey - self.sy) / (self.ex - self.sx);
					
					c = Math.round(5 * Math.sqrt(a * a + 1) * 1000)/1000; // +- 5px
					
					b1 = self.sy - a * self.sx - c;
					b2 = self.sy - a * self.sx + c;
					
					
					if ( Math.round((Math.abs(a)*1000))/1000 < 0.01 || Math.round((Math.abs(1/a)*1000))/1000 < 0.01 ||
					     ( (a * x + b1 <= y && y <= a * x + b2 && (((y - b1) / a <= x && x <=  (y - b2) / a) || ((y - b2) / a <= x && x <=  (y - b1) / a))) ) ) {
						
						if (e.which == 1) {
							self.isDrag = true;
							self.isDrawFinished = false;
								  
							self.selectedNode = "body";
							
							//Using Current x, y
							x = e.pageX - parentOffset.left;
							y = e.pageY - parentOffset.top;
							
							self.prevX = x;
							self.prevY = y;
						}
						else if (e.which == 3) {
							
							/* Right Mousebutton was clicked! */
							self.contextMenu.menu.show();
			
							$("div[id='object.ui_" + self.timestamp+"']").css("z-index", 5);
							$("div[id='object.ui_" + self.timestamp+"']").css("left", e.pageX);
							$("div[id='object.ui_" + self.timestamp+"']").css("top", e.pageY);	
				
							e.preventDefault();
							e.stopPropagation()
							
							return false;
						}
					}
				}
			}

			if (e.which == 1) {
				
				//First Drawing			
				if (!self.isDrawFinished && !self.isDrag) {
					self.isDrag = true;
					self.isDrawFinished = false;
					
					//Using Current x, y
					x = e.pageX - parentOffset.left;
					y = e.pageY - parentOffset.top;
					
					self.sx = x;
					self.sy = y;
					
					self.selectedNode = null;
				}
				else {
					//Using Current x, y
					x = e.pageX - parentOffset.left;
					y = e.pageY - parentOffset.top;
					
					//Dragging Head
					if (self.sy - 3 < y && y < self.sy + 3 && self.sx - 3 < x && x <  self.sx + 3) {
						self.isDrag = true;
						self.isDrawFinished = false;
			
						self.selectedNode = "head";
					}
					//Dragging Tail
					else if (self.ey - 3 < y && y < self.ey + 3 && self.ex - 3 < x && x <  self.ex + 3) {
						self.isDrag = true;
						self.isDrawFinished = false;
						
						self.selectedNode = "tail";
					}
					else {						
						if (self.selectedNode != "body") {
							self.selectedNode = null;
						}
					}
				}
				
			}

		});
		
		//Set Mouse Move Event in Canvas
		$(target).find("canvas").mousemove(function (e) {
			
			if (!self.focus) {
				return false;
			}
			
			//Calculate the position (x, y) in Canvas Axis
			var parentOffset = $(this).parent().offset(); 	
			x = Math.floor(e.pageX - parentOffset.left);
			y = Math.floor(e.pageY - parentOffset.top);
			  
			if(!self.isDrawFinished && self.isDrag) {
				//Dragging Head
				if (self.selectedNode == "head") {
					self.sx = x;
					self.sy = y;
				}
				else if (self.selectedNode == "body") {
					self.sx += x - self.prevX;
					self.sy += y - self.prevY;
					self.ex += x - self.prevX;
					self.ey += y - self.prevY;
					
					self.prevX = x;
					self.prevY = y;
				}
				//Dragging Tail and Default
				else {
					self.ex = x;
					self.ey = y;
				}	
				
				self.drawLine(self.sx, self.sy, self.ex, self.ey);
			}
			
			if((self.sy - 3 < y && y < self.sy + 3 && self.sx - 3 < x && x <  self.sx + 3) || (self.ey - 3 < y && y < self.ey + 3 && self.ex - 3 < x && x <  self.ex + 3)) {
				//Set the cursor is crosshair
				self.changeStatus("statusDrawingLine");
			}
		});		
		
		//Set Mouse Up Event in Canvas  
		$(target).find("canvas").mouseup(function (e) {
			
			if (!self.focus) {
				return false;
			}
			
			if (e.which == 1) {
				//If Drawing and Dragging is not finished
				if(!self.isDrawFinished && self.isDrag) {	
					self.isDrag = false;
					self.isDrawFinished = true;
					
					if (self.sx) {
						self.sx = parseInt(self.sx);
					}
					
					if (self.sy) {
						self.sy = parseInt(self.sy);
					}
					
					if (self.ex) {
						self.ex = parseInt(self.ex);
					}
					
					if (self.ey) {
						self.ey = parseInt(self.ey);		
					}
					
					self.x = self.sx;
					self.y = self.sy;
					self.width = Math.abs(self.ex - self.sx);
					self.height = Math.abs(self.ey - self.sy);
					
					self.status = "modified";
				}
				
				//Set the cursor is default
				self.changeStatus("statusDefault");
			}
			else if (e.which == 3) {
				
				e.preventDefault();
				e.stopPropagation()
				
				return false;
			}

			self.clear();
		});
		
		$(target).find("canvas").click(function (e) {
			
			if (!self.focus) {
				return false;
			}
			
			if (e.which == 3) {
				e.preventDefault();
				e.stopPropagation()
				
				return false;
			}
		});
		
		return this;
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @method drawLine 
	 * @param {Number} sx The position on x-coordinate of the starting point of the line.
	 * @param {Number} sy The position on y-coordinate of the end point of the line.
	 * @param {Number} ex The position on x-coordinate of the starting point of the line.
	 * @param {Number} ey The position on y-coordinate of the end point of the line.
	 **/
	drawLine: function (sx, sy, ex, ey) {
		
		if (sx) {
			sx = parseInt(sx);
		}
		
		if (sy) {
			sy = parseInt(sy);
		}
		
		if (ex) {
			ex = parseInt(ex);
		}
		
		if (ey) {
			ey = parseInt(ey);		
		}
		
		//drawing the line
		
		if($(this.target).find("canvas").getContext) {
			var context = $(this.target).find("canvas").getContext('2d');
			
			//clear whole canvas
			context.clearRect (0, 0, $(this.target).find("canvas").width(), $(this.target).find("canvas").height());	
			
			if(this.isDrag) {
				context.beginPath();
			
				context.strokeStyle = "#ccc";
				context.moveTo(sx, sy);
				context.lineTo(ex, ey);				
				context.lineWidth = 0.5;
				context.stroke();
			}
		}
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @method clear 
	 **/
	clear: function () {
		if($(this.target).find("canvas").getContext) {
			var context = $(this.target).find("canvas").getContext('2d');
			//clear whole canvas
			context.clearRect (0, 0, $(this.target).find("canvas").width(), $(this.target).find("canvas").height());	
		}
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @method remove 
	 **/
	remove: function () {
		this.target = null;
		this.timestamp = null;
		this.contextMenu = null;
	
		this.focus = null;
		this.isDrag = null;
		this.isDrawFinished = null;
		this.selectedNode = null;
		
		this.sx = null;
		this.sy = null;
		this.ex = null;
		this.ey = null;
		
		this.prevX = null;
		this.prevY = null;
		
		this.id = null;
		this.name = null;	
		this.x = null;
		this.y = null;
		this.width = null;
		this.height = null;
		this.thickness = null;
		
		this.connector = null;	
		
		delete this;
		
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @method changeStatus 
	 * @param {String} className The name of the class to be changed.
	 **/
	changeStatus: function (className) {
		$(this.target).removeClass("statusDefault");
		$(this.target).removeClass("statusDrawingLine");
		$(this.target).removeClass("statusDrawingSquare");
		$(this.target).removeClass("statusMove");

		$(this.target).removeClass("statusResizeTopLeft");
		$(this.target).removeClass("statusResizeTopRight");
		$(this.target).removeClass("statusResizeBottomLeft");
		$(this.target).removeClass("statusResizeBottomRight");
		$(this.target).removeClass("statusResizeTop");
		$(this.target).removeClass("statusResizeBottom");
		$(this.target).removeClass("statusResizeLeft");
		$(this.target).removeClass("statusResizeRight");		
		
		$(this.target).addClass(className);
	},
	
	/**
	 * This function is an UIzard core initializating function.  
	 * @method move 
	 * @param {Number} offsetX The offset on the x-coordinate of moving distance.
	 * @param {Number} offsetY The offset on the y-coordinate of moving distance.
	 **/
	move: function (offsetX, offsetY) {
		this.sx += offsetX;
		this.sy += offsetY;
		this.ex += offsetX;
		this.ey += offsetY;
	}
};