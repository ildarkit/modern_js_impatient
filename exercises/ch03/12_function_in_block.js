'use strict';

if (Math.random() < 0.5) {
    say('Hello');
    function say(greeting) {console.log(`${greeting}!`);}
}
say('Goodbye');