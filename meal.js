function placeOrder() {
    let meals = document.getElementsByName("meal");
    let selectedMeal = "";
    let price = 0;

    for (let i = 0; i < meals.length; i++) {
        if (meals[i].checked) {
            selectedMeal = meals[i].value;
            price = meals[i].getAttribute("data-price");
        }
    }

    if (selectedMeal === "") {
        document.getElementById("result").innerHTML =
            " Please select a meal first.";
    } else {
        document.getElementById("result").innerHTML =
            "Order Confirmed!<br>" +
            "Meal Selected: " + selectedMeal + "<br>" +
            "Total Amount: ₹" + price;
    }
}