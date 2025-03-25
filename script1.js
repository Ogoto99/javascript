function onSubmit (){
    alert("Form submitted successfully");
    return true;
}

function calculate(operator) {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
        result = 'Invalid input';
    } else {
        switch (operator) {
            case '+':
                result = input1 + input2;
                break;
                case '-':
                    result = input1 - input2;
                    break;
                    case '*':
                        result = input1 * input2;
                        break;
                        case '/':
                            result = input1 / input2;
                            break;
                            case '%':
                            result = input1 % input2;
                            break;
                        }
                    }
                    document.getElementById('result').value = result;
                }
