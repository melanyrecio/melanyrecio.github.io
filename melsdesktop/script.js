// Toggle the popup visibility when the icon is clicked
function togglePopup() {
  const popup = document.querySelector('.popup');
  const video = document.querySelector('#popupVideo');  // Select the video element

  // Toggle the display between block and none
  if (popup.style.display === 'block') {
    popup.style.display = 'none';  // Hide popup
    video.pause();  // Pause the video if the popup is hidden
    video.currentTime = 0;  // Optionally reset video to start
  } else {
    popup.style.display = 'block'; // Show popup
    video.play();  // Play the video when the popup is shown
  }
}
