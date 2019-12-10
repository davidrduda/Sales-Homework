function totalSales() {
    var sales = [];
    sales[0] = document.forms["DailySales"]["mon"].value;
    sales[1] = document.forms["DailySales"]["tue"].value;
    sales[2] = document.forms["DailySales"]["wed"].value;
    sales[3] = document.forms["DailySales"]["thu"].value;
    sales[4] = document.forms["DailySales"]["fri"].value;
    sales[5] = document.forms["DailySales"]["sat"].value;
    sales[6] = document.forms["DailySales"]["sun"].value;
    var total = 0;
    for (i = 0; i < sales.length; i++){
        total = total + Number(sales[i]);
    }
    document.getElementById("TotalSales").innerHTML = "Total sales for the week is "+total+".";
    return false;
}