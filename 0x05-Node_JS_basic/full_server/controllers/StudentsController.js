const readDatabase = require('../utils');

export default class StudentsController {
  static getAllStudents(request, response, DB) {
    readDatabase(DB)
      .then((data) => {
        const msg = 'This is the list of our students\n';
        const newData = msg + data;
        response.status(200).send(newData.slice(0, -1));
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response, DB) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(DB)
        .then((fields) => {
          const list = fields.split('\n');
          const [field1, field2] = list.slice(1, 3);

          let students;
          if (major === 'CS') {
            students = field1;
          } else {
            students = field2;
          }
          students = students.split('. ');

          response.status(200).send(`${students[1]}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}
