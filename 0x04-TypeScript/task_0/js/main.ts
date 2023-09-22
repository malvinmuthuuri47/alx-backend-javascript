<!DOCTYPE html>
<html>
<head>
  <title>Render Table</title>
</head>
<body>
  <table id="myTable">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </table>
  <script>
    interface Student {
      firstName: string;
	    lastName: string;
	    age: number;
	    location: string;
	  }

    const john: Student = {
	    firstName: "John",
	    lastName: "Doe",
	    age: 30,
	    location: "Fake Street",
    };

    const Alex: Student = {
	    firstName: "Alex",
	    lastName: "Hunter",
	    age: 21,
	    location: "New York",
    };

    const studentsList: Student[] = [john, Alex];
    
    function renderTable() {
      const table = document.getElementById("myTable");
      
      studentsList.forEach(student => {
        const row = document.createElement("tr");
	
	const firstNameCell = document.createElement("td");
	firstNameCell.textContent = student.firstName;
	row.appendChild(firstNameCell);

	const locationCell = document.createElement("td");
	locationCell.textContent = student.location;
	row.appendChild(locationCell);

        table.appendChild(row);
      });
    }
    
    renderTable();
  </script>
</body>
</html>
