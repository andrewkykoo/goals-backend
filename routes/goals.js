const express = require("express");
const {
  getGoals,
  getSingleGoal,
  createGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.get("/", getGoals);
router.get("/:id", getSingleGoal);
router.post("/", createGoal);
router.delete("/:id", deleteGoal);
router.patch("/:id", updateGoal);

module.exports = router;
