let km = prompt("Numero km che si vogliono percorrere");
let eta = prompt("Inserire età");

if (isNaN(km) || isNaN(eta)) {
    document.getElementById("result").innerHTML ="l'input non è un numero valido";
}
else {
    if (eta < 120)  {

        let spesa = 0.21 * parseInt(km);
        let spesaFinale;
        if (eta < 18) {
            a = spesa * 20;
            b = a / 100;
            spesaFinale = spesa - b;
        }

        else if (eta > 64) {
            a = spesa * 40;
            b = a / 100;
            spesaFinale = spesa - b;
        }

        else {
            spesaFinale = spesa;
        }

        document.getElementById("result").innerHTML = spesaFinale.toFixed(2); 

    }

    else {
        
        document.getElementById("result").innerHTML = "L'età inserita è troppo alta "; 
    }
}