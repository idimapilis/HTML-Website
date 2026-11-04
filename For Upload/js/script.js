function showMessage() {
    alert("Hello! How are you today!");
}

function showMessageMore() {
    alert("Slowly learning Javascript");
}

function explorearticles() {
    alert("This will redirect you to the Articles page");
}

function showText() {
    let text = document.getElementById("hiddenText");

    text.hidden = !text.hidden;
}

function showArticle() {
    let text = document.getElementById("hiddenText");
    
    text.hidden = !text.hidden;
}

function showTutorials() {
    let text = document.getElementById("hidden-tutorials");

    text.hidden = !text.hidden;
}

// =========================================
// LIGHT AND DARK THEME FUNCTION
// =========================================

function toggleTheme() {

    // Get the body element
    let body = document.body;

    // Get the theme toggle button
    let button = document.getElementById("theme-toggle");

    // Switch between light and dark themes
    body.classList.toggle("dark-theme");

    // Check which theme is currently active
    if (body.classList.contains("dark-theme")) {

        // Change button text to Light Theme
        button.textContent = "Toggle";

        // Remember the selected theme
        localStorage.setItem("theme", "dark");

    } else {

        // Change button text to Dark Theme
        button.textContent = "Toggle";

        // Remember the selected theme
        localStorage.setItem("theme", "light");
    }
}


// =========================================
// LOAD SAVED THEME WHEN PAGE OPENS
// =========================================

document.addEventListener("DOMContentLoaded", function() {

    // Get the saved theme from local storage
    let savedTheme = localStorage.getItem("theme");

    // Get the theme toggle button
    let button = document.getElementById("theme-toggle");

    // Apply dark theme if it was previously selected
    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

        button.textContent = "Toggle";

    } else {

        // Keep the original light theme
        button.textContent = "Toggle";
    }

});