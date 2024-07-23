
import PadronElectoral2022 from "./Padron2022.js";

window.onload = function() 
{
    console.log("andando");

    console.log(PadronElectoral2022);

    const IdTxtApellido = document.querySelector("#IdTxtApellido");
    const IdTableBody = document.querySelector("#IdTableBody");
    const IdBtnSearch = document.querySelector("#IdBtnSearch");
    const IdBtnDelete = document.querySelector("#IdBtnDelete");
    const IdNU_MATRICULA = document.querySelector("#IdNU_MATRICULA");
    const IdTX_CLASE = document.querySelector("#IdTX_CLASE");
    const IdTX_APELLIDO = document.querySelector("#IdTX_APELLIDO");
    const IdTX_NOMBRE = document.querySelector("#IdTX_NOMBRE");
    const IdBtnGuardar = document.querySelector("#IdBtnGuardar");
    const IdBtnEliminar = document.querySelector("#IdBtnEliminar");
    const IdPK = document.querySelector("#IdPK");


    console.log(IdTxtApellido);
    console.log(IdTableBody);
    console.log(IdBtnSearch);
    console.log(IdBtnDelete);
    console.log(IdNU_MATRICULA);
    console.log(IdTX_CLASE);
    console.log(IdTX_APELLIDO);
    console.log(IdTX_NOMBRE);
    console.log(IdBtnGuardar);
    console.log(IdBtnEliminar);
    console.log(IdPK);



    IdBtnSearch.addEventListener("click",()=>
    {
        alert("Funciona el boton Search");

        const Apellido = IdTxtApellido.value;

        if (Apellido.length != 0) 
        {
            alert("tenemos que buscar");

            fnBuscarElectores(PadronElectoral2022, Apellido);
        }
        else
        {
            alert("Ingrese un valor para buscar");
        }
    });

    // BOTON DELETE //
    IdBtnDelete.addEventListener("click",()=>
    {
        alert("deberiamos eliminar los datos");

        let CheckDeLaTabla = document.querySelectorAll("input[type='checkbox']:checked");

        CheckDeLaTabla.forEach((element)=>
        {
            let row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });

    IdBtnGuardar.addEventListener("click",()=>
    {
        alert("aqui deberia guardar los cambios");

        let PK = IdPK.value;
        let NU_MATRICULA = IdNU_MATRICULA.value;
        let TX_CLASE = IdTX_CLASE.value;
        let TX_APELLIDO = IdTX_APELLIDO.value;
        let TX_NOMBRE = IdTX_NOMBRE.value;


        console.log(PK);
        console.log(NU_MATRICULA);
        console.log(TX_CLASE);
        console.log(TX_DOMICILIO);
        console.log(TX_APELLIDO);
        console.log(TX_NOMBRE);


        // Esto es un objeto literal
        let objetoModificado =
        {
            NU_MATRICULA: NU_MATRICULA,
            TX_CLASE: TX_CLASE,
            TX_DOMICILIO: TX_DOMICILIO,
            TX_APELLIDO: TX_APELLIDO,
            TX_NOMBRE: TX_NOMBRE,
            
        };

        console.log(objetoModificado);

        PadronElectoral2022[PK] = objetoModificado;
    });

    IdBtnEliminar.addEventListener("click",()=>
    {
        alert("aqui deberia eliminar");

        let PK = IdPK.value;

        if (PK !== "")
        {
            PadronElectoral2022.splice(PK, 1);

            IdPK.value = "";
            IdNU_MATRICULA.value = "";
            IdTX_CLASE.value = "";
            IdTX_APELLIDO.value = "";
            IdTX_NOMBRE.value = "";
            

            alert("Datos eliminados exitosamente");

            // Actualizar la tabla de resultados
            const Apellido = IdTxtApellido.value;
            fnBuscarElectores(PadronElectoral2022, Apellido);
        }
        else
        {
            alert("No hay datos seleccionados para eliminar");
        }
    });

    const fnBuscarElectores = (PadronElectoral2022, Apellido)=>
    {
        console.log(PadronElectoral2022);
        console.log(Apellido);

        IdTableBody.innerHTML = "";

        PadronElectoral2022.forEach((element, index)=>
        {
            if (element.TX_APELLIDO.includes(Apellido.toUpperCase()))
            {
                let Fila = document.createElement("tr");

                /* CELDA 1 */
                let Celda1 = document.createElement("td");
                Celda1.textContent = element.NU_MATRICULA;

                /* CELDA 2 */
                let Celda2 = document.createElement("td");
                Celda2.textContent = element.TX_CLASE;

                /* CELDA DOMICILIO */
                let CeldaDomicilio = document.createElement("td");
                CeldaDomicilio.textContent = element.TX_DOMICILIO;

                /* CELDA 3 */
                let Celda3 = document.createElement("td");
                Celda3.textContent = element.TX_APELLIDO;

                /* CELDA 4 */
                let Celda4 = document.createElement("td");
                Celda4.textContent = element.TX_NOMBRE;

                /* CELDA 5 */
                let Celda5 = document.createElement("td");

                let BotonVer = document.createElement("input");
                BotonVer.type = "button";
                BotonVer.value = "Ver Datos !";
                BotonVer.addEventListener("click",()=>
                {
                    console.log(element);

                    IdPK.value = index;
                    IdNU_MATRICULA.value = element.NU_MATRICULA;
                    IdTX_CLASE.value = element.TX_CLASE;
                    IdTX_APELLIDO.value = element.TX_APELLIDO;
                    IdTX_NOMBRE.value = element.TX_NOMBRE;


                    alert("datos actualizdos en el panel de busqueda");
                });
                Celda5.appendChild(BotonVer);

                /* CELDA 6 */
                let Celda6 = document.createElement("td");

                let CheckElegir = document.createElement("input");
                CheckElegir.type = "checkbox";
                CheckElegir.setAttribute("ID", element.NU_MATRICULA);
                CheckElegir.setAttribute("POSICION", index);

                Celda6.appendChild(CheckElegir);

                Fila.appendChild(Celda1);
                Fila.appendChild(Celda2);
                Fila.appendChild(CeldaDomicilio);
                Fila.appendChild(Celda3);
                Fila.appendChild(Celda4);
                Fila.appendChild(Celda5);
                Fila.appendChild(Celda6);

                IdTableBody.appendChild(Fila);

                console.log(Fila);
            }
        });
    };
};
