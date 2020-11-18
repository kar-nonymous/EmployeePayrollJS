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
    console.log("UC-12: " + employeePayrollData.toString());
    employeePayrollDataObj.name = "John";
    console.log(employeePayrollDataObj.toString());   
}