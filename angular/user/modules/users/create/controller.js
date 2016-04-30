var Controller = function(RandString, $modalInstance) {

    this.user = {};

    this.passwordDisplay = false;

    this.autogenerate = function() {
        var string = RandString(null, 6);
        this.user.password = string;
        this.user.confirmPassword = string;
    }

    this.showpassword = function() {
        this.passwordDisplay = ! this.passwordDisplay;
    }

    this.uncheckCopyMe = function() {
        this.user.copyme=false;
    }

    this.create = function() {
        "use strict";

    }

    this.cancel = function() {
        "use strict";
        $modalInstance.dismiss('cancel');
    }
}

Controller.$inject = ['RandString', '$uibModalInstance'];

module.exports = Controller;