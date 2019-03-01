/*eslint-env browser*/

var command;
var inventory;
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update amount in inventory");
//    window.console.log("del - Delete an existing employee");
    window.console.log("exit - Exit the application");
    window.console.log("");
}
function showInventory(arg) {
    "use strict";
    arg.sort();
    var i = 1;
    arg.forEach(function (item) {
        window.console.log(i + ". " + item);
        i += 1;
    });
    window.console.log("");
}
function updateInventory(arg) {
    "use strict";
    var sku = window.prompt("Enter the sku of the item you want to update");
    var successful = 0;
    for (var i = 0; i < arg.length; i++) {
        if (sku == arg[i][0]) {
            var currentStock = window.prompt("How many " + arg[i][1] + " are in stock");
            successful = 1;
            if (isNaN(currentStock)) {
                alert("You must type in a number");
                updateInventory(arg);
            } else {
                arg[i][2] = parseInt(currentStock);
                window.console.log("Stock of " + arg[i][1] + " updated to " + arg[i][2]);
                localStorage.setItem("storedInventory", JSON.stringify(arg));

            }
        } else if (sku == null) {
            break;
        } 
    }
    if (successful == 0 && sku != null) {
        alert("That SKU cannot be found");
        updateInventory(arg);
    }
//        else {
//        }
        
//    window.console.log(employee + " was added.\n");
}
//function deleteEmployees(arg) {
//    "use strict";
//    var num, employee;
//    num = parseInt(window.prompt("Employee number to delete"), 10);
//    if (num < 1 || num > arg.length) {
//        window.alert("Invalid employee number");
//    } else {
//        delete arg[num - 1];
//    }
//}
function main() {
    "use strict";
    var employeeList, command;
    displayMenu();
    if (localStorage.getItem("storedInventory") == null) {       
        inventory = [
            [6343, "Jeans", 22, 39.99],
            [3223, "Socks", 36, 9.99],
            [2233, "Hat", 13, 14.99],
            [4824, "Shirt", 10, 15.99],
            [9382, "Jacket", 5, 49.99]
        ];
    } 
    else inventory = JSON.parse(localStorage.getItem("storedInventory"));
    
//    employeeList = [
//        "Zak Ruvalcaba",
//        "Sally Smith",
//        "Fred Franklin",
//        "John Smith",
//        "Jane Caruthers"];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command == "view") {
                showInventory(inventory);
            } else if (command == "update") {
                updateInventory(inventory);
//            } else if (command == "del") {
//                deleteEmployees(employeeList);
            } else if (command == "exit" || command == "break") {
                break;
            }
            else {
                window.console.log("That is not a valid command");
            }
        }
    }
    window.console.log("program terminated");
}
main();
