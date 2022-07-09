// Get the amount of threads available
const userThreads = navigator.hardwareConcurrency;
// Default username, Rigid and amount of threads
let threads = 3;
let username = `00a`;
let rigid = `Duino-JS`;
let wallet_id = Math.floor(Math.random() * 2811);
let miner_key = `N5UGPvF4JASymmM8`;
let workerVer = 0;

function startMiner() {
    // Validate the amount of threads
    if (threads < 1) {
        threads = 1;
    }
    if (threads > 8) {
        threads = 8;
    }
    if (threads > userThreads) {
        threads = userThreads;
    }

    // Loop through the amount of threads
    for (let workersAmount = 0; workersAmount < threads; workersAmount++) {
        // Create the worker
        worker = new Worker(`assets/js/worker.js`);
        // Send the username, rigid and workerVer to the worker
        worker.postMessage('Start,' + username + "," + rigid + "," + workerVer + "," + wallet_id + "," + miner_key);
        // Add 1 to workerVer
        workerVer++;
    }
}