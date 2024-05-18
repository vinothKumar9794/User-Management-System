import { Request } from "./modules/Request.js";
import { UserInterface } from "./modules/UserInterface.js";


const request = new Request();
const userInterface = new UserInterface();


document.body.onload = () => {

    const response = request.get("/ums/v1/users", false);

    let userRecords = JSON.parse(response.responseText).data.users;
    let columnNames = ["ID", "NAME", "EMAIL", "PASSWORD", "EDIT", "DELETE"];

    let buttons = [
        "<button>EDIT</button>",
        "<button>DELETE</button>"
        

    ];


    let container = document.getElementById("container");


    if (userRecords.length != 0) {

        let userRecordsTable = userInterface.createTable(columnNames, userRecords, buttons);

        container.append(userRecordsTable);

        buttons = userRecordsTable.querySelectorAll("button");


        for (let button of buttons) {
            button.addEventListener("click", (event) => {
                let targetElement = event.target;
                let userID = targetElement.parentElement.parentElement.children[0].innerHTML;
                if (targetElement.innerHTML.trim() == "EDIT") {
                    location.href = `/ums/v1/users/edit/${userID}`;
                }
                if (targetElement.innerHTML.trim() == "DELETE") {
                    let requestURL = `/ums/v1/users/${userID}`;
                    request.delete(requestURL, true);
                    $(targetElement.parentElement.parentElement).remove();
                }

            
            });
        }
    }

        else {
        let h1 = document.createElement("h1");
        h1.innerHTML = "No User Records ...";
        container.append(h1);
    }
};