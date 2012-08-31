(function($) {
	
	$.fn.encounter = function(options){
		
		var mainElement = this;
		var defaults = {
				step: 1,
				check: function(value){
					if('max' in options)
						if(value > options.max)
							return false;
					if('min' in options)
						if(value < options.min)
							return false;
					return true;
				},
				encounterClass: "encounterSwitcher",
				switcherUpClass: "encounterSwitcherUp",
				switcherUpContent: "",
				switcherDownClass: "encounterSwitcherDown",
				switcherDownContent: "",
				changed: function(){},
				upClick: function(){},
				downClick: function(){}
			};
		var options = $.extend(defaults, options);  
		
		var switcher = $('<span class="' + options.encounterClass + '">');
		
		var switcherUp = $('<div class="' + options.switcherUpClass + '">' + options.switcherUpContent + '</div>');
		switcherUp.bind('click', function(){
			options.upClick();
			if(!isNaN(mainElement.val()))
				if(options.check(parseInt(mainElement.val()) + options.step)){
					mainElement.val(parseInt(mainElement.val()) + options.step);
					options.changed(mainElement.val());
					mainElement.change();
				}
		});
		
		var switcherDown = $('<div class="' + options.switcherDownClass + '">' + options.switcherDownContent + '</div>');
		switcherDown.bind('click', function(){
			options.downClick();
			if(!isNaN(mainElement.val()))
				if(options.check(parseInt(mainElement.val()) - options.step)){
					mainElement.val(parseInt(mainElement.val()) - options.step);
					options.changed(mainElement.val());
					mainElement.change();
				}
		});
		
		switcher.append(switcherUp);
		switcher.append(switcherDown);
		switcher.append('</span>');
		
		mainElement.after(switcher);

	};
	
})(jQuery);
