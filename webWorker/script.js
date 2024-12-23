
let myWorker;

function startWoker() {

    // create worker - praimary step 

    if (typeof (Worker) !== 'undefined') {
        // Your Browser support Web Woker

        if (myWorker === undefined) {
            // already not created worker

            myWorker = new Worker('worker.js');

        }

        myWorker.onmessage = function (event) {
            document.getElementById('heading2').innerHTML = event.data;
        }

    }
    else {
        alert('Your Browser does not support Web Woker')
    }
};


function stoptWoker() {
    if (myWorker) {
        myWorker.terminate();
        myWorker = undefined;
    }
    else {
        alert('No active worker to terminate');
    }
}






function onetherWork() {
    alert('You can now others work perfectly')
}