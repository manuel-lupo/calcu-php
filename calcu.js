const visor = document.querySelector(".visor");
let numActual = "";
let numeros = [];
const botones = document.querySelectorAll(".boton_calcu");
const form = document.querySelector("form");
window.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        form.submit();
    } else handleButton(`${e.key}`);
});
for (boton of botones) {
    let valor = boton.value;
    boton.addEventListener('click', () => {
        handleButton(valor);
    })
};

function esOperador(pressed) {
    if ((pressed == '^') || (pressed == '%') || (pressed == '/') || (pressed == '*') || (pressed == '-') || (pressed == '+') || (pressed == 'AC') || (pressed == ',') || (pressed == '.'))
        return true;
    return false;
}

function handleButton(pressed) {
    let resultado = visor.querySelector("#res");
    let num_visor = visor.querySelector(`.num_visor[name="numero[${numeros.length}]"]`);
    if (esOperador(pressed)) {
        //Si no es un numero
        if ((pressed !== 'AC') && (pressed !== ',')) {
            //Si es un operador
            if ((resultado !== null)) {
                visor.innerHTML = `
                <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="${resultado.innerHTML}" readonly>
                <input class="op_visor" name="op[${numeros.length}]" id="numero" value="${pressed}" readonly>
            `;
                numeros.push(resultado.innerHTML);
            } else if ((num_visor.value !== '') && (resultado == null)) {
                visor.innerHTML += `
                <input class="op_visor" name="op[${numeros.length}]" id="numero" value="${pressed}" readonly>
                `;
                numeros.push(numActual);
                numActual = "";
            }
        } else {
            if (pressed == 'AC') {
                numeros.length = 0;
                numActual = '';
                visor.innerHTML = `
                <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="" readonly>
                `;
                if ((resultado !== null))
                    visor.innerHTML = `
                    <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="" readonly>
                `;
            }
            if ((pressed == ',') || (pressed == '.')) {
                if ((resultado !== null) && !(resultado.innerHTML.includes('.'))) {
                    numActual = resultado.innerHTML;
                    visor.innerHTML = `
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
            visor.innerHTML = `
            <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="" readonly>
        `;
        numActual += `${pressed}`;
        num_visor = visor.querySelector(`.num_visor[name="numero[${numeros.length}]"]`);
        if (num_visor !== null) {
            num_visor.setAttribute('value', numActual)
        } else visor.innerHTML += `
        <input class="num_visor" name="numero[${numeros.length}]" id="numero" value="${pressed}" readonly>
        `;
    }

}
