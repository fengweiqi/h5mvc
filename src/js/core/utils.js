/**
 * 公共工具库
 * @param  {[type]} factory [description]
 * @return {[type]}         [description]
 */
(function(factory){
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return factory();
        });
    }else{
        window.utils = factory();
    }
}(function(){ 
    

    return {

        _GET: _GET
       
    };


    /*
    * 获取url传过来的参数，js版的$_GET
    * 如当前url为： http://www.xxx.com/?cid=123
    * var cid = _GET('cid');
    */
   function _GET(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);

        if (r!=null) return decodeURIComponent(r[2]); return null;
    }


}));

