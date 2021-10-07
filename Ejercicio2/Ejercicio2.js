//Ejercicio 2

let numero = (prompt("Ingrese la calificacion entre 1 y 10"))
if(numero == 9 || numero == 10){
 alert("Calificacion:" + " " + "Sobresaliente")
}else{
    if(numero == 8){
        alert("Calificacion:" + " " + "Notable")
    }else{
        if(numero == 7){
            alert("Calificacion:" + " " + "Bien")
        }else{
            if(numero == 6){
                alert("Calificacion:" + " " + "Suficiente")
            }else{
                if(numero<=5){
                    alert("Calificacion:" + " " + "Insuficiente")
                }
            }
        }
    }
}