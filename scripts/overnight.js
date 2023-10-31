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
        

        if(roomType==="Queen"){

            return 250;
        }
       else if(roomType==="King"){

            return 250;
        }
        else{
            return 350;
        }
    } else {
        // Other months have the lower rate
        
        if(roomType==="Queen"){

            return 150;
        }
       else if(roomType==="King"){

            return 150;
        }
        else{
            return 210;
        }
    }
}


        function calculatePriceQuote() {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const checkinDate = document.getElementById("checkinDate").value;
            const nights = parseInt(document.getElementById("nights").value);
            const roomType = document.querySelector('input[name="roomType"]:checked').value;
            console.log(roomType)
            const adults = parseInt(document.getElementById("adults").value);
            const children = parseInt(document.getElementById("children").value);
            const discount = document.querySelector('input[name="discount"]:checked').value;

         // Validate room type and number of guests
    let messageDiv = document.getElementById("message");
    messageDiv.innerText = "";

    if (
        (roomType === "Queen" && (adults + children) > 5) ||
        (roomType === "King" && (adults + children) > 2) ||
        (roomType === "2-Bedroom Suite" && (adults + children) > 6)
    ) {
        messageDiv.innerText = "The room you selected will not hold your party";
        return; 
    }
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

            // Generate the confirmation number
    const confirmationNumber = generateConfirmationNumber(name, checkinDate, nights, adults, children);

            // Display the price quote results
            const priceQuoteResult = document.getElementById("priceQuoteResult");
            document.getElementById("originalCost").innerText = originalCost.toFixed(2);
            document.getElementById("discountAmount").innerText = discountAmount.toFixed(2);
            document.getElementById("discountedCost").innerText = discountedCost.toFixed(2);
            document.getElementById("taxAmount").innerText = taxAmount.toFixed(2);
            document.getElementById("totalCost").innerText = totalCost.toFixed(2);
             // Display the confirmation number
    document.getElementById("confirmationNumber").textContent = confirmationNumber;
            priceQuoteResult.style.display = "block";

            // Function to generate the confirmation number
function generateConfirmationNumber(name, checkinDate, nights, adults, children) {
    // Extract the first three characters of the name
    const namePrefix = name.substring(0, 3).toUpperCase();

    // Extract the month and year from the check-in date
    //getUTCMonth returns months in 0-based index, we added 1 for human understanding purpose
    const checkinMonth = new Date(checkinDate).getUTCMonth() + 1; 
    const checkinYear = new Date(checkinDate).getUTCFullYear();

    // Format the month and year as MMYYYY
    // if checkinMonth is 5, it would become '05' thats why we have used padStart function
    const checkinDatePrefix = `${checkinMonth.toString().padStart(2, '0')}${checkinYear}`;

    // Create the confirmation number
    return `${namePrefix}-${checkinDatePrefix}-${nights}:${adults}:${children}`;
}
        }