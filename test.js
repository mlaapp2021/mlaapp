//console.log("hi");

function f1(str, callback) {
    console.log(str);
    callback();
}

f1('google maps not working', function () {
    console.log('google maps need to be setup correctly.');
})