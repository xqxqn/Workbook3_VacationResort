function estimateStayCost() {
    var checkinDate = document.getElementById("checkinDate").value;
    var roomType = document.querySelector('input[name="roomType"]:checked').value;
    var nights = document.getElementById("nights").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var discountType = document.querySelector('input[name="discount"]:checked').value;

    var roomRate = getRoomRate(checkinDate, roomType);
    var totalWithoutDiscount = roomRate * nights;
    var discount = 0;

    if (discountType === "senior") {
        discount = totalWithoutDiscount * 0.10;
    } else if (discountType === "military") {
        discount = totalWithoutDiscount * 0.20;
    }

    var discountedCost = totalWithoutDiscount - discount;
    var tax = discountedCost * 0.12;
    var totalCost = discountedCost + tax;

    document.getElementById("originalCost").innerText = totalWithoutDiscount.toFixed(2);
    document.getElementById("discountAmount").innerText = discount.toFixed(2);
    document.getElementById("discountedCost").innerText = discountedCost.toFixed(2);
    document.getElementById("taxAmount").innerText = tax.toFixed(2);
    document.getElementById("totalCost").innerText = totalCost.toFixed(2);

    var messageDiv = document.getElementById("messageDiv");
    if ((roomType === "queen" && (parseInt(adults) + parseInt(children)) > 5) ||
        (roomType === "king" && (parseInt(adults) + parseInt(children)) > 2) ||
        (roomType === "suite" && (parseInt(adults) + parseInt(children)) > 6)) {
        messageDiv.innerText = "The room you selected will not hold your party";
    } else {
        messageDiv.innerText = "";
    }
    function getRoomRate(checkinDate, roomType) {
        var month = new Date(checkinDate).getMonth() + 1;
        var rate = 0;

        if (roomType === "queen") {
            if (month >= 6 && month <= 8) {
                rate = 250;
            } else {
                rate = 150;
            }
        } else if (roomType === "king") {
            if (month >= 6 && month <= 8) {
                rate = 250;
            } else {
                rate = 150;
            }
        } else if (roomType === "suite") {
            if (month >= 6 && month <= 8) {
                rate = 350;
            } else {
                rate = 210;
            }
        }

        return rate;
    }
}
