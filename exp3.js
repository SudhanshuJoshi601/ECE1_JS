let employees = [];

function addEmployee() {
    const name = document.getElementById('empName').value;
    const id = document.getElementById('empId').value;
    const salary = parseFloat(document.getElementById('empSalary').value);
    const dept = document.getElementById('empDept').value;

    if (name && id && salary && dept) {
        const empObject = {
            name: name,
            id: id,
            salary: salary,
            department: dept
        };

        employees.push(empObject);

        alert("Employee Added Successfully!");

        // CLEAR INPUTS
        document.getElementById('empName').value = "";
        document.getElementById('empId').value = "";
        document.getElementById('empSalary').value = "";
        document.getElementById('empDept').value = "";

        // 🔥 ADD THIS LINE
        displayEmployees();

    } else {
        alert("Please fill all fields");
    }
}

function displayEmployees(data = employees) {
    const display = document.getElementById('resultDisplay');
    display.innerHTML = "";

    if (data.length === 0) {
        display.innerHTML = "No records found.";
        return;
    }

    for (let emp of data) {
        display.innerHTML += `
        <div class="emp-card">
            <strong>${emp.name}</strong> (ID: ${emp.id}) <br>
            Dept: ${emp.department} | Salary: ${emp.salary.toLocaleString()}
        </div>
        `;
    }
}

function filterHighSalary() {
    const highEarners = employees.filter(emp => emp.salary > 50000);
    displayEmployees(highEarners);
}

function calculateTotalPayout() {
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }

    document.getElementById('resultDisplay').innerHTML =
        `<h3>Total Payout: ${total.toLocaleString()}</h3>`;
}

function calculateAverage() {
    if (employees.length === 0) return;

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    const avg = total / employees.length;

    document.getElementById('resultDisplay').innerHTML =
        `<h3>Average Salary: ${avg.toFixed(2)}</h3>`;
}