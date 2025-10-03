// Gets references to the elements bv the id

const proceed_button = document.getElementById("proceed_button");
const intro = document.getElementById("intro");
const main_webpage = document.getElementById("main_webpage");

proceed_button.addEventListener("click", function() {
    intro.style.display = "none";           // Hides the intro webpage
    main_webpage.style.display = "block";   // Shows the main_page webpage

});


// Calendar Logic: Dynamically Filling Dates

const dates_grid = document.getElementById("dates_grid");
const month_year = document.getElementById("month_year");
const previous_month = document.getElementById("previous_month");
const next_month = document.getElementById("next_month");

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const first_day = (new Date(year, month, 1).getDay() + 6) % 7; // Adjusted for Monday = 0
const daysInMonth = new Date(year, month + 1, 0).getDate();

month_year.textContent = today.toLocaleString('default', { month: 'long', year: 'numeric'});

// Fill the empty slots for first day
for(let i = 0; i < first_day; i++) {
    const empty = document.createElement("div");
    dates_grid.appendChild(empty);
}

// Fill in the dates
for(let d = 1; d <= daysInMonth; d++) {
    const dateDiv= document.createElement("div");
    dateDiv.textContent = d;
    dateDiv.classList.add("date");
    dates_grid.appendChild(dateDiv);
}