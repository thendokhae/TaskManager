# TaskManager
Task Manager application, UI in angular 2 &amp; Backend expressJS

This is a project created in response to The FRONTEND test for FOGG.
To get started clone the project.

The Task Manager applications has three layers to it. 
- `Data Access` - which based of a mySQL database, a back of the database and tables I used for this application is countained within the **DataAccess** folder.
- `Back end` - I used ExpressJS to created a web api to provide services to my front end. the backend code is contained within the **TaskManagerBackend** folder to run the web
Api service you need to have node installed within your environment, then navigate to the **TaskManagerBackend** folder and run `npm install` to download all the dependencies.
when node install is done you nedd to run `node index.js` which will start the web api server at `htttp:\\localhost:2626`.
- `Front End application` - The task manager front end was created using angular 2 and ES6 along side with webpack for budnling the application and transpiling as well as compilling scss files 
into css files, alongside with bootstrap for responsive design. To run this application you need to have node installed as well as the angular 2 CLI. then navigate to the folder **TaskManagerUI**
and run `npm install`, when that's done you can now run `ng serve` which will serve the application at `http:\\localhost:4200`.

Upon login and running the application and assuming you have restored the db an hosted it locally, you will be presented with a login screen, you can use the following credential
`username`:thendo  `password`:admin 
or you could add your own user to the user table on test_db
After login you will be sent to the homescreen where you will see a list off tasks with different statuses, and you can click on a task, to edit or delete it. You can also add new tasks to the list.

Thank you. Feel free to contact me if you experience any problems setting up the application. Looking forward to hearing from you.
**Email** `thendokhae18@gmail.com`
**Number** `0785891137` 
