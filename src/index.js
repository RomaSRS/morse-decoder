const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const result = expr.split('**********').map(item => 
        [...item]
        .map((el, idx)=> {
            if((idx + 1) % 10 === 0 && idx) {
                return el + ' ';
            } else return el;
        })
        .join('')
        .split(' ')
        .filter(el => el !== '')
        .map(el => 
            (+el + '').replace(/10/g, '.')
            .replace(/11/g, '-')
        )
        .map(el => MORSE_TABLE[el])
        .join('')
    ).join(' ');
    return result;
}

module.exports = {
    decode
}