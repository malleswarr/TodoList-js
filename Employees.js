let employees = [
    {name:"John Doe", age : "30",designation:"Senior Manager", number:"9000090000"},
    {name:"Mellswarreddy", age : "28",designation:"Senior Frontend Developer", number:"8000080000"},
    {name:"Rajesh", age : "40",designation:"Junior Developer", number:"9000090000"},
];

function addEmployee(event) {
    event.preventDefault();

    const employeeName = document.getElementById("employeeName").value.trim();
    const employeeAge = document.getElementById("employeeAge").value;
    const employeeDesignation = document.getElementById("employeeDesignation").value.trim();
    const employeeNumber = document.getElementById("employeeNumber").value;

    if (employeeName !== "" && employeeDesignation !== "" && employeeNumber !== "") {
        employees.push({ name: employeeName, age: employeeAge, designation: employeeDesignation, number: employeeNumber });
        displayEmployees();
        document.getElementById("addEmployeeForm").reset();
    }
}

function displayEmployees() {
    const employeeTableBody = document.getElementById("employeeTableBody");
    employeeTableBody.innerHTML = "";

    if(employees.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="5" class="no_data">No data available</td>`;
        employeeTableBody.appendChild(row);
    }else{
        employees.forEach(employee => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.designation}</td>
                <td>${employee.number}</td>
                <td>
                    <button onclick="editEmployee(${employees.indexOf(employee)})">Edit</button>
                    <button onclick="deleteEmployee(${employees.indexOf(employee)})">Delete</button>
                </td>
            `;
            employeeTableBody.appendChild(row);
        });
    }

    
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById("employeeName").value = employee.name;
    document.getElementById("employeeAge").value = employee.age;
    document.getElementById("employeeDesignation").value = employee.designation;
    document.getElementById("employeeNumber").value = employee.number;
    const submitButton = document.getElementById("addEmployeeForm").querySelector("button[type='submit']");
    submitButton.textContent = "Update";
    submitButton.onclick = function() {
        updateEmployee(index);
    };
}

function updateEmployee(index) {
    const employeeName = document.getElementById("employeeName").value.trim();
    const employeeAge = document.getElementById("employeeAge").value;
    const employeeDesignation = document.getElementById("employeeDesignation").value.trim();
    const employeeNumber = document.getElementById("employeeNumber").value.trim();

    if (employeeName !== "" && employeeDesignation !== "" && employeeNumber !== "") {
        employees[index] = {
            name: employeeName,
            age: employeeAge,
            designation: employeeDesignation,
            number: employeeNumber
        };
        displayEmployees();
        document.getElementById("addEmployeeForm").reset();
    }
}

document.getElementById("addEmployeeForm").addEventListener("submit", addEmployee);

displayEmployees();

