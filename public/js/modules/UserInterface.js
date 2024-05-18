
export class UserInterface {

    createTable(columnNames,userRecords,buttons) {
        let table = document.createElement("table");
        let tr = document.createElement("tr");

        for (let columnName of columnNames) {
            let th = document.createElement("th");
            th.innerHTML = columnName;
            tr.appendChild(th);
        }
        table.appendChild(tr);
        
        for (let user of userRecords) {
            let tr = document.createElement("tr");
            for (let data of Object.values(user)) {
                let td = document.createElement("td");
                td.innerHTML = data;
                tr.appendChild(td);
            }
            let editTD = document.createElement("td");
            editTD.innerHTML = buttons[0];
            let deleteTD = document.createElement("td");
            deleteTD.innerHTML = buttons[1];
            tr.appendChild(editTD);
            tr.appendChild(deleteTD);
            table.appendChild(tr);
        }
       
        return table;
    }

}