fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Acceso a los datos de JSON
    console.log(data);

    // Acceso a los enlaces
    const enlaces = data.enlaces;
    enlaces.forEach(enlace => {
      const enlaceElement = document.createElement('a');
      enlaceElement.href = enlace.url;
      enlaceElement.textContent = enlace.texto;
      document.getElementById('enlaces').appendChild(enlaceElement);
    });

    //  Acceso a las redes
    const redes = data.redes;
    redes.forEach(rede => {
        const redeElement = document.createElement('a');
        redeElement.href = rede.url;
        redeElement.textContent = rede.nombre;
        document.getElementById('redes').appendChild(redeElement);
    });

    //  Implementación de las imágenes a partir de las id acá y allá
    const donde = document.querySelector("#aca");
            data.imagenes.forEach((x, i) => {
                donde.innerHTML +=
                    '<div class="col"><div class="card h-100 shadow-sm bg-light-subtle border-0"><img class="card-img-top" src="' +
                    x.img[0] +
                    '"><div class="card-body"><p class="card-title"><a href="#" onclick = "detalle(' +
                    i +
                    ')" class="text-decoration-none">' +
                    x.title +
                    "</a></p></div></div></div>";
            });
            const dondemas = document.querySelector("#alla");
            function detalle(nro) {
                let fotos = "";
                data[nro].img.forEach((f) => {
                    fotos += '<img class="w-100 my-3 rounded" src="' + f + '">';
                });
                dondemas.innerHTML =
                    '<section class="bg-body-tertiary"><div class="container pb-5"><div class="row"><div class="col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto"><h1 class="display-6 mt-5"><button type="button" class="btn btn-sm btn-outline-secondary shadow-sm mb-2 me-3 fw-bold" onClick="window.location.reload()">&larr; VOLVER</button> ' +
                    data[nro].title +
                    '</h1> <figure class="mb-2">' +
                    fotos +
                    "</figure>" +
                    data[nro].text +
                    "</div></div></div></section>";
            }

    //  Inclusión de los derechos reservados
    const derechosReservados = data.derechosReservados;
    
    const derecho = document.getElementById('derechosReservados');
    derecho.textContent = derechosReservados;

    // Catch de errores en caso de que no funcione el fetch
  })
  .catch(error => {
    console.log('Error al cargar el archivo JSON:', error);
  });