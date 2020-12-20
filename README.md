# burger
A burger logger built with MySQL, Node, Express, Handlebars and my own ORM. The app uses Node and MySQL to query and route data, and Handlebars to generate the HTML.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Installation](#installation)
* [Deployed Link](#deployed-link)
* [Credit](#credit)
* [License](#license)

----------

## About the project
Eat the burger is an application that lets users input the name of a burger they'd like to devour. This app follows the MVC design pattern and uses Node, MySQL, Express and Handlebars.   
I found this project quite difficult in terms of the size and ensuring separation of concerns. I find it harder to follow code when there are a number of files to refer to so I found myself being more relient on looking at existing code than I have been in other projects.

### Built using
* Node.js
* Express
* Express-handlebars
* MySQL

----------

## Functionality  
The following screen record demonstrates the burger apps functionality.   
![Burger app functionality]()   

In the text area, input the name of the burger you want to eat. This will be added to the not devoured section, ready to eat. You can then choose to devour the burger (which will move it into the devoured box), or delete the burger. When a burger has been devoured, you also have the option to reorder the burger.


### Using the app
1. A local server connection is created using express.
2. The application uses a MySQL database to store any burger names entered. The `schema.sql` file creates the burger database and is fed with sample data using the `seeds.sql` file.
3. The `burger.js` file in the models directory passes information to the burgers_db database. It is also required by the `burger_controller.js` file which uses an express router to handle any GET, POST, PUT, DELETE requests.
4. The views files are client-side html formatted usigng express-handlebars to take data from the burgers object (passed into the file with the burger_controllers.js file). The main.handlebars file that is found in the layouts directory acts as the head of the html page, where the index.handlebars file acts as the body.
5. Lastly, the public files contain the CSS and JavaScript files which style the elements on the page.

-------------

## Installation
1. Clone the code from the GitHub repo
2. Open project directory, then `npm install` to install all required dependencies (MySQL, express etc.)
3. Create a `.env` file and enter your password using DB_PASS=
4. This will give you access to the MySQL database connection
5. Enter $ node server to run the application
6. Navigate to http://localhost:8080 to view and use the app

------------------
## Deployed link   
Or you can view the live deployment of the application on [Heroku]().

-------------
## Credit
I had an issue halfway through development where I lost connection to the repo and could no longer push my code changes to the existing repo. Thank you to AskBCS support and the zoom call to talk me through navigating git and the command line to help me get back on track without losing too much commit history.

------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).   
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.   
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)

-------------

Hannah Sones © 2020. All rights reserved.
