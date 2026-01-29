function run() {

    $.ajax({});
}

function process(data) {
    console.log(data)

    let o = "";

    for(let p=0;p<data.results.length;p++) {
        o += "<tr>";
        o += "<td>" + + "</td>";
        o += "<td>" + + "</td>";
        o += "<td>" + + "</td>";
        o += "<td></td>";
        o += "</tr>";
    }

    let table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "table";
}
