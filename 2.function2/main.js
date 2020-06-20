function palindrome(message){
  // wirte your code here
  var reverseMes=message.split('').reverse().join('');
    if(reverseMes==message){
        return true;
    }else {
        return false;
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
