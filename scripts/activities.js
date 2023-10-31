   // JavaScript to show the selected category's activities
   const activityCategory = document.getElementById("activityCategory");
   const artsCraftsList = document.getElementById("artsCraftsList");
const adventureList = document.getElementById("adventureList");
const museumsCultureList = document.getElementById("museumsCultureList");
   const activityLists = document.querySelectorAll(".activity-list");

   activityCategory.addEventListener("change", function() {
    const selectedCategory = activityCategory.value;
    
    // Hide all lists
    artsCraftsList.style.display = "none";
    adventureList.style.display = "none";
    museumsCultureList.style.display = "none";

    // Show the selected category's list
    document.getElementById(selectedCategory + "List").style.display = "block";
});