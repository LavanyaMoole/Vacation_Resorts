// JavaScript to toggle content based on selected option
const payAsYouGoInfo = document.getElementById("payAsYouGoInfo");
const allInclusiveInfo = document.getElementById("allInclusiveInfo");


const payAsYouGoButton=document.getElementById("payAsYouGoButton");
const allInclusiveButton=document.getElementById("allInclusiveButton");
// Add change event listeners to the radio buttons
payAsYouGoButton.addEventListener("change", function() {
    if (payAsYouGoButton.checked) {
        payAsYouGoInfo.style.display = "block";
        allInclusiveInfo.style.display = "none";
    }
});

allInclusiveButton.addEventListener("change", function() {
    if (allInclusiveButton.checked) {
        payAsYouGoInfo.style.display = "none";
        allInclusiveInfo.style.display = "block";
    }
});


const calculateDiningCostButton=document.getElementById("calculateDiningCost");


calculateDiningCostButton.addEventListener("click",function(){
    let diningCostResult=document.getElementById("diningCostResult");
    const confirmationNumber=document.getElementById("confirmationNumber").value;

    diningCost=calculateDiningCost(confirmationNumber);
    console.log(diningCost.toFixed(2))
    document.getElementById("diningCostResult").innerText=`The all-inclusive option has been added to your reservation. The price of your stay has increased by $${diningCost.toFixed(2)} based on your selections here.`
})
function calculateDiningCost(confirmationNumber){
    const basic=document.getElementById("basic");
    const Premium=document.getElementById("Premium");
    const parts = confirmationNumber.split(':');
    let adultRate;
    let childrenRate;
    if(basic.checked){
        adultRate=62.50;
        childrenRate=49.99;
    }
    else{
        adultRate=80.00;
        childrenRate=49.99; 
    }

    // Extract the values
    const numberOfDays =parseFloat( parts[0].substring(parts[0].length-1,parts[0].length));
    const numberOfAdults = parseFloat(parts[1]);
    const numberOfChildren = parseFloat(parts[2]);
    
    console.log("Number of Days:", numberOfDays);
    console.log("Number of Adults:", numberOfAdults);
    console.log("Number of Children:", numberOfChildren);

    diningCost=(numberOfDays*numberOfAdults*adultRate)+(numberOfDays*numberOfChildren*childrenRate);

    return diningCost;
    
}