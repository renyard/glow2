Glow.complete('core', '@SRC@');

//	Define the AMD module.
if (typeof define === 'function' && define.amd) {
	//	Keep glow in a closure after deleting globals.
	(function(g) {
		function amdModule(g) {
			return g;
		};

		//	Define major and specific versions.
		define('glow-2', amdModule);
		define('glow-2.0.0', amdModule);
	})(glow);

	//	Delete globals.
	delete window.Glow;
	delete window.glow;
};