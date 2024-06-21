const bookController = require("../controllers/bookController");
const verifyToken = require("../middleware/jwt");
const uploader = require("../middleware/uploader");
const router = require("express").Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - quantity
 *        
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         image:
 *           type: string
 *           description: URL of the book image
 *         quantity:
 *           type: integer
 *           description: The quantity of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 
 *       example:    
         id:16    
 *         quantity: 10
 *         title: "The Great Book"
 *         author: "John Doe"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     addBook:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - quantity
 *        
 *       properties:

 *         quantity:
 *           type: integer
 *           description: The quantity of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book

 *       example:        
 *         quantity: 10
 *         title: "The Great Book"
 *         author: "John Doe"
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * /api/v1/book:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *
 */

/**
 * @swagger
 * /api/v1/book/add-book:
 *   post:
 *     summary: Adds a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addBook'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/addBook'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/book/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

/**
 * @swagger
 * /api/v1/book/{id}:
 *   patch:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title of the book
 *               author:
 *                 type: string
 *                 description: The author of the book
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the book
 *             example:
 *               title: "Updated Book Title"
 *               author: "Updated Author Name"
 *               quantity: 10
 *     responses:
 *       200:
 *         description: The book was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - author
 *         - quantity
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         quantity:
 *           type: integer
 *           description: The quantity of the book
 *       example:
 *         id   : 1
 *         image : /IMGQWD23123
 *         title: "Sample Book Title"
 *         author: "Author Name"
 *         quantity: 5
 *         createdAt: Date,
 *         updateAt: Date
 */

/**
 * @swagger
 * /api/v1/book/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book id
 *     requestBody:
 *       description: Optional request body for additional validation
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               confirmation:
 *                 type: boolean
 *                 description: Confirmation to delete the book
 *             example:
 *               confirmation: false
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

/**
 * @swagger
 * /api/v1/book/search:
 *   post:
 *     summary: Search for a book by author or title
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *         required: false
 *         description: The author's name
 *         example: "John Doe"
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: false
 *         description: The title of the book
 *         example: "The Great Book"
 *     responses:
 *       200:
 *         description: The search results
 *       404:
 *         description: No results found
 */

/**
 * @swagger
 * /api/v1/book/upload/{id}:
 *   patch:
 *     summary: Upload an image for a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: The image was successfully uploaded
 *       404:
 *         description: The book was not found
 */

router.get("/", bookController.getAllDataBook);
router.post("/add-book", verifyToken, bookController.addNewBook);
router.get("/:id", bookController.getOneBook);
router.patch("/:id", verifyToken, bookController.updateDataBook);
router.delete("/:id", verifyToken, bookController.deleteDataBook);
router.post("/search", bookController.searchBookOrAuthor);
router.patch(
  "/upload/:id",
  verifyToken,
  uploader("IMG", "/images").single("file"),
  bookController.uploadImage
);
module.exports = router;
