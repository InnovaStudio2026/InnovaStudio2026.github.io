
/* Código para mostrar el calendario por medio de un evento  - (NO MODIFICAR)*/
var btnHorario = document.getElementById('btn-horario');
var verHorario = document.getElementById('horario');
var verTitulohor = document.getElementById('titulo-horario');
var verArea = document.getElementById('c_area');
var verArea5 = document.getElementById('c_area5');

btnHorario.addEventListener('click', function() {
    verHorario.classList.toggle('mostrar');
    verTitulohor.classList.toggle('ver_clase1');
    verArea.classList.toggle('ver_area');
    verArea5.classList.toggle('ver_area5');
});

var btnHorario2 = document.getElementById('btn-horario2');
var verHorario = document.getElementById('horario');
/*var verEvento = document.getElementById('evento_act');*/
var verTitulohor = document.getElementById('titulo-horario');
var verArea = document.getElementById('c_area');
var verArea5 = document.getElementById('c_area5');

btnHorario2.addEventListener('click', function() {
    verHorario.classList.toggle('mostrar');
    /*verEvento.classList.toggle('ver');*/
    verTitulohor.classList.toggle('ver_clase1');
    verArea.classList.toggle('ver_area');
    verArea5.classList.toggle('ver_area5');
});

/*  Fin código mostrar calendario */

 
/* Función para seleccionar las áreas del día  */

