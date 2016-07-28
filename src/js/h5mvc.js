/*
作用：tg2
日期：2016-7-18
作者：冯维琪
*/
require.config({

    waitSeconds:10,

    paths : {

        //lib 
        
        utils:"core/utils",
        jquery:["lib/jquery/jquery-1.11.1.min"],
        tmpl:["lib/tmpl/tmpl.min"],
        router:["core/router"],
       
        //module
        user_index:"mod/user/index",
        user_profile_index:"mod/user/profile/index",
        user_jifen_index:"mod/user/jifen/index"

    },

    shim: {
        
        "tmpl":{
            
            exports:"tmpl"
        }
      
        
    }
  
});

require(['router'],function(Router){

  var router = new Router();
  router.open();
});