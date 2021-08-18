# `The Purpose of the app/website that we are building`
This app has a function that accepts a parameter of one of your favorite actors’ names and returns a list of their movies. There's also another function that accepts two actors and returns which one of them played in more movies.

I'm aware that everything can be done in one single function; however, this app was developed as a result of a code challenge that required two separate functions.

# `How to install and use the app`
I used node v14.17.1 but you should be able to use any version above v14.
I'm hiding the API_KEY using a .env file for security purposes and you should do the same.
- Get an API Key from https://developers.themoviedb.org/3/getting-started/introduction
- Clone the repo into your local folder.
- In your terminal ensure that you are in the cloned folder where the app.js is located
  - Delete the .git folder
  - npm init (to install dependencies)
  - If dependencies do not install
    - npm install node-fetch
    - npm install dotenv
  - code .env and paste your API_KEY
    - I have included a .env.sample file that shows you what this looks like. Replace the sample key with your key.  This is an example file and it's for reference only- it will not work.
    - You can rename the .env.sample file to .env but it's good practice to create it yourself.
  - I created two objects for actors - actor1 and actor2. Change the names in the object to get results for different actors.
  - If there's an error due to a typo or no data for your actor then the catch(err) will give you details on the terminal.
  - Finally, type node app.js in your terminal to run the app.

# `M.V.P`

## Provide the following:

- The actor's name and a list of movies.
- Compare two actors' movie count and determine which actor has played in more movies.

# `Tech Stack`

Languages: Node.js, JavaScript
Other: JSON, Postman
<br />
<br />


# `Developer Team`

## Jose Tollinchi

https://github.com/AnaIitico

<br />
<br />

# `Resources`

### Source of API
https://developers.themoviedb.org/3/getting-started/introduction

### Documentation Resources
* https://nodejs.org/en/
* https://www.npmjs.com/package/dotenv
* https://www.npmjs.com/package/node-fetch