function seleccionar_dia(c_dia) {
      
     /*  Ingresar enlaces por área  */
    /*  *********************************** (SE PUEDE MODIFICAR) *****************************  */
    /*Enlaces para la guía 1 */
    var myURL_mat = "matematicas.html";
    var myURL_nat = "naturales.html";
    var myURL_edufi = "edufisica.html";
    var myURL_leng = "lenguac.html";
    var myURL_agro = "agropecuarias.html";
    var myURL_infor = "infortec.html";
    var myURL_artis = "artistica.html";
    var myURL_soc = "sociales.html";
    var myURL_ingles = "ingles.html";
    var myURL_etica = "etica.html";
    var myURL_rel = "religion.html";
    /* Fin ingresar enlaces */

    /*  Matriz con las áreas - (NO MODIFICAR) */    
    var sel_area = []; sel_area[0] = 'Matemáticas'; sel_area[1] = 'C. Naturales'; sel_area[2] = 'EduFísica';
        sel_area[3] = 'L. Castellana'; sel_area[4] = 'C. Agropecuarias'; sel_area[5] = 'InforTec';
        sel_area[6] = 'Artística'; sel_area[7] = 'C. Sociales'; sel_area[8] = 'Ingles'; sel_area[9] = 'Ética';
        sel_area[10] = 'Religión'; sel_area[11] = '***'; sel_area[12] = 'App ColucApps';
    
    /*  Inserte el número de días y las áreas en cada clase  */
    /*  *********************************** (SE PUEDE MODIFICAR) *****************************  */
    var sel_dia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ];
    var sel_clase1 = ['Artística','C. Sociales', 'EduFísica','InforTec','Matemáticas','C. Sociales','Matemáticas', 
    'Religión','EduFísica','C. Agropecuarias','Artística','C. Sociales','EduFísica','InforTec','Matemáticas'];
    var sel_clase2 = ['C. Agropecuarias','L. Castellana','Matemáticas','C. Naturales','C. Sociales','L. Castellana','Ingles',
    'L. Castellana','Matemáticas','L. Castellana','C. Agropecuarias','L. Castellana','Matemáticas','C. Naturales','C. Sociales'];
    var sel_clase3 = [ 'Matemáticas','C. Naturales', 'Ética','L. Castellana','Ingles','Artística','C. Naturales',
    'C. Sociales','App ColucApps','C. Naturales','Matemáticas','C. Naturales','Ética','L. Castellana','Ingles'];
   
    /* Fin código insertar días y áreas */
    
        /*  Tenga en cuenta que el for viene para 25 días (0 a 24)  */
        /*  *********************************** (SE PUEDE MODIFICAR LA CANTIDAD DE DIAS) *****************************  */
     
        for (i=0; i<=14; i++) {
            
            if (c_dia == sel_dia[i]) {
                document.getElementById('btnClase'+c_dia).style.color= '#F45A05';
            /*  Selecciona el área de la clase 1 - (NO MODIFICAR)  */
            switch (sel_clase1[i]) {
                case sel_area[0]:
                  document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                  '<a href="' + myURL_mat + '">' + sel_clase1[i] + '</button>';
                    break;
                    case sel_area[1]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_nat + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[2]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_edufi + '">' + sel_clase1[i] + '</a>';
                    break
                    case sel_area[3]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_leng + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[4]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_agro + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[5]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_infor + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[6]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                             '<a href="' + myURL_artis + '">' + sel_clase1[i] + '</a>';
                    
                    break;
                    case sel_area[7]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_soc + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[8]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                      '<a href="' + myURL_ingles + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[9]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' +
                               '<a href="' + myURL_etica + '">' + sel_clase1[i] + '</a>';
                   
                    break;
                    case sel_area[10]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                    '<a href="' + myURL_rel + '">' + sel_clase1[i] + '</a>';
                    break;
                    case sel_area[11]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + '***';
                    break;
                    case sel_area[12]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 'App ColucApps';
                    break;
            }
            
            /*  Selecciona el área de la clase 2 - (NO MODIFICAR) */
            switch (sel_clase2[i]) {
            case sel_area[0]:
                document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_mat + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[1]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_nat + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[2]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_edufi + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[3]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_leng + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[4]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_agro + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[5]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_infor + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[6]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_artis + '">' + sel_clase2[i] + '</a>';
                
                break;
                case sel_area[7]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_soc + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[8]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_ingles + '">' + sel_clase2[i] + '</a>';
              
                break;
                case sel_area[9]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_etica + '">' + sel_clase2[i] + '</a>';
                
                break;
                case sel_area[10]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_rel + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[11]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + sel_clase2[i];
                break;
                case sel_area[12]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + sel_clase2[i];
                break;
        }
            
            
            /*  Selecciona el área de la clase 3 - (NO MODIFICAR)  */
            switch (sel_clase3[i]) {
                case sel_area[0]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_mat + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[1]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_nat + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[2]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_edufi + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[3]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_leng + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[4]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_agro + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[5]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_infor + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[6]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                               '<a href="' + myURL_artis + '">' + sel_clase3[i] + '</a>';
                    
                    break;
                    case sel_area[7]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_soc + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[8]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                     '<a href="' + myURL_ingles + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[9]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                              '<a href="' + myURL_etica + '">' + sel_clase3[i] + '</a>';
                    
                    break;
                    case sel_area[10]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                    '<a href="' + myURL_rel + '">' + sel_clase3[i] + '</a>';
                    break;
                    case sel_area[11]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + sel_clase3[i];
                    break;
                    case sel_area[12]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + sel_clase3[i];
                    break;
            }
        
        } 
         
    }

    for (i=10; i<=23; i++) {
            
        if (c_dia == sel_dia[i]) {
            document.getElementById('btnClase'+c_dia).style.color= '#F45A05';
        /*  Selecciona el área de la clase 1 - (NO MODIFICAR)  */
        switch (sel_clase1[i]) {
            case sel_area[0]:
              document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
              '<a href="' + myURL_mat2 + '">' + sel_area[0] + '</button>';
                break;
                case sel_area[1]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_nat2 + '">' + sel_clase1[i] + '</a>';
                break;
                case sel_area[2]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_edufi2 + '">' + sel_clase1[i] + '</a>';
                break
                case sel_area[3]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_leng2 + '">' + sel_clase1[i] + '</a>';
                break;
                case sel_area[4]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_agro2 + '">' + sel_clase1[i] + '</a>';
                break;
                case sel_area[5]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_infor2 + '">' + sel_clase1[i] + '</a>';
                break;
                case sel_area[6]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                           '<a href="' + myURL_artis2 + '">' + sel_clase1[i] + '</a>';
                
                break;
                case sel_area[7]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_soc2 + '">' + sel_clase1[i] + '</a>';
                break;
                case sel_area[8]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' +  
                         '<a href="' + myURL_ingles2 + '">' + sel_clase1[i] + '</a>';;
                
                break;
                case sel_area[9]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                          '<a href="' + myURL_etica2 + '">' + sel_clase1[i] + '</a>';
                
                break;
                case sel_area[10]:
                    document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + 
                '<a href="' + myURL_rel2 + '">' + sel_clase1[i] + '</a>';
                break;
                    case sel_area[11]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + sel_clase1[i];
                    break;
                    case sel_area[12]:
                        document.getElementById('c_area1').innerHTML = '7:00 - 8:50 a.m' + '<br>' + sel_clase1[i];
                    break;
        }
        
        /*  Selecciona el área de la clase 2 - (NO MODIFICAR) */
        switch (sel_clase2[i]) {
            case sel_area[0]:
                document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_mat2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[1]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_nat2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[2]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_edufi2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[3]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_leng2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[4]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_agro2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[5]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_infor2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[6]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                           '<a href="' + myURL_artis2 + '">' + sel_clase2[i] + '</a>';
                
                break;
                case sel_area[7]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_soc2 + '">' + sel_clase2[i] + '</a>';
                break;
                case sel_area[8]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                         '<a href="' + myURL_ingles2 + '">' + sel_clase2[i] + '</a>';
              
                break;
                case sel_area[9]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                          '<a href="' + myURL_etica2 + '">' + sel_clase2[i] + '</a>';
                
                break;
                case sel_area[10]:
                    document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + 
                '<a href="' + myURL_rel2 + '">' + sel_clase2[i] + '</a>';
                break;
                    case sel_area[11]:
                        document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + sel_clase2[i];
                    break;
                    case sel_area[12]:
                        document.getElementById('c_area2').innerHTML = '8:50 - 10:40 a.m' + '<br>' + sel_clase2[i];
                    break;
        }
        
        
        /*  Selecciona el área de la clase 3 - (NO MODIFICAR)  */
        switch (sel_clase3[i]) {
            case sel_area[0]:
                document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_mat2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[1]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_nat2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[2]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_edufi2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[3]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_leng2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[4]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_agro2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[5]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_infor2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[6]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                           '<a href="' + myURL_artis2 + '">' + sel_clase3[i] + '</a>';
                
                break;
                case sel_area[7]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_soc2 + '">' + sel_clase3[i] + '</a>';
                break;
                case sel_area[8]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                         '<a href="' + myURL_ingles2 + '">' + sel_clase3[i] + '</a>';
               
                break;
                case sel_area[9]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                          '<a href="' + myURL_etica2 + '">' + sel_clase3[i] + '</a>';
                
                break;
                case sel_area[10]:
                    document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + 
                '<a href="' + myURL_rel2 + '">' + sel_clase3[i] + '</a>';
                break;
                    case sel_area[11]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + sel_clase3[i];
                    break;
                    case sel_area[12]:
                        document.getElementById('c_area3').innerHTML = '11:10 - 1:00 a.m' + '<br>' + sel_clase3[i];
                    break;
        }
    
    } 
     
}
}

/*  Función para actualizar la página - (NO MODIFICAR) */
function refrescar() {
    location.reload(); 
}
/*  Fin función refrescar */
