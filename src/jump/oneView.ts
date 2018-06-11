/**
* 主界面 
*/
module jump{
	export class oneView extends ui.oneViewUI{
		private _exptimer:Laya.Timer;
		private static _instance:oneView;
		constructor(){
          super();
		  var resArray:Array<any>=[
            {url:"res/atlas/comp.json",type:Laya.Loader.ATLAS}
          ];
		  this.dictionaryUpdata.on(Laya.Event.CLICK,this,this.onclick);
		  this.miaoBtn.on(Laya.Event.CLICK,this,this.onclick);
		  this.miaoBtn.on(Laya.Event.MOUSE_DOWN,this,this.mouse_down);
		  this.miaoBtn.on(Laya.Event.MOUSE_UP,this,this.mouse_up);
		  this.hunjiBtn1.on(Laya.Event.CLICK,this,this.onclick);	
		  this.hunjiBtn2.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiBtn3.on(Laya.Event.CLICK,this,this.onclick);
		  this.rewardBtn.on(Laya.Event.CLICK,this,this.onclick);
		  this.ziWin.on(Laya.Event.CLICK,this,this.onclick);
		  this.chou.on(Laya.Event.CLICK,this,this.onclick);
		  this.mallWin.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiImg1.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiImg2.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiImg3.on(Laya.Event.CLICK,this,this.onclick);
		  
		  var obj:Object = module.oneViewModule.getInstance().currentData;
		  this.dicName.text = obj["name"];
		  this.expText.text = obj["exp"]+"/"+50;
		  this.progressBar.x = -310 + obj["exp"]*310/50;
		  this.rewardBtn.disabled =true;
		  this.maojian();
		  Laya.timer.loop(1000,this,this.init);
		  Laya.timer.once(500,this,this.huxi1);
		  Laya.timer.once(1000,this,this.huxi2);
		  Laya.timer.once(1500,this,this.huxi3);
		}

		public init():void
		{
			var obj:Object = module.oneViewModule.getInstance().currentData;

			if(obj !=null)
			{
				if(this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible)
				{
					obj["exp"]++;
				if(obj["exp"]>=50)
				{
					Laya.timer.clearAll(this);
					Laya.Tween.clearAll(this.progressBar);
					this.rewardBtn.disabled = false;
					obj["exp"] =50;
				}
				this.dicName.text = obj["name"];
			    this.expText.text = obj["exp"]+"/"+50;
				
				//this.progressBar.x = -272 + obj["exp"]*262/500;
				}
			}
		}

		private textrander:number =0;
		//切换字典刷新页面
		public randerinit():void
		{
			var obj:Object = module.oneViewModule.getInstance().currentData;
			//Laya.timer.loop(100,this,this.randerinit);
			this.maobi.text = this.textrander+"";
			this.dicName.text = obj["name"];
			this.expText.text = obj["exp"]+"/"+50;
			this.progressBar.x = -310 + obj["exp"]*310/50;
			//Laya.timer.clearAll(this);
			Laya.Tween.clearAll(this.progressBar);
			this.miaoBtn.mouseEnabled = true;
			if(obj["exp"]>=50)
			{
				this.rewardBtn.disabled = false;
			}
			if(this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible)
			{
				Laya.Tween.to(this.progressBar,{x:0},50000-1000*obj["exp"]);
			}
		}

