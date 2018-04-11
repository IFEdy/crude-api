const StudentController = require ("../controller/students");

const Route = function(app){

  app.post('/api/students', StudentController.create);
  app.get('/api/students', StudentController.getAllStudents);
  app.get('/api/students/:id',  StudentController.getOneStudent);
  app.put('/api/students/:id',  StudentController.updateStudent);
  app.delete('/api/students/:id', StudentController.deletestudent);

};

module.exports = Route;