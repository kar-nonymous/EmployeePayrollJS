// UC 11
{
    class EmployeePayrollData 
    {
        // property
        id;
        name;
        salary;

        // constructor
        constructor(id, name, salary) 
        {
            this.id = id;
            this.name = name;
            this.salary = salary;
        }

        // method 
        toString() 
        {
            return "Id: " + this.id + ", Name: " + this.name + ", Salary: " + this.salary;
        } 
    }
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
    console.log("UC-11: " + employeePayrollData.toString());
    employeePayrollDataObj.name = "John";
    console.log(employeePayrollDataObj.toString());   
}

//UC 12
{
    class EmployeePayrollData 
    {
        // property
        id;
        name;
        salary;
        gender;
        startDate;
    
        // constructor
        constructor(...params) {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }

        // method
        toString() 
        {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
            return "Id=" + this.id + ", Name=" + this.name + ", Salary=" + this.salary + ", Gender=" + this.gender + ", StartDate=" + empDate;
        }
    }
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
    console.log("UC-12: " + employeePayrollDataObj.toString());
    employeePayrollDataObj.name = "John";
    console.log(employeePayrollDataObj.toString()); 
    let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 40000, 'F', new Date());
    console.log(newEmployeePayrollData.toString());
}
