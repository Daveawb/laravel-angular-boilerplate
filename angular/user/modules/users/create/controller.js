var Controller = function(RandString) {

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
}

Controller.$inject = ['RandString'];

module.exports = Controller;