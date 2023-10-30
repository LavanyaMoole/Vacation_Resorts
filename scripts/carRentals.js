window.onload=function init(){

    const estimateButton=document.getElementById("estimateButton");
    estimateButton.onclick=estimateButtonClicked;
}

function estimateButtonClicked(){
    const rental={};
    rental.perDayRent=29.99;
    rental.options=0;
    rental.surcharge=0;
    //get rental details
    rental.pickUpDate= document.getElementById("pickUpdate").value;
     rental.numberOfDays= Number(document.getElementById("numberofdays").value);
     rental.carRent=rental.perDayRent*(rental.numberOfDays);
     console.log(rental.carRent)
     //get options from checkboxes(options)
    const electronicTollTag=document.getElementById("electronicTollTag");
   const gps= document.getElementById("GPS");
    const roadsideAssistance=document.getElementById("roadsideAssistance");
    rental.hasTollTag=electronicTollTag.checked;
    rental.hasGps=gps.checked;
    rental.hasRoadsideAssistance=roadsideAssistance.checked;
    if(rental.hasTollTag) {
        rental.tollTagPrice=(rental.numberOfDays)*3.95;
        rental.options+=rental.tollTagPrice;
       
    }
    if(rental.hasGps){

        rental.gpsPrice=(rental.numberOfDays)*2.95;
        rental.options+=rental.gpsPrice;
        
        
    }

    if(rental.hasRoadsideAssistance){

        rental.roadsideAssitancePrice=(rental.numberOfDays)*2.95;
        rental.options+=rental.roadsideAssitancePrice;
        
        
    }
    //get options from radio buttons(under 25)

    const no=document.getElementById("no");
    const yes=document.getElementById("yes");
    rental.hasSelectedNo=no.checked;
    rental.hasSelectedYes=yes.checked;
    if(rental.hasSelectedNo){
        rental.surcharge= +((0.3)*rental.carRent).toFixed(2);
        
    }
    else {
        rental.surcharge;
    }

    rental.Total= (rental.carRent+rental.options+rental.surcharge).toFixed(2);
    displyRentalDeatil(rental);

}

function displyRentalDeatil(rental){
    const table=document.getElementById("table");

document.getElementById("carRentalPrice").innerText=rental.carRent;

document.getElementById("optionsPrice").innerText=rental.options.toFixed(2);
document.getElementById("under25Price").innerText=rental.surcharge;
document.getElementById("rentalTotalPrice").innerText=rental.Total;
table.style.display = "block";
}