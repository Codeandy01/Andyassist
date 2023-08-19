document.addEventListener('DOMContentLoaded', function() {
    const pupils = document.querySelectorAll('.pupil');

    // Add mousemove event listener to the document
    document.addEventListener('mousemove', function(event) {
        pupils.forEach(pupil => {
            const eyeRect = pupil.closest('.eye').getBoundingClientRect();

            // Calculate the eye center
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            // Calculate the pupil's position based on the mouse cursor's position
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = mouseX - eyeCenterX;
            const deltaY = mouseY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);

            // Limit pupil movement to within the eye
            const maxRadius = (eyeRect.width - pupil.offsetWidth) / 2;
            const pupilX = Math.cos(angle) * maxRadius;
            const pupilY = Math.sin(angle) * maxRadius;

            // Update the pupil's position
            pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
        });
    });
});
const assistantContainer = document.createElement('div');
assistantContainer.id = 'my-assistant-container'; // You can style this element in your CSS