const transactionController = require("../controllers/transactionController");
const uploader = require("../middleware/uploader");
const router = require("express").Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     ID:
 *       type: integer
 *       description: The auto-generated id of the transaction    
 *     BookID:
 *       type: integer
 *       description: The ID of the book
 *     UserID:
 *       type: integer
 *       description: The ID of the user
 *     Date:
 *       type: string
 *       format: date
 *       description: The date in YYYY-MM-DD format
 *     Penalty:
 *       type: number
 *       description: Penalty for late return
 *     Status:
 *       type: string
 *       enum: [issued, returned, overdue]
 *       description: The status of the transaction
 *     Transaction:
 *       type: object
 *       required:
 *         - bookId
 *         - userId
 *         - dueDate
 *       properties:
 *         id:
 *           $ref: '#/components/schemas/ID'
 *         bookId:
 *           $ref: '#/components/schemas/BookID'
 *         userId:
 *           $ref: '#/components/schemas/UserID'
 *         checkIn:
 *           $ref: '#/components/schemas/Date'
 *         checkOut:
 *           $ref: '#/components/schemas/Date'
 *         penaltyId:
 *           $ref: '#/components/schemas/Penalty'
 *         status:
 *           $ref: '#/components/schemas/Status'
 *       example:
 *        
 *         bookId: 101
 *         userId: 2021
 *         checkIn: 2023-05-01
 *         checkOut: 2023-05-15

 */

/**
 * @swagger
 * /api/v1/transaction:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookid
 *               - userId
 *               - employeId
 *               - checkIn
 *               - cart
 *               - checkOut
 *             properties:
 *               bookid:
 *                 type: integer
 *                 description: The ID of the book
 *               userId:
 *                 type: integer
 *                 description: The ID of the user
 *               cart:
 *                 type: integer
 *                 description: Borrow book
 *               employeId:
 *                 type: integer
 *                 description: The employe id
 *               checkIn:
 *                 type: string
 *                 format: date
 *                 description: The check-in date in YYYY-MM-DD format
 *               checkOut:
 *                 type: string
 *                 format: date
 *                 description: The check-out date in YYYY-MM-DD format
 *               status:
 *                 type: string
 *                 enum: [issued, returned, overdue]
 *                 description: The status of the transaction
 *             example:
 *               bookid: 101
 *               userId: 2021
 *               cart: 1
 *               employeId: 1
 *               checkIn: 2023-05-01
 *               checkOut: 2023-05-15
 *     responses:
 *       201:
 *         description: The transaction was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The auto-generated id of the transaction
 *                 bookId:
 *                   type: integer
 *                   description: The ID of the book
 *                 userId:
 *                   type: integer
 *                   description: The ID of the user
 *                 cart:
 *                   type: integer
 *                   description: Borrow book
 *                 employeId:
 *                   type: integer
 *                   description: The employe id
 *                 checkIn:
 *                   type: string
 *                   format: date
 *                   description: The check-in date in YYYY-MM-DD format
 *                 checkOut:
 *                   type: string
 *                   format: date
 *                   description: The check-out date in YYYY-MM-DD format
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/transaction/{id}:
 *   get:
 *     summary: Get a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The transaction id
 *     responses:
 *       200:
 *         description: The transaction description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       404:
 *         description: The transaction was not found
 */

/**
 * @swagger
 * /api/v1/transaction/penalty:
 *   patch:
 *     summary: Calculate penalty for a transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *               token:
 *                 type: string
 *                 description: Authentication token
 *               penaltyId:
 *                 type: integer
 *                 description: Identifier for the penalty
 *             example:
 *
 *               token: 'token transaction'
 *               penaltyId: 123
 *     responses:
 *       200:
 *         description: The penalty was successfully calculated
 *       404:
 *         description: The transaction was not found
 */

/**
 * @swagger
 * /api/v1/transaction/return-book:
 *   patch:
 *     summary: Return a book
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 $ref: '#/components/schemas/TOKEN'
 *             example:
 *              token: 'token transaction'
 *
 *     responses:
 *       200:
 *         description: The book was successfully returned
 *       404:
 *         description: The transaction was not found
 */

/**
 * @swagger
 * /api/v1/transaction/extratime:
 *   patch:
 *     summary: Extend the return time for a transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 $ref: '#/components/schemas/ID'
 *               extraDays:
 *                 type: integer
 *                 description: Number of extra days
 *             example:
 *               token: token transaction
 *               checkOut: add new time
 *     responses:
 *       200:
 *         description: The extra time was successfully added
 *       404:
 *         description: The transaction was not found
 */

/**
 * @swagger
 * /api/v1/transaction:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: List of all transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaction'
 *       404:
 *         description: No transactions found
 */
router.post("/", transactionController.createTransaction);
router.get("/:id", transactionController.getDataTransaction);
router.patch("/penalty", transactionController.getPenalty);
router.patch("/return-book", transactionController.bookReturner);
router.get("/", transactionController.getAllTransaction);
router.patch("/extratime", transactionController.extraTimeController);


module.exports = router;
