function chuyendoi() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromC == "VND"&& To == "USD"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (FromC == "VND"&& To == "Yen"){
        Result = "Result: "+ (Amount / 164.260) + " ¥";
    }
    else if (FromC == "Yen"&& To == "VND"){
        Result = "Result: "+ (Amount * 164.260) + " Đ";
    }
    else if (FromC == "Yen"&& To == "USD"){
        Result = "Result: "+ (Amount * 148.91) + " $";
    }
    else if (FromC == "USD"&& To == "Yen"){
        Result = "Result: "+ (Amount * 148.91) + " ¥";
    }
    else if (FromC == "VND" && To == "VND") {
        Result = "Result: " + Amount + " Đ"
    }
    else if (FromC == "Yen" && To == "Yen") {
        Result = "Result: " + Amount + " ¥"
    }
    else {
        Result = "Result: " + Amount + " $"
    }

    document.getElementById("Result").innerHTML = Result;
}
