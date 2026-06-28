import './style.css';

const video = document.getElementById('preview');
const stream = await navigator.mediaDevices.getUserMedia({video: true});
video.srcObject = stream;