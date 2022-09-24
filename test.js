function reverseNumber() {

    let digit = 12345;
    let reverse = 0;
    let n = 0
    while (n < 5) {
        digit = n % 10
        reverse = reverse * 10 + digit
    }
    return reverse

}
