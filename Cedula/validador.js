


window.addEventListener("load", function () {
    cedula.addEventListener("keypress", soloNumeros, false);
  });
  
  //Solo permite introducir numeros.
  function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }
  
  function valida(cedula) {
    cedula = document.getElementById("cedula").value;
    c = cedula.split("");
    v = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    var result = 0;
    var ar;
    var up;
    var oc;
    for (i = 0; i < 10; i++) {
      up = c[i] * v[i];
      ab = up;
      if (ab >= 10) {
        oc = ab
          .toString()
          .split("")
          .map((x) => parseInt(x))
          .reduce((x, y) => x + y);
      } else {
        oc = ab;
      }
      result = parseFloat(result) + parseFloat(oc);
    }
    dp = result;
    ac = dp.toString().split("")[0] + "0";
    ac = parseInt(ac);
    uj = (ac / 10) * 10;
    if (uj < dp) {
      dp = uj + 10 - dp;
    }
  
    if (c[10] == dp) {
      // document.getElementById("result").innerHTML = "<p> Cedula Correcta </p>";
      window.alert("Cedula correcta");
      

    } else {
      //document.getElementById("result").innerHTML = "<p> Cedula Incorrecta </p>";
      window.alert('Cedula incorrecta...')
    }
  }