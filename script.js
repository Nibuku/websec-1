function calc() {

    const elem_1=document.getElementById('number_1');
    const elem_2=document.getElementById('number_2');
    const operator=document.getElementById('operator');

    const resultOld = document.querySelector(".result-old");
    const resultNew = document.querySelector(".result-new");

    const error_field   = document.getElementById('error');

    const val_1=parseFloat(elem_1.value);
    const val_2=parseFloat(elem_2.value);
    const operation= operator.value;

    error_field.textContent = '';

    if (isNaN(val_1) || isNaN(val_2)) {
        error_field.textContent = "Введите числа";
        return;
    }

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
                error_field.textContent ="Деление на ноль";
                return
            }
            result=val_1/val_2;
            break;  
    }
    resultOld.textContent = resultNew.textContent;
    resultNew.textContent = `${val_1} ${operation} ${val_2} = ${result}`;
}