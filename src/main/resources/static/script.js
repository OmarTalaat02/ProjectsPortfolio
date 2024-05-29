class Clock {
    constructor(elementId, selectorId) {
        this.clockElement = document.getElementById(elementId);
        this.timezoneSelector = document.getElementById(selectorId);
        this.currentTimeout = null;
        this.init();
    }

    updateTime() {
        const timezone = this.timezoneSelector.value;
        const now = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
        this.clockElement.textContent = now;

        console.log(`Time updated: ${now} in timezone ${timezone}`);

        // Ensure that we clear any pending timeout to prevent duplicates
        clearTimeout(this.currentTimeout);

        // Schedule next update
        const msUntilNextSecond = 1000 - new Date().getMilliseconds();
        this.currentTimeout = setTimeout(this.updateTime.bind(this), msUntilNextSecond);
    }

    init() {
        this.timezoneSelector.addEventListener('change', () => {
            console.log("Timezone change detected.");
            this.updateTime();
        });

        this.updateTime();
    }
}

// Instantiate the Clock with the appropriate IDs
new Clock('clock', 'timezone-selector');

// Existing Clock code here (make sure to include this part above or below the new code)

// Function to perform a simple UI update and log
function minorEffect() {
    const clockElement = document.getElementById('clock');
    const now = new Date();  // Get current date and time

    // Log current time to console
    console.log("Current time checked at:", now.toLocaleTimeString());

    // Change background color every minute
    const minute = now.getMinutes();
    if (minute % 2 === 0) {
        clockElement.style.backgroundColor = "#851d1d";  // maroon color  background on even minutes
    } else {
        clockElement.style.backgroundColor = "#e0e0e0";  // Slightly darker gray on odd minutes
    }

    // Schedule this function to run again in 60 seconds
    setTimeout(minorEffect, 60000);
}

// Initial call to the function when the script loads
minorEffect();
