function alphabetSort(message){
  // wirte your code here
  var mes=message.split('')
    for(var i=0;i<mes.length;i++){
        for(var j=i+1;j<mes.length;j++){
            if(mes[i]>mes[j]){
                temp=mes[i];
                mes[i]=mes[j];
                mes[j]=temp;
            }
        }
    }
    return mes.join('');
}
alphabetSort('hello'); // should return 'ehllo'
