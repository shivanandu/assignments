function Fibanacci(digit) {
    var a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (var i = 2; i <= digit; i++) {
        var sum = a + b;
        console.log(sum);
        a = b;
        b = sum;  
    }
}
Fibanacci(10);
Fibanacci(9);