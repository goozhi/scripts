const b_to_h = function (textBits) {//b_to_h
    textBits = textBits.replace(/\s/g, "");
    const arr_1 = new Array();
    const num_1 = (4 - textBits.length % 4) & 3;
    textBits = "0".repeat(num_1) + textBits;
    for (var index_1 = 0; index_1 < textBits.length; index_1 += 4) {
        arr_1.push(textBits.slice(index_1, index_1 + 4));
    }
    const text_result = arr_1.map(ele => menu(ele)).join('') || "0000"
    return text_result;
    function menu(chars) {
        switch (chars) {
            case "0000": return ("0");

            case "0001": return ("1");

            case "0010": return ("2");

            case "0011": return ("3");

            case "0100": return ("4");

            case "0101": return ("5");

            case "0110": return ("6");

            case "0111": return ("7");

            case "1000": return ("8");

            case "1001": return ("9");

            case "1010": return ("a");

            case "1011": return ("b");

            case "1100": return ("c");

            case "1101": return ("d");

            case "1110": return ("e");

            case "1111": return ("f");

        }
        return false;
    }
}//b_to_h
module.exports = b_to_h;