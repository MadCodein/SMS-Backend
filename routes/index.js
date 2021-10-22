const express = require("express");
const router = express.Router();
const {
  getAllMessageTemplates,
  getMessageTemplate,
} = require("../controllers/template");
const { getAllGroups, getGroup } = require("../controllers/group");

router.route("/template").get(getAllMessageTemplates);
router.route("/template/:id").get(getMessageTemplate);

router.route("/group").get(getAllGroups);
router.route("/group/:id").get(getGroup);

module.exports = router;
