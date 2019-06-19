<?php

function calc($a,$b,$c)
{
    if($a === 0) {
        return "não pode ser zero.";
    }

    $delta = pow($b,2) - ((4*$a)*$c);
    
    if($delta === 0){
        $raiz = -($b)/(2*$a);
        return "Delta igual a zero. Raiz:".$raiz;
    }

    if($delta > 0) {
    $x1 = (-$b + sqrt($delta))/(2*$a);
    $x2 = (-$b - sqrt($delta))/(2*$a);
    $raiz = array($x1, $x2);
    return "Raizes: " .$raiz[0]. "," .$raiz[1];
    }

    return "Equação sem solução.";

}