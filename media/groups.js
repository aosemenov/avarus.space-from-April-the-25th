
// Группы объектов


var groups = [
        {
            name: "LOCATIONS",
            style: "islands#darkBlueCircleDotIcon",
            items: [
                {
                    center: [70.385555, 68.410034],
                    name: "1. Bovanenkovo (K. Ermokhina, 2005)",
                    ContentHeader:['<a >Bovanenkovo</a><br>' +
                        '<span class="description">(K. Ermokhina, 2005)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Bovanenkovo.png" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/bovanenkovo/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>95 plots'],
                    hint: ['<div class="map__hint">','Bovanenkovo','</div>']

                },
                {
                    center: [69.940898, 74.120638],
                    name: "2. Geophysics gas field (K. Ermokhina, 2012)",
                    ContentHeader:['<a >Geophysics gas field</a><br>' +
                        '<span class="description">(K. Ermokhina, 2012)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Geophysics%20gas%20field.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/geophysicsgasfield/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>7 plots'],
                    hint: ['<div class="map__hint">','Geophysics gas field','</div>']
                },
                {
                    center: [67.518008, 72.215525],
                    name: "3. Nakhodka bay (N. Koroleva, V. Zemlyanskiy, 2017)",
                    ContentHeader:['<a >Nakhodka bay</a><br>' +
                        '<span class="description">(N. Koroleva, <br/>V. Zemlyanskiy, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Nakhodka.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/nakhodkabay/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>151 plots'],
                    hint: ['<div class="map__hint">','Nakhodka bay','</div>']
                },
                {
                    center: [66.785619, 65.667947],
                    name: "4. Kharp (K. Ermokhina, 2011)",
                    ContentHeader:['<a>Kharp</a><br>' +
                        '<span class="description">(K. Ermokhina, 2011)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Kharp.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/kharp/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>73 plots'],
                    hint: ['<div class="map__hint">','Kharp','</div>']
                },
                {
                    center: [70.915123, 74.573152],
                    name: "5. Salma gas field (K. Ermokhina, 2012)",
                    ContentHeader:['<a>Salma gas field</a><br>' +
                        '<span class="description">(K. Ermokhina, 2012)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Salma.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/salmagasfield/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>14 plots'],
                    hint: ['<div class="map__hint">','Salma gas field','</div>']
                },{
                    center: [70.882294, 74.212226],
                    name: "6. Tasiyskoe gas field (K. Ermokhina, 2012)",
                    ContentHeader:['<a>Tasiyskoe gas field</a><br>' +
                        '<span class="description">(K. Ermokhina, 2012)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Tasiyskoe.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/tasiyskoegasfield/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>8 plots'],
                    hint: ['<div class="map__hint">','Tasiyskoe gas fiel','</div>']
                },
                {
                    center: [70.422641, 67.536934],
                    name: "7. Khalevto lake (K. Ermokhina, 2005)",
                    ContentHeader:['<a>Khalevto lake</a><br>' +
                        '<span class="description">(K. Ermokhina, 2005)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Khalevto.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/khalevtolake/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>214 plots'],
                    hint: ['<div class="map__hint">','Khalevto lake','</div>']
                },
                {
                    center: [72.726586, 72.455513],
                    name: "8. Obskaya Bay (K. Ermokhina, 2012)",
                    ContentHeader:['<a>Obskaya Bay</a><br>' +
                        '<span class="description">(K. Ermokhina, 2012)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Obskaya-Bay.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/obskayabay";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>6 plots'],
                    hint: ['<div class="map__hint">','Obskaya Bay','</div>']
                },
                {
                    center: [71.056877, 72.342354],
                    name: "9. South Tambey Gas field (K. Ermokhina, 2012)",
                    ContentHeader:['<a>South Tambey Gas field</a><br>' +
                        '<span class="description">(K. Ermokhina, 2012)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/South-Tambey-1.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/southtambeygasfield/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>21 plots'],
                    hint: ['<div class="map__hint">','South Tambey Gas field','</div>']
                },
                {
                    center: [70.233325, 68.905281],
                    name: "10. Vaskiny Dachi research station (K. Ermokhina, 2005)",
                    ContentHeader:['<a>Vaskiny Dachi research station</a><br>' +
                        '<span class="description">(K. Ermokhina, 2005)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Vaskiny-Dachi.JPG" height="170" width="240"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/vaskinydachiresearchstation/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>128 plots'],
                    hint: ['<div class="map__hint">','Vaskiny Dachi research station','</div>']
                },
                {
                    center: [68.425145, 70.106516],
                    name: "11. Southern Yamal (N. Koroleva, V. Zemlyanskiy, 2017)",
                    ContentHeader:['<a>Southern Yamal</a><br>' +
                        '<span class="description">(N. Koroleva,<br/> V. Zemlyanskiy, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Southern%20Yamal.png" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/southernyamal/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>153 plots'],
                    hint: ['<div class="map__hint">','Southern Yamal','</div>']
                },
                {
                    center: [70.215473, 70.752512],
                    name: "12. Neyto lake (N. Koroleva, V. Zemlyanskiy, 2017)",
                    ContentHeader:['<a>Neyto lake</a><br>' +
                        '<span class="description">(N. Koroleva,<br/> V. Zemlyanskiy, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Neyto_Lake.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/neytolake/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>154 plots'],
                    hint: ['<div class="map__hint">','Neyto lake','</div>']
                },
                {
                    center: [68.25547316047812,75.11965500802924],
                    name: "13. Tazovsky peninsula (O. Khitun, 2017)",
                    ContentHeader:['<a>Tazovsky peninsula</a><br>' +
                        '<span class="description">(O. Khitun, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/TAZOVSKY-PENINSULA.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/tazovskypeninsula/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>66 plots'],
                    hint: ['<div class="map__hint">','Tazovsky peninsula','</div>']
                },
                {
                    center: [68.936293, 49.238988],
                    name: "14. Kolguev island (Lavrinenko O. and I, 2001-2014)",
                    ContentHeader:['<a>Kolguev island</a><br>' +
                        '<span class="description">(Lavrinenko O. 2001-2014)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Kolguev-Island.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/kolguevisland/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>71 plots'],
                    hint: ['<div class="map__hint">','Kolguev island','</div>']
                },
                {
                    center: [68.439447, 57.414763],
                    name: "15. Bolshezemelskaya Tundra (Lavrinenko O. and I., 1998-2016)",
                    ContentHeader:['<a>Bolshezemelskaya Tundra</a><br>' +
                        '<span class="description">(Lavrinenko O. 1998-2016)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Bolshezemelskaya-1998.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/bolshezemelskayatundra/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>71 plots'],
                    hint: ['<div class="map__hint">','Bolshezemelskaya Tundra','</div>']

                },
                {
                    center: [68.290249, 70.826328],
                    name: "16. Myam (K. Ermokhina, 2012)",
                    ContentHeader:['<a>Myam</a><br>' +
                        '<span class="description">(K. Ermokhina, 2012)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Myam.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/myam/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>4 plots'],
                    hint: ['<div class="map__hint">','Myam','</div>']
                },
                {
                    center: [68.824266, 53.910127],
                    name: "17. Malozemelskaya Tundra (Lavrinenko O. and I., 2001-2007)",
                    ContentHeader:['<a>Malozemelskaya Tundra</a><br>' +
                        '<span class="description">(Lavrinenko O. 2001-2007)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Malozemelskaya-1.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/malozemelskayatundra/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>99 plots'],
                    hint: ['<div class="map__hint">','Malozemelskaya Tundra','</div>']
                },
                {
                    center: [68.513679, 57.369997],
                    name: "18. Bolshezemelskaya Tundra (Lavrinenko O. and I., 2015-2016)",
                    ContentHeader:['<a>Bolshezemelskaya Tundra</a><br>' +
                        '<span class="description">(Lavrinenko O. 2015-2016)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Bolshezemelskaya-2015.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/bolshezemelskayatundraa/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>136 plots'],
                    hint: ['<div class="map__hint">','Bolshezemelskaya Tundra','</div>']
                },
                {
                    center: [70.098669, 75.602091],
                    name: "19. Parisento lake (G-4) (O. Khitun, 2017)",
                    ContentHeader:['<a>Parisento lake (G-4)</a><br>' +
                        '<span class="description">(O. Khitun, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Parisento-Lake.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/parisentolake/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>120 plots'],
                    hint: ['<div class="map__hint">','Parisento lake (G-4)','</div>']
                },
                {
                    center: [69.948689, 78.839213],
                    name: "20. Tanama river (G-3) (O. Khitun, 2017)",
                    ContentHeader:['<a>Tanama river (G-3)</a><br>' +
                        '<span class="description">(O. Khitun, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Tanama.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/tanamariver/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>108 plots'],
                    hint: ['<div class="map__hint">','Tanama river (G-3)','</div>']
                },
                {
                    center: [72.562055, 70.294046],
                    name: "21. Northern Yamal (K. Ermokhina, M. Telyatnikov, E. Troeva, 2017)",
                    ContentHeader:['<a>Northern Yamal</a><br>' +
                        '<span class="description">(K. Ermokhina, M. Telyatnikov,<br/> E. Troeva, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Northern-Yamal.JPG" height="150" width="200"> <br/> ' +
                        '<br/>  <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/northernyamal/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>105 plots'],
                    hint: ['<div class="map__hint">','Northern Yamal','</div>']

                },
                {
                    center: [71.222227, 79.215493],
                    name: "22. Yambuto lake (G-1) (K. Ermokhina, M. Telyatnikov, E. Troeva, 2017)",
                    ContentHeader:['<a>Yambuto lake (G-1)</a><br>' +
                        '<span class="description">(K. Ermokhina, M. Telyatnikov,<br/> E. Troeva, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Yambuto-G-1.JPG" height="150" width="200"> <br/> ' +
                        '<br/>  <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/yambutolake/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>150 plots'],
                    hint: ['<div class="map__hint">','Yambuto lake (G-1)','</div>']

                },
                {
                    center: [68.857949, 66.675973],
                    name: "23. Baidara Bay (V. Zemlyanskiy, 2018)",
                    ContentHeader:['<a>Baidara Bay</a><br>' +
                        '<span class="description">(V. Zemlyanskiy, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Baidarata-River.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/baidarabay/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>80 plots'],
                    hint: ['<div class="map__hint">','Baidara Bay','</div>']

                },
                {
                    center: [67.521294, 67.079298],
                    name: "24. Polar Ural foothills (O. Khitun, 2018)",
                    ContentHeader:['<a>Polar Ural foothill</a><br>' +
                        '<span class="description">(O. Khitun, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/POLAR-URAL-FOOTHILLS.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/polaruralfoothills/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>100 plots'],
                    hint: ['<div class="map__hint">','Polar Ural foothill','</div>']
                },
                {
                    center: [66.986615, 66.772230],
                    name: "25. Polar Urals (O. Khitun, 2018)",
                    ContentHeader:['<a>Polar Urals</a><br>' +
                        '<span class="description">(O. Khitun, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Polar-Urals.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/polarurals/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>137 plots'],
                    hint: ['<div class="map__hint">','Polar Urals','</div>']
                },
                {
                    center: [71.943326, 78.713820],
                    name: "26. Northern Gydan (G-2) (K. Ermokhina, M. Telyatnikov, E. Troeva, 2017)",
                    ContentHeader:['<a>Northern Gydan (G-2) </a><br>' +
                        '<span class="description">(K. Ermokhina, M. Telyatnikov,<br/> E. Troeva, 2017)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/NORTHERN-GYDAN-G-2.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/northerngydan/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>150 plots'],
                    hint: ['<div class="map__hint">','Northern Gydan (G-2) ','</div>']
                },
                {
                    center: [68.438288, 66.310533],
                    name: "27. Polar Ural (4) (M. Telyatnikov, E. Kudr, 2018)",
                    ContentHeader:['<a>Polar Ural (4)</a><br>' +
                        '<span class="description">(M. Telyatnikov, E. Kudr, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Polar-Ural-4.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/polarural4/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>- plots'],
                    hint: ['<div class="map__hint">','Polar Ural (4)','</div>']
                },
                {
                    center: [67.369392, 65.314073],
                    name: "28. Polar Ural (3) (M. Telyatnikov, E. Kudr, 2018)",
                    ContentHeader:['<a>Polar Ural (3)</a><br>' +
                        '<span class="description">(M. Telyatnikov, E. Kudr, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Polar-Ural-3.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/polarural3/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>- plots'],
                    hint: ['<div class="map__hint">','Polar Ural (3)','</div>']
                },
                {
                    center: [67.136795, 65.902390],
                    name: "29. Polar Ural (2) (M. Telyatnikov, E. Kudr, 2018)",
                    ContentHeader:['<a>Polar Ural (2)</a><br>' +
                        '<span class="description">(M. Telyatnikov, E. Kudr, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Polar-Ural-2.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/polarural2/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>- plots'],
                    hint: ['<div class="map__hint">','Polar Ural (2)','</div>']
                },
                {
                    center: [66.865448, 65.215196],
                    name: "30. Polar Ural (1) (M. Telyatnikov, E. Kudr, 2018)",
                    ContentHeader:['<a>Polar Ural (1)</a><br>' +
                        '<span class="description">(M. Telyatnikov, E. Kudr, 2018)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Polar-Ural-1.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/polarural1/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>- plots'],
                    hint: ['<div class="map__hint">','Polar Ural (1)','</div>']
                },
                {
                    center: [67.556653, 51.913595],
                    name: "31. Dedov dataset (A. Dedov, 1928-1939)",
                    ContentHeader:['<a>Dedov dataset</a><br>' +
                        '<span class="description">(A. Dedov, 1928-1939)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Dedov.jpg" height="250" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/dedovdataset/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>189 plots'],
                    hint: ['<div class="map__hint">','Dedov dataset','</div>']
                },
                {
                    center: [67.766852, 34.000134],
                    name: "32. Kola peninsula dataset (Natalia Koroleva and Ekaterina Kopeina, 1987-2015)",
                    ContentHeader:['<a>Kola peninsula dataset</a><br>' +
                        '<span class="description">(Natalia Koroleva,</br>Ekaterina Kopeina, 1987-2015)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Anthoxantho%20alpini).jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/kolapeninsuladataset/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>101 plots'],
                    hint: ['<div class="map__hint">','Kola peninsula dataset','</div>']
                },
                {
                    center: [78.271053, 103.159209],
                    name: "33. Bolshevik island (N. Matveeva, 1997-2000)",
                    ContentHeader:['<a>Bolshevik island</a><br>' +
                        '<span class="description">(N. Matveeva, 1997-2000)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Bolshevik_Lagernaya.jpg" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/bolshevik-island/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>158 plots'],
                    hint: ['<div class="map__hint">','Bolshevik island','</div>']

                },
                {
                    center: [75.542377, 105.377932],
                    name: "34. Taymyr dataset (Elena and Igor Pospelovy)",
                    ContentHeader:['<a>Taymyr dataset</a><br>' +
                        '<span class="description">(Elena and Igor Pospelovy)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Photonone.png" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/taymyr/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>470 plots'],
                    hint: ['<div class="map__hint">','Taymyr dataset','</div>']
                },
                {
                    center: [70.768143, 149.118690],
                    name: "35. Indigirka dataset (Mikhail Telyatnikov and Elena Troeva)",
                    ContentHeader:['<a>Indigirka dataset</a><br>' +
                        '<span class="description">(Mikhail Telyatnikov, Elena Troeva)</span><hr class="hr1"/>'],
                    ContentBody:['<a href="#">\n' + '\n' + 'Location Map</a><br/>' + '<img src="../media/pictures/Indigirka.JPG" height="150" width="200"> <br/> ' +
                        '<br/> <a id="btn1" type="button" class="btn btn-info"  href=\'javascript: document.location.href = "/indigirka-dataset/";\' style="color:white">Open</a>',],
                    ContentFooter:['Number of Plots:<br/>133 plots'],
                    hint: ['<div class="map__hint">','Indigirka dataset','</div>']
                }
            ]},

    ];