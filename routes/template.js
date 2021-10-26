const express = require("express");
const router = express.Router();
const {
  getAllMessageTemplates,
  getMessageTemplate,
  createMessageTemplate,
  updateTemplateID,
  deleteTemplate,
} = require("../controllers/template");

router.route("/").get(getAllMessageTemplates).post(createMessageTemplate);
router
  .route("/:id")
  .get(getMessageTemplate)
  .put(updateTemplateID)
  .delete(deleteTemplate);

module.exports = router;
