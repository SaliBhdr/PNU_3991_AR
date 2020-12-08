// Greeter is a class of object that can greet people.
// It can learn different ways of greeting people through
// 'Strategies.'
//
// This is the Greeter constructor.
var Greeter = function (strategy) {
    this.strategy = strategy;
};

// Greeter provides a greet function that is going to
// greet people using the Strategy passed to the constructor.
Greeter.prototype.greet = function (name) {

    var fn = this.strategy;

    if(typeof this.strategy === 'string'){
        fn = window[this.strategy];
    }

    return fn(name);
};

// Since a function encapsulates an algorithm, it makes a perfect
// candidate for a Strategy.
//
// Here are a couple of Strategies to use with our Greeter.
var politeGreetingStrategy = function (name) {
    return "Hello." + ' ' + name + ' ' + "😊";
};

var friendlyGreetingStrategy = function (name) {
    return "Hey!" + ' ' + name + ' ' + "😁";
};

var boredGreetingStrategy = function (name) {
    return "Sup." + ' ' + name + ' ' + "😒";
};

$(document).on('click', '.greeter', function (e) {
    var el = $(this);
    var className = el.data('class');
    var name = $('#name').val();

    var greeter = new Greeter(className);

    var txt = greeter.greet(name);

    $('#result-output').html(txt);
});