(function(angular) {angular.module("Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/bootstrap.html","<div class=\"container\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n    	Sidebar\n    </div>\n\n    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\">\n    	Content\n    </div>\n</div>");}]);})(angular);