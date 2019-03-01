//STEP 1
function step1() {
    var favMovies = ["Cool Runnings", "Bladerunner", "D2: The Mighty ducks", "Get Him to The Greek", "Aladdin"];
    console.log(favMovies[1]);
}
//STEP 2
function step2() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    window.console.log(movies[0]);
}
//STEP 3
function step3() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards"
    window.console.log(movies.length);
}
//STEP 4
function step4() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    delete movies[0];
    window.console.log(movies);
}
//STEP 5
function step5() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards";
    movies[6] = "Peter Pan";
    for (var i = 0; i < movies.length; i++) {
        console.log(movies[i]);
    }
}
//STEP 6
function step6() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards";
    movies[6] = "Peter Pan";
    for (var i in movies) {
        console.log(movies[i]);
    }
}
//STEP 7
function step7() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards";
    movies[6] = "Peter Pan";
    for (var i in movies) {
        movies.sort();
        console.log(movies[i]);
    }
}
//STEP 8
function step8() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards";
    movies[6] = "Peter Pan";
    var leastFavMovies = ["Epic Movie", "Date Movie", "Godzilla"]
    console.log("\nMovies I Like:\n ");
    for (var i in movies) {
        console.log(movies[i]);
    }
    console.log("...");
    console.log("\nMovies I Don't Like:\n ");
    for (var i in leastFavMovies) {
        console.log(leastFavMovies[i]);
    }
}
//STEP 9
function step9() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards"
    movies[6] = "Peter Pan";
    var leastFavMovies = ["Epic Movie", "Date Movie", "Godzilla"]
    movies = movies.concat(leastFavMovies);
    movies.sort();
    console.log(movies.reverse());
}
//STEP 10
function step10() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards"
    movies[6] = "Peter Pan";
    var leastFavMovies = ["Epic Movie", "Date Movie", "Godzilla"]
    movies = movies.concat(leastFavMovies);
    movies.sort();
    console.log(movies.pop());
}
//STEP 11
function step11() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards"
    movies[6] = "Peter Pan";
    var leastFavMovies = ["Epic Movie", "Date Movie", "Godzilla"]
    movies = movies.concat(leastFavMovies);
    movies.sort();
    console.log(movies.shift());
}
//STEP 12
function step12() {
    var movies = [];
    movies[0] = "Cool Runnings";
    movies[1] = "Bladerunner";
    movies[2] = "D2: The Mighty Ducks";
    movies[3] = "Get Him to The Greek";
    movies[4] = "Aladdin";
    movies[5] = "Inglorious Bastards"
    movies[6] = "Peter Pan";
    var leastFavMovies = ["Epic Movie", "Date Movie", "Godzilla"]
    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies[(movies.indexOf("Epic Movie"))] = "Shawshank Redemption";
    movies[(movies.indexOf("Date Movie"))] = "The Hunger Games";
    movies[(movies.indexOf("Godzilla"))] = "Zombieland";
    console.log(movies);
}
//STEP 13
function step13() {
    var employee1 = {"employeeid": 1, "name": "Ben", "title": "Web Developer", "isActiveEmployee": 1};
    var employee2 = {"employeeid": 2, "name": "Zak", "title": "Web Developer", "isActiveEmployee": 1};
    var employees = {employee1,  employee2};
    console.log(employees["employee2"]["name"]);
}
//STEP 14
function step14() {
    var employee1 = {"employeeid": 1, "name": "Ben", "title": "Web Developer", "isActiveEmployee": 1};
    var employee2 = {"employeeid": 2, "name": "Zak", "title": "Web Developer", "isActiveEmployee": 1};
    var employees = {employee1,  employee2};
    for (var i in employees) {
	   console.log(employees[i]["name"])
    }
}
//STEP 15
function step15() {
    var employee1 = {"employeeid": 1, "name": "Ben", "title": "Web Developer", "isActiveEmployee": 1};
    var employee2 = {"employeeid": 2, "name": "Zak", "title": "Web Developer", "isActiveEmployee": 1};
    var employee3 = {"employeeid": 3, "name": "Steve", "title": "Manager", "isActiveEmployee": 0};
    var employees = {employee1,  employee2};
    for (var i in employees) {
        if (employees[i]["isActiveEmployee"]) {
            console.log(employees[i]["name"])
        }
    }
}
//STEP 16
function step16() {
    movies = [["Cool Runnings", 1], ["Bladerunner", 2], ["D2: The Mighty Ducks", 3], ["Get Him to The Greek", 4], ["Aladdin", 5]];
    var movieNames = [];
    for (var i = 0; i < movies.length; i++) {
        movieNames.push(movies[i].filter(function (item) {
            "use strict";
//            console.log(typof item !== "number");
            return typeof item !== "number";
        }))
    }
    for (var j = 0; j < movieNames.length; j++) {
        console.log(movieNames[j][0]);
    }
}
//STEP 17
function step17() {
    var employees = [
        "Zak",
        "Jessica",
        "Mark",
        "Fred",
        "Sally"
    ]
    function showEmployee(arrEmployees) {
        console.log("Employees:\n ");
        for (var i = 0; i < arrEmployees.length; i++) {
            console.log(arrEmployees[i]);
        }
    }
    showEmployee(employees);
}
//STEP 18
var data = [58, '', 'abcd', true, null, false, 0];
function step18(data) {
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (item == false || item == null || item == 0 || item == "") {
            data.splice(i, i);
        }
//        data[i].filter(function(element){
//            return typeof element !== "undefined";
//        })
    }
    console.log(data);
}
//STEP 19
function step19(data) {
    var rand = parseInt(Math.random() * data.length)
    console.log("Index of: " + rand + "\nValue of: " + data[rand]);
}
//STEP 20
function step20(data) {
    var biggest = data[0];
    for (var i = 0; i < data.length; i++) {
        if (data[i] > biggest) {
            biggest = data[i];
        }
    }
    console.log(biggest);
}
