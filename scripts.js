// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    spaceShuttleHeight.innerHTML = Number(0);
    let landingButton = document.getElementById('landing');
    let abortMissionButton = document.getElementById('missionAbort');
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let leftButton = document.getElementById('left');
    let rightButton = document.getElementById('right');

    takeoffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = Number(10000);
        }
    });

    landingButton.addEventListener("click", function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
    });

    abortMissionButton.addEventListener('click', function() {
        let response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener('click', function() {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000; 
    });

    downButton.addEventListener('click', function() {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });
});