const OPERADORES = ['^','%','/','*','-','+','AC',',','.'];
const FORM = document.querySelector("form");
const BOTONES= document.querySelectorAll(".boton_calcu");
const VISOR = document.querySelector(".visor");
let numActual = "";
let numeros = [];
window.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        FORM.submit();
    } else handleButton(`${e.key}`);
});
for (boton of BOTONES) {
    let valor = boton.value;
    boton.addEventListener('click', () => {
        handleButton(valor);
    })
};


function handleButton(pressed) {
    let resultado = VISOR.querySelector("#res");
    let num_visor = VISOR.querySelector(`.num_visor[name="numero[${numeros.length}]"]`);
    if (OPERADORES.includes(pressed)) {
        //Si no es un numero
        if ((pressed !== 'AC') && (pressed !== ',')) {
            //Si es un operador
            if ((resultado !== null)) {
                VISOR.innerHTML = `
                <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="${resultado.innerHTML}" readonly>
                <input class="op_visor" name="op[${numeros.length}]" id="numero" value="${pressed}" readonly>
            `;
                numeros.push(resultado.innerHTML);
            } else if ((num_visor.value !== '') && (resultado == null)) {
                VISOR.innerHTML += `
                <input class="op_visor" name="op[${numeros.length}]" id="numero" value="${pressed}" readonly>
                `;
                numeros.push(numActual);
                numActual = "";
            }
        } else {
            if (pressed == 'AC') {
                numeros.length = 0;
                numActual = '';
                VISOR.innerHTML = `
                <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="" readonly>
                `;
                if ((resultado !== null))
                    VISOR.innerHTML = `
                    <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="" readonly>
                `;
            }
            if ((pressed == ',') || (pressed == '.')) {
                if ((resultado !== null) && !(resultado.innerHTML.includes('.'))) {
                    numActual = resultado.innerHTML;
                    VISOR.innerHTML = `
                        <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="${resultado.innerHTML}" readonly>
                    `;
                }
                if ((!numActual.includes('.')) && (resultado == null)) {
                    numActual += '.'
                    num_visor.setAttribute('value', numActual);
                }
            }
        }
        return;
        //Sale y no hace las expresiones si es un numero
    }
    if ((parseInt(pressed) < 10) && (parseInt(pressed) >= 0)) {
        //Checkeo que este entre los digitos por añadir el soporte para el teclado
        if ((resultado !== null))
            VISOR.innerHTML = `
            <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="" readonly>
        `;
        numActual += `${pressed}`;
        num_visor = VISOR.querySelector(`.num_visor[name="numero[${numeros.length}]"]`);
        if (num_visor !== null) {
            num_visor.setAttribute('value', numActual)
        } else VISOR.innerHTML += `
        <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="${pressed}" readonly>
        `;
    }

}
