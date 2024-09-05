const crypto = require('crypto');
function DesiredHash(transaction){
    let number =0 ;
    // Converting the Transection to the String
    let transString = ""
    for (let i=0;i<transaction.length;i++){
        transString += transaction[i][0]+"To"+transaction[i][1]+"OF"+transaction[i][2];
        if (i+1 != transaction.length){
            transString+="And"
        }
        }
    hash = crypto.createHash('sha256').update(number+transString).digest('hex');
    let condition = hash.startsWith("00000")
    while(!condition){
        number+=1;
        hash = crypto.createHash('sha256').update(number+"").digest('hex');
        condition = hash.startsWith("00000")
    }
    console.log(hash)
}
let transactions = [["Dev","Karan",100],["Karan","Darsh",10]]
DesiredHash(transaction)
