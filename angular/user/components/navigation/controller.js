var Controller = function() {
    this.isCollapsed = true;

    this.links = [
        {
            sref: "base.dashboard",
            title: "Dashboard",
            icon: "fa-dashboard"
        }
    ];
}

Controller.$inject = [];

module.exports = Controller;