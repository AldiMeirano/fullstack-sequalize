const penaltyController = require("../controllers/penaltyController");

const router = require("express").Router();
/**
 * @swagger
 * /api/v1/penalty:
 *   post:
 *     summary: Create a new penalty
 *     tags: [Penalties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: The penalty price
 *             example:
 *               price: 100.0
 *     responses:
 *       201:
 *         description: Penalty created successfully
 *       400:
 *         description: Bad request
 *   get:
 *     summary: Get all penalties
 *     tags: [Penalties]
 *     responses:
 *       200:
 *         description: A list of penalties
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The penalty ID
 *                   price:
 *                     type: number
 *                     description: The penalty price
 *       404:
 *         description: No penalties found
 * /api/v1/penalty/{id}:
 *   delete:
 *     summary: Delete a penalty by ID
 *     tags: [Penalties]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The penalty ID
 *     responses:
 *       204:
 *         description: Penalty deleted successfully
 *       404:
 *         description: Penalty not found
 *   patch:
 *     summary: Update a penalty by ID
 *     tags: [Penalties]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The penalty ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: The penalty price
 *             example:
 *               price: 150.0
 *     responses:
 *       200:
 *         description: Penalty updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Penalty not found
 */

router.post("/", penaltyController.penaltyController);
router.get("/", penaltyController.getAllDataPenalty);
router.delete("/:id", penaltyController.deleteController);
router.patch("/:id", penaltyController.updatePenaltyController);
module.exports = router;
