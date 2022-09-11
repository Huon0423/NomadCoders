const socket = io();

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");
const call = document.getElementById("call");

call.hidden = true; // before enter room, hide video

let myStream; // stream === video + voice
let muted = false; // check mute on
let cameraOff = false; // check camera on
let roomName;

async function getCameras() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(device => device.kind === "videoinput");
        const currentCameara = myStream.getVideoTracks();
        cameras.forEach(camera => {
            const option = document.createElement("option");
            option.value = camera.deviceId;
            option.innerHTML = camera.label;
            if(currentCameara.label === camera.label) {
                option.selected = true;
            }
            camerasSelect.appendChild(option);
        });
    } catch(e) {
        console.log(e);
    }
}

async function getMedia(deviceId) {
    const initialConstrains = {
        audio: true,
        video: { facingMode: "user" },
    };
    const cameraConstrains = {
        audio: true,
        video: { deviceId: { exact: deviceId } },
    };
    try {
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? cameraConstrains : initialConstrains
        );
        myFace.srcObject = myStream;
        if(!deviceId) {
            await getCameras();
        }
    }catch(e) {
        console.log(e);
    }
}

function handleMuteClick() {
    myStream
    .getAudioTracks()
    .forEach((track) => (track.enabled = !track.enabled));
    if(!muted) {
        muteBtn.innerHTML = "Unmute";
        muted = true;
    } else {
        muteBtn.innerHTML = "Mute";
        muted = false;
    }
}

function handleCameraClick() {
    myStream
    .getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));
    if(cameraOff) {
        cameraBtn.innerHTML = "Turn Camera Off";
        cameraOff = false;
    } else {
        cameraBtn.innerHTML = "Turn Camera On";
        cameraOff = true;
    }
}

function handleCameraChange() {
    getMedia(camerasSelect.value);
}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
camerasSelect.addEventListener("input", handleCameraChange);

// Welcome Form {join a room}

const welcome = document.getElementById("welcome");
const welcomeForm = welcome.querySelector("form");

function startMedia() {
    welcome.hidden = true;
    call.hidden = false;
    getMedia();
}

function handleWelcomeSubmit(event) {
    event.preventDefault();
    const input = welcomeForm.querySelector("input");
    socket.emit("join_room", input.value, startMedia);
    roomName = input.value;
    input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);

// Socket Code

socket.on("welcome", () => {
    console.log("someone joined!");
});
