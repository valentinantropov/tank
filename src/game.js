curDir: undefined;
var uTank;

var Tank = cc.DrawNode.extend({
    angle: 0,

    ctor: function(posX,posY){
        this._super();
        this.point =cc.p({x:posX,y:posY});
        this.angle = 180* (Math.PI /   Math.atan( this.point.y / this.point.x));
        this.len = 15;
        curDir = this.angle;

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event){
                //console.log(keyCode);
                switch(keyCode){
                    case 65:
                        console.log(keyCode); 
                        curDir--;
                        break;
                    case 68:
                        console.log(keyCode);
                        curDir++;
                        break;
                }
            }
        },this);

        this.scheduleUpdate();
        /*cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            type: cc.EventMouse .MOVE,
            onMouseMove: function(event){
                var end = event.getLocationInView();
                end.x = Math.round(end.x);
                end.y = Math.round(end.y);
                //console.log(end);
                //curDir = end;
            }

        },this);*/
        
    },
    move: function(posX, posY){
        this.point = cc.p({x:posX,y:posY});
    },
    draw: function(color){
        this.drawCircle(this.point,this.len,this.angle,10,true,4, color);
    },
    update: function(dt){
        this.angle = curDir;
    }
});

var GameScene = cc.Scene.extend({
    uTank:{},

    onEnter: function() {
        this._super();
        uTank = new Tank(100,100);
        uTank.draw(cc.color(0,0,255));
        this.addChild(uTank);
    }
});


