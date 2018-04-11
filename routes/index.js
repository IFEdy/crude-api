const StudentController = require ("../controller/students");
const redis = require("redis"),
      client = redis.createClient();
      
const Route = function(app){

  app.post('/api/students', StudentController.create);
  app.get('/api/students', client.get(StudentController.getAllStudents, function(err, value){
    if(err) throw err;
    if(value){
      console.log(value);
    }
  }));
  app.get('/api/students/:id',  StudentController.getOneStudent);
  app.put('/api/students/:id',  StudentController.updateStudent);
  app.delete('/api/students/:id', StudentController.deletestudent);

};

module.exports = Route;