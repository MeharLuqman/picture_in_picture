const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media streem , pass to video element, then play 
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } 
    catch (error) {
        // catch error here
        console.log('whoops, error here:', error)
    }
}
button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    //  start pitctuer in picture
    await videoElement.requestPictureInPicture();
    // Reset button 
    button.disabled = false;
});

// on Load
selectMediaStream();