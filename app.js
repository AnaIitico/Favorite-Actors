
const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiAccessToken = process.env.API_ACCESS_TOKEN;

const actor1 = {
    firstName: "denzel",
    lastName: "washington"
};

const actor2 = {
    firstName: "johnny",
    lastName: "depp"
};

const movieList = async (actor1firstName, actor1lastName) => {
    const url1 = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actor1firstName}+${actor1lastName}`;
    var count = 0;
    try{
        let response = await fetch(url1);
        let moviesArray = await response.json();
        // console.log("length = ", movies.results.length);
        let movies = moviesArray.results;
        console.log(" ");
        console.log(`Movie List for ${actor1.firstName.toUpperCase()} ${actor1.lastName.toUpperCase()}`);
        movies.forEach(moviesObj => {
            // console.log(moviesObj.known_for.length);
            // console.log(moviesObj.known_for);
            for(let i = 0; i < moviesObj.known_for.length; i++){
                // console.log(moviesObj.known_for[i].media_type);
                if(moviesObj.known_for[i].media_type === "movie"){
                    count ++;
                    console.log(moviesObj.known_for[i].original_title);
                };
            };
        });
        
    }catch(err){
        console.log(err);
    };
};

const movieCount = async (actor1firstName, actor1lastName, actor2firstName, actor2lastName) => {
    const url1 = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actor1firstName}+${actor1lastName}`;
    var count = 0;
    const url2 = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actor2firstName}+${actor2lastName}`;
    var count1 = 0;
    var count2 = 0;
    var diff = 0;
    var moreMovies = '';
    var lessMovies = '';
    try{
        let response1 = await fetch(url1);
        let response2 = await fetch(url2);
        let moviesArray1 = await response1.json();
        let moviesArray2 = await response2.json();
        // console.log("length = ", movies.results.length);
        let movies1 = moviesArray1.results;
        let movies2 = moviesArray2.results;

        movies1.forEach(moviesObj => {
            // console.log(moviesObj.known_for.length);
            // console.log(moviesObj.known_for);
            for(let i = 0; i < moviesObj.known_for.length; i++){
                // console.log(moviesObj.known_for[i].media_type);
                if(moviesObj.known_for[i].media_type === "movie"){
                    count1 ++;
                    // console.log(moviesObj.known_for[i].original_title)
                };
            };
        });
        // console.log("count1", count1);
        movies2.forEach(moviesObj => {
            // console.log(moviesObj.known_for.length);
            // console.log(moviesObj.known_for);
            for(let i = 0; i < moviesObj.known_for.length; i++){
                // console.log(moviesObj.known_for[i].media_type);
                if(moviesObj.known_for[i].media_type === "movie"){
                    count2 ++;
                    // console.log(moviesObj.known_for[i].original_title)
                };
            };
        });
        // console.log("count2", count2);
        console.log("");
        if(count1 => count2){
            diff = count1 - count2;
            moreMovies = actor1.firstName + " " + actor1.lastName;
            lessMovies = actor2.firstName + " " + actor2.lastName;
        }
        else{
            diff = count2 - count1;
            moreMovies = actor2.firstName + " " + actor2.lastName;
            lessMovies = actor1.firstName + " " + actor1.lastName;
        };
        console.log(`${moreMovies.toUpperCase()} played in ${diff} more movie(s) than ${lessMovies.toUpperCase()}`);

    }catch(err){
        console.log(err);
    };
};

movieList(actor1.firstName, actor1.lastName);
movieCount(actor1.firstName, actor1.lastName, actor2.firstName, actor2.lastName);