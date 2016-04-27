var Controller = function() {
    this.links = [
        {
            sref:"base.dashboard",
            title:"Dashboard",
            icon:"fa-dashboard"
        }, {
            sref:"base.users",
            title:"Users",
            icon:"fa-users"
        }
    ]
}

Controller.$inject = [];

module.exports = Controller;