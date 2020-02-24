$(function() {
    console.log('load');
    loadData()
    $(".load-button").click(loadData)
})

function myFunction(id) {
    console.log(id);
}

function loadData() {
    let data = [{
            "id": "4fd8b5ed-62fd-4f6d-93e6-8225e3cc4181",
            "date_created": "2020-02-19 18:19:10",
            "email": "am@smartlending.mx",
            "telefono": "+52 00000000",
            "rfc": "TEST850115FR5",
            "nombre": "Example"
        },
        {
            "id": "4fd8b5ed-62fd-4f6d-93e6-8225e3cc4181",
            "date_created": "2020-02-19 18:19:10",
            "email": "am@smartlending.mx",
            "telefono": "+52 00000000",
            "rfc": "TEST850115FR6",
            "nombre": "Abel Mejia"
        },
        {
            "id": "4fd8b5ed-62fd-4f6d-93e6-8225e3cc4181",
            "date_created": "2020-02-19 18:19:10",
            "email": "am@smartlending.mx",
            "telefono": "+52 00000000",
            "rfc": "TEST850115FR6",
            "nombre": "Abel Mejia"
        },
        {
            "id": "4fd8b5ed-62fd-4f6d-93e6-8225e3cc4181",
            "date_created": "2020-02-19 18:19:10",
            "email": "am@smartlending.mx",
            "telefono": "+52 00000000",
            "rfc": "TEST850115FR6",
            "nombre": "Abel Mejia"
        },
        {
            "id": "4fd8b5ed-62fd-4f6d-93e6-8225e3cc4181",
            "date_created": "2020-02-19 18:19:10",
            "email": "am@smartlending.mx",
            "telefono": "+52 00000000",
            "rfc": "TEST850115FR6",
            "nombre": "Abel Mejia"
        }
    ];

    $("#table-body").html("");
    for (var i = 0; i < data.length; i++) {
        // data[i].id
        var tr = `<tr class="table-row" onclick="myFunction('${data[i].id}')">
        <td>` + data[i].nombre + `</td>
        <td>` + data[i].telefono + `</td>
        <td>` + data[i].rfc + `</td>
        <td>` + data[i].email + `</td>
      </tr>`;
        $("#table-body").append(tr)
    }
}