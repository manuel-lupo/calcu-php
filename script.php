<?php
function imprimirResultado(){
    $resultado = 0;
    $numeros = $_POST['numero'];
    $operadores = $_POST['op'];
    for ($i=0; $i < count($operadores); $i++) { 
            //Recorro los operadores y resuelvo operaciones complejas
            if(($operadores[$i] == '^')or($operadores[$i] == '%')or($operadores[$i] == '*')or($operadores[$i] == '/')){
                //Para estas operaciones guardo el resultado en el numero mas cercano a un operador simple, y doy un valor sin sentido al segundo factor
                //luego, cuando el indice corresponde con un elemento 'nn' retrocedo el indice hasta el primer numero detras de el (Que es el resultado de la ultima operacion de este tipo realizada)
                $indice_num = $i;
                while($numeros[$indice_num] == 'nn')
                            $indice_num--;
                switch ($operadores[$i]) {
                    case '^':
                        $numeros[$indice_num] = pow($numeros[$indice_num], $numeros[$i + 1]);
                        $numeros[$i + 1] = 'nn';
                        break;
                    case '%':
                        $numeros[$indice_num] = $numeros[$indice_num] * ($numeros[$i + 1]/100);
                        $numeros[$i + 1] = 'nn';
                        break;
                    case '*':
                        $numeros[$indice_num] = $numeros[$indice_num] * $numeros[$i + 1];
                        $numeros[$i + 1] = 'nn';
                        break;
                    case '/':
                        $numeros[$indice_num] = $numeros[$indice_num] / $numeros[$i + 1];
                        $numeros[$i + 1] = 'nn';
                        break;
                }
            }
        }
        //Inicio el resultado y solo hago sumas y restas
        $resultado = $numeros[0];
        for ($i=0; $i <count($numeros) ; $i++) { 
            $indice_num = $i+1;
            while($numeros[$indice_num]  == 'nn')
                $indice_num++;
            if ($indice_num < count($numeros))
                if ($operadores[$i] == '+')
                    $resultado += $numeros[$indice_num];
                else if ($operadores[$i] == '-')
                    $resultado -= $numeros[$indice_num];
        }
    echo "<h2 id='res'>$resultado</h2>";
}
