// content.js

// Create the assistant container
const assistantContainer = document.createElement('div');
assistantContainer.id = 'my-assistant-container';
assistantContainer.style.position = 'fixed';
assistantContainer.style.bottom = '20px';
assistantContainer.style.right = '20px';

// Create the assistant content
const assistantContent = `
    <div id="assistant">
        <div class="eye left-eye">
            <div class="pupil"></div>
        </div>
        <div class="eye right-eye">
            <div class="pupil"></div>
        </div>
        <div class="mouth"></div>
        <div class="hand left-hand"></div>
        <div class="hand right-hand"></div>
    </div>
`;

// Append the assistant content to the container
assistantContainer.innerHTML = assistantContent;

// Append the assistant container to the body
document.body.appendChild(assistantContainer);

let tracking = false; // Tracking state flag



// Add click event listener to switch to tracking state
document.addEventListener('click', function() {
    tracking = true;

    // Set timeout to switch back to idle state after 3-5 seconds
    setTimeout(function() {
        tracking = false;
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.classList.add('idle');
        });
    }, 3000); // Adjust the time as needed
});

// Add mousemove event listener
document.addEventListener('mousemove', trackMouse);


//let tracking = false; // Tracking state flag

// Function to reset pupils to the center
function resetPupilsToCenter() {
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(pupil => {
        pupil.style.transform = `translate(-50%, -50%)`;
    });
}

// Function to track mouse movement
function trackMouse(event) {
    if (tracking) {
        const pupils = document.querySelectorAll('.pupil');
        pupils.forEach(pupil => {
            const eyeRect = pupil.closest('.eye').getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = mouseX - eyeCenterX;
            const deltaY = mouseY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);
            const maxRadius = (eyeRect.width - pupil.offsetWidth) / 2;
            const pupilX = Math.cos(angle) * maxRadius;
            const pupilY = Math.sin(angle) * maxRadius;
            pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
        });
    }
}


// Add click event listener to switch to tracking state
document.addEventListener('click', function() {
    tracking = true;

    // Set timeout to switch back to idle state after 3-5 seconds
    setTimeout(function() {
        tracking = false;
        resetPupilsToCenter(); // Reset pupils to the center
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.classList.add('idle');
        });
    }, 15000); // Adjust the time as needed
});

// Add mousemove event listener
document.addEventListener('mousemove', trackMouse);
