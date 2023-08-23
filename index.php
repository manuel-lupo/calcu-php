<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CALCLULADORA</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>CALCULADORA</h1>
    <form action="index.php" method="post">
        <div class="calcu">
            <div class="visor">
                <?php
                    require_once 'script.php';
                    if((isset($_POST['numero'])) and (isset($_POST['op'])))
                        imprimirResultado();
                    else echo '<input class="num_visor" name="numero[0]" id="numero" value="" readonly>';
                ?>
            </div>
            <div class="numeros">
                <button class="boton_calcu" value="AC" type="button">AC</button>
                <button class="boton_calcu" value="^" type="button">^</button>
                <button class="boton_calcu" value="%" type="button">%</button>
                <button class="boton_calcu" value="/" type="button">/</button>
                <button class="boton_calcu" value="7" type="button">7</button>
                <button class="boton_calcu" value="8" type="button">8</button>
                <button class="boton_calcu" value="9" type="button">9</button>
                <button class="boton_calcu" value="*" type="button">X</button>
                <button class="boton_calcu" value="4" type="button">4</button>
                <button class="boton_calcu" value="5" type="button">5</button>
                <button class="boton_calcu" value="6" type="button">6</button>
                <button class="boton_calcu" value="-" type="button">-</button>
                <button class="boton_calcu" value="1" type="button">1</button>
                <button class="boton_calcu" value="2" type="button">2</button>
                <button class="boton_calcu" value="3" type="button">3</button>
                <button class="boton_calcu" value="+" type="button">+</button>
                <button class="boton_calcu" value="0" type="button">0</button>
                <button class="boton_calcu" value="00" type="button">00</button>
                <button class="boton_calcu" value="," type="button">,</button>
                <button class="boton_sumbit" type="sumbit">=</button>
            </div>
        </div>
    </form>
    <script src="calcu.js"></script>
</body>
</html>