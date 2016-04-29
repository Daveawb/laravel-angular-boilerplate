var Controller = function() {
    this.widgets = [
        {
            title: 'Users',
            colour: 'blue',
            info: 1,
            icon: 'fa-users'
        },
        {
            title: 'Posts',
            colour: 'green',
            info: 42,
            icon: 'fa-newspaper-o'
        },
        {
            title: 'Links',
            colour: 'yellow',
            info: 87,
            icon: 'fa-link'
        },
        {
            title: 'Comments',
            colour: 'red',
            info: 293,
            icon: 'fa-comments'
        }
    ];
};

Controller.$inject = [];

module.exports = Controller;