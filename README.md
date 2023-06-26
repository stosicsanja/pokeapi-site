The project is deployed on a hosting platform: https://pokeapi-site.vercel.app

PROJECT SETUP:

After cloning github repository, to set up the project: 

-Open your project directory and run npm install to fetch and install all the required dependencies. 

-Once the installation process completes successfully, you'll have all the dependencies needed to run the project.

-Execute npm start in the terminal. This command initiates the project and launches it on port 3000.

Once the project starts running, you can access it by navigating to http://localhost:3000 in your web browser. 

By following these steps, you'll have successfully set up the project

PROJECT DESCRIPTION:

The project is built upon React Router. It incorporates multiple pages, including a Home page and Pokemon Details for displaying individual Pokemon details.

The Home page serves as the landing page of the application, providing an overview or introduction to the project.
On the page the user can see top pokemons, search them by name or sort them A-Z, Z-A or default (by their ID).
When a user clicks on a button View Details on Pokemon card, they are taken to a detailed view of that Pokemon. This view displays comprehensive information about the Pokemon.

The Pokemon Details is designed to display detailed information about a specific Pokemon. It leverages the data fetched from an external API or a local data source to populate the page with relevant details, such as the Pokemon's name, image, type, abilities, and other characteristics. Users can explore various Pokemon by accessing their respective pages through dynamic routing.

Features:

-Add to Favorites: Users have the ability to add Pokemons to their favorites list. They can click on an icon "Heart" to add a Pokemon to their favorites collection.

-Remove from Favorites: Users can also remove Pokemons from their favorites list. By clicking on an icon "Heart", they can remove a Pokemon from their favorites collection, customizing their list based on their preferences.

-Pagination: The app supports pagination to allow users to navigate through multiple pages of Pokemons. The pagination controls, such as "Left" and "Right" arrows, enable users to browse more Pokemons beyond the initial page.

Technologies:

React.js as the primary JavaScript framework for building the application.

Axios and Fetch for making HTTP requests to the PokeAPI.

React Router for handling routing between pages.

Local Storage to store and retrieve the user's favorite Pokémon.

Styling Framework: CSS and React Bootstrap for enhanced styling and layout consistency.

Additional: React Icons library
