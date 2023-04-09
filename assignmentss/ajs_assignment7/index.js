var logone = setTimeout(function () {
    console.log("one!");
}, 500);

var logTwo = setTimeout(function () {
    console.log('two!');
}, 1000);

function inOrder(logone, logTwo) {
    // var secondcallback=logTwo._ontimeout;
    // clearTimeout(logTwo);
    var logTwoCallback = logTwo._onTimeout;
    // clearTimeout(logTwo);

    setTimeout(function checkTimeout() {
        if (logone._called) {
            logTwoCallback();
        } else {
            setTimeout(checkTimeout, 0);
        }
    }, 0);
}
inOrder(logTwo, logone)