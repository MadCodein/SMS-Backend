const express = require("express");
const router = express.Router();
const {
  getAllGroups,
  getGroupID,
  createGroup,
  updateGroupID,
  deleteGroup,
} = require("../controllers/group");

router.route("/").get(getAllGroups).post(createGroup);
router.route("/:id").get(getGroupID).put(updateGroupID).delete(deleteGroup);

module.exports = router;
