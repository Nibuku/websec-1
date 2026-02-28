function calc() {
    const elem_1=document.getElementById('number_1');
    const elem_2=document.getElementById('number_2');
    const operator=document.getElementById('operator');

    const result_field=document.getElementById('result');

    if (!elem_1|| !elem_2 || !operator) {
        console.error("Не все поля заполнены")
        return;
    }

    const val_1=parseFloat(elem_1.value);
    const val_2=parseFloat(elem_2.value);
    const operation= operator.value;

    let result;
    switch (operation) {
        case "+":
            result=val_1+val_2;
            break;
        case "-":
            result=val_1-val_2;
            break;  
        case "*":
            result=val_1*val_2;
            break;
        case "/":
            if(val_2===0){
                result_field.value="Деление на ноль";
                return
            }
            result=val_1/val_2;
            break;
        
    }
    result_field.value=`${val_1}${operation}${val_2}=${result}`;

}