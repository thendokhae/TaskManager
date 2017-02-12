var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_db'
});
var bodyParser = require('body-parser');
var app = express();

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 2626;
var router = express.Router();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.route('/login')
    .post(function (req, res) {
        connection.query('SELECT * from user where Username="' + req.body.Username + '" and Password="' + req.body.Password + '"', function (err, rows, fields) {
            // connection.end();
            if (!err)
                res.json(rows);
            else
                res.json(err);
        });
    });

router.route('/tasks')

    // create a task (accessed at POST http://localhost:2626/api/tasks)
    //INSERT INTO `task`(`Name`, `User_id`, `Description`, `DueDate`, `CreatedDate`, `Status`, `Type`) VALUES ([value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
    .post(function (req, res) {
        connection.query('INSERT INTO task(Name, User_id, Description, Status, Type) VALUES ("' + req.body.Name + '","1","' + req.body.Description + '","' + req.body.Status + '","NewTask")', function (err, rows, fields) {
            // connection.end();
            if (!err)
                res.json(rows);
            else
                res.json(err);
        });
    })

    // get all the tasks (accessed at GET http://localhost:2626/api/tasks)
    .get(function (req, res) {
        console.log('getting');
        connection.query('SELECT * from task', function (err, rows, fields) {
            // connection.end();
            if (!err)
                res.json(rows);
            else
                res.json(err);
        });
    });

router.route('/tasks/:task_id')

    // get the task with that id (accessed at GET http://localhost:2626/api/tasks/:task_id)
    .get(function (req, res) {
        connection.query('SELECT * from task where Id="' + req.params.task_id + '"', function (err, rows, fields) {
            // connection.end();
            if (!err)
                res.json(rows);
            else
                res.json(err);
        });
    })
    // update the task with this id (accessed at PUT http://localhost:2626/api/tasks/:task_id)
    .put(function (req, res) {
        console.log(req.body);
        connection.query('UPDATE task SET Name="' + req.body.Name + '",Description="' + req.body.Description + '",Status="' + req.body.Status + '" where Id="' + req.params.task_id + '"', function (err, rows, fields) {
            // connection.end();
            if (!err)
                res.json(rows);
            else
                res.json(err);
        });
    })

    // delete the task with this id (accessed at DELETE http://localhost:2626/api/task/:task_id)
    .delete(function (req, res) {
        connection.query('DELETE FROM task where Id="' + req.params.task_id + '"', function (err, rows, fields) {
            // connection.end();
            if (!err)
                res.json(rows);
            else
                res.json(err);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


app.listen(port);