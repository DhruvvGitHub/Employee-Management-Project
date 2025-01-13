const admin = [{
    "id": "A001",
    "email": "admin@example.com",
    "password": "123"
}]


const employees = [
    {
        "id": "E001",
        "email": "employee1@example.com",
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
        ]
    },
    {
        "id": "E002",
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
        ]
    },
    {
        "id": "E003",
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
        ]
    },
    {
        "id": "E004",
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
        ]
    },
    {
        "id": "E005",
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
        ]
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem('employees')) 
    const adminData = JSON.parse(localStorage.getItem('admin')) 

    console.log(employeeData, adminData);
}