		public static getInstance():oneView
		{
			if(this._instance == null)
			{
				this._instance = new oneView;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}


		private onclick(event:Laya.Event):void
		{
			 switch(event.currentTarget){
			 case this.dictionaryUpdata:
			      var panel:laya.ui.Dialog = new jump.updataDictionary;
				  this.addChild(panel);
				  panel.show();
			      break;
		     case this.miaoBtn:
			      var obj:Object = module.oneViewModule.getInstance().currentData;
			      var bubbling:laya.ui.Dialog = new jump.BubblingItem;
				  //this.miaoBtn.addChild(bubbling);
				  bubbling.show();
				  //this.startLearn();
				  if(obj["exp"]<50)
				  {
					  this.progressBar.x +=310/50;
				  }
				  obj["exp"] +=1;
				  if(obj["exp"]>=50){
					  this.miaoBtn.mouseEnabled = false;
					  this.rewardBtn.disabled = false;
					  obj["exp"] =50;
				  }
				  this.expText.text = obj["exp"]+"/"+50;
				  Laya.Tween.clearAll(this.progressBar);
				  if(this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible)
				  {
					  Laya.Tween.to(this.progressBar,{x:0},50000-1000*obj["exp"]);
				  }
				  //Laya.timer.loop(1000,this,this.init);
				  
				  
				  //Laya.timer.once(1000,this,this.openBubbing,[bubbling]);
				  break;
			case this.hunjiImg1:
			     module.oneViewModule.getInstance().hunjiClass = 1;
			     var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiImg2:
			     module.oneViewModule.getInstance().hunjiClass = 2;
			     var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiImg3:
			     module.oneViewModule.getInstance().hunjiClass = 3;
			     var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiBtn1:
			     module.oneViewModule.getInstance().hunjiClass = 1;
			     var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiBtn2:
			    var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 module.oneViewModule.getInstance().hunjiClass = 2;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiBtn3:
			    var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 module.oneViewModule.getInstance().hunjiClass = 3;
				 this.addChild(hunji);
				 hunji.show();
				 break;
		    case this.rewardBtn:
			     var obj:Object = module.oneViewModule.getInstance().currentData;
				 obj["exp"] = 0;
				 obj["chouka"] = obj["chouka"]+1;
				 this.expText.text = obj["exp"]+"/"+500;
				 this.progressBar.x = -310 + obj["exp"]*310/50;
				 this.rewardBtn.disabled = true;
				 this.miaoBtn.mouseEnabled = true;
			     this.ani.play();
				 this.ani.on(Laya.Event.COMPLETE,this,this.removeAni);
			     if(this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible)
				  {
					  Laya.Tween.to(this.progressBar,{x:0},50000-1000*obj["exp"]);
				  }
				 Laya.timer.loop(1000,this,this.init);
			     break;
		   case this.chou:
		        var chouka:laya.ui.Dialog = new jump.chouka;
				this.addChild(chouka);
				chouka.popup(true,true);
				break;
		   case this.ziWin:
		        var chouka:laya.ui.Dialog = new jump.wordStockWin;
				this.addChild(chouka);
				chouka.popup(true,true);
				break;
		   case this.mallWin:
		        var exchange:laya.ui.Dialog = new jump.exchangeWin;
				this.addChild(exchange);
				exchange.popup(true,true);
				break;
			 }	 
		}
		/**添加魂姬时设置魂姬 */
        public hunjiUpdata():void
		{
			var hunjiClass = module.oneViewModule.getInstance().hunjiClass;
			if(!this.hunjiImg1.visible && !this.hunjiImg2.visible && !this.hunjiImg3.visible )
			{
				var obj:Object = module.oneViewModule.getInstance().currentData;
			    Laya.Tween.to(this.progressBar,{x:0},50000-1000*obj["exp"]);
			}
			if(hunjiClass)
			{
				this["hunjiBtn"+hunjiClass].visible = false;
				this["diImg"+hunjiClass].visible = false;
				this["hunjiImg"+hunjiClass].visible = true;
			}
		}

		/**移除魂姬时设置魂姬 */
		public hunjiRemover():void
		{
			var hunjiClass = module.oneViewModule.getInstance().hunjiClass;
			if(hunjiClass)
			{
				this["hunjiBtn"+hunjiClass].visible = true;
				this["diImg"+hunjiClass].visible = true;
				this["hunjiImg"+hunjiClass].visible = false;
			}
			if(!this.hunjiImg1.visible && !this.hunjiImg2.visible && !this.hunjiImg3.visible )
			{
				var obj:Object = module.oneViewModule.getInstance().currentData;
			    Laya.Tween.clearAll(this.progressBar);
			}
		}

		//猫酱缩小
		private mouse_down():void
		{
			Laya.Tween.clearAll(this.miaoBtn);
			this.miaoBtn.scaleX =0.7;
			this.miaoBtn.scaleY =0.7;
		}
		//猫酱放大
		private mouse_up():void
		{
			this.miaoBtn.scaleX =1;
			this.miaoBtn.scaleY =1;
			this.maojian();
		}
        
		//魂姬效果
		private huxi1():void
		{
			//魂姬1
			if(this.hunjiImg1.scaleX>=1)
			{
				Laya.Tween.to(this.hunjiImg1,{scaleX:0.9,scaleY:0.9},2000,null,Laya.Handler.create(this,()=>{
				this.huxi1();
			    }));
			}else
			{
				Laya.Tween.to(this.hunjiImg1,{scaleX:1,scaleY:1},2000,null,Laya.Handler.create(this,()=>{
				this.huxi1();
			    }));
			}
		}

		private huxi2():void
		{
			//魂姬2
			if(this.hunjiImg2.scaleX>=1)
			{
				Laya.Tween.to(this.hunjiImg2,{scaleX:0.9,scaleY:0.9},2000,null,Laya.Handler.create(this,()=>{
				this.huxi2();
			    }));
			}else
			{
				Laya.Tween.to(this.hunjiImg2,{scaleX:1,scaleY:1},2000,null,Laya.Handler.create(this,()=>{
				this.huxi2();
			    }));
			}
		}

		private huxi3():void
		{
			//魂姬3
			if(this.hunjiImg3.scaleX>=1)
			{
				Laya.Tween.to(this.hunjiImg3,{scaleX:0.9,scaleY:0.9},2000,null,Laya.Handler.create(this,()=>{
				this.huxi3();
			    }));
			}else
			{
				Laya.Tween.to(this.hunjiImg3,{scaleX:1,scaleY:1},2000,null,Laya.Handler.create(this,()=>{
				this.huxi3();
			    }));
			}
		}

		private maojian():void
		{
			//喵酱
			if(this.miaoBtn.scaleX>=1)
			{
				Laya.Tween.to(this.miaoBtn,{scaleX:0.9,scaleY:0.9},2000,null,Laya.Handler.create(this,()=>{
				this.maojian();
			    }));
			}else
			{
				Laya.Tween.to(this.miaoBtn,{scaleX:1,scaleY:1},2000,null,Laya.Handler.create(this,()=>{
				this.maojian();
			    }));
			}
		}
        //停止动画
		private removeAni():void
		{
			this.ani.stop();
		}

		private startLearn():void
		{
			module.oneViewModule.getInstance().updataCurrentData(1);
		}

		private openBubbing(bubbling:laya.ui.Dialog):void
		{
			bubbling.close();
		}

		public static getPopUp(popUp:any):laya.ui.View
        {
            if(popUp==null)
            {
                return null;
            }
        }
			
	}
}
