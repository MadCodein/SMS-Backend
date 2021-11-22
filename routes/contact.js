const express = require('express')
const router = express.Router()

const {
  getAllContacts,
  getGroupContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contact')

router.route('/').get(getAllContacts)
router
  .route('/:id')
  .get(getContact)
  .post(createContact)
  .put(updateContact)
router.route('/:id/:group_id').delete(deleteContact)
router.route('/group/:id').get(getGroupContacts)

module.exports = router
