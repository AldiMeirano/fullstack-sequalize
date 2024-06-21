const employeController = require("../controllers/employeController");
const router = require("express").Router();

/**
 * @swagger
 * /api/v1/employe:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The employee's name
 *               position:
 *                 type: string
 *                 description: The employee's position
 *               department:
 *                 type: string
 *                 description: The employee's department
 *             example:
 *               employe: "Software "
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Bad request
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The employee ID
 *                   name:
 *                     type: string
 *                     description: The employee's name
 *                   position:
 *                     type: string
 *                     description: The employee's position
 *                   department:
 *                     type: string
 *                     description: The employee's department
 *       404:
 *         description: No employees found
 * /api/v1/employe/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee ID
 *     responses:
 *       200:
 *         description: The employee data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The employee ID
 *                 name:
 *                   type: string
 *                   description: The employee's name
 *                 position:
 *                   type: string
 *                   description: The employee's position
 *                 department:
 *                   type: string
 *                   description: The employee's department
 *       404:
 *         description: Employee not found
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee ID
 *     responses:
 *       204:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 *   patch:
 *     summary: Update an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The employee's name
 *               name:
 *                 type: string
 *                 description: The employee's position

 *             example:
 *               employe: "Jane Doe"
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Employee not found
 */

router.post("/", employeController.createEmploye);
router.get("/", employeController.getAllEmployee);
router.get("/:id", employeController.getEmployeById);
router.delete("/:id", employeController.deleteEmploye);
router.patch("/:id", employeController.UpdateEmploye);

module.exports = router;
