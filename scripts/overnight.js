window.onload=init;
function init(){
    const estimateButton=document.getElementById("estimateStayCostButton");
    estimateButton.onclick=calculatePriceQuote;
}

function getRoomRate(checkinDate, roomType) {
    const checkinMonth = new Date(checkinDate).getMonth(); // Get the month (0-11, where January is 0)

    // the room rate based on the check-in date
    if (checkinMonth >= 5 && checkinMonth <= 7) {
        // June (5), July (6), and August (7) have the higher rate
        return 250;
    } else {
        // Other months have the lower rate
        return 150;
    }
}


        function calculatePriceQuote() {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const checkinDate = document.getElementById("checkinDate").value;
            const nights = parseInt(document.getElementById("nights").value);
            const roomType = document.querySelector('input[name="roomType"]:checked').value;
            const adults = parseInt(document.getElementById("adults").value);
            const children = parseInt(document.getElementById("children").value);
            const discount = document.querySelector('input[name="discount"]:checked').value;

            const roomRate = getRoomRate(checkinDate, roomType);

            let discountPercent = 0;
            if (discount === "AAA/Senior") {
                discountPercent = 0.10; // 10%
            } else if (discount === "Military") {
                discountPercent = 0.20; // 20%
            }

            const originalCost = roomRate * nights;
            const discountAmount = discountPercent * originalCost;
            const discountedCost = originalCost - discountAmount;
            const taxAmount = 0.12 * discountedCost; // 12% tax
            const totalCost = discountedCost + taxAmount;

            // Display the price quote results
            const priceQuoteResult = document.getElementById("priceQuoteResult");
            document.getElementById("originalCost").innerText = originalCost.toFixed(2);
            document.getElementById("discountAmount").innerText = discountAmount.toFixed(2);
            document.getElementById("discountedCost").innerText = discountedCost.toFixed(2);
            document.getElementById("taxAmount").innerText = taxAmount.toFixed(2);
            document.getElementById("totalCost").innerText = totalCost.toFixed(2);
            priceQuoteResult.style.display = "block";
        }