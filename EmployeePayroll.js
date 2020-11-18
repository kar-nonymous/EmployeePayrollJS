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
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());   
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
    console.log("UC-12: " + employeePayrollData.toString());
    employeePayrollDataObj.name = "John";
    console.log(employeePayrollData.toString()); 
    let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 40000, 'F', new Date());
    console.log(newEmployeePayrollData.toString());
}

// UC 13
{
    class EmployeePayrollData {
        // property
        id;
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
    
        get name() { return this._name; }
        set name(name) 
        {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if (nameRegex.test(name))
                this._name = name;
            else throw 'Name is incorrect!';
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
    console.log("UC-13: " + employeePayrollData.toString());
    let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 40000, 'F', new Date());
    console.log(newEmployeePayrollData.toString());
    
    try 
    {
        employeePayrollData.name = "john";
        console.log(employeePayrollData.toString());
    }
    catch (e) 
    {
        console.error(e);
    }
}

// UC 14
{
    class EmployeePayrollData {
        
        // constructor
        constructor(...params) {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }

        get id(){ return this._id; }
        set id(id)
        {
            if (id > 0)
                this._id = id;
            else throw 'Id should be non zero positive';
        }

        get name() { return this._name; }
        set name(name) 
        {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if (nameRegex.test(name))
                this._name = name;
            else throw 'Name is incorrect!';
        }
    
        get salary(){ return this._salary; }
        set salary(salary)
        {
            if (salary > 0)
                this._salary = salary;
            else throw 'Salary should be non zero positive';
        }
    
        get gender(){ return this._gender; }
        set gender(gender)
        {
            if (gender == 'M' || gender == 'F')
                this._gender = gender;
            else throw 'Gender should only be M or F';
        }
    
        get startDate(){ return this._startDate; }
        set startDate(startDate)
        {
            if (startDate <= new Date())
                this._startDate = startDate;
            else throw 'Date should be future date';
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
    console.log("UC-14: " + employeePayrollData.toString());
    let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 40000, 'F', new Date());
    console.log(newEmployeePayrollData.toString());
    
    try 
    {
        employeePayrollData.name = "john";
    }
    catch (e) 
    {
        console.error(e);
    }
    
    try
    {
        employeePayrollData.id = 3;
        employeePayrollData.name = "John";
        employeePayrollData.salary = 70000;
        employeePayrollData.gender = 'M'; 
        employeePayrollData.startDate = new Date("19 Oct 2007");
    }
    catch(e)
    {
        console.error(e);
    }
    console.log(employeePayrollDataObj.toString());
}
