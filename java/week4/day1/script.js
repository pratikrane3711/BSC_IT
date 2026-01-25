
    let students = JSON.parse(localStorage.getItem('students')) || [];

    function displayStudents() {
      const table = document.getElementById('studentTable');
      table.innerHTML = '';

      students.forEach((student, index) => {
        table.innerHTML += `
          <tr>
            <td>${student.name}</td> 
            <td>${student.roll}</td>
            <td>${student.course}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
          </tr>`;
      });
    }

    function addStudent() {
      const name = document.getElementById('name').value;
      const roll = document.getElementById('roll').value;
      const course = document.getElementById('course').value;

      if (name === '' || roll === '' || course === '') {
        alert('Please fill all fields');
        return; 
      }

      students.push({ name, roll, course });
      localStorage.setItem('students', JSON.stringify(students));
 
      document.getElementById('name').value = '';
      document.getElementById('roll').value = '';
      document.getElementById('course').value = '';

      displayStudents();
    }

    function deleteStudent(index) {
      students.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(students));
      displayStudents();
    }

    displayStudents(); 
    
