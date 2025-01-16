localStorage.clear()

const admin = [{
    "id": "A001",
    "email": "admin@example.com",
    "password": "123"
}]


const employees = [
    {
      "id": "E001",
      "firstname": "Arjun",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "taskName": "Prepare Presentation",
          "category": "Work",
          "taskDate": "10-12-2024",
          "taskDeadline": "15-12-2024",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskName": "Submit Report",
          "category": "Documentation",
          "taskDate": "09-12-2024",
          "taskDeadline": "12-12-2024",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": "E002",
      "firstname": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskName": "Client Meeting",
          "category": "Meetings",
          "taskDate": "11-12-2024",
          "taskDeadline": "13-12-2024",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskName": "Prepare Budget",
          "category": "Finance",
          "taskDate": "08-12-2024",
          "taskDeadline": "10-12-2024",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": "E003",
      "firstname": "Rohan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskName": "Design Mockups",
          "category": "Design",
          "taskDate": "09-12-2024",
          "taskDeadline": "14-12-2024",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskName": "Fix Bugs",
          "category": "Development",
          "taskDate": "07-12-2024",
          "taskDeadline": "10-12-2024",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": "E004",
      "firstname": "Ananya",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskName": "Plan Event",
          "category": "Planning",
          "taskDate": "10-12-2024",
          "taskDeadline": "16-12-2024",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskName": "Review Code",
          "category": "Development",
          "taskDate": "08-12-2024",
          "taskDeadline": "11-12-2024",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": "E005",
      "firstname": "Sneha",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskName": "Write Documentation",
          "category": "Documentation",
          "taskDate": "09-12-2024",
          "taskDeadline": "13-12-2024",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskName": "Test Application",
          "category": "Testing",
          "taskDate": "08-12-2024",
          "taskDeadline": "12-12-2024",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    }
  ];
  


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem('employees')) 
    const adminData = JSON.parse(localStorage.getItem('admin')) 

    return {employees, admin}
}