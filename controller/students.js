const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school"
});

class StudentController {
  static create (req, res) {
      let sql = "INSERT INTO student SET ?";
      connection.query(sql, req.body, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: `${result.insertId} inserted`
        });

      });
  }

  static getAllStudents(req, res) {
      connection.query("SELECT * FROM student", function (err, result, fields) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: result
        });
    })
  }

  static getOneStudent(req,res){
      let stdId = req.params.id;
      let sql = `SELECT * FROM student WHERE id = ${stdId}`
      connection.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: result
        });
    })
  }

  static deletestudent(req,res){
      let stdId = req.params.id;
      let sql = `DELETE FROM student WHERE id = ${stdId}`
      connection.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'deleted successfully',
          data: `${result.affectedRows} row(s) deleted`
        });
      })
  }

  static updateStudent(req,res) {
      let stdId = req.params.id;
      let sql = `UPDATE student SET ? WHERE id = ${stdId}`
      connection.query(sql, req.body, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: result
        });
    })
  }
}
module.exports = StudentController;