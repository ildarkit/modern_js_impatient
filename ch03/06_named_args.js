"use strict";

function f(a = 1, b = 2) { console.log(`a = ${a}, b = ${b}`); };

f();
f(a = 5);
f(a = 7, b = 10);
f(b = 10, a = 7);