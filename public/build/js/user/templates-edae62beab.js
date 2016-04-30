(function(angular) {angular.module("Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/components/navigation/navbar.html","<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n	<!-- Brand and toggle get grouped for better mobile display -->\n	<div class=\"navbar-header\">\n		<button type=\"button\" class=\"navbar-toggle\" ng-click=\"navbar.isCollapsed = !navbar.isCollapsed\">\n			<span class=\"sr-only\">Toggle navigation</span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n		</button>\n		<a class=\"navbar-brand\" href=\"#\">Boilerplate</a>\n	</div>\n\n    <ul class=\"nav navbar-top-links navbar-right\">\n        <li class=\"dropdown\" uib-dropdown>\n            <a href=\"#\" class=\"dropdown-toggle\" uib-dropdown-toggle><i class=\"fa fa-cog fa-lg\"></i></b></a>\n            <ul class=\"dropdown-menu\" uib-dropdown-menu role=\"menu\">\n                <li><a ui-sref=\"base.users\"><i class=\"fa fa-users fa-fw\"></i>&nbsp; User management</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"/logout\" target=\"_self\"><i class=\"fa fa-times fa-fw\"></i>&nbsp; Logout</a></li>\n            </ul>\n        </li>\n    </ul>\n\n	<!-- Collect the nav links, forms, and other content for toggling -->\n	<div class=\"collapse navbar-collapse\" uib-collapse=\"navbar.isCollapsed\">\n		<ul class=\"navbar-default sidebar\">\n			<li class=\"sidebar-search\">\n				<div class=\"input-group\">\n					<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\n            </span>\n				</div>\n			</li>\n			<li ng-repeat=\"link in navbar.links\" ui-sref-active=\"active\">\n				<a ui-sref=\"{{ link.sref }}\" href=\"#\">\n					<i class=\"fa {{ link.icon }}\"></i>\n					<span class=\"hidden-xs\">&nbsp;{{ link.title }}</span>\n				</a>\n			</li>\n		</ul>\n	</div><!-- /.navbar-collapse -->\n</nav>");
$templateCache.put("templates/modules/dashboard/dashboard.html","<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <h1>Dashboard</h1>\n        <hr />\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-3\" ng-repeat=\"widget in dashboard.widgets\">\n    	<div class=\"panel panel-{{ widget.colour }}\">\n            <div class=\"panel-heading\">\n              <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                      <i class=\"fa {{ widget.icon }} fa-5x\"></i>\n                  </div>\n                  <div class=\"col-xs-8 text-right\">\n                      <div class=\"huge\">{{ widget.info }}</div>\n                      <h3 class=\"panel-title\">{{ widget.title }}</h3>\n                  </div>\n              </div>\n            </div>\n    	</div>\n    </div>\n</div>");
$templateCache.put("templates/modules/users/users.html","<div class=\"row\">\n	<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n		<h1>Users</h1>\n		<hr />\n	</div>\n</div>\n\n<div class=\"row vertical-padding\">\n	<div class=\"col-xs-6\">\n		<div class=\"input-group\">\n			<input type=\"text\" class=\"form-control\" placeholder=\"Search users...\">\n			<span class=\"input-group-btn\">\n				<button class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\n			</span>\n		</div>\n	</div>\n	<div class=\"col-xs-6\">\n		<div class=\"btn-toolbar pull-right\" role=\"toolbar\">\n			<div class=\"btn-group\">\n				<button type=\"button\" class=\"btn btn-default\" ui-sref=\"base.users.create\">\n					<i class=\"fa fa-plus-circle\"></i> Create a user\n				</button>\n				<button type=\"button\" class=\"btn btn-default\" ui-sref=\"base.users.invite\">\n					<i class=\"fa fa-paper-plane\"></i> Invite users\n				</button>\n			</div>\n		</div>\n		<div class=\"clearfix\"></div>\n	</div>\n</div>\n\n<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<table class=\"table table-hover\">\n			<thead>\n			<tr>\n				<th>Name</th>\n				<th>Email</th>\n				<th>Joined</th>\n				<th></th>\n			</tr>\n			</thead>\n			<tbody>\n			<tr>\n				<td>David Barker</td>\n				<td>daveawb@hotmail.com</td>\n				<td>14/12/2016</td>\n				<td>\n					<div class=\"dropdown text-right\" uib-dropdown>\n						<button class=\"btn btn-link\" type=\"button\" uib-dropdown-toggle>\n							<i class=\"fa fa-ellipsis-v\"></i>\n						</button>\n						<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" uib-dropdown-menu>\n							<li role=\"presentation\" class=\"dropdown-header\">Actions</li>\n							<li role=\"presentation\">\n                                <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n                                    <i class=\"fa fa-ban fa-fw\"></i>&nbsp; Suspend\n                                </a>\n                            </li>\n							<li role=\"presentation\">\n                                <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n                                    <i class=\"fa fa-times fa-fw\"></i>&nbsp; Delete\n                                </a>\n                            </li>\n							<li role=\"presentation\">\n                                <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n                                    <i class=\"fa fa-pencil fa-fw\"></i>&nbsp; Edit\n                                </a>\n                            </li>\n							<li role=\"presentation\">\n                                <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n                                    <i class=\"fa fa-edit fa-fw\"></i>&nbsp; Reset password\n                                </a>\n                            </li>\n						</ul>\n					</div>\n				</td>\n			</tr>\n			</tbody>\n		</table>\n	</div>\n</div>");
$templateCache.put("templates/modules/users/create/create-user.html","<div class=\"modal-header\">\n    <h3 class=\"modal-title\">Create a new user</h3>\n</div>\n\n<form action=\"\" method=\"post\" class=\"form-horizontal\" role=\"form\">\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                    <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\"\n                               class=\"form-control\"\n                               id=\"name\"\n                               ng-model=\"createuser.user.name\"\n                               placeholder=\"Name\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                    <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"email\"\n                               class=\"form-control\"\n                               id=\"email\"\n                               ng-model=\"createuser.user.email\"\n                               placeholder=\"Email\">\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"col-xs-12\">\n\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n                    <div class=\"col-sm-10\">\n                        <div class=\"input-group\">\n                            <input type=\"{{ createuser.passwordDisplay ? \'text\' : \'password\' }}\"\n                                   class=\"form-control\"\n                                   id=\"password\"\n                                   ng-model=\"createuser.user.password\"\n                                   placeholder=\"Password\">\n                            <div class=\"input-group-btn\">\n                                <button class=\"btn btn-default\" ng-click=\"createuser.autogenerate(); $event.preventDefault()\">\n                                    <i class=\"fa fa-plus\"></i>\n                                </button>\n                                <button class=\"btn btn-default\" ng-click=\"createuser.showpassword(); $event.preventDefault()\">\n                                    <i class=\"fa\" ng-class=\"{\n                                    \'fa-eye\' : ! createuser.passwordDisplay,\n                                    \'fa-eye-slash\' : createuser.passwordDisplay\n                                }\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                    <label for=\"password-confirm\" class=\"col-sm-2 control-label\">Confirm Password</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"{{ createuser.passwordDisplay ? \'text\' : \'password\' }}\"\n                               class=\"form-control\"\n                               id=\"password-confirm\"\n                               ng-model=\"createuser.user.confirmPassword\"\n                               placeholder=\"Confirm Password\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-2 col-sm-10\">\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\"\n                                       ng-model=\"createuser.user.copyme\"\n                                       ng-disabled=\"createuser.user.noemail\"> Copy email to myself.\n                            </label>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-2 col-sm-10\">\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\"\n                                       ng-model=\"createuser.user.noemail\"\n                                       ng-click=\"createuser.uncheckCopyMe()\"> Don\'t send confirmation email.\n                            </label>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"pull-left\">\n            <button class=\"btn btn-link\" type=\"button\" ng-click=\"createuser.cancel()\">Cancel</button>\n        </div>\n        <div class=\"pull-right\">\n            <button class=\"btn btn-primary\" type=\"button\" ng-click=\"createuser.create()\">Create</button>\n        </div>\n    </div>\n\n</form>\n");
$templateCache.put("templates/modules/users/invite/invite-users.html","<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <h1>Create a new user</h1>\n        <hr />\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <form action=\"\" method=\"post\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-group\">\n                <legend>Create a new user</legend>\n            </div>\n\n\n\n            <div class=\"form-group\">\n                <div class=\"col-sm-10 col-sm-offset-2\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n");}]);})(angular);