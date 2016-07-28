(function(factory) {
	if (typeof define == 'function' && define.amd) {
		define(['utils'], factory);
	} else {
		window.Router = factory();
	}
})(function(utils) {

	function Router() {

	}



	Router.prototype.open = function() {

		var that = this;

		that.reload();//刷新页面时文件加载

		if (window.addEventListener) {

			document.body.addEventListener('click', function(event) {

				var e = window.event || event;

				var target = e.srcElement || e.target;

				if (target.nodeName == 'A') {

					e.preventDefault();

					var href = target.getAttribute('href');

					var state = that.setState(href);

					history.pushState(state, target.getAttribute('data-title'), href);

					that.load(state);

				}

			});


			that.listenPopstate();//监听浏览器前进/后退

		}

	}

	//设置pushState第一个参数state
	Router.prototype.setState = function(href) {

		


		var state = {};

		

		if(href.split('?')[1]){
			var argArr = href.split('?')[1].split('&');

			argArr.forEach(function(el, index) {

				var ag1 = el.split('=')[0];

				var ag2 = el.split('=')[1];

				if (ag1.indexOf('mod_') != -1) {

					state[ag1] = ag2;
				}

			});
		}
		

		return state;

	}

	//刷新页面时文件加载
	Router.prototype.reload = function() {

		var state = this.setState(window.location.href);
		
		this.load(state);


	}


	//监听浏览器前进/后退
	Router.prototype.listenPopstate = function() {
		var that = this;
		window.addEventListener("popstate", function(event) {

			if (event.state) {

				that.load(event.state);

			}

		}, false);

	}

	//加载模块
	Router.prototype.load = function(state) {
		var requireArr = [];

		for (prop in state) {

			if (state.hasOwnProperty(prop)) {

				var str = prop.substring(prop.indexOf('_') + 1, prop.length) + '_' + state[prop];

				requireArr.push(str);
			}
		}

		require(requireArr,function(){
			// console.log('加载完毕！');
		});
	}

	return Router;


});