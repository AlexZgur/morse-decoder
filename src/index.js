const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    var decodedStr = '';
    for (var i = 0; i < expr.length; i+=10) {
        var decimalChar = expr.substr(i, 10);        
        if (decimalChar[0]=='*') {
            decodedStr += ' ';
        } else {
            var dashDotChar='';
            while (decimalChar.length>0) {
                switch (decimalChar.substr(0, 2)){
                    case '10':dashDotChar+='.'; break;
                    case '11':dashDotChar+='-';
                }                
                decimalChar=decimalChar.slice(2);
            }             
            decodedStr += MORSE_TABLE[dashDotChar];
        }
    }  
    return decodedStr;
}

module.exports = {
    decode
}