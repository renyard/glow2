setTimeout(
	function() {
			
			Glow.provide(
			function(glow) {
				if (!glow.more) { throw new Error('Cannot build widgets before more.'); }
				
				glow.widgets = {};
				window.log.push(' [3] built widgets 2.1.0');
			}
		);
		
		Glow.complete('widgets', '2.1.0');
	},
	100 + Math.floor(Math.random()*1000)
);