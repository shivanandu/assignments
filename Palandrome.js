function palindrome(name) {
    var i;
    var len = name.length;
    if (len % 2 != 0)
    {
        var k = (len - 1) / 2;
        for (i = (len - 1) / 2; i >= 0; i--) 
        {
            if (name[i] != name[k])
            {
                console.log("Not a palindrome");
                return;
            }
            else
                k++;
        }
        console.log("Hell Yeah..Its a Palindrome!!");
    }
    else
    {
        var k = (len / 2);
        for (i = (len/ 2)-1; i >= 0; i--) 
        {
            if (name[i] != name[k]) 
            {
                console.log("Not a palindrome");
                return;
            }
            else
            {
                k++;
            }
        }
        console.log("Hell Yeah..Its a Palindrome!!");
    }
}
palindrome("abccba");