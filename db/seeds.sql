INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Management");

INSERT INTO roles (title, department_id)
VALUES ("Salesperson", 1),
       ("Lead Engineer", 2),
       ("Software Engineer", 2),
       ("Account Manager", 3),
       ("Accountant", 3),
       ("Legal Team Lead", 4 ),
       ("Lawyer", 4),
       ("Manager", 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jonathan", "Newman", 8, NULL),
    ("Mike", "Chan", 1, 1),
    ("Ashley", "Rodriguez", 2, 1),
    ("Kevin", "Tupik", 3, 1),
    ("Kunamn", "Singh", 4, 1),
    ("Malia", "Brown", 5, 1),
    ("Sarah", "Lourde", 6, 1),
    ("Tom", "Allen", 7, 1);
    