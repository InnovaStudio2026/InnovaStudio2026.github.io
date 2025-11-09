/*  Código para capturar la fecha actual - (NO MODIFICAR)  */

var d = new Date();
var fecha_mostrar =
  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
var dia = d.getDate();
var mes = d.getMonth() + 1;
var anio = d.getFullYear();
var horai = d.getHours();
var mini = d.getMinutes();
var segi = d.getSeconds();
var mensaje_texto;
fecha_instala();

/* Ingresar los eventos en el orden de: Día - Mes - Mensaje (Máximo 3 eventos en el día)*/
/*  *********************************** (SE PUEDE MODIFICAR) *****************************  */
var fdia = [1, 23];
var fmes = [9, 8];
var mensaje1 = [
  "Cumpleaños del profesor Carlos Roldán Moreno",
  "Inicio del Tercer Período",
];
/* Fin ingresar los eventos*/

/*  Mostrar la fecha actual  en eventos con el mes en texto - (NO MODIFICAR)*/
var mes_texto = [];
mes_texto[0] = "Enero";
mes_texto[1] = "Febrero";
mes_texto[2] = "Marzo";
mes_texto[3] = "Abril";
mes_texto[4] = "Mayo";
mes_texto[5] = "Junio";
mes_texto[6] = "Julio";
mes_texto[7] = "Agosto";
mes_texto[8] = "Septiembre";
mes_texto[9] = "Octubre";
mes_texto[10] = "Noviembre";
mes_texto[11] = "Diciembre";
for (i = 1; i <= 11; i++) {
  switch (mes) {
    case i:
      var mensaje_texto =
        "Eventos del " + (dia + "/" + mes_texto[i - 1] + "/" + anio + ":\n");
      break;
  }
}

/*  Código para mostrar la fecha actual - (NO MODIFICAR)  */
var cant = fmes.length;
var cont = 0;
for (i = 0; i < cant; i++) {
  if (mes == fmes[i] && dia == fdia[i]) {
    cont = cont + 1;
    var mensaje_texto = mensaje_texto + mensaje1[i] + "\n";
  }
}

/*  Fin código captura fecha */

var mostrar_validar = localStorage.getItem("validar" + dia + mes);
while (!mostrar_validar) {
  if (cont > 0) {
    alert(mensaje_texto);
    localStorage.setItem("validar" + dia + mes, 1);
  }
  break;
}

/* ***************** Función botón eventos ******************** */

function funcion_eventos() {
  if (cont != 0) {
    alert(mensaje_texto);
  } else {
    alert("No hay eventos");
  }
}

/* *************** Función horario instalación de la apk  *******************    */

function fecha_instala() {
  var val_fecha = localStorage.getItem("fecha_instalar");
  while (!val_fecha) {
    localStorage.setItem("fecha_instalar", 1);
    localStorage.setItem("f_dia", dia);
    localStorage.setItem("f_mes", mes);
    localStorage.setItem("f_anio", anio);
    localStorage.setItem("f_hora", horai);
    localStorage.setItem("f_min", mini);
    localStorage.setItem("f_seg", segi);
    break;
  }
}
