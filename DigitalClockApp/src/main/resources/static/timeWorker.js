let start = new Date().getTime();

function timedCount() {
    let now = new Date().getTime();
    postMessage(now - start);
    setTimeout(timedCount, 1000 - (now % 1000));  // Synchronize with the start of the next second
}

timedCount();
