const express = require('express');
const controllers = require('../../controllers/contactsControllers');

const { validateBody, isValidId, authenticate } = require('../../middlewares');
const {
  createContactValidationSchema,
  updateContactValidationSchema,
} = require('../../utils/validation/userValidationSchemas');

const router = express.Router();

router.get('/', authenticate, controllers.getAll);

router.get('/:contactId', isValidId, authenticate, controllers.getById);

router.post(
  '/',
  authenticate,
  validateBody(createContactValidationSchema),
  controllers.add
);

router.put(
  '/:contactId',
  isValidId,
  authenticate,
  validateBody(updateContactValidationSchema),
  controllers.updateById
);

router.delete('/:contactId', authenticate, controllers.deleteById);

module.exports = router;
