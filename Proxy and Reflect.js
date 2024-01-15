
//Proxy:

const target = {}; // The object to be proxied
const handler = {
    get: function (target, prop, receiver) {
        console.log(`Getting property: ${prop}`);
        return Reflect.get(target, prop, receiver);
    },
    set: function (target, prop, value, receiver) {
        console.log(`Setting property: ${prop} to ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
};

const proxy = new Proxy(target, handler);

proxy.foo = 'bar'; // Setting property: foo to bar
console.log(proxy.foo); // Getting property: foo, then prints: bar


//Reflect:

const target = {};
const handler = {
    get: function (target, prop, receiver) {
        console.log(`Getting property: ${prop}`);
        return Reflect.get(target, prop, receiver);
    }
};

const proxy = new Proxy(target, handler);

proxy.foo = 'bar';
console.log(proxy.foo); // Getting property: foo, then prints: bar
