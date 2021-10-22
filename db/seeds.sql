INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, department_id)
VALUES ("Salesperson", 1),
       ("Lead Engineer", 2),
       ("Software Engineer", 2),
       ("Account Manager", 3),
       ("Accountant", 3),
       ("Legal Team Lead", 4 ),
       ("Lawyer", 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES 
    ("Mike", "Chan", 1),
    ("Ashley", "Rodriguez", 2),
    ("Kevin", "Tupik", 3),
    ("Kunamn", "Singh", 4),
    ("Malia", "Brown", 5),
    ("Sarah", "Lourde", 6),
    ("Tom", "Allen", 7);
    