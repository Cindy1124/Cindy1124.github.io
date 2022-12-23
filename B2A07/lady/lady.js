(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lady_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg5JAmHMAAAhMNMByTAAAMAAABMNg");
	mask.setTransform(365.75,243.85);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0955,0.0955);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,731.5,487.7), null);


(lib.筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(144.8,-34.15,1,1,0,0,0,365.8,243.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.筆, new cjs.Rectangle(-221,-277.9,731.5,487.7), null);


// stage content:
(lib.lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 筆11
	this.instance = new lib.筆();
	this.instance.setTransform(339.65,380,1,1,0,0,0,144.8,-34.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).wait(1).to({x:378.65},0).wait(1).to({x:425.1},0).wait(1).to({x:448.6,y:402.1},0).wait(1).to({y:415.35},0).wait(1).to({x:459.6,y:421.85},0).wait(1).to({x:465.05,y:434.1},0).wait(1).to({x:458.8,y:442.1},0).wait(1).to({x:456.3,y:453.1},0).to({_off:true},1).wait(9));

	// 遮色片11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_135 = new cjs.Graphics().p("AhDBDQgcgcAAgnQAAgnAcgcQAcgcAnAAQAnAAAcAcQAcAcAAAnQAAAngcAcQgcAcgnABQgngBgcgcg");
	var mask_graphics_136 = new cjs.Graphics().p("AhoB8QgcgdAAgoQAAgpAcgcQAVgUAbgGQALgCALAAQAoAAAcAcQAWAVAFAcQACAKAAAKQAAAogdAdQgcAdgoAAQgpAAgdgdgAA9AjQgFgcgWgVQgcgcgoAAQgLAAgLACIgBgRQAAgnAcgcQAcgcAmAAQAoAAAcAcQAcAcAAAnQAAAogcAbQgTATgZAGIAAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AhfCwQgkgcgBgoQABgcAQgWQAIgKAMgJQAmgdA1AAQAkAAAdAOQgdgOgkAAQg1AAgmAdQgMAJgIAKQgRgYAAgfQAAgoAcgdQAVgUAbgGIgBgRQAAgnAcgcQAcgcAmAAQAoAAAcAcQAcAcAAAnQAAAogcAcQgTATgZAGQgFgcgWgWQgcgcgoAAQgLAAgLACQALgCALAAQAoAAAcAcQAWAWAFAcQACAKAAAJQAAALgCAKQANAGALAJQAmAcAAApQAAAogmAcQglAdg0AAQg1AAgmgdg");
	var mask_graphics_138 = new cjs.Graphics().p("AALDaQgXgYgDghIAAgKQAAgnAagcQAcgcAoAAIACAAQAmABAbAbQAcAcAAAnQAAAogcAbQgcAcgnAAQgoAAgcgcgAiHCHQglgcAAgpQAAgbAQgWQgRgXAAgfQAAgpAdgdQAVgUAbgGIgCgRQAAgnAcgcQAcgcAoAAQAmAAAcAcQAcAcAAAnQAAAogcAcQgTATgZAGQgFgcgVgWQgcgcgpAAQgLAAgKACQAKgCALAAQApAAAcAcQAVAWAFAcQACAKAAAKQAAALgCAJQANAHALAIQAhAYAEAiIgCAAQgoAAgcAcQgaAcAAAnIAAAKQgOADgQAAQg1AAglgdgAiHgCQgMAJgJAKQAJgKAMgJQAlgcA1AAQAlAAAcANQgcgNglAAQg1AAglAcgAgPChIAAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("AAdEWQgTgTAAgbQAAgbATgUIACgCQATgRAaAAQAbAAATATQgTgTgbAAQgaAAgTARQgKgGgKgKQgXgYgDghIAAgKQAAgnAagcQAcgcAoAAIACAAQAmABAbAbQAcAcAAAnQAAAogcAbQgLALgNAHQATAUAAAbQAAAbgTATQgTATgbAAQgbAAgUgTgAiHBUQglgcAAgpQAAgaAQgWQgRgYAAgfQAAgpAdgdQAVgUAbgGIgCgRQAAgnAcgcQAcgcAoAAQAmAAAcAcQAcAcAAAnQAAAogcAcQgTATgZAGQgFgcgVgWQgcgcgpAAQgLAAgKACQAKgCALAAQApAAAcAcQAVAWAFAcQACAKAAAKQAAALgCAJQgcgNglAAQg1AAglAcQgMAKgJAKQAJgKAMgKQAlgcA1AAQAlAAAcANQANAHALAIQAhAZAEAhIgCAAQgoAAgcAcQgaAcAAAnIAAAKQgOADgQAAQg1AAglgdg");
	var mask_graphics_140 = new cjs.Graphics().p("AgsFEQgdgXAAggQAAghAdgXQAYgUAfgDIANgBQAoAAAdAYQANAKAGAMQgGgMgNgKQgdgYgoAAIgNABIgBgJQAAgaATgUIACgCQATgRAaAAQAbAAATATQgTgTgbAAQgaAAgTARQgKgGgKgKQgXgYgDghIAAgKQAAgoAagbQAcgbAoAAIACAAQAmABAbAaQAcAbAAAoQAAAngcAcQgLALgNAHQATAUAAAaQAAAcgTASIgKAIQAJAQAAASQAAAggcAXQgdAYgoAAQgoAAgcgYgAiHAiQglgcAAgoQAAgbAQgWQAJgLAMgJQAlgcA1gBQAlAAAcAOQgcgOglAAQg1ABglAcQgMAJgJALQgRgYAAggQAAgoAdgdQAVgVAbgFIgCgRQAAgoAcgcQAcgcAoAAQAmAAAcAcQAcAcAAAoQAAAngcAcQgTAUgZAGQgFgcgVgWQgcgcgpAAQgLAAgKACQAKgCALAAQApAAAcAcQAVAWAFAcQACAJAAAKQAAALgCAKQANAGALAJQAhAZAEAiIgCAAQgoAAgcAbQgaAbAAAoIAAAKQgOACgQABQg1gBglgcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_graphics_135,x:315.55,y:282.55}).wait(1).to({graphics:mask_graphics_136,x:311.8,y:288.3}).wait(1).to({graphics:mask_graphics_137,x:311.8,y:293.5}).wait(1).to({graphics:mask_graphics_138,x:315.875,y:297.625}).wait(1).to({graphics:mask_graphics_139,x:315.875,y:302.725}).wait(1).to({graphics:mask_graphics_140,x:315.875,y:307.75}).wait(10));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).wait(15));

	// 筆10
	this.instance_2 = new lib.筆();
	this.instance_2.setTransform(338.55,376,1,1,0,0,0,144.8,-34.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).wait(1).to({x:330.05,y:359.5},0).wait(1).to({x:304.55,y:365.5},0).to({_off:true},1).wait(18));

	// 遮色片10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_131 = new cjs.Graphics().p("AhXBZQglglAAg0QAAgzAlgkQAkglAzAAQA0AAAlAlQAkAkAAAzQAAA0gkAlQglAkg0AAQgzAAgkgkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(131).to({graphics:mask_1_graphics_131,x:172.55,y:259.95}).wait(19));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(131).to({_off:false},0).wait(19));

	// 筆09_2
	this.instance_3 = new lib.筆();
	this.instance_3.setTransform(372.1,373.35,1,1,0,0,0,144.8,-34.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).wait(1).to({x:380.95,y:373.65},0).wait(1).to({x:392.8,y:374.55},0).wait(1).to({x:398.3,y:379.55},0).wait(1).to({x:403.8,y:384.55},0).to({_off:true},1).wait(21));

	// 遮色片09_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_124 = new cjs.Graphics().p("AgsAjQgTgOAAgVQAAgTATgQQASgOAaAAQAaAAATAOQASAQAAATQAAAVgSAOQgTAPgaAAQgaAAgSgPg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AhcAsQgTgPAAgUQAAgUATgPQASgOAbAAQASAAAPAHQgLAMAAARQgBAVAVAPIAIAHIgFAFQgTAPgaAAQgbAAgSgPgAADAnIgIgHQgVgPABgVQAAgRALgMIAJgJQATgQAcAAQAdAAAUAQQAVAQAAAWQAAAVgVAPQgUAQgdAAQgWAAgRgJgAADAnIAAAAg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AiPA0QgTgOAAgVQAAgTATgPQASgPAbAAQASAAAOAHQgLANAAAPQAAAWAUAQIAJAGIgFAFQgTAPgaAAQgbAAgSgPgAAoApIgBAAQgUgTAAgZQAAgUANgQIAIgJQAVgSAeAAQAeAAAVASQAVATAAAaQAAAagVASQgVATgeAAQgeAAgVgTgAgwAvIgJgGQgUgQAAgWQAAgPALgNIAJgJQAUgPAdAAQAWAAASAKQgNAQAAAUQAAAZAUATQgTAQgcAAQgWAAgSgKgAgwAvIAAAAgAAnApIAAAAg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AiuA1QgTgPAAgUQAAgUATgPQASgOAbAAQASAAAPAHQgLAMAAAQQgBAWAVAPIAJAHIgGAFQgTAPgaAAQgbAAgSgPgAB3AuIgFgHQgIgRgBgWQAAgZALgSIADgEQANgUARAAQATAAANAUQANATgBAcQABAagNAUQgNATgTAAQgRAAgNgTgAAKAqIgBgBQgTgSgBgZQABgVALgQQgLAQgBAVQABAZATASQgTAQgdAAQgWAAgRgJIgJgHQgVgPABgWQAAgQALgMIAJgJQAUgQAcAAQAYAAAQAKIAJgIQAUgTAeAAQAfAAAUATIAFAEQgLASAAAZQABAWAIARIgDADQgUASgfAAQgeAAgUgSgAAJApIAAAAgAByAnIAAAAg");
	var mask_2_graphics_128 = new cjs.Graphics().p("ACBBFQgMgKgEgOQgDgIABgJQAAgZASgQQAJgIALgFQAMgEANAAQAaAAATARQATAQgBAZQABAZgTAQQgTASgaAAQgbAAgSgSgAjaAhQgTgOAAgUQAAgUATgPQASgOAbAAQASAAAPAGQgLANAAARQgBAUAVAQIAJAGIgGAFQgTAPgaABQgbgBgSgPgABLAbIgFgHQgIgSgBgWQAAgYALgSIADgFQANgTARAAQATAAANATQALASABAXQgLAFgJAIQgSAQAAAZQgBAJADAIIgIABQgRAAgNgTgABxAtIAAAAgAghAWIgBAAQgUgSgBgaQABgUAMgQIAJgJQAUgSAdAAQAfAAAUASIAFAFQgLASAAAYQABAWAIASIgDACQgUATgfAAQgdAAgUgTgAh6AcIgJgGQgVgQABgUQAAgRALgNIAJgIQAUgQAcAAQAYAAARAKQgMAQgBAUQABAaAUASQgUAQgdAAQgWAAgRgKgABGAUIAAAAgAgqg6IAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_2_graphics_124,x:227.05,y:265}).wait(1).to({graphics:mask_2_graphics_125,x:231.85,y:264.125}).wait(1).to({graphics:mask_2_graphics_126,x:237,y:263.275}).wait(1).to({graphics:mask_2_graphics_127,x:240.05,y:263.225}).wait(1).to({graphics:mask_2_graphics_128,x:244.45,y:265.15}).wait(22));

	// lady09上唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AC1A9IgbgCQgwgwgMAAQgmAFgVAAQgKAAgRgFQgPgGgLAAQgNAAg3ALIg0AKQglABgkgNQACgDAFgCQAxgUAlgVQBKgnAkAAQAGAAASAIQAUAIAKAAQADAAAXgIQARgGARAHQAaAKAiAmQAmArAHAnIABAEQgEgHgbgEg");
	this.shape_1.setTransform(243.45,265.875);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(124).to({_off:false},0).wait(26));

	// 筆09_1
	this.instance_4 = new lib.筆();
	this.instance_4.setTransform(296.1,461.25,1,1,0,0,0,144.8,-34.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(117).to({_off:false},0).wait(1).to({x:314.1,y:421.25},0).wait(1).to({x:331.1,y:390.7},0).wait(1).to({x:371.6,y:383.45},0).wait(1).to({x:384.1,y:388.2},0).wait(1).to({x:395.1},0).wait(1).to({x:407.85,y:384.7},0).to({_off:true},1).wait(26));

	// 遮色片09_1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_120 = new cjs.Graphics().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAATATQAVAUAAAbQAAAcgVAUQgTATgcABQgbgBgUgTg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AgQBNQgRgXgFgeQgBgLAAgMQgBgsAYggIALgMQATgTAbAAQAiAAAXAfQAZAgAAAsQAAAsgZAgQgXAggiAAQgiAAgXgggAhmAGQgTgSAAgcQAAgcATgUQAUgUAcAAQAcAAATAUIACABIgLAMQgYAgABAsQAAAMABALQgHACgJAAQgcAAgUgUgAgmAYIAAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AAvBZQgHgKgEgMQgLgaAAggQAAguAWgiIACgBQAXggAfABQAhAAAXAgQAYAigBAuQABAvgYAhQgXAhghABQgggBgYghgAhMA/QgRgXgFgdQgBgLAAgMQgBgsAYghIALgMQAUgTAbAAQAhAAAXAfQAGAIAFAJIgCABQgWAiAAAuQAAAgALAaQgXAcgfAAQgiAAgYgggAiigGQgTgUAAgcQAAgcATgUQAUgTAcAAQAcAAATATIACABIgLAMQgYAhABAsQAAAMABALQgHACgJAAQgcgBgUgSgAhBhlIAAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AgOBZQgHgKgEgMQgLgaAAggQAAguAWgiIACgBQAWggAfABQAgAAAWAeIgBABQgaAaAAAlQAAAjAaAaQAIAIAIAFQgFANgIALQgXAhghABQgggBgXghgAiKA/QgRgXgFgdQgBgLAAgMQgBgsAYghIALgMQAUgTAbAAQAiAAAXAfQAGAIAFAJIgCABQgWAiAAAuQAAAgALAaQgXAcggAAQgiAAgYgggABuBBQgIgFgIgIQgagaAAgjQAAglAagaIABgBQAagYAjAAQAlAAAZAZQAaAaAAAlQAAAjgaAaQgZAaglAAQgZAAgVgNgABuBBIAAAAgAjggGQgTgUAAgcQAAgcATgUQAUgTAcAAQAcAAATATIACABIgLAMQgYAhABAsQAAAMABALQgHACgJAAQgcgBgUgSgAh/hlIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_3_graphics_120,x:226.5,y:270.25}).wait(1).to({graphics:mask_3_graphics_121,x:232,y:274.375}).wait(1).to({graphics:mask_3_graphics_122,x:238,y:275.75}).wait(1).to({graphics:mask_3_graphics_123,x:244.2,y:275.75}).wait(27));

	// lady09下唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("AhgAhQgWgWgpggIgsgkQgIgIABgHIBKAJIgCAAIAUACQAYADAzAPQA1ARAPACQAZAEArgEIA8gFIAAgBQAagDAfANQADADgHAIIgVAUIglAmQgcAYggAAQiQAAgogog");
	this.shape_2.setTransform(243.4531,274.65);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120).to({_off:false},0).wait(30));

	// 筆08
	this.instance_5 = new lib.筆();
	this.instance_5.setTransform(516.1,499,1,1,0,0,0,144.8,-34.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(1).to({x:476.15,y:477.25},0).wait(1).to({x:450.15,y:461.25},0).wait(1).to({x:421.15,y:470.75},0).wait(1).to({x:399.65,y:482.25},0).wait(1).to({x:377.65,y:494.25},0).wait(1).to({x:346.65,y:505.25},0).wait(1).to({x:326.15,y:512.55},0).wait(1).to({x:308.65},0).wait(1).to({x:291.15},0).to({_off:true},1).wait(33));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_110 = new cjs.Graphics().p("AhsBtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AjYCUQg0g0AAhJQAAhJA0g0QA0g0BKAAQAsAAAkATQAXANAVAUQA0A0AABJQAAArgSAjQgMAagWAVQgzA0hJAAQhKAAg0g0gABEBlQASgjAAgrQAAhJg0g0QgVgUgXgNQAIgKAIgJQAtgtBAAAQBAAAAtAtQAtAtAABAQAAA/gtAtQgtAthAAAQgZAAgWgHgAgKiHIAAAAg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AlSDCQgwgvAAhDQAAhDAwgvQAvguBDAAQArgBAjAUQATALARAQQAwAvgBBDQAAAbgHAXQgMAkgcAcQgvAwhDAAQhDAAgvgwgAhGCCQAHgXAAgbQABhDgwgvQgRgQgTgLQAMguAjgkQA0g0BJAAQAsAAAlATQAYAMAUAVQA1A0AABKQAAApgSAkQgNAZgWAWQg0A0hJAAQg1AAgrgdgAC6A8QASgkAAgpQAAhKg1g0QgUgVgYgMQAHgKAJgKQAtgsBAgBQBBABAsAsQAuAtgBBAQABBBguArQgsAuhBgBQgYAAgWgGgAiSg9IAAAAg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AniEDQg4g4AAhQQAAhRA4g4QA5g5BRAAQBCAAAxAmQAMAJAKAKQA5A4AABRIgBAXQgHBBgxAwQg4A5hRAAQhRAAg5g5gAiXCSIABgXQAAhRg5g4QgKgKgMgJQAKgqAhgiQAvguBEAAQArgBAiAUQATALAQAQQAwAwAABCQAAAbgHAXQAHgXAAgbQAAhCgwgwQgQgQgTgLQALguAkgkQA0g0BKAAQAsAAAkATQAYAMAVAVQA0A0AABKQAAAqgSAkQASgkAAgqQAAhKg0g0QgVgVgYgMQAIgKAJgKQAtgsBAgBQBAABAtAsQAtAtAABAQAABBgtAsQgtAuhAgBQgZAAgWgGQgMAYgWAWQg0A0hJAAQg3AAgqgdQgMAkgdAcQgtAwhDAAQgtAAgjgVgAiXCSIAAAAg");
	var mask_4_graphics_114 = new cjs.Graphics().p("ApWEiQgjgjAAgyQAAgxAjgjQAjgjAxAAQApAAAeAXIAOAMQAjAjAAAxQAAASgEAPQgIAdgXAXQgjAjgyAAQgxAAgjgjgAmDD7IgLgNQAEgPAAgSQAAgxgjgjIgOgMQAChNA2g2QA5g5BRAAQBCAAAxAmQAMAIAKALQA5A4AABQIgBAYQgHBBgxAwQg4A5hRAAQhRAAg5g5gAg4CKIABgYQAAhQg5g4QgKgLgMgIQAKgrAhghQAvgvBDAAQArAAAjAUQALguAkgkQA0g0BKAAQAsAAAkATQAYAMAVAVQA0A0AABJQAAArgSAjQASgjAAgrQAAhJg0g0QgVgVgYgMQAIgKAJgKQAtgtBAAAQBAAAAtAtQAtAtAABAQAABAgtAtQgtAthAAAQgZAAgWgHQgMAZgWAWQg0A0hJAAQg3AAgqgdQAHgXAAgaQAAhDgwgwQgQgQgTgLQATALAQAQQAwAwAABDQAAAagHAXQgMAkgdAcQguAvhDAAQgsAAgjgUgAm7BtIAAAAgAiGgpIAAAAg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AquFDQggggAAguQAAgtAgghQAgggAuAAQAjAAAbATQAIAGAIAHQAgAhAAAtQAAANgDAMQgGAegXAXQghAggtAAQguAAgggggAn1EOQADgMAAgNQAAgtggghQgIgHgIgGQAGgkAbgcQAjgjAxAAQApAAAeAXIAOAMQAjAjAAAyQAAARgEAQQgIAdgXAWQgjAjgyAAQgpAAgfgYgAkuDdIgLgNQAEgQAAgRQAAgygjgjIgOgMQAChNA2g2QA5g4BRAAQBCAAAxAlQAMAJAKAKQA4A4AABRIgBAXQgHBCgwAwQg4A5hRAAQhRAAg5g5gAAcBrIABgXQAAhRg4g4QgKgKgMgJQAKgqAhghQAugvBEAAQArAAAjATQALguAkgkQA0g0BKAAQAsAAAkATQAYANAVAUQA0A0AABKQAAArgSAjQASgjAAgrQAAhKg0g0QgVgUgYgNQAIgKAJgJQAtgtBAAAQBAAAAtAtQAtAtAABAQAABAgtAtQgtAthAAAQgZAAgWgHQgMAagWAVQg0AzhJAAQg3AAgqgcQAHgXAAgbQAAhDgwgvQgQgRgTgLQATALAQARQAwAvAABDQAAAbgHAXQgMAjgdAcQguAwhDAAQgtAAgjgVgAgxhIIAAAAg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AsJFNQgmgmAAg3QAAg3AmgnQAngmA2AAQA3AAAnAmIACAEQAhggAtAAQAiABAbASQAIAGAIAIQAgAgABAtQAAAOgDALQgHAegXAXQggAhgtAAQgmAAgcgWQAYgiAAgrQABg0glgmQAlAmgBA0QAAArgYAiQgHAIgHAIQgnAng3AAQg2AAgngngAmTD9QADgLAAgOQgBgtggggQgIgIgIgGQAGgkAbgcQAjgiAygBQAoAAAeAYIAOALQAkAkAAAxQgBARgEAQQgIAdgXAXQgjAigxABQgpAAgfgZgAjMDMIgMgNQAEgQABgRQAAgxgkgkIgOgLQAChNA3g3QA5g4BQAAQBCAAAxAlQALAJAKAKQA5A5ABBQIgCAXQgHBCgxAwQg4A5hQAAQhQAAg5g5gAB9BaIACgXQgBhQg5g5QgKgKgLgJQAKgqAhghQAvgvBDAAQArAAAjAUQAMgvAjgkQA0gzBKAAQAsgBAlAUQAYAMAUAUQA1A0AABKQAAArgSAjQASgjAAgrQAAhKg1g0QgUgUgYgMQAHgLAJgJQAtgtBAAAQBBAAAsAtQAuAtgBBAQABBAguAtQgsAthBAAQgYAAgWgHQgNAagWAVQg0AzhJAAQg2ABgrgdQAHgXAAgbQABhCgwgwQgRgRgTgKQATAKARARQAwAwgBBCQAAAbgHAXQgMAjgcAcQgvAwhDAAQgsAAgkgVgAAwhZIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_4_graphics_110,x:298.45,y:359.3}).wait(1).to({graphics:mask_4_graphics_111,x:286.95,y:363.925}).wait(1).to({graphics:mask_4_graphics_112,x:275.2,y:368.05}).wait(1).to({graphics:mask_4_graphics_113,x:259.95,y:375.55}).wait(1).to({graphics:mask_4_graphics_114,x:250.45,y:376.375}).wait(1).to({graphics:mask_4_graphics_115,x:241.95,y:379.425}).wait(1).to({graphics:mask_4_graphics_116,x:232.2,y:381.1}).wait(34));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110).to({_off:false},0).wait(40));

	// 筆07
	this.instance_7 = new lib.筆();
	this.instance_7.setTransform(435.15,373.7,1,1,0,0,0,144.8,-34.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({_off:false},0).wait(1).to({x:413.1,y:427.6},0).wait(1).to({x:418.1,y:447.6},0).wait(1).to({x:444.6,y:457.6},0).wait(1).to({x:475.6,y:451.1},0).wait(1).to({x:510.6},0).wait(1).to({x:529.1,y:461.25},0).wait(1).to({x:542.55,y:473.25},0).wait(1).to({x:551.55,y:490.6},0).wait(1).to({x:561.1,y:512.55},0).to({_off:true},1).wait(43));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_98 = new cjs.Graphics().p("AhgBgQgngoAAg4QAAg3AngpQAognA4AAQA5AAAoAnQAoApAAA3QAAA4goAoQgoAog5ABQg4gBgogog");
	var mask_5_graphics_99 = new cjs.Graphics().p("AhRDHQgmgnAAg2QAAg2AmgnQAngmA1AAQArAAAhAZQghgZgrAAQg1AAgnAmQgLgIgKgJQgogoAAg4QAAg4AogpQAognA5AAQA3AAAoAnQAoApAAA4QAAA4goAoIgDAEQAJAFAIAIQAnAnAAA2QAAA2gnAnQgmAmg3AAQg1AAgngmg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AiHErQg+guAAhBQAAg0AognIgGgGQgmgmAAg2QAAg2AmgnQgLgHgKgKQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAnAoQAoAoAAA4QAAA5goAoIgDADQgggYgrAAQg2AAgnAmQAngmA2AAQArAAAgAYQAJAGAIAIQAnAnAAA2QAAASgFARQgVgDgVAAQhXAAg+AuQgMAKgKAKQAKgKAMgKQA+guBXAAQAVAAAVADQA9AJAuAiQA+AuAABBQAABBg+AuQg+AuhXAAQhXAAg+gug");
	var mask_5_graphics_101 = new cjs.Graphics().p("AAkExQgKgIgIgIQgnglAAgyQAAg8A4grIABgBQA8gqBTAAQBTAAA7AqQA7ArAAA9QAAA8g7ArQg7ArhTAAQhTAAg8grgAkiEpQg+guAAhBQAAg0AogoIgGgFQgmgnAAg1QAAg3AmgmQAngnA2AAQArAAAhAYQghgYgrAAQg2AAgnAnQgLgIgKgKQgogoAAg4QAAg5AogoQAogoA4AAQA5AAAoAoQAoAoAAA5QAAA4goAoIgDADQAJAHAIAIQAnAmAAA3QAAASgFARQgVgDgVAAQhYAAg+AuQgMAJgKAKQAKgKAMgJQA+guBYAAQAVAAAVADQA9AIAtAjQAQALALANQg4ArAAA8QAAAyAnAlIgKAIQg9AuhXAAQhYAAg+gug");
	var mask_5_graphics_102 = new cjs.Graphics().p("AiCExQgKgIgJgIQgnglgBgyQAAg8A6grIABgBQA7gqBTAAQBTAAA7AqIACACQgYAcAAAjQABA4A8AnIADACQgOAZgcAUQg7ArhTAAQhTAAg7grgAnJEpQg+guAAhBQAAg0AngoIgGgFQgmgnAAg1QAAg3AmgmQAngnA3AAQAqAAAhAYQghgYgqAAQg3AAgnAnQgKgIgLgKQgngoAAg4QAAg5AngoQAogoA5AAQA5AAAoAoQAoAoAAA5QAAA4goAoIgEADQAJAHAIAIQAnAmAAA3QAAASgFARQgUgDgWAAQhYAAg9AuQgNAJgKAKQAKgKANgJQA9guBYAAQAWAAAUADQA9AIAvAjQAPALAMANQg6ArAAA8QABAyAnAlIgJAIQg/AuhXAAQhYAAg9gugADEEEIgDgCQg8gngBg4QAAgjAYgcQAOgSAXgPQA9gnBWAAQBWAAA9AnQA8AoAAA4QAAA4g8AnQg9AohWAAQhUAAg8gmg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AjsExQgKgIgJgIQgnglgBgyQAAg8A6grIABgBQA7gqBUAAQBTAAA6AqIACACQgYAcAAAjQABA4A8AnIADACQgOAZgcAUQg6ArhTAAQhUAAg7grgAozEpQg+guAAhBQAAg0AngoIgGgFQgmgnAAg1QAAg3AmgmQAngnA3AAQAqAAAhAYQghgYgqAAQg3AAgnAnQgKgIgLgKQgngoAAg4QAAg5AngoQAogoA5AAQA5AAAoAoQAoAoAAA5QAAA4goAoIgEADQAJAHAIAIQAnAmAAA3QAAASgFARQA9AIAvAjQAPALAMANQg6ArAAA8QABAyAnAlIgJAIQg/AuhXAAQhYAAg9gugAozBLQgNAJgKAKQAKgKANgJQA9guBYAAQAWAAAUADQgUgDgWAAQhYAAg9AugAGkEsQgVgVgKgbQgJgWABgaQAAg5AngoIACgCIgCACQgnAoAAA5QgBAaAJAWIgIAGQg9AohWAAQhUAAg8gmIgDgCQg8gngBg4QAAgjAYgcQAOgSAXgPQA9gnBWAAQBWAAA9AnQAaASAPAUQAogmA3AAQA4AAAoAoQAoAoABA5QgBA4goAoQgoAog4AAQg4AAgpgog");
	var mask_5_graphics_104 = new cjs.Graphics().p("AICFUQgRgRgJgWQgKgXgBgcQAAg1AlgmQAYgWAdgJQgdAJgYAWQglAmAAA1QABAcAKAXQgXAKgbgBQg4ABgpgoQgVgWgKgaQgJgXABgaQAAg5AngoIACgBIgCABQgnAoAAA5QgBAaAJAXIgIAGQg9AnhWAAQhUAAg8gmIgDgBQg7gogBg4QAAgjAYgcQAOgRAWgPQA9gnBWAAQBWAAA9AnQAaARAPAVQAogmA3AAQA4AAAoAnQAXAXAKAcQASgFAUgBQA1AAAlAlQAmAmgBA1QABA1gmAlQglAmg1gBQg1ABgmgmgAk7ETQgKgIgJgIQgnglgBgyQAAg8A6grIABgBQA7gqBUAAQBTAAA7AqIACACQgYAcAAAjQABA4A7AoIADABQgNAZgcAUQg7ArhTAAQhUAAg7grgAqCELQg+guAAhBQAAg0AngoIgGgFQgmgnAAg1QAAg2AmgnQAngnA3AAQAqAAAhAZQghgZgqAAQg3AAgnAnQgKgIgLgKQgngoAAg4QAAg4AngpQAognA5AAQA5AAAoAnQAoApAAA4QAAA4goAoIgEAEQAJAGAIAIQAnAnAAA2QAAATgFAQQA9AJAvAiQAPAMAMAMQg6ArAAA8QABAyAnAlIgJAIQg/AuhXAAQhYAAg9gugAqCAtQgNAJgKAKQAKgKANgJQA9gtBYAAQAWAAAUACQgUgCgWAAQhYAAg9AtgAE2DfIAAAAg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AIuGgQgngnAAg5QAAgMACgMQglgHgcgcQgRgRgKgVQgKgYAAgcQAAg1AlglQAXgXAegJQgeAJgXAXQglAlAAA1QAAAcAKAYQgXAJgbAAQg4AAgogoQgWgWgKgaQgIgXAAgaQAAg4AognIACgCIgCACQgoAnAAA4QAAAaAIAXIgIAGQg9AnhVAAQhUAAg7glIgEgCQg8goAAg4QAAgiAXgcQAOgRAXgPQA8goBXAAQBVAAA9AoQAbARAPAVQAngmA3AAQA5AAAoAoQAXAVAKAcQARgFAVAAQA1AAAlAlQAlAlAAA1IgBAOIgSgBQg5AAgoAoQgeAfgHApQAHgpAegfQAogoA5AAIASABQAtAGAhAhQAoAoAAA4QAAA5goAnQgoAog4AAQg5AAgogogAl2DEQgKgHgIgIQgogmAAgyQAAg8A5gpIABgBQA8grBTAAQBTAAA7ArIACABQgXAcAAAiQAAA4A8AoIAEACQgPAYgcAUQg7ArhTAAQhTAAg8grgAq9C8Qg+guAAhBQAAg0AogmIgGgGQgmgmAAg3QAAg2AmgnQAngmA2AAQArAAAhAYQghgYgrAAQg2AAgnAmQgLgHgKgKQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA5goAoIgDADQAJAGAIAIQAnAnAAA2QAAATgFARQA9AJAuAiQAQAMALANQg5ApAAA8QAAAyAoAmIgKAHQg+AuhXAAQhYAAg+gugAq9ghQgMAKgKAKQAKgKAMgKQA+guBYAAQAVAAAVADQgVgDgVAAQhYAAg+AugAD7CQIAAAAg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AJqIKQgpgpAAg6QAAgpAVggIgJAAQg5AAgogoQgngoAAg4QAAgNACgLQglgHgcgcQgSgSgJgVQgKgXAAgcQAAg1AlglQAXgXAdgJQgdAJgXAXQglAlAAA1QAAAcAKAXQgXAJgbAAQg4AAgogoQgWgVgKgbQgIgWAAgZQAAg5AogoIACgCIgCACQgoAoAAA5QAAAZAIAWIgIAGQg9AohWAAQhSAAg8gmIgEgCQg8gnAAg3QAAgjAXgcQAOgSAXgPQA9gnBVAAQBWAAA9AnQAbASAPAUQAngmA3AAQA5AAAoAoQAWAXAKAbQASgFAUAAQA1AAAlAlQAmAlAAA1IgBAOIgSgBQg5AAgoAnQgfAggGApQAGgpAfggQAognA5AAIASABQAtAFAhAhQAoAoAAA5QAAAmgTAfIALAAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAJqFEQgMAMgIAOQAIgOAMgMQAlglAzgEQgzAEglAlgAm4BaQgKgIgJgIQgnglAAgxQAAg8A5grIABgBQA7gqBUAAQBTAAA7AqIACACQgXAcAAAjQAAA3A8AnIAEACQgPAZgcAUQg7ArhTAAQhUAAg7grgAr/BSQg+guAAhAQAAg0AngoIgFgFQgngnAAg2QAAg3AngmQAmgnA3AAQArAAAhAYQghgYgrAAQg3AAgmAnQgLgIgKgKQgogoAAg4QAAg5AogoQAogoA4AAQA5AAAoAoQAoAoAAA5QAAA4goAoIgDADQAJAHAIAIQAmAmAAA3QAAATgFARQA9AIAvAjQAPALAMANQg5ArAAA8QAAAxAnAlIgJAIQg+AuhYAAQhXAAg+gugAr/iLQgNAJgKAKQAKgKANgJQA+guBXAAQAWAAAUADQgUgDgWAAQhXAAg+AugAC5AlIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_5_graphics_98,x:275.7,y:303.05}).wait(1).to({graphics:mask_5_graphics_99,x:276.325,y:313.15}).wait(1).to({graphics:mask_5_graphics_100,x:284.55,y:323.925}).wait(1).to({graphics:mask_5_graphics_101,x:300.05,y:324.175}).wait(1).to({graphics:mask_5_graphics_102,x:316.8,y:324.175}).wait(1).to({graphics:mask_5_graphics_103,x:327.4,y:324.175}).wait(1).to({graphics:mask_5_graphics_104,x:335.3,y:327.15}).wait(1).to({graphics:mask_5_graphics_105,x:341.15,y:335.025}).wait(1).to({graphics:mask_5_graphics_106,x:347.775,y:345.675}).wait(44));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).wait(52));

	// 筆06
	this.instance_9 = new lib.筆();
	this.instance_9.setTransform(317.1,500.95,1,1,0,0,0,144.8,-34.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({_off:false},0).wait(1).to({x:323.1,y:446.25},0).wait(1).to({x:326.1,y:402.1},0).wait(1).to({x:316.35,y:356.5},0).wait(1).to({x:338.1,y:398.75},0).wait(1).to({x:351.35,y:408.75},0).wait(1).to({x:365.8,y:418.75},0).wait(1).to({x:386.8,y:421.5},0).wait(1).to({x:399.6,y:414.25},0).wait(1).to({x:413,y:405.15},0).wait(1).to({x:423.25,y:390.7},0).wait(1).to({x:429.9,y:374.3},0).wait(1).to({x:433.15,y:364.3},0).to({_off:true},1).wait(53));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_87 = new cjs.Graphics().p("AhUBUQgjgiAAgyQAAgwAjgkQAkgjAwAAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAQgwAAgkgkg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AgRC6QghgmAAg1QABguAXgjIAJgKQAbghAngDIAJgBQAtAAAhAlQAfAmAAA1QAAA1gfAmQghAmgtAAQgsAAgfgmgAiDgTQgkgiABgyQgBgxAkgkQAjgjAxAAQAxAAAjAjQAkAkAAAxQAAAogYAfQgnADgbAhIgJAKQgKACgLAAQgxAAgjgjgAAxggIAAAAg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AAND9QgkgbAAgoQAAgLADgKQAHgaAagUQAjgaAxgCQgxACgjAaQgaAUgHAaQgigHgZgdQgggmAAg2QAAgtAYgiIAIgLQAdgiAngDQgnADgdAiIgIALQgKACgLAAQgxAAgkgkQgjgjAAgyQAAgxAjgjQAkgkAxAAQAyAAAjAkQAiAjAAAxQAAAogWAfIAJgBQAsAAAgAmQAgAmAAA0QAAAegJAYIAFAAQA1AAAlAcQAlAcAAAnQAAAoglAbQglAdg1AAQg0AAglgdg");
	var mask_6_graphics_90 = new cjs.Graphics().p("AA/EzQgpgcAAgoIABgLQAFghAjgZQAngaA1gCQg1ACgnAaQgjAZgFAhQgwgCgjgaQglgcAAgnQAAgMADgKQghgGgZgeQgggmAAg0QAAguAYgjIAIgLQAcghAogEIAJAAQAtAAAfAlQAgAmAAA2QAAAcgKAZIAGAAQA0AAAlAbQAlAcAAAoIAAAJIAHAAQA6AAApAcQApAdAAAoQAAAogpAcQgpAcg6AAQg6AAgpgcgAg8BBQgaAUgIAaQAIgaAagUQAjgaAwgBQgwABgjAagAkKiCQgjgjAAgxQAAgyAjgjQAjgjAyAAQAxAAAjAjQAkAjAAAyQAAAogXAeQgoAEgcAhIgIALQgLACgKAAQgyAAgjgkgAhUiQIAAAAg");
	var mask_6_graphics_91 = new cjs.Graphics().p("ABbFaQgngYgJghQgggHgagSQgogcAAgoIAAgLQgxgBgjgbQgkgbgBgoQAAgLAEgLQAHgZAagUQAjgZAxgCQgxACgjAZQgaAUgHAZQgigGgZgeQgggkAAg2QAAguAYgjIAIgKQAdgiAngDQgnADgdAiIgIAKQgKACgLAAQgxAAgkgjQgjgjAAgyQAAgxAjgkQAkgjAxAAQAyAAAiAjQAkAkAAAxQAAAogXAfIAJgBQAtAAAgAmQAgAmAAA1QAAAegKAYIAGAAQAzAAAlAbQAlAcAAAnIAAAKIAHAAQA6AAApAcQAXAQAKATIgEAAQhGAAgyAfQgyAgAAAsQAAAKACAJQgCgJAAgKQAAgsAyggQAygfBGAAIAEAAQBEABAwAeQAyAgAAAsQAAAtgyAfQgyAghGAAQhGAAgygggAgPCAQgjAYgFAhQAFghAjgYQAmgaA1gCQg1ACgmAag");
	var mask_6_graphics_92 = new cjs.Graphics().p("ADsFiIgFgFQgngfAAgtQAAgtAnggIAPgLQAigUAsAAQA3gBAmAgQAnAgAAAtQAAAtgnAfQgmAhg3AAQgzAAglgcgAAPFWQgmgYgIghQgCgJAAgKQAAgsAwgfQAyggBHAAIAEAAQA9ABAtAZIgPALQgnAgAAAtQAAAtAnAfIAFAFQgrAUg5AAQhHAAgygggAhaEEQgpgbAAgoIABgLQgxgCgjgbQglgbAAgoQAAgLADgKQghgHgZgdQggglAAg2QAAguAYgiIAIgLQAcgiAogDIAJgBQAtAAAgAmQAgAmAAA1QAAAegKAYIAGAAQA0AAAlAbQAkAcAAAnIAAAKIAHAAQA6AAApAcQAXAQAKATIgEAAQhHAAgyAgQgwAfAAAsQAAAKACAJQghgGgagTgAhaB8QgjAYgFAiQAFgiAjgYQAngaA0gCQg0ACgnAagAjWATQgaAUgIAaQAIgaAagUQAjgZAxgCQgxACgjAZgAD2C5IAAAAgAmkiwQgjgjAAgyQAAgxAjgjQAjgkAyAAQAxAAAjAkQAkAjAAAxQAAAogXAfQgoADgcAiIgIALQgLACgKAAQgyAAgjgkgAjui+IAAAAg");
	var mask_6_graphics_93 = new cjs.Graphics().p("ACiFiIgFgFQgngfABgtQgBgtAnggIAQgLQAigUArAAQANgBAMACQgDAKAAALQAAArAmAfQAeAZApAEQgGAigfAZQgnAhg3AAQgyAAgmgcgAg5FWQgngYgJghQgCgJAAgKQAAgsAygfQAyggBFAAIAEAAQA+ABAtAZIgQALQgnAgABAtQgBAtAnAfIAFAFQgrAUg5AAQhFAAgygggAF9EiQgpgEgegZQgmgfAAgrQAAgLADgKQAHgdAcgXQAlgfA2ABQA1gBAmAfQAmAfAAAqQAAArgmAfQgmAeg1ABIgUgCgAF9EiIAAAAgAikEEQgogbAAgoIAAgLQAFgiAjgYQAngaA1gCQg1ACgnAaQgjAYgFAiQgxgCgjgbQgkgbgBgoQAAgLAEgKQAHgaAagUQAjgZAxgCQgxACgjAZQgaAUgHAaQgigHgZgdQggglAAg2QAAguAYgiQgKACgLAAQgxAAgkgkQgjgjAAgyQAAgxAjgjQAkgkAxAAQAyAAAiAkQAkAjAAAxQAAAogXAfQgnADgdAiIgIALIAIgLQAdgiAngDIAJgBQAtAAAgAmQAgAmAAA1QAAAegKAYIAGAAQA0AAAlAbQAlAcAAAnIAAAKIAHAAQA6AAAoAcQAXAQAKATIgEAAQhFAAgyAgQgyAfAAAsQAAAKACAJQgggGgbgTgACtC5IAAAAg");
	var mask_6_graphics_94 = new cjs.Graphics().p("ABkFiIgGgFQgmgfAAgtQAAgtAmggIAQgLQAigUAsAAQAMgBAMACQgCAKgBALQAAArAmAfQAfAZAoAEQgGAigfAZQgnAhg2AAQgzAAglgcgAh4FWQgngYgIghQgDgJABgKQgBgsAygfQAyggBGAAIAEAAQA9ABAtAZIgQALQgmAgAAAtQAAAtAmAfIAGAFQgsAUg4AAQhGAAgygggAE+EiQgogEgfgZQgmgfAAgrQABgLACgKQAHgdAcgXQAmgfA1ABIARAAQAFApAdAdQAhAhAuACQgBAqglAeQgmAeg2ABIgUgCgAjiEEQgpgbAAgoIABgLQAFgiAjgYQAmgaA2gCQg2ACgmAaQgjAYgFAiQgxgCgjgbQglgbAAgoQAAgLADgKQghgHgZgdQghglAAg2QABguAXgiQgKACgLAAQgxAAgjgkQgkgjABgyQgBgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAogYAfQgnADgcAiIgJALIAJgLQAcgiAngDIAJgBQAtAAAhAmQAfAmAAA1QAAAegJAYIAGAAQA0AAAlAbQAlAcAAAnIAAAKIAHAAQA6AAApAcQAXAQAJATIgEAAQhGAAgyAgQgyAfABAsQgBAKADAJQghgGgagTgAleATQgaAUgIAaQAIgaAagUQAjgZAxgCQgxACgjAZgAHUC9QgugCghghQgdgdgFgpIgBgOQAAgyAjghQAjgjAxAAQAyAAAjAjQAiAhABAyQgBAxgiAjQgjAjgyAAIgFAAgAHUC9IAAAAgABuC5IAAAAg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AA2FiIgFgFQgmgfAAgtQAAgtAmggIAQgLQAigUAsAAQAMgBAMACQgDAKAAALQAAArAmAfQAeAZApAEQgGAigfAZQgnAhg2AAQgzAAgmgcgAilFWQgngYgIghQgDgJAAgKQAAgsAygfQAyggBGAAIAFAAQA8ABAtAZIgQALQgmAgAAAtQAAAtAmAfIAFAFQgrAUg4AAQhGAAgygggAEREiQgpgEgegZQgmgfAAgrQAAgLADgKQAHgdAcgXQAmgfA1ABIARAAQAEApAeAdQAhAhAtACQAAAqgmAeQglAeg2ABIgUgCgAkPEEQgpgbAAgoIABgLQAFgiAjgYQAmgaA1gCQg1ACgmAaQgjAYgFAiQgxgCgjgbQglgbAAgoQAAgLADgKQAHgaAbgUQAjgZAxgCQgxACgjAZQgbAUgHAaQgigHgZgdQggglAAg2QAAguAYgiQgKACgLAAQgxAAgkgkQgjgjAAgyQAAgxAjgjQAkgkAxAAQAyAAAjAkQAjAjAAAxQAAAogXAfQgnADgdAiIgIALIAIgLQAdgiAngDIAJgBQAtAAAgAmQAgAmAAA1QAAAegJAYIAFAAQA1AAAlAbQAlAcAAAnIgBAKIAIAAQA6AAApAcQAWAQALATIgFAAQhGAAgyAgQgyAfAAAsQAAAKADAJQghgGgagTgAGmC9QgtgCghghQgegdgEgpIgBgOQAAgyAjghQAegfAqgEQAIAbAVAVQAhAhAvAAIAQgBIgQABQgvAAghghQgVgVgIgbQgEgPAAgRQAAguAhghQAhgiAvABQAvgBAhAiQAhAhAAAuQAAAwghAgQgbAbglAFQAGARAAAVQAAAxgjAjQgiAjgyAAIgGAAgAGmC9IAAAAgABBC5IAAAAgACnCmIAAAAg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AAsFiIgGgFQgmgfAAgtQAAgtAmggIAQgLQAigUAsAAQAMgBAMACQgCAKgBALQAAArAmAfQAfAZAoAEQgGAigfAZQgnAhg2AAQgzAAglgcgAiwFWQgngYgIghQgDgJABgKQgBgsAygfQAyggBHAAIAEAAQA8ABAtAZIgQALQgmAgAAAtQAAAtAmAfIAGAFQgsAUg3AAQhHAAgygggAEGEiQgogEgfgZQgmgfAAgrQABgLACgKQAHgdAcgXQAmgfA1ABIARAAQAFApAdAdQAhAhAuACQgBAqglAeQgmAeg2ABIgUgCgAEGEiIAAAAgAkaEEQgpgbAAgoIABgLQAFgiAjgYQAmgaA2gCQg2ACgmAaQgjAYgFAiQgxgCgjgbQglgbAAgoQAAgLADgKQghgHgZgdQghglAAg2QABguAXgiQgKACgLAAQgxAAgjgkQgkgjABgyQgBgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAogYAfQgnADgcAiIgJALIAJgLQAcgiAngDIAJgBQAtAAAhAmQAfAmAAA1QAAAegJAYIAGAAQA0AAAlAbQAlAcAAAnIAAAKIAHAAQA6AAApAcQAXAQAKATIgEAAQhHAAgyAgQgyAfABAsQgBAKADAJQghgGgagTgAmWATQgaAUgIAaQAIgaAagUQAjgZAxgCQgxACgjAZgAGcC9QgugCghghQgdgdgFgpIgBgOQAAgyAjghQAfgfApgEQAIAbAVAVQAhAhAvAAIAQgBIgQABQgvAAghghQgVgVgIgbQgEgPAAgRQAAguAhghQAbgbAkgFQAGALAJAJQAYAYAgAAQARAAAPgHQgPAHgRAAQggAAgYgYQgJgJgGgLQgJgRAAgUQABggAXgYQAYgYAgAAQAiAAAXAYQAYAYgBAgQABAhgYAYQgMAMgNAFQAbAgAAAqQAAAwghAgQgbAbglAFQAGARABAVQgBAxgiAjQgjAjgyAAIgFAAgAGcC9IAAAAgAA2C5IAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_6_graphics_87,x:182.55,y:255.45}).wait(1).to({graphics:mask_6_graphics_88,x:187.3,y:265.85}).wait(1).to({graphics:mask_6_graphics_89,x:193.425,y:271.6}).wait(1).to({graphics:mask_6_graphics_90,x:200.775,y:276.975}).wait(1).to({graphics:mask_6_graphics_91,x:208.65,y:281.225}).wait(1).to({graphics:mask_6_graphics_92,x:216.175,y:281.6}).wait(1).to({graphics:mask_6_graphics_93,x:223.55,y:281.6}).wait(1).to({graphics:mask_6_graphics_94,x:229.8,y:281.6}).wait(1).to({graphics:mask_6_graphics_95,x:234.325,y:281.6}).wait(1).to({graphics:mask_6_graphics_96,x:235.4,y:281.6}).wait(54));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87).to({_off:false},0).wait(63));

	// 筆05
	this.instance_11 = new lib.筆();
	this.instance_11.setTransform(322.1,444.05,1,1,0,0,0,144.8,-34.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).wait(1).to({y:418.05},0).wait(1).to({y:390.7},0).wait(2).to({x:327.1,y:445.2},0).wait(1).to({y:478.2},0).wait(1).to({x:308.6,y:495.2},0).wait(1).to({x:280.6,y:506.3},0).wait(1).to({x:254.1,y:520.8},0).wait(1).to({x:237.6,y:539.8},0).to({_off:true},1).wait(66));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_77 = new cjs.Graphics().p("AiLCMQg5g6gBhSQABhRA5g6QA6g5BRgBQBSABA6A5QA5A6ABBRQgBBSg5A6Qg6A5hSAAQhRAAg6g5g");
	var mask_7_graphics_78 = new cjs.Graphics().p("AhyEoQg4g5AAhPQAAhQA4g4IAFgEQA3gzBLAAQA1AAAqAZQgqgZg1AAQhLAAg3AzQgZgOgVgUQg5g6AAhRQAAhTA5g6QA6g5BSAAQBRAAA6A5QA6A6AABTQAABRg6A6IgIAIQAWALATATQA4A4AABQQAABPg4A5Qg4A4hQAAQhOAAg5g4g");
	var mask_7_graphics_79 = new cjs.Graphics().p("AhhHOQgvhBAAhcQAAhdAvhBIAFgIQAtg5A9AAQBBAAAvBAQgvhAhBAAQg9AAgtA5QgLgIgLgLQg4g4AAhPQAAhPA4g4IAFgFQA3gzBLAAQA1AAAqAYQgqgYg1AAQhLAAg3AzQgZgNgVgVQg5g6AAhSQAAhSA5g6QA6g5BSgBQBRABA6A5QA6A6AABSQAABSg6A6IgIAHQAWAMATAUQA4A4AABPQAABPg4A4QgPAPgQALIAAABQAuBBAABdQAABcguBBQgvBBhBAAQhBAAguhBg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AiwJNQg2grAAg9QAAg9A2grQAmgeAwgKQAWgDAXAAQBMgBA2AsQAKAIAJAJQAjAmAAAxQAAA9g2ArQg2AshMAAQhMAAg3gsgABVF9Qg2gshMABQgXAAgWADQgkg8AAhRQAAhdAuhBIAGgIQgMgIgKgLQg4g3AAhQQAAhPA4g4IAEgFQA3gzBMAAQA0AAAqAYQgqgYg0AAQhMAAg3AzQgYgNgVgVQg6g6AAhSQAAhSA6g6QA6g5BRgBQBSABA5A5QA6A6AABSQAABSg6A6IgIAHQAWAMATAUQA5A4AABPQAABQg5A3QgPAPgQALIAAABQAvBBAABdQAABcgvBBQgSAagVAPQgJgJgKgIgACPApQgvg/hBAAQg8AAgtA4QAtg4A8AAQBBAAAvA/g");
	var mask_7_graphics_81 = new cjs.Graphics().p("AkXKgQhCgoAAg5QAAg5BCgpQBCgoBdABIAJAAQgEgQAAgRQAAg9A2grQAmgeAvgKQgjg8AAhRQAAhdAthAIAGgIQgMgIgKgLQg3g4AAhQQAAhPA3g4IAEgFQgXgNgVgVQg6g6AAhSQAAhSA6g6QA5g5BSgBQBSABA5A5QA6A6AABSQAABSg6A6IgIAHQgqgYg0AAQhNAAg3AzQA3gzBNAAQA0AAAqAYQAWAMATAUQA5A4AABPQAABQg5A4QgPAPgQALIAAABQAvBAAABdQAABcgvBBQgSAagVAPQgJgJgKgIQg2gshNABQgXAAgWADQAWgDAXAAQBNgBA2AsQAKAIAJAJQAjAmAAAxQAAA9g2ArQgrAig4AHQgLgpg0ggQg9gmhYgBQBYABA9AmQA0AgALApQADAMAAANQAAA5hCAoQhBAohdAAQhdAAhCgogAECgmQgvhAhBAAQg9AAgtA5QAtg5A9AAQBBAAAvBAg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AmhLaQhGgnAAg4QAAg4BGgoQBGgnBkAAQAYAAAWACQBGAIA1AdQBHAoAAA4QAAAKgCAJQgKAsg7AgQhGAohjAAQhkAAhGgogAgJKOQACgJAAgKQAAg4hHgoQg1gdhGgIQAIgvA5gjQBCgoBcAAIAJAAQBXACA/AmQAzAgAMApQgMgpgzggQg/gmhXgCQgEgPAAgRQAAg+A2grQAlgeAwgJQgkg8AAhSQAAhbAvhCIAFgHQgLgJgLgKQg4g5AAhPQAAhQA4g4IAFgEQgZgOgVgVQg5g6AAhRQAAhTA5g6QA6g5BSAAQBSAAA6A5QA6A6AABTQAABRg6A6IgIAIQgqgZg1AAQhMAAg3A0QA3g0BMAAQA1AAAqAZQAWAMATATQA4A4AABQQAABPg4A5QgPAOgQALIAAABQAuBCAABbQAABcguBCQgSAZgVAQQgJgJgLgJQg2grhMAAQgYAAgWAEQAWgEAYAAQBMAAA2ArQALAJAJAJQAjAlAAAyQAAA8g3ArQgqAjg4AHQADAMAAANQAAA4hCAoQhCAphdAAIgfgBgAGRhgQgvhAhBAAQg+AAgtA6QAtg6A+AAQBBAAAvBAgAjJH2IAAAAg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AouM1QhPgzAAhIQAAhJBPgzQBQg0BxAAIAcABQAGgyBAgkQBGgoBkAAQAYABAWACQBFAHA1AeQBHAnAAA4QAAAKgCAJQgKAsg7AhQhFAnhiAAQAEAPAAAQQAABIhQAzQhQA0hxgBQhxABhQg0gAisI+QA/AoANA1QgNg1g/goQhGgthfgGQBfAGBGAtgACMInQACgJAAgKQAAg4hHgnQg1gehFgHQAIgwA4gjQBCgoBdABIAJAAQBXABA/AmQAzAgAMApQgMgpgzggQg/gmhXgBQgEgQAAgRQAAg9A2grQAlgeAwgKQgkg8AAhQQAAhdAvhBIAFgIQgLgIgLgLQg4g4AAhQQAAhPA4g4IAFgFQgZgNgVgVQg5g6AAhSQAAhSA5g6QA6g5BSgBQBSABA6A5QA6A6AABSQAABSg6A6IgIAHQgqgYg1AAQhMAAg3AzQA3gzBMAAQA1AAAqAYQAWAMATAUQA4A4AABPQAABQg4A4QgPAPgQALIAAABQAuBBAABdQAABbguBBQgSAagVAPQgJgJgLgIQg2gshMABQgYAAgWADQAWgDAYAAQBMgBA2AsQALAIAJAJQAjAmAAAxQAAA9g3ArQgqAig4AHQADAMAAANQAAA5hCAoQhCAohdAAIgggBgAInjGQgvhAhBAAQg+AAgtA5QAtg5A+AAQBBAAAvBAg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_7_graphics_77,x:186.8,y:282.2}).wait(1).to({graphics:mask_7_graphics_78,x:188.375,y:297.65}).wait(1).to({graphics:mask_7_graphics_79,x:188.375,y:315.2}).wait(1).to({graphics:mask_7_graphics_80,x:186.625,y:325.7}).wait(1).to({graphics:mask_7_graphics_81,x:175.125,y:333.7}).wait(1).to({graphics:mask_7_graphics_82,x:160.875,y:339.45}).wait(1).to({graphics:mask_7_graphics_83,x:145.875,y:349.7}).wait(67));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(77).to({_off:false},0).wait(73));

	// 筆04
	this.instance_13 = new lib.筆();
	this.instance_13.setTransform(295.05,409,1,1,0,0,0,144.8,-34.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:false},0).wait(1).to({x:287.1,y:390.7},0).wait(1).to({x:296.1,y:341},0).wait(1).to({regX:145,regY:-33.9,scaleX:0.938,scaleY:0.938,x:299.45,y:283.2},0).wait(1).to({regX:144.8,scaleX:0.975,scaleY:0.975,x:316.45,y:289.5},0).wait(1).to({scaleX:0.9846,scaleY:0.9846,x:308.4,y:285.9},0).wait(1).to({regX:145.1,regY:-34,scaleX:1.0365,scaleY:1.0365,x:335.2,y:271.45},0).wait(1).to({regX:145,scaleX:1.068,scaleY:1.068,x:286.55,y:284.65},0).wait(1).to({regX:144.8,scaleX:1.0297,scaleY:1.0297,x:264.65,y:290.85},0).wait(1).to({regX:145,scaleX:1.0337,scaleY:1.0337,x:253.1,y:311.55},0).wait(1).to({regX:144.8,regY:-34.1,scaleX:1,scaleY:1,x:242.1,y:328},0).wait(1).to({x:251.1,y:348},0).wait(1).to({x:261.05,y:359},0).wait(1).to({x:268.1,y:369},0).wait(1).to({x:274.05,y:383},0).wait(1).to({x:264.05,y:390.7},0).wait(1).to({x:257.1,y:404.85},0).wait(1).to({x:263.05,y:415.6},0).wait(1).to({x:276.1,y:431.3},0).wait(1).to({x:288.05,y:440.95},0).wait(1).to({x:276.05,y:454.1},0).wait(1).to({x:274.05,y:467},0).wait(1).to({x:284.05,y:477.7},0).wait(1).to({x:296.1,y:485.6},0).wait(1).to({x:307.1,y:505.95},0).to({_off:true},1).wait(76));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_55 = new cjs.Graphics().p("AhvBQQgtghgBgvQABguAtgiQAvghBAAAQBBAAAuAhQAvAigBAuQABAvgvAhQguAihBAAQhAAAgvgig");
	var mask_8_graphics_56 = new cjs.Graphics().p("AjmBlQg1geAAgrQAAgrA1geQA0geBKgBQAwAAAnANQAUAHATALQA0AeAAArQAAAegaAYQgLAKgPAJQg0AfhKgBQhKABg0gfgAAwBSQAagYAAgeQAAgrg0geQgTgLgUgHQALgSAVgQQAughBBgBQBBABAuAhQAvAiAAAvQAAAugvAhQguAihBgBQgrAAgjgOgAAwBSIAAAAg");
	var mask_8_graphics_57 = new cjs.Graphics().p("AlXCGQgzgeAAgsQAAgrAzgeQAzgfBIAAQAfAAAaAGQAlAHAdASQAzAeAAArQAAARgHAPQgNAXgfATQgzAfhIAAQhIAAgzgfgAg1BcQAHgPAAgRQAAgrgzgeQgdgSglgHQANgXAfgSQA1geBIAAQAwAAAnANQAVAGATALQA0AfAAArQAAAdgaAYQAagYAAgdQAAgrg0gfQgTgLgVgGQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAgQgtAihCAAQgrAAgjgPQgKAKgQAJQg0AfhLAAQgfAAgcgGgAg1BcIAAAAg");
	var mask_8_graphics_58 = new cjs.Graphics().p("AmiDLQgngmAAg3QAAg3AngnQAlgjAygCIAGAAQA3AAAmAlQAfAfAHAnQgHgngfgfQgmglg3AAIgGAAQADgoAvgdQAzgeBJAAQAeAAAbAFQAkAHAdASQAzAfAAAsQgBAPgHAPQgLAYggATQgyAehIAAQgUABgRgDQACAMAAAMQgBA3gnAmQgmAng3AAQg2AAgngngAAIAPQAHgPABgPQAAgsgzgfQgdgSgkgHQAMgWAggSQA0gfBJAAQAwAAAnANQAVAHATALQA0AeAAArQAAAegaAYQgLAKgPAJQg1AehKAAQghAAgcgGgADegcQAagYAAgeQAAgrg0geQgTgLgVgHQALgTAVgQQAvghBBAAQBBAAAuAhQAvAigBAvQABAvgvAhQguAihBAAQgrAAgjgPgADegcIAAAAgAhkhzIAAAAg");
	var mask_8_graphics_59 = new cjs.Graphics().p("AnCEmQgfgqAAg7QAAg8AfgrQANgQAOgKQgIgXgBgaQAAg1AngnQAlgkAygCIAGgBQA3AAAmAnQAfAeAHAoQACAKAAAMQgBA3gnAmQgcAdglAIQAGAWAAAaQgBA7gfAqQggArgsAAQgtAAgfgrgAkqBaQASAZAIAeQgIgegSgZQgggqgsABQgbAAgWAPQAWgPAbAAQAsgBAgAqgAipgHQgHgogfgeQgmgng3AAIgGABQADgoAvgdQAzgfBJAAQAeAAAbAGQAkAHAdASQAzAeAAAsQgBARgHAPQgMAXgfATQgyAfhIAAQgUAAgRgCgAAhhOQAHgPABgRQAAgsgzgeQgdgSgkgHQAMgXAggSQAzgeBKgBQAwAAAnANQAVAHATALQA0AeAAAsQAAAegaAYQgLAKgPAJQg1AfhKgBQghAAgcgFgAD3h6QAagYAAgeQAAgsg0geQgTgLgVgHQALgSAVgQQAvghBBgBQBBABAuAhQAvAigBAvQABAvgvAhQguAihBgBQgrAAgjgOgAD3h6IAAAAgAhLjRIAAAAg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AnEGZQgqgqAAg9QAAg8AqgqQAKgKALgHIgGgIQgggqAAg7QAAg8AggqQAMgQAPgKQAWgPAaAAQAtgBAgAqQASAYAHAeQgHgegSgYQgggqgtABQgaAAgWAPQgJgXAAgaQAAg2AmgnQAlgkAygCIAHgBQA3AAAmAnQAeAeAHAoQgHgogegeQgmgng3AAIgHABQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAeAAAsQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACALAAAMQAAA3gnAmQgcAcgmAIQAGAWAAAaQAAA5geAqQgdgPgkgBQguAAgkAaQAkgaAuAAQAkABAdAPQAUAKARARQArAqAAA8QAAA9grAqQgqAqg8AAQg8AAgrgqgAAujBQAHgPAAgRQAAgsgzgeQgcgSglgHQANgXAfgSQA0geBJgBQAwAAAnANQAVAHATALQA0AeAAAsQAAAegaAYQgKAKgQAJQg0AfhLgBQggAAgcgFgAEDjtQAagYAAgeQAAgsg0geQgTgLgVgHQAMgSAVgQQAvghBAgBQBCABAtAhQAvAiAAAvQAAAvgvAhQgtAihCgBQgrAAgjgOgAEDjtIAAAAgAg/lEIAAAAg");
	var mask_8_graphics_61 = new cjs.Graphics().p("AmjHvQgrgdAAgpQAAgnAlgcQgOgJgNgNQgqgqAAg8QAAg8AqgrQAKgJALgIQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZIgGgHQgggrAAg7QAAg6AggrQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAfAHAnQgHgngegfQgmgmg3AAIgHAAQADgoAwgdQAzgeBIAAQAfAAAaAFQAlAHAcASQAzAfAAAsQAAAQgHAPQgNAYgfATQgyAehIAAQgTABgSgDQACAMAAAMQAAA3gnAmQgcAdgmAHQAGAXAAAYQAAA6geApQAUAKARARQArArAAA8QAAA8grAqIAAABQgfgMgnAAQg8AAgqAdIgGAEIAGgEQAqgdA8AAQAnAAAfAMQASAGAQALQAqAeAAApQAAApgqAdQgrAdg9AAQg8AAgqgdgAAukKQAHgPAAgQQAAgsgzgfQgcgSglgHQANgWAfgSQA0gfBJAAQAwAAAnANQAVAHATALQA0AeAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDk2QAagYAAgeQAAgrg0geQgTgLgVgHQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDk2IAAAAgAg/mNIAAAAg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AkkIYQgXgXgFggQg6gBgpgcQgrgdAAgpQAAgnAlgcQgOgJgNgNQgqgqAAg8QAAg8AqgrQAKgJALgIIgGgHQgggrAAg6QAAg7AggrQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAfAHAnQgHgngegfQgmgmg3AAIgHAAQADgoAwgdQAzgeBIAAQAfAAAaAFQAlAHAcASQAzAfAAAsQAAAQgHAPQgNAYgfATQgyAehIAAQgTABgSgDQACAMAAAMQAAA3gnAmQgcAdgmAHQAGAXAAAZQAAA5geApQAUAKARARQArArAAA8QAAA8grAqIAAABQASAGAQALQAlAaAEAjQgVgLgaAAQgqAAgfAeQgdAeAAArIABARIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQAOAHAMAMQAfAeAAArQAAArgfAdQgeAfgrAAQgqAAgfgfgAmjE3IgGAEIAGgEQAqgdA8AAQAnAAAfAMQgfgMgnAAQg8AAgqAdgAmvBHQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZgAAuk1QAHgPAAgQQAAgsgzgfQgcgSglgHQANgWAfgTQA0geBJAAQAwAAAnANQAVAHATAKQA0AfAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDlhQAagYAAgeQAAgrg0gfQgTgKgVgHQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDlhIAAAAgAg/m4IAAAAg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AjTJLQgegfAAgrIAAgCQAAgsAeggQAggfAtAAQAJAAAJACQAhAFAYAYQAgAggBAsQABAtggAfQgfAfgsAAQgtAAgggfgAkkHlQgXgYgFgfIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQAOAHAMAMQAcAcACAmQgJgCgJAAQgtAAggAfQgeAgAAAsIAAACQgdgGgWgWgAmjGQQgrgdAAgpQAAgmAlgcQgOgJgNgNQgqgqAAg8QAAg8AqgrQAKgJALgIQAkgYAuAAQAkAAAdAOQgdgOgkAAQguAAgkAYIgGgIQgggpAAg7QAAg8AggqQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAeAHAoQgHgogegeQgmgmg3AAIgHAAQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAfAAArQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACAMAAAMQAAA2gnAnQgcAdgmAHQAGAWAAAaQAAA6geAoQAUAKARARQArArAAA8QAAA8grAqIAAABQgfgMgnAAQg8AAgqAdIgGAEIAGgEQAqgdA8AAQAnAAAfAMQASAGAQALQAlAaAEAjQgVgLgaAAQgqAAgfAeQgdAeAAArIABARQg6gBgpgdgAAuloQAHgPAAgRQAAgrgzgfQgcgSglgHQANgXAfgSQA0geBJAAQAwAAAnANQAVAGATALQA0AfAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDmUQAagYAAgeQAAgrg0gfQgTgLgVgGQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDmUIAAAAgAg/nrIAAAAg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AinJ8QggggAAgtIAAgMIgMgKQgegfAAgrIAAgCQAAgsAeggQAggfAtAAQAJAAAJACQgJgCgJAAQgtAAggAfQgeAgAAAsIAAACQgdgGgWgWQgXgYgFgfQg6gBgpgdQgrgdAAgpQAAgmAlgcQgOgJgNgNQgqgqAAg8QAAg8AqgqQAKgJALgIIgGgIQgggqAAg7QAAg8AggqQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAeAHAoQgHgogegeQgmgmg3AAIgHAAQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAfAAArQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACAMAAAMQAAA2gnAnQgcAdgmAHQAGAWAAAaQAAA6geApQAUAKARARQArAqAAA8QAAA8grAqIAAABQASAGAQALQAlAaAEAjQgVgLgaAAQgqAAgfAeQgdAeAAArIABARIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQAOAHAMAMQAcAcACAmQAhAFAYAYQAgAggBAsIAAAHQAJAGAHAHQAfAgAAAuQAAAtgfAgQggAggtAAQguAAgggggAinHhQgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbATQgbgTgiAAQguAAggAggAmjDSIgGAEIAGgEQAqgdA8AAQAnAAAfAMQgfgMgnAAQg8AAgqAdgAmvgdQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZgAAumaQAHgPAAgRQAAgrgzgfQgcgSglgHQANgXAfgSQA0geBJAAQAwAAAnANQAVAGATALQA0AfAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDnGQAagYAAgeQAAgrg0gfQgTgLgVgGQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDnGIAAAAgAg/odIAAAAg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AkcKwQgbgcAAgoQAAgnAbgcQAcgcAoAAQAJAAAJABIgBgPIAAgLIgMgLQgegeAAgrIAAgCQAAgtAegfQAggfAtAAQAJAAAJABQgJgBgJAAQgtAAggAfQgeAfAAAtIAAACQgdgGgWgWQgXgYgFggIgBgRQAAgqAdgfQAfgeAqAAQAaAAAVALQgVgLgaAAQgqAAgfAeQgdAfAAAqIABARQg6gBgpgcQgrgdAAgpQAAgnAlgcQgOgJgNgMQgqgrAAg8QAAg7AqgqQAKgKALgHQAkgaAuAAQAkAAAdAPQgdgPgkAAQguAAgkAaIgGgIQgggqAAg8QAAg7AggrQAMgQAPgLQAWgPAaAAQAtAAAgAqQASAZAHAdQgHgdgSgZQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg2AmgnQAlgkAygDIAHAAQA3AAAmAnQAeAeAHAnQgHgngegeQgmgng3AAIgHAAQADgoAwgdQAzgeBIAAQAfAAAaAFQAlAIAcARQAzAfAAAsQAAAQgHAPQgNAYgfATQgyAfhIAAQgTAAgSgDQACAMAAAMQAAA3gnAmQgcAdgmAHQAGAXAAAZQAAA6geApQAUALARARQArAqAAA7QAAA8grArIAAAAQgfgMgnAAQg8AAgqAdIgGAEIAGgEQAqgdA8AAQAnAAAfAMQASAHAQAKQAlAaAEAjQAOAHAMAMQAcAcACAmQAhAGAYAYQAgAfgBAtIAAAGQAJAGAHAIQAfAgAAAtQAAAugfAgQggAggtAAQgRAAgPgEQgBgmgagaQgWgWgcgFQAcAFAWAWQAaAaABAmIAAADQAAAogbAcQgcAcgoAAQgoAAgcgcgAinGyQgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbASQgbgSgiAAQguAAggAggAAunKQAHgPAAgQQAAgsgzgfQgcgRglgIQANgWAfgSQA0gfBJAAQAwAAAnANQAVAHATALQA0AeAAArQAAAegaAYQgKALgQAJQg0AehLAAQggAAgcgGgAEDn2QAagYAAgeQAAgrg0geQgTgLgVgHQAMgTAVgPQAvgiBAAAQBCAAAtAiQAvAhAAAvQAAAvgvAiQgtAhhCAAQgrAAgjgPgAEDn2IAAAAgAg/pNIAAAAg");
	var mask_8_graphics_66 = new cjs.Graphics().p("Ak3L0QgegdAAgrQAAgqAegfIANgMQgOgWABgcQAAgoAbgcQAcgcAoAAQAJAAAJACQAcAFAWAVQAaAbABAlIAAAEQAAAngbAcIgIAHIgKgMQgegegrAAQghAAgaASQAagSAhAAQArAAAeAeIAKAMQAVAbgBAiQAAArgeAdQgeAfgrAAQgqAAgegfgAh5IhQgBglgagbQgWgVgcgFIgBgPIAAgLIgMgLQgegeAAgsIAAgCQAAgsAegfQAgggAtAAQAJABAJABQgJgBgJgBQgtAAggAgQgeAfAAAsIAAACQgdgGgWgWQgXgXgFggIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQgVgLgaAAQgqAAgfAeQgdAeAAArIABARQg6gBgpgcQgrgdAAgpQAAgnAlgcIAGgEQAqgdA8AAQAnAAAfAMQgfgMgnAAQg8AAgqAdIgGAEQgOgJgNgNQgqgqAAg7QAAg8AqgrQAKgJALgIIgGgHQgggrAAg7QAAg7AggrQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAfAHAnQgHgngegfQgmgmg3AAIgHAAQADgoAwgdQAzgeBIAAQAfAAAaAFQAlAHAcASQAzAfAAAsQAAAQgHAPQgNAYgfATQgyAehIAAQgTABgSgDQACAMAAAMQAAA3gnAmQgcAdgmAHQAGAXAAAZQAAA6geApQAUAKARARQArArAAA8QAAA7grAqIAAABQASAGAQALQAlAaAEAjQAOAHAMAMQAcAcACAmQAhAFAYAZQAgAfgBAsIAAAHQAJAGAHAHQAfAhAAAtQAAAugfAfQggAhgtAAQgRAAgPgFgAinFqQgcAcgEAnQAEgnAcgcQAggfAuAAQAiAAAbASQgbgSgiAAQguAAggAfgAmviUQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZgAAuoRQAHgPAAgQQAAgsgzgfQgcgSglgHQANgWAfgTQA0geBJAAQAwAAAnANQAVAHATAKQA0AfAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDo9QAagYAAgeQAAgrg0gfQgTgKgVgHQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDo9IAAAAgAg/qUIAAAAg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AkaNEQgtgfAAgrQAAgnAlgdQgLgHgKgKQgegeAAgrQAAgqAegfIANgLQgOgXABgcQAAgnAbgcQAcgcAoAAQAJAAAJABIgBgPIAAgLIgMgKQgegfAAgrIAAgCQAAgsAeggQAggfAtAAQAJAAAJACQgJgCgJAAQgtAAggAfQgeAgAAAsIAAACQgdgGgWgWQgXgYgFggIgBgQQAAgrAdgfQAfgeAqAAQAaABAVAKQgVgKgagBQgqAAgfAeQgdAfAAArIABAQQg6AAgpgdQgrgdAAgpQAAgmAlgdQgOgIgNgMQgqgqAAg9QAAg8AqgqQAKgKALgHQAkgaAuAAQAkABAdAPQgdgPgkgBQguAAgkAaIgGgIQgggqAAg7QAAg8AggrQAMgQAPgKQAWgPAaAAQAtgBAgAqQASAZAHAeQgHgegSgZQgggqgtABQgaAAgWAPQgJgXAAgaQAAg2AmgnQAlgkAygCIAHgBQA3AAAmAnQAeAeAHAoQgHgogegeQgmgng3AAIgHABQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAeAAAsQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACALAAAMQAAA3gnAmQgcAdgmAIQAGAWAAAaQAAA5geAqQAUAKARARQArAqAAA8QAAA9grAqIAAAAQgfgLgngBQg8AAgqAdIgGADIAGgDQAqgdA8AAQAnABAfALQASAGAQALQAlAaAEAiQAOAIAMALQAcAcACAnQAhAFAYAYQAgAggBAsIAAAHQAJAGAHAHQAfAgAAAtQAAAugfAgQggAggtAAQgRAAgPgEQgBglgagbQgWgVgcgGQAcAGAWAVQAaAbABAlIAAADQAAAogbAcIgIAHQAVAagBAiQABAfgQAXQA0AFAmAZQAtAeAAAsQAAArgtAfQguAfhBAAQhAAAgugfgAkaKwIgIAGIAIgGQAugfBAAAIAVABIgVgBQhAAAguAfgAimITIAKANIgKgNQgegegrABQghAAgaASQAagSAhAAQArgBAeAegAinEbQgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbATQgbgTgiAAQguAAggAggAAupgQAHgPAAgRQAAgsgzgeQgcgSglgHQANgXAfgSQA0geBJgBQAwAAAnANQAVAHATALQA0AeAAAsQAAAegaAYQgKAKgQAJQg0AfhLgBQggAAgcgFgAEDqMQAagYAAgeQAAgsg0geQgTgLgVgHQAMgSAVgQQAvghBAgBQBCABAtAhQAvAiAAAvQAAAvgvAhQgtAihCgBQgrAAgjgOgAEDqMIAAAAgAg/rjIAAAAg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AhTNyQghgbAAgnIAAgBQgBgnAigcQAdgYAmgDQgmADgdAYQgiAcABAnIAAABQgaAHgeAAQhAAAgugfQgtgeAAgsQAAgnAlgdIAIgGQAugeBAAAIAVABIgVgBQhAAAguAeIgIAGQgLgHgKgKQgegeAAgqQAAgrAegeIANgMQgOgWABgcQAAgoAbgcQAcgcAoAAQAJAAAJACIgBgPIAAgMIgMgKQgegfAAgrIAAgCQAAgsAeggQAggfAtAAQAJAAAJACQAhAFAYAYQAgAggBAsIAAAHQAJAGAHAHQAfAgAAAuQAAAtgfAgQggAggtAAQgRAAgPgEQgBglgagbQgWgVgcgFQAcAFAWAVQAaAbABAlIAAAEQAAAngbAcIgIAHQAVAagBAjQABAegQAYQA0AEAmAZQAtAfAAArIAAADIANgBQAvAAAhAcQAhAcABAnQgBAoghAbQghAcgvAAQgvAAghgcgAimHoIAKAMIgKgMQgegegrAAQghAAgaASQAagSAhAAQArAAAeAegAinDvQgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbATQgbgTgiAAQguAAggAggAh5GmIAAAAgAkkDBQgXgYgFgfIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQgVgLgaAAQgqAAgfAeQgdAeAAArIABARQg6gBgpgdQgrgdAAgpQAAgmAlgbIAGgEQAqgdA8AAQAnAAAfAMQgfgMgnAAQg8AAgqAdIgGAEQgOgJgNgNQgqgqAAg8QAAg8AqgrQAKgJALgIIgGgIQgggqAAg7QAAg8AggqQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAeAHAoQgHgogegeQgmgmg3AAIgHAAQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAfAAArQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACAMAAAMQAAA2gnAnQgcAdgmAHQAGAWAAAaQAAA6geApQAUAKARARQArArAAA8QAAA8grAqIAAABQASAGAQALQAlAaAEAiQAOAHAMAMQAcAcACAmQgJgCgJAAQgtAAggAfQgeAgAAAsIAAACQgdgGgWgWgAmvkPQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZgAAuqMQAHgPAAgRQAAgrgzgfQgcgSglgHQANgXAfgSQA0geBJAAQAwAAAnANQAVAGATALQA0AfAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDq4QAagYAAgeQAAgrg0gfQgTgLgVgGQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDq4IAAAAgAg/sPIAAAAg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AgvPHQgcgcAAgoQAAgoAcgcIAMgKQgbgHgVgRQghgbAAgnIAAgBQgBgoAigcQAdgXAmgEQgmAEgdAXQgiAcABAoIAAABQgaAGgeAAQhAAAgugeQgtgfAAgrQAAgoAlgcIAIgGQAugfBAAAIAVABIgVgBQhAAAguAfIgIAGQgLgHgKgKQgegeAAgrQAAgqAegfIANgLQAagTAhAAQArAAAeAeIAKAMIgKgMQgegegrAAQghAAgaATQgOgXABgcQAAgnAbgcQAcgcAoAAQAJAAAJABQAcAFAWAWQAaAaABAmIAAADQAAAogbAcIgIAGQAVAbgBAiQABAegQAYQA0AEAmAaQAtAeAAAsIAAACIANAAQAvAAAhAbQAhAcABAoQgBAnghAcQgJAHgKAGQARAHANAOQAdAcAAAoQAAAogdAcQgcAdgnAAQgnAAgdgdgAgjM1QAYgSAgAAQAUAAARAHQgRgHgUAAQggAAgYASgAh5FRQgBgmgagaQgWgWgcgFIgBgPIAAgLIgMgLQgegeAAgrIAAgCQAAgtAegfQAggfAtAAQAJAAAJABQgJgBgJAAQgtAAggAfQgeAfAAAtIAAACQgdgGgWgWQgXgYgFggIgBgRQAAgpAdgfQAfgeAqAAQAaAAAVALQgVgLgaAAQgqAAgfAeQgdAfAAApIABARQg6gBgpgcQgrgcAAgpQAAgnAlgcQgOgJgNgMQgqgrAAg8QAAg8AqgqQAKgKALgHQAkgaAuAAQAkAAAdAPQgdgPgkAAQguAAgkAaIgGgIQgggqAAg8QAAg7AggrQAMgQAPgLQAWgPAaAAQAtAAAgAqQASAZAHAdQgHgdgSgZQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg2AmgnQAlgkAygDIAHAAQA3AAAmAnQAeAeAHAnQgHgngegeQgmgng3AAIgHAAQADgoAwgdQAzgeBIAAQAfAAAaAFQAlAIAcARQAzAfAAAsQAAAQgHAPQgNAYgfATQgyAfhIAAQgTAAgSgDQACAMAAAMQAAA3gnAmQgcAdgmAHQAGAXAAAZQAAA6geApQAUALARARQArAqAAA8QAAA8grArIAAAAQgfgMgnAAQg8AAgqAdIgGAEIAGgEQAqgdA8AAQAnAAAfAMQASAHAQAKQAlAaAEAjQAOAHAMAMQAcAcACAlQAhAGAYAYQAgAfgBAtIAAAGQAJAGAHAIQAfAgAAAtQAAAugfAgQggAggtAAQgRAAgPgEgAinCaQgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbASQgbgSgiAAQguAAggAggAAuriQAHgPAAgQQAAgsgzgfQgcgRglgIQANgWAfgSQA0gfBJAAQAwAAAnANQAVAHATALQA0AeAAArQAAAegaAYQgKALgQAJQg0AehLAAQggAAgcgGgAEDsOQAagYAAgeQAAgrg0geQgTgLgVgHQAMgTAVgPQAvgiBAAAQBCAAAtAiQAvAhAAAvQAAAvgvAiQgtAhhCAAQgrAAgjgPgAEDsOIAAAAgAg/tlIAAAAg");
	var mask_8_graphics_70 = new cjs.Graphics().p("AiOPyQgYgYgBghQABgjAYgYQAXgXAiAAIAKAAQAcADAVAUQAXAYAAAjIAAABQAAAhgXAXQgYAZgjAAQgiAAgXgZgAgDO6IAAgBQAAgjgXgYQgVgUgcgDIAAgKQAAgoAcgdIAMgKQAYgSAgAAQAUAAARAHQARAHANAOQAdAdAAAoQAAAogdAbQgcAdgnAAQgNAAgLgDgAgDO6IAAAAgAhTL2QghgbAAgnIAAgBQgBgoAigcQAdgXAmgEQgmAEgdAXQgiAcABAoIAAABQgaAHgeAAQhAAAgugfQgtgfAAgrQAAgnAlgdIAIgGQAugfBAAAIAVABIgVgBQhAAAguAfIgIAGQgLgHgKgKQgegeAAgrQAAgqAegfIANgLQgOgXABgcQAAgnAbgcQAcgcAoAAQAJAAAJABIgBgPIAAgLIgMgKQgegfAAgrIAAgCQAAgsAeggQAggeAtAAQAJAAAJACQgJgCgJAAQgtAAggAeQgeAgAAAsIAAACQgdgGgWgWQgXgYgFggIgBgPQAAgrAdgfQAfgeAqAAQAaABAVAKQgVgKgagBQgqAAgfAeQgdAfAAArIABAPQg6AAgpgcQgrgdAAgpQAAgmAlgdIAGgDQAqgeA8AAQAnABAfALQgfgLgngBQg8AAgqAeIgGADQgOgIgNgNQgqgqAAg9QAAg8AqgqQAKgKALgHIgGgIQgggqAAg7QAAg8AggrQAMgQAPgKQAWgPAaAAQAtgBAgAqQASAZAHAeQgHgegSgZQgggqgtABQgaAAgWAPQgJgXAAgaQAAg2AmgnQAlgkAygCIAHgBQA3AAAmAnQAeAeAHAoQgHgogegeQgmgng3AAIgHABQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAeAAAsQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACALAAAMQAAA3gnAmQgcAdgmAIQAGAWAAAaQAAA5geAqQAUAKARARQArAqAAA8QAAA9grAqIAAAAQASAHAQALQAlAaAEAiQAOAIAMALQAcAcACAnQAhAFAYAXQAgAggBAsIAAAHQAJAGAHAHQAfAgAAAtQAAAugfAgQggAggtAAQgRAAgPgEQgBglgagbQgWgVgcgGQAcAGAWAVQAaAbABAlIAAADQAAAogbAcIgIAHQAVAagBAiQABAfgQAXQA0AFAmAZQAtAeAAAsIAAACIANAAQAvAAAhAbQAhAcABAoQgBAoghAbQgJAIgKAFQgRgHgUAAQggAAgYASQgbgGgVgSgAimFrIAKANIgKgNQgegegrAAQghAAgaATQAagTAhAAQArAAAeAegAinBzQgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbATQgbgTgiAAQguAAggAggAmvmLQAkgaAuAAQAkABAdAPQgdgPgkgBQguAAgkAagAh5EqIAAAAgAAusIQAHgPAAgRQAAgsgzgeQgcgSglgHQANgXAfgSQA0geBJgBQAwAAAnANQAVAHATALQA0AeAAAsQAAAegaAYQgKAKgQAJQg0AfhLgBQggAAgcgFgAEDs0QAagYAAgeQAAgsg0geQgTgLgVgHQAMgSAVgQQAvghBAgBQBCABAtAhQAvAiAAAvQAAAvgvAhQgtAihCgBQgrAAgjgOgAEDs0IAAAAgAg/uLIAAAAg");
	var mask_8_graphics_71 = new cjs.Graphics().p("Ah4QxQgfgXAAghQAAgfAcgXQgKgFgJgKQgYgYgBghQABgjAYgYQAXgXAiAAIAKAAIAAgKQAAgoAcgdIAMgKQAYgSAgAAQAUAAARAHQARAHANAOQAdAdAAAoQAAAogdAbQgcAdgnAAQgNAAgLgDIAAgBQAAgjgXgYQgVgUgcgDQAcADAVAUQAXAYAAAjIAAABQAAAbgQAUQgLgBgMAAQgugBggAYIgDACIADgCQAggYAuABQAMAAALABQAdAFAXARQAhAXAAAhQAAAhghAXQggAXgrABQgugBgggXgAhTK4QghgbAAgnIAAgBQgBgoAigcQAdgXAmgEQgmAEgdAXQgiAcABAoIAAABQgaAHgeAAQhAAAgugfQgtgfAAgrQAAgnAlgdIAIgGQAugfBAAAIAVABIgVgBQhAAAguAfIgIAGQgLgHgKgKQgegeAAgrQAAgqAegfIANgLQgOgXABgcQAAgnAbgcQAcgcAoAAQAJAAAJABIgBgPIAAgLIgMgKQgegfAAgrIAAgCQAAgrAeggQAggfAtAAQAJAAAJACQAhAFAYAYQAgAggBArIAAAHQAJAGAHAHQAfAgAAAtQAAAugfAgQggAggtAAQgRAAgPgEQgBglgagbQgWgVgcgGQAcAGAWAVQAaAbABAlIAAADQAAAogbAcIgIAHQAVAagBAiQABAfgQAXQA0AFAmAZQAtAeAAAsIAAACIANAAQAvAAAhAbQAhAcABAoQgBAoghAbQgJAIgKAFQgRgHgUAAQggAAgYASQgbgGgVgSgAimEtIAKANIgKgNQgegegrAAQghAAgaATQAagTAhAAQArAAAeAegAinA1QgcAcgEAmQAEgmAcgcQAgggAuAAQAiAAAbATQgbgTgiAAQguAAggAggAh5DsIAAAAgAkkAHQgXgXgFggIgBgQQAAgrAdgfQAfgeAqAAQAaABAVAKQgVgKgagBQgqAAgfAeQgdAfAAArIABAQQg6AAgpgdQgrgdAAgpQAAgmAlgdQgOgIgNgNQgqgqAAg9QAAg8AqgqQAKgKALgHQAkgaAuAAQAkABAdAPQgdgPgkgBQguAAgkAaIgGgIQgggqAAg7QAAg8AggrQAMgQAPgKQAWgPAaAAQAtgBAgAqQASAZAHAeQgHgegSgZQgggqgtABQgaAAgWAPQgJgXAAgaQAAg2AmgnQAlgkAygCIAHgBQA3AAAmAnQAeAeAHAoQgHgogegeQgmgng3AAIgHABQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAeAAAsQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACALAAAMQAAA3gnAmQgcAdgmAIQAGAWAAAaQAAA5geAqQAUAKARARQArAqAAA8QAAA9grAqIAAAAQgfgLgngBQg8AAgqAeIgGADIAGgDQAqgeA8AAQAnABAfALQASAHAQALQAlAaAEAiQAOAIAMALQAcAcACAnQgJgCgJAAQgtAAggAfQgeAgAAArIAAACQgdgGgWgWgAAutGQAHgPAAgRQAAgsgzgeQgcgSglgHQANgXAfgSQA0geBJgBQAwAAAnANQAVAHATALQA0AeAAAsQAAAegaAYQgKAKgQAJQg0AfhLgBQggAAgcgFgAEDtyQAagYAAgeQAAgsg0geQgTgLgVgHQAMgSAVgQQAvghBAgBQBCABAtAhQAvAiAAAvQAAAvgvAhQgtAihCgBQgrAAgjgOgAEDtyIAAAAgAg/vJIAAAAg");
	var mask_8_graphics_72 = new cjs.Graphics().p("AgMRuQgggaAAgmQAAgUAKgRIgIAAQguAAgggYQgfgXAAghQAAgfAcgXQgKgFgJgJQgYgYgBgiQABgiAYgYQAXgYAiAAIAKAAIAAgKQAAgoAcgdIAMgKQAYgSAgAAQAUAAARAIQARAGANAOQAdAdAAAoQAAAogdAcQgcAcgnAAQgNAAgLgDIAAgBQAAgigXgYQgVgVgcgDQAcADAVAVQAXAYAAAiIAAABQAAAbgQAUQgLgBgMAAQguAAggAXIgDACIADgCQAggXAuAAQAMAAALABQAdAFAXARQAhAXAAAhQgBAPgGAMIAGAAQAuAAAfAaQAhAbAAAlQAAAmghAaQgfAaguAAQguAAgfgagAgMPuQgPAMgHAPQAHgPAPgMQAdgYAqgCQgqACgdAYgAhTJ4QghgbAAgnIAAgBQgBgnAigcQAdgYAmgDQgmADgdAYQgiAcABAnIAAABQgaAHgeAAQhAAAgugfQgtgeAAgsQAAgnAlgdIAIgGQAugeBAAAIAVABIgVgBQhAAAguAeIgIAGQgLgHgKgKQgegeAAgqQAAgrAegeIANgMQAagSAhAAQArAAAeAeIAKAMIgKgMQgegegrAAQghAAgaASQgOgWABgcQAAgoAbgcQAcgcAoAAQAJAAAJACQAcAFAWAVQAaAbABAlIAAAEQAAAngbAcIgIAHQAVAagBAjQABAegQAYQA0AEAmAZQAtAfAAArIAAADIANgBQAvAAAhAcQAhAcABAnQgBAoghAbQgJAIgKAGQgRgIgUAAQggAAgYASQgbgGgVgSgAh5CsQgBglgagbQgWgVgcgFIgBgPIAAgMIgMgKQgegfAAgqIAAgCQAAgsAeggQAggfAtAAQAJAAAJACQgJgCgJAAQgtAAggAfQgeAgAAAsIAAACQgdgGgWgWQgXgYgFgfIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQgVgLgaAAQgqAAgfAeQgdAeAAArIABARQg6gBgpgdQgrgdAAgpQAAgmAlgcIAGgEQAqgdA8AAQAnAAAfAMQgfgMgnAAQg8AAgqAdIgGAEQgOgJgNgNQgqgqAAg8QAAg8AqgrQAKgJALgIIgGgIQgggqAAg7QAAg8AggqQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAeAHAoQgHgogegeQgmgmg3AAIgHAAQADgoAwgdQAzgfBIAAQAfAAAaAGQAlAHAcASQAzAfAAArQAAARgHAPQgNAXgfATQgyAfhIAAQgTAAgSgCQACAMAAAMQAAA2gnAnQgcAdgmAHQAGAWAAAaQAAA6geApQAUAKARARQArArAAA8QAAA8grAqIAAABQASAGAQALQAlAaAEAjQAOAHAMAMQAcAcACAmQAhAFAYAYQAgAggBAsIAAAHQAJAGAHAHQAfAfAAAuQAAAtgfAgQggAggtAAQgRAAgPgEgAingKQgcAbgEAmQAEgmAcgbQAgggAuAAQAiAAAbATQgbgTgiAAQguAAggAggAmvoJQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZgAh5CsIAAAAgAAuuGQAHgPAAgRQAAgrgzgfQgcgSglgHQANgXAfgSQA0geBJAAQAwAAAnANQAVAGATALQA0AfAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDuyQAagYAAgeQAAgrg0gfQgTgLgVgGQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDuyIAAAAgAg/wJIAAAAg");
	var mask_8_graphics_73 = new cjs.Graphics().p("AB+SzQgdgdAAgoQAAgfARgYQAFgHAHgHQAQgQAUgIQAQgFARAAQApAAAcAdQAdAdAAAoQAAAogdAdQgcAdgpAAQgoAAgdgdgAgMQmQgggaAAgmQAAgUAKgRIgIAAQguAAgggXQgfgXAAgiQAAgfAcgWQgKgGgJgJQgYgYgBgiQABgiAYgYQAXgYAiAAIAKAAIAAgKQAAgoAcgdIAMgJQAYgTAgAAQAUAAARAIQARAHANANQAdAdAAAoQAAAogdAcQgcAcgnABQgNAAgLgDIAAgCQAAgigXgYQgVgUgcgEQAcAEAVAUQAXAYAAAiIAAACQAAAagQAVQAdAEAXARQAhAXAAAhQgBAPgGAMIAGAAQAuAAAfAaQAhAbAAAlQAAAYgNATQgUAIgQAQQgHAHgFAHQgWAJgbAAQguAAgfgagAgMOmQgPANgHAOQAHgOAPgNQAdgYAqgCQgqACgdAYgAh4M5IgDADIADgDQAggXAuAAQAMAAALACQgLgCgMAAQguAAggAXgAhTIxQghgcAAgnIAAgBQgBgnAigcQAdgXAmgEQgmAEgdAXQgiAcABAnIAAABQgaAHgeAAQhAAAgugeQgtgfAAgsQAAgnAlgcIAIgHQAugeBAAAIAVABIgVgBQhAAAguAeIgIAHQgLgHgKgLQgegdAAgrQAAgqAegfIANgMQgOgWABgcQAAgoAbgcQAcgcAoAAQAJAAAJACIgBgOIAAgLIgMgLQgegeAAgsIAAgCQAAgsAegfQAgggAtAAQAJABAJABQgJgBgJgBQgtAAggAgQgeAfAAAsIAAACQgdgGgWgWQgXgXgFggIgBgRQAAgrAdgeQAfgeAqAAQAaAAAVALQgVgLgaAAQgqAAgfAeQgdAeAAArIABARQg6gBgpgcQgrgdAAgpQAAgnAlgcQgOgJgNgNQgqgqAAg8QAAg8AqgrQAKgJALgIQAkgZAuAAQAkAAAdAPQgdgPgkAAQguAAgkAZIgGgHQgggrAAg7QAAg7AggrQAMgRAPgKQAWgPAaAAQAtAAAgAqQASAYAHAeQgHgegSgYQgggqgtAAQgaAAgWAPQgJgWAAgaQAAg3AmgnQAlgkAygCIAHAAQA3AAAmAmQAeAfAHAnQgHgngegfQgmgmg3AAIgHAAQADgoAwgdQAzgeBIAAQAfAAAaAFQAlAHAcASQAzAfAAAsQAAAQgHAPQgNAYgfATQgyAehIAAQgTABgSgDQACAMAAAMQAAA3gnAmQgcAdgmAHQAGAXAAAZQAAA6geApQAUAKARARQArArAAA8QAAA8grAqIAAABQgfgMgnAAQg8AAgqAdIgGAEIAGgEQAqgdA8AAQAnAAAfAMQASAGAQALQAlAaAEAjQAOAHAMAMQAcAcACAmQAhAFAYAZQAgAfgBAsIAAAHQAJAGAHAHQAfAhAAAtQAAAtgfAfQggAhgtAAQgRAAgPgFQgBglgagbQgWgVgcgFQAcAFAWAVQAaAbABAlIAAAEQAAAngbAcIgIAHQAVAbgBAiQABAegQAYQA0AEAmAZQAtAfAAArIAAADIANAAQAvAAAhAbQAhAcABAnQgBAoghAcQgJAHgKAGQgRgIgUAAQggAAgYATQgbgHgVgRgAimCmIAKAMIgKgMQgegegrAAQghAAgaASQAagSAhAAQArAAAeAegAinhSQgcAcgEAnQAEgnAcgcQAggfAuAAQAiAAAbASQgbgSgiAAQguAAggAfgAh5BkIAAAAgAAuvOQAHgPAAgQQAAgsgzgfQgcgSglgHQANgWAfgSQA0gfBJAAQAwAAAnANQAVAHATALQA0AeAAArQAAAegaAYQgKAKgQAJQg0AfhLAAQggAAgcgGgAEDv6QAagYAAgeQAAgrg0geQgTgLgVgHQAMgTAVgQQAvghBAAAQBCAAAtAhQAvAiAAAvQAAAvgvAhQgtAihCAAQgrAAgjgPgAEDv6IAAAAgAg/xRIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_8_graphics_55,x:176.5,y:160.35}).wait(1).to({graphics:mask_8_graphics_56,x:163.875,y:162.1}).wait(1).to({graphics:mask_8_graphics_57,x:152.75,y:165.475}).wait(1).to({graphics:mask_8_graphics_58,x:146.5,y:173.15}).wait(1).to({graphics:mask_8_graphics_59,x:144,y:182.6}).wait(1).to({graphics:mask_8_graphics_60,x:142.75,y:194.1}).wait(1).to({graphics:mask_8_graphics_61,x:142.75,y:201.35}).wait(1).to({graphics:mask_8_graphics_62,x:142.75,y:205.65}).wait(1).to({graphics:mask_8_graphics_63,x:142.75,y:210.775}).wait(1).to({graphics:mask_8_graphics_64,x:142.75,y:215.775}).wait(1).to({graphics:mask_8_graphics_65,x:142.75,y:220.525}).wait(1).to({graphics:mask_8_graphics_66,x:142.75,y:227.65}).wait(1).to({graphics:mask_8_graphics_67,x:142.75,y:235.6}).wait(1).to({graphics:mask_8_graphics_68,x:142.75,y:239.975}).wait(1).to({graphics:mask_8_graphics_69,x:142.75,y:248.525}).wait(1).to({graphics:mask_8_graphics_70,x:142.75,y:252.4}).wait(1).to({graphics:mask_8_graphics_71,x:142.75,y:258.6}).wait(1).to({graphics:mask_8_graphics_72,x:142.75,y:264.975}).wait(1).to({graphics:mask_8_graphics_73,x:142.75,y:272.15}).wait(77));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(55).to({_off:false},0).wait(95));

	// 筆03
	this.instance_15 = new lib.筆();
	this.instance_15.setTransform(365.8,268.1,1,1,0,0,0,144.8,-34.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(37).to({_off:false},0).wait(1).to({x:357.8,y:257.1},0).wait(1).to({x:344.8},0).wait(1).to({x:338.8,y:289.1},0).wait(1).to({x:324.3,y:314.6},0).wait(1).to({x:300.3,y:324.1},0).wait(1).to({x:272.8,y:339.1},0).wait(1).to({x:288.8,y:371.6},0).wait(1).to({x:306.3,y:396.6},0).wait(1).to({x:297.8,y:418.1},0).wait(1).to({x:305.3,y:443.6},0).wait(1).to({x:299.3,y:461.25},0).to({_off:true},1).wait(101));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_40 = new cjs.Graphics().p("AhhCKQgog5ABhRQgBhQAog5QApg5A4AAQA5AAAoA5QApA5AABQQAABRgpA5QgoA5g5AAQg4AAgpg5g");
	var mask_9_graphics_41 = new cjs.Graphics().p("AiJEVQgsg8AAhVQAAhVAsg7QAZgjAggOQAXgLAaAAQA8ABAsA7QARAWAKAaQgKgagRgWQgsg7g8gBQgaAAgXALQgMglABgrQgBhSAog5QApg4A4AAQA5AAAoA4QApA5AABSQAABRgpA5QgTAZgXAOQASAsgBA0QABBVgtA8QgsA9g8AAQg/AAgrg9g");
	var mask_9_graphics_42 = new cjs.Graphics().p("AjVF2QhCgwAAhFQAAhEBCgxQA4gpBNgGIAagBQBcABBCAvQAoAeAQAlQgQglgogeQhCgvhcgBIgaABQgEgVAAgZQAAhUAsg8QAagjAfgOQAWgLAaAAQA+ABAsA7QARAXAKAaQgKgagRgXQgsg7g+gBQgaAAgWALQgMglAAgrQAAhSAog5QApg4A5AAQA5AAAoA4QAoA5AABSQAABRgoA5QgTAagXAOQARAsAAAzQAABVgsA8IgLAPQAKAXAAAbQAABFhCAwQhCAwhcABQhdgBhCgwg");
	var mask_9_graphics_43 = new cjs.Graphics().p("AlvGtQhIgvAAhBQAAhABIgvQBJguBnAAQApAAAkAIQA2ALArAbQBIAvAABAQAAAZgLAWQgRAkgsAdQhIAuhmAAQhnAAhJgugAAsFsQALgWAAgZQAAhAhIgvQgrgbg2gLQAOgtAvgjQA3gpBNgGIAagBQBdAABCAwQAoAdAQAlQgQglgogdQhCgwhdAAIgaABQgEgWAAgXQAAhVAsg8QAagjAggPQAWgKAaAAQA+AAAsA8QARAXAKAaQgKgagRgXQgsg8g+AAQgaAAgWAKQgMgkAAgsQAAhRAog5QApg5A5AAQA5AAAoA5QAoA5AABRQAABRgoA5QgTAbgXAOQARArAAA1QAABUgsA8IgLAOQAKAYAAAbQAABFhCAwQhCAwhdAAQggAAgdgGg");
	var mask_9_graphics_44 = new cjs.Graphics().p("Am0IxQhBhCAAhdQAAhdBBhBQAdgeAjgQQgEgPAAgRQAAhBBIguQBJguBmAAQApAAAlAHQA1ALArAcQBJAuAABBQAAAZgLAWQgRAkgtAcQgxAghBAKQAQAnAAAsQAABdhCBCQhBBBhdAAQhdAAhChBgAh3D0QAiAiAQApQgQgpgigiQhBhChdAAQg0AAgrAUQArgUA0AAQBdAABBBCgABrDVQALgWAAgZQAAhBhJguQgrgcg1gLQANgsAvgiQA4gpBMgGIAagBQBdAABCAwQAoAdAQAkQgQgkgogdQhCgwhdAAIgaABQgDgWAAgYQAAhVAsg8QAZgjAggPQAXgKAaAAQA9AAAsA8QARAWAKAbQgKgbgRgWQgsg8g9AAQgaAAgXAKQgMglABgrQgBhRAog5QApg5A5AAQA5AAAoA5QApA5AABRQAABRgpA5QgTAbgXAOQASArgBA1QABBVgtA8IgLANQALAYgBAbQAABEhCAwQhCAxhdAAQgfAAgdgGgAgzAQIAAAAg");
	var mask_9_graphics_45 = new cjs.Graphics().p("AjzKxQg6g6gBhTQABgXAEgVQALg3ArgrQA6g7BTABQAUAAASADQgSgDgUAAQhTgBg6A7QgrArgLA3QhRgGg6g6QhBhCAAhdQAAhdBBhBQAdgeAjgQQgEgPAAgRQAAhABIguQBJgvBmAAQApAAAlAIQANgtAvgjQA4gpBMgGIAagBQBdABBCAvQAoAeAQAlQgQglgogeQhCgvhdgBIgaABQgDgVAAgZQAAhVAsg8QAZgjAggOQAXgLAaAAQA9ABAsA7QARAXAKAaQgKgagRgXQgsg7g9gBQgaAAgXALQgMglABgrQgBhSAog5QApg4A5AAQA5AAAoA4QApA5AABSQAABRgpA5QgTAagXAOQASAsgBA0QABBVgtA8IgLAPQALAXgBAbQAABEhCAwQhCAwhdABQgfAAgdgGQALgWAAgZQAAhAhJguQgrgcg1gLQA1ALArAcQBJAuAABAQAAAZgLAWQgRAkgtAcQgxAghBAKQAQAmAAAtQAAAlgLAhQA7AKAsAtQA7A7AABTQAABTg7A6Qg6A6hTAAQhTAAg6g6gAh3B7QAiAiAQApQgQgpgigiQhBhChdAAQg0AAgrAUQArgUA0AAQBdAABBBCg");
	var mask_9_graphics_46 = new cjs.Graphics().p("AhsMpQgsgrABg9QgBgkAPgdQALgVASgTQArgqA9AAQAegBAbAMQgbgMgeABQg9AAgrAqQgSATgLAVQg8gKguguQg6g6gBhTQABgXAEgVQALg3ArgrQA6g7BTABQAUAAASADQgSgDgUAAQhTgBg6A7QgrArgLA3QhRgGg6g6QhBhCAAhdQAAhdBBhBQAdgdAjgQQArgUA0AAQBdAABBBBQAiAiAQApQgQgpgigiQhBhBhdAAQg0AAgrAUQgEgPAAgRQAAhBBIguQBJgvBmAAQApAAAlAIQA1ALArAcQBJAuAABBQAAAZgLAWQgRAjgtAcQgxAghBAKQAQAmAAAtQAAAlgLAhQA7AKAsAtQA7A7AABTQAABIgtA2QAZALAVAUQArAsABA9QgBA9grArQgrArg8AAQg9AAgrgrgABrgMQALgWAAgZQAAhBhJguQgrgcg1gLQANgtAvgjQA4gpBMgGIAagBQBdABBCAvQAoAeAQAlQgQglgogeQhCgvhdgBIgaABQgDgVAAgZQAAhVAsg8QAZgjAggOQAXgLAaAAQA9ABAsA7QARAXAKAaQgKgagRgXQgsg7g9gBQgaAAgXALQgMglABgrQgBhSAog5QApg4A5AAQA5AAAoA4QApA5AABSQAABRgpA5QgTAagXAOQASAsgBA0QABBVgtA8IgLAPQALAXgBAbQAABFhCAwQhCAwhdABQgfAAgdgGgAgzjRIAAAAg");
	var mask_9_graphics_47 = new cjs.Graphics().p("AiQOjQgwgvAAhDQAAhDAwgvQAOgPARgKQAlgWAuAAQBAAAAuArQgugrhAAAQguAAglAWQgmgqAAg5QgBgkAPgeQALgVASgSQArgrA9AAQAeAAAbAMQgbgMgeAAQg9AAgrArQgSASgLAVQg8gKgugtQg6g7gBhTQABgWAEgVQALg4ArgqQA6g7BTAAQAUAAASAEQgSgEgUAAQhTAAg6A7QgrAqgLA4QhRgGg6g7QhBhBAAhdQAAhcBBhCQAdgdAjgQQArgUA0AAQBdAABBBBQAiAiAQAqQgQgqgigiQhBhBhdAAQg0AAgrAUQgEgQAAgQQAAhBBIgvQBJguBmAAQApAAAlAIQA1ALArAbQBJAvAABBQAAAZgLAWQgRAjgtAdQgxAghBAKQAQAlAAAtQAAAlgLAhQA7AKAsAtQA7A6AABTQAABJgtA2QAZAKAVAVQArAsABA9QgBA9grArQgJAJgKAHIADAEQAwAvgBBDQABBDgwAvQgvAwhCAAQhDAAgvgwgABriKQALgWAAgZQAAhBhJgvQgrgbg1gLQANgtAvgjQA4gpBMgGIAagBQBdAABCAwQAoAeAQAkQgQgkgogeQhCgwhdAAIgaABQgDgWAAgYQAAhVAsg8QAZgjAggPQAXgKAaAAQA9AAAsA8QARAXAKAaQgKgagRgXQgsg8g9AAQgaAAgXAKQgMgkABgsQgBhRAog5QApg5A5AAQA5AAAoA5QApA5AABRQAABRgpA5QgTAbgXAOQASArgBA1QABBVgtA8IgLAOQALAYgBAbQAABFhCAwQhCAwhdAAQgfAAgdgFgAgzlPIAAAAg");
	var mask_9_graphics_48 = new cjs.Graphics().p("Ah9QbQgwgvAAhEQAAhBArguIAFgEQAvgwBDABQA4gBAqAiQgqgig4ABQhDgBgvAwIgFAEIgOgOQgwguAAhEQAAhDAwgvQAOgPARgKQAlgWAuAAQBAAAAuAsQgugshAAAQguAAglAWQgmgpAAg6QgBgkAPgdQALgVASgTQArgqA9AAQAegBAbAMQgbgMgeABQg9AAgrAqQgSATgLAVQg8gKguguQg6g6gBhTQABgXAEgVQALg3ArgrQA6g6BTABQAUAAASACQgSgCgUAAQhTgBg6A6QgrArgLA3QhRgGg6g6QhBhCAAhcQAAhdBBhBQAdgeAjgQQArgUA0AAQBdAABBBCQAiAiAQApQgQgpgigiQhBhChdAAQg0AAgrAUQgEgPAAgRQAAhBBIguQBJgvBmAAQApAAAlAIQA1ALArAcQBJAuAABBQAAAZgLAWQgRAkgtAcQgxAghBAKQAQAmAAAtQAAAlgLAgQA7AKAsAtQA7A7AABTQAABIgtA2QAZALAVAUQArAsABA9QgBA9grArQgJAJgKAIIADADQAwAvgBBDQABBAgsAuIAQAOQAwAvAABEQAABEgwAvQgvAwhDgBQhDABgvgwgABrkCQALgWAAgZQAAhBhJguQgrgcg1gLQANgtAvgjQA4gpBMgGIAagBQBdABBCAvQAoAeAQAlQgQglgogeQhCgvhdgBIgaABQgDgVAAgZQAAhVAsg8QAZgjAggOQAXgLAaAAQA9ABAsA7QARAXAKAaQgKgagRgXQgsg7g9gBQgaAAgXALQgMglABgrQgBhSAog5QApg4A5AAQA5AAAoA4QApA5AABSQAABRgpA5QgTAagXAOQASAsgBA0QABBVgtA8IgLAPQALAXgBAbQAABFhCAwQhCAwhdABQgfAAgdgGgAgznHIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_9_graphics_40,x:202.3,y:158.45}).wait(1).to({graphics:mask_9_graphics_41,x:197.8,y:172.7}).wait(1).to({graphics:mask_9_graphics_42,x:188.05,y:181.2}).wait(1).to({graphics:mask_9_graphics_43,x:172.05,y:186.45}).wait(1).to({graphics:mask_9_graphics_44,x:165.8,y:201.575}).wait(1).to({graphics:mask_9_graphics_45,x:165.8,y:213.7}).wait(1).to({graphics:mask_9_graphics_46,x:165.8,y:224.2}).wait(1).to({graphics:mask_9_graphics_47,x:165.8,y:236.825}).wait(1).to({graphics:mask_9_graphics_48,x:165.8,y:248.8}).wait(102));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40).to({_off:false},0).wait(110));

	// 筆02
	this.instance_17 = new lib.筆();
	this.instance_17.setTransform(478.4,316.35,0.9335,0.9335,0,0,0,144.8,-34);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).to({_off:false},0).wait(1).to({regY:-34.1,scaleX:0.9446,scaleY:0.9446,x:408.35,y:262.75},0).wait(1).to({scaleX:1,scaleY:1,x:351.8,y:231.85},0).wait(1).to({x:352.6,y:210},0).wait(1).to({x:375.55,y:199.1},0).wait(1).to({x:406.15,y:193.5},0).wait(1).to({x:443.65,y:209},0).wait(1).to({x:460.65,y:224},0).wait(1).to({x:469.65,y:243.85},0).wait(1).to({y:275.85},0).wait(1).to({x:463.65,y:303.85},0).wait(1).to({x:457.65,y:324.35},0).wait(1).to({x:442.65,y:317.7},0).wait(1).to({x:418.65,y:300.2},0).wait(1).to({x:391.4,y:281},0).to({_off:true},1).wait(113));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_25 = new cjs.Graphics().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	var mask_10_graphics_26 = new cjs.Graphics().p("Ai/CVQgmglAAg3QAAg1AmglQAmgmA2AAIAPAAQAAAvAuAhQAeAVAlAIQglgIgegVQgughAAgvIAAAAQAAgwAugiQAughBBAAQBBAAAtAhQAvAiAAAwQAAAvgvAhQgtAhhBAAQgYAAgUgEIABATQAAA3glAlQgmAng2AAQg2AAgmgng");
	var mask_10_graphics_27 = new cjs.Graphics().p("AlVDWQgmglAAg3QAAg1AmgmQAmglA2AAIAPAAQAAAuAuAiQAeAVAmAIQgmgIgegVQgugiAAguIAAAAQAAgwAugiQAvghBBAAQAQAAAPABQgEAQAAASQAABEA+AvQAUAPAWALQgJAKgNAJQgsAhhBAAQgYAAgUgEIABATQAAA3gmAlQgmAng2AAQg2AAgmgngAA3A3QgWgLgUgPQg+gvAAhEQAAgSAEgQQAMgvAugkQA/gxBZAAQBZAAA/AxQA/AwAABFQAABEg/AvQg/AxhZgBQg9AAgxgWgAA3A3IAAAAg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AoYDWQgmglAAg3QAAg1AmgmQAmglA2AAIAPAAQAAAuAuAiQAeAVAmAIIABATQAAA3gmAlQgmAng2AAQg2AAgmgngAk7BnQgmgIgegVQgugiAAguIAAAAQAAgwAugiQAvghBBAAQAQAAAPABQgEAQAAASQAABEA/AvQAUAPAWALQgJAKgNAJQgtAhhBAAQgYAAgUgEgACiAmQgPgKgMgKQgsgmAAgyQAAg8A/grIAIgFQBHguBkABQBkgBBHAuQBHAsAABAQAAA/hHAtQhHAthkAAQhkAAhHgtgAiLA3QgWgLgUgPQg/gvAAhEQAAgSAEgQQAMgvAvgkQA/gxBZAAQBYAAA/AxQATAOANAQQg/ArAAA8QAAAyAsAmIgNALQg/AxhYgBQg9AAgxgWgAmtgGIAAAAgAjwh4IAAAAgACaitIAAAAg");
	var mask_10_graphics_29 = new cjs.Graphics().p("ApxDWQgmglAAg3QAAg1AmgmQAmglA2AAIAPAAQAAAuAuAiQAeAVAmAIIABATQAAA3gmAlQgmAng2AAQg2AAgmgngAFmCnQgngngJgzQgEgRAAgTQAAhJA0g0QAtgtA8gHQg8AHgtAtQg0A0AABJQAAATAEARQggAGgiAAQhkAAhHgtQgPgKgMgKQgsgmAAgyQAAg8A/grQg/ArAAA8QAAAyAsAmIgNALQg+AxhZgBQg9AAgxgWQgWgLgUgPQg/gvAAhEQAAgSAEgQQAMgvAvgkQA/gxBZAAQBZAAA+AxQATAOANAQIAIgFQBHguBkABQBkgBBHAuQAfATARAXIAWgBQBKAAA0A1QA1A0AABJQAABKg1A0Qg0A1hKAAQhKAAg1g1gAmUBnQgmgIgegVQgugiAAguIAAAAQAAgwAugiQAvghBBAAQAQAAAPABQgEAQAAASQAABEA/AvQAUAPAWALQgJAKgNAJQgtAhhBAAQgYAAgUgEgAlJh4IAAAAg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AGrEIQgwgwgGhBIgBgTQAAhOA3g2QA4g2BNAAIASAAIgSAAQhNAAg4A2Qg3A2AABOIABATQg4gIgqgrQgngngKgzQgEgQABgTQAAhKA0g1QAtgsA8gHQg8AHgtAsQg0A1AABKQgBATAEAQQgfAGgiAAQhlAAhFgsQgPgKgMgKQgsgnAAgyQAAg8A+grIAJgFQBFguBlABQBkgBBHAuQAeATASAXIAWgBQBJAAA1A0QAqArAIA3QBCAGAxAwQA3A2gBBOQABBOg3A2Qg4A3hNAAQhNAAg4g3gArFCTQgmglABg3QgBg1AmglQAmgmA2AAIAQAAQAAAvAtAhQAfAVAlAIIACATQgBA3glAlQgnAng2AAQg2AAgmgngAnoAkQglgIgfgVQgtghAAgvIAAAAQAAgwAtgiQAvghBBAAQAQAAAPABQgDAQAAASQAABEA/AwQATAPAWALQgJAKgMAIQguAhhBAAQgXAAgVgEgAk4gLQgWgLgTgPQg/gwAAhEQAAgSADgQQAMgvAwgkQA+gxBZAAQBaAAA+AxQATAOANAQQg+ArAAA8QAAAyAsAnIgOALQg+AwhagBQg9AAgxgVgADiAKIAAAAgAgkgwIAAAAgAmdi7IAAAAg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AGHGVQhHhGAAhkQAAhOAsg8QgngsgFg5IgBgTQAAhOA3g3QA3g3BOAAIASABIgSgBQhOAAg3A3Qg3A3AABOIABATQg4gJgrgqQgngngJgzQgEgRAAgTQAAhKA0g1QAtgsA8gHQg8AHgtAsQg0A1AABKQAAATAEARQggAFgiAAQhkAAhGgtQgPgJgMgKQgsgnAAgyQAAg8A/grIAIgGQBGgtBkAAQBkAABHAtQAfAUARAXIAWgBQBKAAA0A0QArAqAIA4QBCAGAwAwQA3A3AABOQAAAbgHAaQg4gihGAAQhkAAhGBFQgQAPgLARQALgRAQgPQBGhFBkAAQBGAAA4AiQAXAPAVAUQBGBHAABjQAABkhGBGQhHBHhjAAQhkAAhGhHgAr6gIQgmgmAAg2QAAg2AmgmQAmgmA2AAIAPABQAAAvAuAhQAeAWAmAIIABATQAAA2gmAmQgmAlg2AAQg2AAgmglgAodh3QgmgIgegWQgughAAgvIAAgBQAAgvAugiQAvgiBBAAQAQAAAPACQgEAQAAARQAABFA/AwQAUAPAWAKQgJAKgNAJQgtAihBAAQgYAAgUgEgAltioQgWgKgUgPQg/gwAAhFQAAgRAEgQQAMgvAvglQA/gwBZAAQBZAAA/AwQATAPANAQQg/ArAAA8QAAAyAsAnIgNALQg/AwhZAAQg9AAgxgXgAhajMIAAAAgAnSlXIAAAAg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AHSIqQgqg4AAhOQAAg7AYguQAIgQAKgOQArg3A8AAQA8AAAqA3QAJALAGALQgGgLgJgLQgqg3g8AAQg8AAgrA3QgKAOgIAQQgfgRgagbQhHhGAAhkQAAhOAsg7QgngsgFg6IgBgTQAAhOA3g2QA3g3BOAAIASAAQBCAGAwAxQA3A2AABOQAAAdgHAZQg4gjhGAAQhkAAhGBHQgQAPgLAQQALgQAQgPQBGhHBkAAQBGAAA4AjQAXAPAVAVQBGBFAABjQAABkhGBGQgVAVgYAPQAcAxAABAQAABOgrA4QgqA4g8AAQg8AAgrg4gAr6iOQgmglAAg3QAAg1AmgmQAmgmA2AAIAPAAQAAAvAuAiQAeAVAmAIIABATQAAA3gmAlQgmAng2AAQg2AAgmgngADdi9QgngngJgzQgEgRAAgTQAAhKA0g1QAtgsA8gHIAWgBQBKAAA0A0QArArAIA3IgSAAQhOAAg3A3Qg3A2AABOIABATQg4gIgrgrgAodj9QgmgIgegVQgugiAAgvIAAAAQAAgwAugiQAvghBBAAQAQAAAPABQgEAQAAASQAABEA/AwQAUAPAWALQgJAKgNAJQgtAhhBAAQgYAAgUgEgAg/k+QgPgKgMgKQgsgnAAgyQAAg8A/grIAIgFQBGguBkABQBkgBBHAuQAfATARAXQg8AHgtAsQg0A1AABKQAAATAEARQggAGgiAAQhkAAhGgtgAltktQgWgLgUgPQg/gwAAhEQAAgSAEgQQAMgvAvgkQA/gxBZAAQBZAAA/AxQATAOANAQQg/ArAAA8QAAAyAsAnIgNALQg/AxhZgBQg9AAgxgWgAINlYIAAAAgAnSndIAAAAgAhHoSIAAAAg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AGcKgQgwgxAAhFQAAhFAwgxQAQgPASgLQgWgtAAg5QAAg6AYguQAIgQAKgOQArg4A8AAQA8AAAqA4QAJAKAGAMQgGgMgJgKQgqg4g8AAQg8AAgrA4QgKAOgIAQQgfgRgagbQhHhGAAhjQAAhOAsg8QgngsgFg6IgBgTQAAhOA3g3QA3g3BOAAIASABIgSgBQhOAAg3A3Qg3A3AABOIABATQg4gJgrgqQgngngJgzQgEgRAAgTQAAhKA0g1QAtgsA8gHQg8AHgtAsQg0A1AABKQAAATAEARQggAFgiAAQhkAAhGgtQgPgJgMgKQgsgnAAgyQAAg8A/grIAIgGQBGgtBkAAQBkAABHAtQAfAUARAXIAWgBQBKAAA0A0QArAqAIA4QBCAGAwAwQA3A3AABOQAAAcgHAaQg4gjhGAAQhkAAhGBGQgQAPgLARQALgRAQgPQBGhGBkAAQBGAAA4AjQAXAPAVAUQBGBHAABjQAABjhGBGQgVAVgYAPQAcAxAAA/QAABPgrA3IgIALQAiAsAAA5QAABFgxAxQgxAxhFAAQhEAAgygxgAKIG0IAPARIgPgRQgxgwhFAAQguAAgmAWQAmgWAuAAQBFAAAxAwgAr6j9QgmgmAAg2QAAg2AmgmQAmgmA2AAIAPABQAAAvAuAhQAeAWAmAIIABATQAAA2gmAmQgmAmg2AAQg2AAgmgmgAodlsQgmgIgegWQgughAAgvIAAgBQAAgvAugiQAvgiBBAAQAQAAAPACQgEAQAAARQAABFA/AwQAUAPAWAKQgJAKgNAJQgtAihBAAQgYAAgUgEgAltmdQgWgKgUgPQg/gwAAhFQAAgRAEgQQAMgvAvglQA/gwBZAAQBZAAA/AwQATAPANAQQg/ArAAA8QAAAyAsAnIgNALQg/AwhZAAQg9AAgxgXgACtmGIAAAAgAhanBIAAAAgAnSpMIAAAAg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AFTLXQgogoAAg6QAAg5AogpQAMgMANgIQAhgVApAAQA5AAApApQApApAAA5QAAAVgFASQgKAhgaAaQgpApg5AAQg6AAgpgpgAJBJ1QAAg5gpgpQgpgpg5AAQgpAAghAVIAAgEQAAhFAwgxQAQgQASgLQAmgWAuAAQBFAAAxAxIAPAQIgPgQQgxgxhFAAQguAAgmAWQgWgsAAg5QAAg7AYguQAIgQAKgOQArg3A8AAQA8AAAqA3QAJALAGALQgGgLgJgLQgqg3g8AAQg8AAgrA3QgKAOgIAQQgfgRgagaQhHhHAAhiQAAhOAsg9QgngsgFg6IgBgTQAAhNA3g3QA3g3BOAAIASAAIgSAAQhOAAg3A3Qg3A3AABNIABATQg4gIgrgqQgngngJg0QgEgRAAgTQAAhKA0g0QAtgtA8gGQg8AGgtAtQg0A0AABKQAAATAEARQggAGgiAAQhkAAhGgtQgPgKgMgKQgsgnAAgyQAAg7A/gsIAIgFQBGgtBkAAQBkAABHAtQAfATARAYIAWgCQBKAAA0A1QArAqAIA3QBCAGAwAxQA3A3AABNQAAAdgHAZQg4gjhGAAQhkAAhGBHQgQAPgLAQQALgQAQgPQBGhHBkAAQBGAAA4AjQAXAPAVAVQBGBGAABkQAABihGBHQgVAVgYAOQAcAxAABAQAABOgrA4IgIAKQAiAsAAA6QAABFgxAwQghAigrAKQAFgSAAgVgAr6ksQgmgmAAg2QAAg2AmgmQAmgmA2AAIAPAAQAAAwAuAhQAeAWAmAHIABAUQAAA2gmAmQgmAmg2AAQg2AAgmgmgAodmcQgmgHgegWQgughAAgwIAAAAQAAgwAugiQAvghBBAAQAQAAAPACQgEAQAAARQAABEA/AwQAUAPAWALQgJAKgNAJQgtAihBAAQgYAAgUgFgAltnMQgWgLgUgPQg/gwAAhEQAAgRAEgQQAMgwAvgkQA/gwBZAAQBZAAA/AwQATAOANAQQg/AsAAA7QAAAyAsAnIgNALQg/AxhZAAQg9AAgxgXgAhanxIAAAAgAnSp7IAAAAg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AFTLXIgBgBQAcgPAYgYQA/g/AAhZQAAgXgEgVQAEAVAAAXQAABZg/A/QgYAYgcAPQgtAYg2AAQhZAAhAg/Qg+g/AAhZQAAhZA+g/QBAg+BZAAQBYAAA/A+IAOAPIAIgJQAQgQASgLQgWgsAAg5QAAg7AYguQAIgQAKgOQArg3A8AAQA8AAAqA3QAJALAGALQgGgLgJgLQgqg3g8AAQg8AAgrA3QgKAOgIAQQgfgRgagaQhHhHAAhiQAAhOAsg9QgngsgFg6IgBgTQAAhNA3g3QA3g3BOAAIASAAIgSAAQhOAAg3A3Qg3A3AABNIABATQg4gIgrgqQgngngJg0QgEgRAAgTQAAhKA0g0QAtgtA8gGQg8AGgtAtQg0A0AABKQAAATAEARQggAGgiAAQhkAAhGgtQgPgKgMgKQgsgnAAgyQAAg7A/gsIAIgFQBGgtBkAAQBkAABHAtQAfATARAYIAWgCQBKAAA0A1QArAqAIA3QBCAGAwAxQA3A3AABNQAAAdgHAZQg4gjhGAAQhkAAhGBHQgQAPgLAQQALgQAQgPQBGhHBkAAQBGAAA4AjQAXAPAVAVQBGBGAABkQAABihGBHQgVAVgYAOQAcAxAABAQAABOgrA4IgIAKQAiAsAAA6QAABFgxAwQghAigrAKQAFgSAAgVQAAg5gpgpQglglgygDQgLg0gigpQAiApALA0QAyADAlAlQApApAAA5QAAAVgFASQgKAhgaAaQgpApg5AAQg6AAgpgpgAKIGFIAPAQIgPgQQgxgxhFAAQguAAgmAWQAmgWAuAAQBFAAAxAxgAr6ksQgmgmAAg2QAAg2AmgmQAmgmA2AAIAPAAQAAAwAuAhQAeAWAmAHIABAUQAAA2gmAmQgmAmg2AAQg2AAgmgmgAodmcQgmgHgegWQgughAAgwIAAAAQAAgwAugiQAvghBBAAQAQAAAPACQgEAQAAARQAABEA/AwQAUAPAWALQgJAKgNAJQgtAihBAAQgYAAgUgFgAltnMQgWgLgUgPQg/gwAAhEQAAgRAEgQQAMgwAvgkQA/gwBZAAQBZAAA/AwQATAOANAQQg/AsAAA7QAAAyAsAnIgNALQg/AxhZAAQg9AAgxgXgAhanxIAAAAgAnSp7IAAAAg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AFTLXIgBgBQAcgPAYgYQA/g/AAhZQAAgXgEgVQAyADAlAlQApApAAA5QAAAVgFASQgKAhgaAaQgpApg5AAQg6AAgpgpgABWKvQg+g/AAhZIAAgFQAkgPAdgdQA8g8AAhVIAAgBQApgTAxAAQBYAAA/A+IAOAPQAiApALA0QAEAVAAAXQAABZg/A/QgYAYgcAPQgtAYg2AAQhZAAhAg/gAJBJ1QAAg5gpgpQglglgygDQgLg0gigpIAIgJQAQgQASgLQgWgsAAg5QAAg7AYguQgfgRgagaQhHhHAAhiQAAhOAsg9QgngsgFg6Qg4gIgrgqQgngngJg0QgEgRAAgTQAAhKA0g0QAtgtA8gGQg8AGgtAtQg0A0AABKQAAATAEARQggAGgiAAQhkAAhGgtQgPgKgMgKQgsgnAAgyQAAg7A/gsQg/AsAAA7QAAAyAsAnIgNALQg/AxhZAAQg9AAgxgXQgWgLgUgPQg/gwAAhEQAAgRAEgQQAMgwAvgkQA/gwBZAAQBZAAA/AwQATAOANAQIAIgFQBGgtBkAAQBkAABHAtQAfATARAYIAWgCQBKAAA0A1QArAqAIA3IgSAAQhOAAg3A3Qg3A3AABNIABATIgBgTQAAhNA3g3QA3g3BOAAIASAAQBCAGAwAxQA3A3AABNQAAAdgHAZQg4gjhGAAQhkAAhGBHQgQAPgLAQQALgQAQgPQBGhHBkAAQBGAAA4AjQAXAPAVAVQBGBGAABkQAABihGBHQgVAVgYAOQgGgLgJgLQgqg3g8AAQg8AAgrA3QgKAOgIAQQAIgQAKgOQArg3A8AAQA8AAAqA3QAJALAGALQAcAxAABAQAABOgrA4IgIAKIgPgQQgxgxhFAAQguAAgmAWQAmgWAuAAQBFAAAxAxIAPAQQAiAsAAA6QAABFgxAwQghAigrAKQAFgSAAgVgAjIHmQg8g8AAhVQAAhVA8g8QA8g8BVAAQBUAAA8A8QA8A7AABVIAAABQAABVg8A8QgdAdgkAPQgkAQgrAAQhVAAg8g8gAGUGOIAAAAgACVFUIAAAAgAr6ksQgmgmAAg2QAAg2AmgmQAmgmA2AAIAPAAQAAAwAuAhQAeAWAmAHIABAUQAAA2gmAmQgmAmg2AAQg2AAgmgmgAodmcQgmgHgegWQgughAAgwIAAAAQAAgwAugiQAvghBBAAQAQAAAPACQgEAQAAARQAABEA/AwQAUAPAWALQgJAKgNAJQgtAihBAAQgYAAgUgFgAhanxIAAAAgAnSp7IAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_10_graphics_25,x:205.05,y:108.55}).wait(1).to({graphics:mask_10_graphics_26,x:215.05,y:102.8}).wait(1).to({graphics:mask_10_graphics_27,x:230.05,y:96.3}).wait(1).to({graphics:mask_10_graphics_28,x:249.55,y:96.3}).wait(1).to({graphics:mask_10_graphics_29,x:258.45,y:96.3}).wait(1).to({graphics:mask_10_graphics_30,x:266.8,y:103}).wait(1).to({graphics:mask_10_graphics_31,x:272.15,y:118.625}).wait(1).to({graphics:mask_10_graphics_32,x:272.15,y:132}).wait(1).to({graphics:mask_10_graphics_33,x:272.15,y:143.125}).wait(1).to({graphics:mask_10_graphics_34,x:272.15,y:147.875}).wait(1).to({graphics:mask_10_graphics_35,x:272.15,y:147.875}).wait(1).to({graphics:mask_10_graphics_36,x:272.15,y:147.875}).wait(114));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(25).to({_off:false},0).wait(125));

	// 筆01
	this.instance_19 = new lib.筆();
	this.instance_19.setTransform(225.05,309,1,1,0,0,0,144.8,-34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:216.05,y:280},0).wait(1).to({y:256},0).wait(1).to({x:223.95,y:231.4},0).wait(1).to({x:243.95,y:211.4},0).wait(1).to({x:275.95,y:201.4},0).wait(1).to({x:309.95,y:217.4},0).wait(1).to({x:333.95,y:239.4},0).wait(1).to({x:356.95,y:262.2},0).wait(1).to({x:370.95,y:283.2},0).wait(1).to({x:383.95,y:304.2},0).wait(1).to({x:400.95,y:332.45},0).wait(1).to({x:417.95,y:355.45},0).wait(1).to({x:441.95,y:379.45},0).wait(1).to({x:466.95,y:399.45},0).wait(1).to({x:492.95,y:413.45},0).wait(1).to({x:517.95,y:403.45},0).wait(1).to({x:519.1,y:387},0).wait(1).to({x:505.6,y:367},0).wait(1).to({x:493.45,y:350},0).wait(1).to({x:482.25,y:337},0).wait(1).to({x:472.75,y:332.45},0).to({_off:true},1).wait(128));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("Ah1BfQgxgoABg3QgBg3AxgnQAxgnBEAAQBFAAAwAnQAyAnAAA3QAAA3gyAoQgwAnhFAAQhEAAgxgng");
	var mask_11_graphics_1 = new cjs.Graphics().p("Ag/DdQgxgoAAg3QAAguAhgiQg3gFgpgoQgsgrAAhAQAAhAAsgsQAtgtBAAAQA/AAAsAtQAtAsAABAQAAA5glAqIAFAAQBFAAAwAmQAxAnAAA4QAAA3gxAoQgwAnhFAAQhEAAgxgng");
	var mask_11_graphics_2 = new cjs.Graphics().p("AggFbQgxgnABg4QAAgtAggjQg3gEgogpQgtgsAAhAQAAg0AfgoQgZgMgVgVQgvgvgBhFQABhDAvgxQAxgvBDgBQBFABAuAvQAxAxgBBDQAAA+gnAtQATALAQAQQAtAtAAA+QAAA6gkApIAEAAQBFABAwAmQAyAoAAA3QAAA4gyAnQgwAohFAAQhFAAgwgog");
	var mask_11_graphics_3 = new cjs.Graphics().p("AggHuQgxgnABg3QAAguAggjQg3gEgogoQgtgtAAg/QAAg1AfgpQgZgLgVgVQgvgvgBhEQABhEAvgwQAVgUAXgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAxgxBGAAQBGAAAvAxQAyAyAABFQAABGgyAxQgVAVgZAMQAPAKAMANQAxAwgBBEQAAA9gnAtQATAKAQAQQAtAtAABAQAAA5gkAqIAEAAQBFAAAwAnQAyAnAAA4QAAA3gyAnQgwAohFAAQhFAAgwgog");
	var mask_11_graphics_4 = new cjs.Graphics().p("AggJhQgxgnABg3QAAguAggjQg3gEgogoQgtgtAAg/QAAg1AfgpQgZgLgVgVQgvgwgBhEQABhDAvgwQAVgUAXgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAognA0gIQgJgaAAgeQABhJAzgzQA0g0BHAAQBIAAA0A0QA0AzgBBJQABBIg0A0QgsArg7AHQAHAXAAAZQAABGgyAxQgVAVgZAMQAPAKAMANQAxAwgBBDQAAA9gnAuQATAKAQAQQAtAtAABAQAAA5gkAqIAEAAQBFAAAwAnQAyAnAAA4QAAA3gyAnQgwAohFAAQhFAAgwgog");
	var mask_11_graphics_5 = new cjs.Graphics().p("Ai5KhQgxgnAAg4QAAgtAhgjQg4gEgogpQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgvAAhFQAAhDAwgwQAUgUAYgLQgQgKgPgPQgwgwAAhGQAAhFAwgyQAognA1gIQgJgaAAgfQAAhIAzg0QA0gzBIAAQAjAAAeAMQAFg3A4gpQA+grBZAAQBXAAA/ArQA+AtAAA9QAAA/g+ArQg/AshXABQg5AAgugTIABAVQAABJgzAzQgrAsg7AHQAGAXAAAZQABBGgyAwQgVAWgZAMQAOAKANAMQAwAwAABDQAAA+gnAtQASALAQAQQAuAtgBA/QABA6glApIAFAAQBEABAwAmQAxAoAAA3QAAA4gxAnQgwAohEAAQhGAAgwgog");
	var mask_11_graphics_6 = new cjs.Graphics().p("AmKKoQgxgoAAg3QAAguAhgiQg4gFgogoQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgvQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBWAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBNA1AABKQAABKhNA1QhMA0hsAAQhtAAhNg0QgWgQgQgSQg9AphTAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAvAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgng");
	var mask_11_graphics_7 = new cjs.Graphics().p("AoCKoQgwgoAAg3QAAguAhgiQg4gFgogoQgtgsAAhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgvQAUgUAXgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAognA0gIQgIgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBYAAQBYAAA9AsIAOALIAUgQQBNg0BsAAQBtAABMA0QBCAuAJA9QAUgEAVAAQBSAAA7A6QA6A7AABTQAABSg6A7Qg7A6hSAAQhTAAg6g6Qg7g7AAhSIABgKQgvANg3AAQhsAAhNg0QgXgQgPgSQg8AphVAAQg4AAgvgSIACAVQAABJg0AzQgrAsg7AGQAGAXAAAZQAABGgxAxQgVAVgaAMQAPAKANANQAwAvAABEQAAA+goAtQATAKAQARQAtAsAABAQAAA5gkAqIAEAAQBFAAAxAnQAxAnAAA4QAAA3gxAoQgxAnhFAAQhFAAgxgng");
	var mask_11_graphics_8 = new cjs.Graphics().p("ApxKoQgxgoAAg3QAAguAhgiQg4gFgogoQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgvQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBMg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA/A+AABZQAABYg/A8Qg9A/hYAAQhZAAg+g/Qg+g8AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhMg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAvAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgng");
	var mask_11_graphics_9 = new cjs.Graphics().p("AqgKoQgxgoABg3QAAguAggiQg3gFgogoQgtgsAAhAQAAg1AfgoQgZgMgVgVQgvgwgBhEQABhEAvgvQAVgUAXgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAognA0gIQgJgaAAgeQABhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBYAAQBYAAA+AsIAOALIAUgQQBNg0BrAAQBtAABMA0QBCAuAJA9QATgEAWAAQBSAAA6A6QA7A7AABTIAAAIIALAAQBYAAA+A+QA/A+AABZQgBAjgKAfQAWAMATASQA/A3gBBQQABBQg/A4Qg9A4hYABQhXgBg/g4Qg+g4AAhQQAAgbAIgXQgWgOgTgTQg9g8AAhYIABgWQhSAAg7g6Qg6g7AAhSIAAgKQguANg3AAQhrAAhNg0QgXgQgQgSQg8AphVAAQg5AAgugSIABAVQABBJg0AzQgsAsg7AGQAHAXAAAZQAABGgyAxQgVAVgZAMQAPAKAMANQAxAvgBBEQAAA+gnAtQATAKAQARQAtAsAABAQAAA5gkAqIAEAAQBFAAAwAnQAyAnAAA4QAAA3gyAoQgwAnhFAAQhFAAgxgng");
	var mask_11_graphics_10 = new cjs.Graphics().p("Ar7KoQgxgoAAg3QAAguAhgiQg4gFgogoQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgvQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBrAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA/A+AABZQAAAjgKAfQAWAMATASQAtApAMA1QBIAIA1A1QA/A/AABXQAABZg/A+Qg+A+hYAAQhYAAg+g+Qg4g3gGhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g8AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg1AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAvAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgng");
	var mask_11_graphics_11 = new cjs.Graphics().p("AKzKEQhBhJgBhoQg6gMgsgtQg4g3gGhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g8AAhYIABgWQhSAAg6g6Qg5g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAvAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgogoQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgvQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABLA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA/A+AABZQAAAjgKAfQAWAMATASQAtApAMA1QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABpQAABphDBKQhCBLhfAAQheAAhDhLg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AM5MQQg3hBAAhbQAAgVACgSQhWgFg+hGQhChJgBhoQg6gMgsgtQg3g3gHhLQhEgJgzguQg+g4AAhPQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg5g6Qg6g7AAhSIAAgKQgvANg2AAQhtAAhMg0QgXgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAHAXAAAZQAABGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA9gnAtQATAKAQARQAtAsAABAQAAA5glAqIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhFAAgxgnQgxgoAAg3QAAguAhgiQg3gFgpgoQgsgsAAhAQAAg1AfgoQgZgMgVgVQgwgwAAhDQAAhEAwgwQAUgUAYgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAngnA1gIQgJgaAAgeQAAhIA0g0QAzgzBJgBQAjABAeAMQAFg4A4goQA/gsBYAAQBYAAA+AsIAOALIAUgQQBMg0BtAAQBsAABMA0QBCAuAJA9QATgEAVAAQBTAAA6A6QA7A7AABTIAAAIIALAAQBYAAA+A+QA+A+AABZQAAAjgKAfQAWAMATASQAuApAMA2QBIAIA1A1QAtAsANA7QBLAKA4A+QBDBLAABpQAAAogKAlQAzANAnAtQA4BCAABcQAABbg4BBQg3BBhOAAQhPAAg3hBg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AOWOFQg+g9AAhXIABgUQgNACgOAAQhOAAg4hBQg3hAAAhcQAAgUADgTQhWgFg/hFQhBhKgBhnQg6gNgtgtQg3g3gHhLQhDgIgzguQg+g4AAhQQAAgaAHgYQgVgNgTgTQg9g+AAhYIABgWQhSAAg6g6Qg7g7AAhSIABgKQgvANg3AAQhsAAhNg0QgXgQgPgSQg9AphVAAQg4AAgvgSIACAVQAABJg0AzQgrAsg7AGQAGAXAAAaQAABFgxAxQgVAWgaAMQAPAJANANQAwAwAABEQAAA+goAtQATALAQAPQAtAtAAA/QAAA5gkAqIAEAAQBFAAAxAnQAxAoAAA3QAAA4gxAnQgxAnhFAAQhFAAgxgnQgwgnAAg4QAAgtAhgjQg4gEgogpQgtgsAAhAQAAg1AggoQgZgMgVgUQgwgwAAhEQAAhEAwgwQAUgUAXgLQgQgLgOgOQgxgxAAhFQAAhGAxgxQAogoA0gHQgIgbAAgeQAAhIAzg0QA0gzBIAAQAjAAAeAMQAFg4A5goQA+gsBYAAQBYAAA+AsIAOALIAUgPQBNg1BsAAQBtAABMA1QBCAtAJA9QAUgEAVAAQBRAAA7A7QA6A6AABTIAAAIIALAAQBYAAA+A+QA/A/AABYQAAAjgKAfQAVANAUARQAtAqAMA1QBIAIA1A1QAtAtANA7QBMAKA4A+QBDBKAABpQAAApgKAkQAzANAnAuQA3BBAABcQAAARgCARQAYgFAZAAQBXAAA+A9QA9A+AABXQAABXg9A9Qg+A+hXAAQhXAAg9g+g");
	var mask_11_graphics_14 = new cjs.Graphics().p("APvQAQhCg8AAhVQAAgTADgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgNAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg/hGQhBhJgBhoQg6gMgsgtQg4g2gGhLQhEgJgzguQg9g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA4glAqIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgogoQgsgsgBg/QAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA5A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA/A+AABZQAAAjgKAfQAWAMATASQAtApAMA2QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQgBARgCARQAYgGAaABQBWAAA+A9QA9A+AABWQAAAXgDAUIAMAAQBeAABDA8QBCA8AABVQAABVhCA8QhDA8heAAQhdAAhDg8g");
	var mask_11_graphics_15 = new cjs.Graphics().p("ASuRQQgygqgDg7QgpAQgwAAQhdAAhDg8QhCg8AAhVQAAgTADgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgNAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg/hGQhBhJgBhoQg6gMgsgsQg4g3gGhLQhDgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glApIAFAAQBFAAAwAnQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgogoQgsgrgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBXAAA9A+QA/A+AABZQAAAjgKAfQAWAMATASQAtApAMA2QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQgBARgCARQAYgGAaABQBWAAA+A9QA9A+AABWQAAAXgDAUIAMAAQBeAABDA8QBCA8AABVQAAASgDARQAVgFAYAAQBLAAA0AsQA1AtAABAQAAA/g1AsQg0AthLAAQhKAAg1gtg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AVOR+QgigbgIgjQgsAag4AAQhKAAg1gtQgygqgDg7QgoAQgwAAQheAAhDg8QhCg8AAhVQAAgTAEgSQhVgCg8g8Qg9g9AAhYIABgTQgNACgOAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg+hGQhChJgBhoQg6gLgrgtQg3g3gHhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7AAhSIAAgKQgvANg2AAQhtAAhMg0QgXgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAHAXAAAZQAABGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQATAKAQARQAtAsAABAQAAA5glAqIAFAAQBFAAAwAmQAxAnAAA4QAAA3gxAoQgwAnhFAAQhFAAgxgnQgxgoAAg3QAAguAhgiQg3gFgpgnQgsgsAAhAQAAg1AfgoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAngnA1gIQgJgaAAgeQAAhIA0g0QAzgzBJgBQAjABAeAMQAFg4A4goQA/gsBYAAQBYAAA+AsIAOALIAUgQQBMg0BtAAQBsAABNA0QBCAuAJA9QATgEAVAAQBTAAA6A6QA7A7AABTIAAAIIALAAQBYAAA9A+QA+A+AABZQAAAjgKAfQAWAMATASQAuApAMA2QBIAIA1A1QAtAtANA7QBLAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQAAARgCARQAXgGAaABQBXAAA9A9QA+A+AABWQAAAXgEAUIANAAQBeAABCA8QBCA8AABVQAAASgDARQAWgFAXAAQBLAAA0AsQA1AtAAA/QAfgMAlAAQA+AAAsAiQAsAjAAAxQAAAwgsAjQgsAig+AAQg+AAgsgig");
	var mask_11_graphics_17 = new cjs.Graphics().p("AUsR+QgigbgHgjQgsAag5AAQhKAAg1gtQgygqgCg7QgpAQgwAAQheAAhCg8QhDg8AAhVQAAgTAEgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgOAAQhOAAg4hBQg3hBAAhbQAAgVACgSQhVgFg/hGQhChJgBhoQg5gLgsgtQg3g3gHhLQhEgJgzguQg+g4AAhQQAAgbAIgXQgWgOgTgTQg9g9AAhYIABgWQhSAAg7g6Qg6g7AAhSIAAgKQguANg3AAQhsAAhNg0QgXgQgQgSQg8AphVAAQg5AAgugSIABAVQABBJg0AzQgsAsg7AGQAHAXAAAZQAABGgyAxQgVAVgZAMQAPAKAMANQAxAwgBBEQAAA+gnAtQATAKAQARQAtAsAABAQAAA5gkAqIAEAAQBFAAAwAmQAyAnAAA4QAAA3gyAoQgwAnhFAAQhFAAgxgnQgxgoABg3QAAguAggiQg3gFgognQgtgsAAhAQAAg1AfgoQgZgMgVgVQgvgwgBhEQABhEAvgwQAVgUAXgMQgQgKgOgOQgxgxAAhGQAAhFAxgyQAognA0gIQgJgaAAgeQABhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBYAAQBYAAA+AsIAOALIAUgQQBNg0BsAAQBtAABMA0QBCAuAJA9QATgEAWAAQBSAAA6A6QA7A7AABTIAAAIIALAAQBYAAA+A+QA+A+AABZQgBAjgKAfQAWAMATASQAuApAMA2QBIAIA1A1QAtAtANA7QBLAKA5A+QBDBLAABoQAAAogKAlQAyANAoAtQA3BCAABcQAAARgCARQAXgGAaABQBXAAA+A9QA9A+AABWQAAAXgEAUIANAAQBeAABCA8QBDA8AABVQAAASgEARQAWgFAXAAQBLAAA1AsQA0AtAAA/QAfgMAlAAIAXABQABg6AbgqQAcguApAAQAoAAAdAuQAdAtgBBAQABBAgdAuQgWAigcAIQgLAVgWASQgsAig+AAQg+AAgsgig");
	var mask_11_graphics_18 = new cjs.Graphics().p("AUmR+QgigbgIgjQgsAag4AAQhKAAg1gtQgygqgDg7QgpAQgwAAQhdAAhDg8QhCg8AAhVQAAgTADgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgNAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg/hGQhBhJgBhoQg5gLgsgtQg4g3gGhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAmQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgognQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA+A+AABZQAAAjgKAfQAWAMATASQAtApAMA2QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQgBARgCARQAYgGAaABQBWAAA+A9QA9A+AABWQAAAXgDAUIAMAAQBeAABDA8QBCA8AABVQAAASgDARQAVgFAYAAQBLAAA0AsQA1AtAAA/QAfgMAkAAIAXABQACg6AagqIAGgJQgXgLgTgWQglgrAAg9QAAg9AlgrQAlgrA0AAQA1AAAlArQAlArAAA9QAAA9glArQgKAMgLAIQAJAJAHANQAdAtAABAQAABAgdAuQgVAigcAIQgLAVgXASQgrAig/AAQg9AAgsgig");
	var mask_11_graphics_19 = new cjs.Graphics().p("AUmR+QgigbgIgjQgsAag4AAQhKAAg1gtQgygqgDg7QgpAQgwAAQhdAAhDg8QhCg8AAhVQAAgTADgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgNAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg/hGQhBhJgBhoQg5gLgsgtQg4g3gGhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAmQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgognQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA+A+AABZQAAAjgKAfQAWAMATASQAtApAMA2QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQgBARgCARQAYgGAaABQBWAAA+A9QA9A+AABWQAAAXgDAUIAMAAQBeAABDA8QBCA8AABVQAAASgDARQAVgFAYAAQBLAAA0AsQA1AtAAA/QAfgMAkAAIAXABQACg6AagqIAGgJQgXgLgTgWQglgrAAg9QAAgcAIgZIgRABQhFAAgygmQgxglgBg1QABg1AxgmQAygkBFgBQBGABAyAkQAxAmABA1QgBATgGARQAjAIAbAgQAlArAAA9QAAA9glArQgKAMgLAIQAJAJAHANQAdAtAABAQAABAgdAuQgVAigcAIQgLAVgXASQgrAig/AAQg9AAgsgig");
	var mask_11_graphics_20 = new cjs.Graphics().p("AUmR+QgigbgIgjQgsAag4AAQhKAAg1gtQgygqgDg7QgpAQgwAAQhdAAhDg8QhCg8AAhVQAAgTADgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgNAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg/hGQhBhJgBhoQg5gLgsgtQg4g3gGhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAmQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgognQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA+A+AABZQAAAjgKAfQAWAMATASQAtApAMA2QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQgBARgCARQAYgGAaABQBWAAA+A9QA9A+AABWQAAAXgDAUIAMAAQBeAABDA8QBCA8AABVQAAASgDARQAVgFAYAAQBLAAA0AsQA1AtAAA/QAfgMAkAAIAXABQACg6AagqIAGgJQgXgLgTgWQglgrAAg9QAAgcAIgZIgRABQhFAAgygmQgxglgBg1QABgRAFgQQgZgHgUgTQgfgfAAgrQAAgsAfgfQAfgeArAAQAsAAAeAeQAfAfAAAsIgBAHQAPgCAPAAQBGABAyAkQAxAmABA1QgBATgGARQAjAIAbAgQAlArAAA9QAAA9glArQgKAMgLAIQAJAJAHANQAdAtAABAQAABAgdAuQgVAigcAIQgLAVgXASQgrAig/AAQg9AAgsgig");
	var mask_11_graphics_21 = new cjs.Graphics().p("AUmR+QgigbgIgjQgsAag4AAQhKAAg1gtQgygqgDg7QgpAQgwAAQhdAAhDg8QhCg8AAhVQAAgTADgSQhUgCg8g8Qg+g9AAhYIABgTQgNACgNAAQhPAAg3hBQg3hBAAhbQAAgVACgSQhWgFg/hGQhBhJgBhoQg5gLgsgtQg4g3gGhLQhEgJgzguQg+g4AAhQQAAgbAHgXQgVgOgTgTQg+g9AAhYIABgWQhSAAg6g6Qg6g7gBhSIABgKQgvANg2AAQhtAAhNg0QgWgQgQgSQg9AphUAAQg5AAgugSIABAVQAABJgzAzQgsAsg7AGQAGAXAAAZQABBGgyAxQgVAVgZAMQAOAKANANQAwAwAABEQAAA+gnAtQASAKAQARQAuAsgBBAQABA5glAqIAFAAQBFAAAwAmQAxAnAAA4QAAA3gxAoQgwAnhFAAQhGAAgwgnQgxgoAAg3QAAguAhgiQg4gFgognQgsgsgBhAQAAg1AggoQgZgMgVgVQgwgwAAhEQAAhEAwgwQAUgUAYgMQgQgKgPgOQgwgxAAhGQAAhFAwgyQAognA1gIQgJgaAAgeQAAhIAzg0QA0gzBIgBQAjABAeAMQAFg4A5goQA+gsBZAAQBXAAA/AsIANALIAUgQQBNg0BtAAQBsAABMA0QBCAuAKA9QATgEAVAAQBTAAA6A6QA7A7gBBTIAAAIIAMAAQBYAAA9A+QA+A+AABZQAAAjgKAfQAWAMATASQAtApAMA2QBIAIA1A1QAuAtAMA7QBMAKA4A+QBDBLAABoQAAAogKAlQAzANAnAtQA4BCAABcQgBARgCARQAYgGAaABQBWAAA+A9QA9A+AABWQAAAXgDAUIAMAAQBeAABDA8QBCA8AABVQAAASgDARQAVgFAYAAQBLAAA0AsQA1AtAAA/QAfgMAkAAIAXABQACg6AagqIAGgJQgXgLgTgWQglgrAAg9QAAgcAIgZIgRABQhFAAgygmQgxglgBg1QABgRAFgQQgZgHgUgTQgfgfAAgrQAAgSAGgQQgigDgagZQgcgdAAgoQAAgpAcgdQAegcAogBQApABAcAcQAdAdAAApQAAAOgDAMQAnACAdAcQAfAfAAAsIgBAHQAPgCAPAAQBGABAyAkQAxAmABA1QgBATgGARQAjAIAbAgQAlArAAA9QAAA9glArQgKAMgLAIQAJAJAHANQAdAtAABAQAABAgdAuQgVAigcAIQgLAVgXASQgrAig/AAQg9AAgsgig");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:92.15,y:208.35}).wait(1).to({graphics:mask_11_graphics_1,x:86.775,y:195.75}).wait(1).to({graphics:mask_11_graphics_2,x:83.65,y:183.1}).wait(1).to({graphics:mask_11_graphics_3,x:83.65,y:168.375}).wait(1).to({graphics:mask_11_graphics_4,x:83.65,y:156.875}).wait(1).to({graphics:mask_11_graphics_5,x:99,y:150.5}).wait(1).to({graphics:mask_11_graphics_6,x:119.9,y:149.85}).wait(1).to({graphics:mask_11_graphics_7,x:131.825,y:149.85}).wait(1).to({graphics:mask_11_graphics_8,x:143,y:149.85}).wait(1).to({graphics:mask_11_graphics_9,x:147.65,y:149.85}).wait(1).to({graphics:mask_11_graphics_10,x:156.8,y:149.85}).wait(1).to({graphics:mask_11_graphics_11,x:166.5,y:149.85}).wait(1).to({graphics:mask_11_graphics_12,x:173.275,y:162.85}).wait(1).to({graphics:mask_11_graphics_13,x:186.125,y:174.225}).wait(1).to({graphics:mask_11_graphics_14,x:197.9,y:186.35}).wait(1).to({graphics:mask_11_graphics_15,x:209,y:192.85}).wait(1).to({graphics:mask_11_graphics_16,x:219.875,y:196.35}).wait(1).to({graphics:mask_11_graphics_17,x:223.25,y:196.35}).wait(1).to({graphics:mask_11_graphics_18,x:223.9,y:196.35}).wait(1).to({graphics:mask_11_graphics_19,x:223.9,y:196.35}).wait(1).to({graphics:mask_11_graphics_20,x:223.9,y:196.35}).wait(1).to({graphics:mask_11_graphics_21,x:223.9,y:196.35}).wait(129));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(87.3,202.7,839.5,581);
// library properties:
lib.properties = {
	id: '235232E7D12DC64FAF0169B6DAD0A2F2',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1671791423559", id:"Image"},
		{src:"images/lady_atlas_1.png?1671791423532", id:"lady_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['235232E7D12DC64FAF0169B6DAD0A2F2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;