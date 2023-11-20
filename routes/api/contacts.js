const express = require('express');
const controllers = require('../../controllers/contactsControllers');

const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, controllers.getAll);

router.get('/:contactId', isValidId, authenticate, controllers.getById);

router.post(
  '/',
  authenticate,
  validateBody(schemas.createContactValidationSchema),
  controllers.add
);

router.put(
  '/:contactId',
  isValidId,
  authenticate,
  validateBody(schemas.updateContactValidationSchema),
  controllers.updateById
);

router.delete('/:contactId', authenticate, controllers.deleteById);

module.exports = router;
