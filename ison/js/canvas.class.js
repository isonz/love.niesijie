var Canvas = {
	canvas: null,
	context: null,
	
	create: function(id)
	{
		var obj = $(id);
		if('undefined'==typeof(obj[0])){
			alert('undefined '+ id);
			return false;
		}
		var width = obj.width();
        var height = obj.height();
        obj.attr("width", width);
        obj.attr("height", height);
        
		this.canvas = obj;        
		this.context = obj[0].getContext('2d');
		return this;
	},
	
	line: function()
	{
		this.context.moveTo(20,30);				//第一个起点
		this.context.lineTo(120,90);			//第二个点
		this.context.lineTo(220,60);			//第三个点（以第二个点为起点）
		this.context.lineWidth=3;
		this.context.strokeStyle = '#000';
		this.context.stroke();
	},
	
	rectangle: function()
	{
		//strokeStyle,fillStyle下的默认black
		this.context.fillRect(0, 120, 90, 90);  //x,y,width,height
		this.context.strokeRect(120, 120, 90, 90);
		
		this.context.fillStyle = "red";
		this.context.strokeStyle = "blue";
		this.context.fillRect(0, 220, 90, 90);
		this.context.strokeRect(120, 220, 90, 90);
		
		//设置透明度:透明度值>0,<1值越低，越透明，值>=1时为纯色，值<=0时为完全透明
		this.context.fillStyle = "rgba(255, 0, 0, 0.2)";
		this.context.strokeStyle = "rgba(255, 0, 0, 0.2)";
		this.context.fillRect(0, 320, 90, 90);
		this.context.strokeRect(120, 320, 90, 90);
		
		//this.context.clearRect(40, 180, 120, 120);  //清除矩形区域,x,y,width,height
	},
	
	round: function()
	{
		this.context.beginPath();
		this.context.arc(400, 150, 100, 0, Math.PI * 2, true);  //x:圆心的x坐标,y:圆心的y坐标,straAngle:开始角度,endAngle:结束角度, anticlockwise:是否逆时针（true）为逆时针，(false)为顺时针
        //不关闭路径路径会一直保留下去，当然也可以利用这个特点做出意想不到的效果
		this.context.closePath();
		this.context.fillStyle = 'rgba(0,255,0,0.25)';
		this.context.fill();
        
		//左侧1/4圆弧
		this.context.beginPath();
		this.context.arc(550, 150, 50, 0, Math.PI , false);
		this.context.fillStyle = 'rgba(200,100,0,0.25)';
		this.context.fill();
		this.context.strokeStyle = 'rgba(100,0,0,0.25)'
		this.context.closePath();
		this.context.stroke();

        //右侧1/4圆弧
		this.context.beginPath();
		this.context.arc(650, 150, 50, 0, Math.PI , true);
		this.context.fillStyle = 'rgba(200,100,0,0.25)';
		this.context.fill();
		this.context.strokeStyle = 'rgba(100,0,0,0.25)';
		this.context.closePath();
		this.context.stroke();
	},
	
	example1: function()
	{
		this.context.fillStyle = "#EEEEFF";
		this.context.fillRect(0, 0, 400, 300);
        var n = 0;
        var dx = 150;
        var dy = 150;
        var s = 100;
        this.context.beginPath();
        this.context.fillStyle = 'rgb(100,255,100)';
        this.context.strokeStyle = 'rgb(0,0,100)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = Math.PI / 15 * 11;
        for (var i = 0; i < 30; i++) {
            var x = Math.sin(i * dig);
            var y = Math.cos(i * dig);
            this.context.lineTo(dx + x * s, dy + y * s);
        }
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
	},
	
	example2: function()
	{
		this.context.moveTo(50, 50);
		this.context.bezierCurveTo(50, 50,150, 50, 150, 150);
		this.context.stroke();
		this.context.quadraticCurveTo(150, 250, 250, 250);
		this.context.stroke();
	},
	
	example3: function()
	{
		this.context.fillStyle = "#EEEFF";
		this.context.fillRect(0, 0, 400, 300);
        var n = 0;
        var dx = 150;
        var dy = 150;
        var s = 100;
        this.context.beginPath();
        this.context.globalCompositeOperation = 'and';
        this.context.fillStyle = 'rgb(100,255,100)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = Math.PI / 15 * 11;
        this.context.moveTo(dx, dy);
        for (var i = 0; i < 30; i++) {
            var x = Math.sin(i * dig);
            var y = Math.cos(i * dig);
            this.context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
        }
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
	}
	
	
};


/*
var Cat = {
	sound: "喵喵喵",
	
	init: function(){
		var cat = Canvas.createNew();
	　　	cat.name = "大毛";
	　　	cat.makeSound = this.makeSound(this.sound);
	　　	return cat;
	},

	makeSound: function(sound){
		alert(sound); 
	}
};
var cat1 = Cat;
cat1.makeSound('fff'); // 睡懒觉
*/