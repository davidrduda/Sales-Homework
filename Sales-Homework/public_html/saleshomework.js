function totalSales() {
    var sales = [document.forms["DailySales"]["sales"].value];
    if (isNaN(sales)) {
        alert("Please enter only numeric values.");
    }
    else {
        var dailySales = document.forms["DailySales"]["sales"].value;
        for (i = 0; i < 7; i++){
            sales[i] = document.forms["DailySales"]["sales"].value;
            sales.push(Number(document.forms["DailySales"]["sales"].value));
        }
        var total = 0;
        for (i = 0; i < sales.length; i++){
            total = total + sales[i];
        }
        var display = document.getElementById("TotalSales").innerHTML = "Total sales for the week is "+total+".";
    }
    return false;
}