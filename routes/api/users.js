const express = require('express');
const controllers = require('../../controllers/authControllers');
const { schemas } = require('../../models/user');
const { validateBody, authenticate } = require('../../middlewares');

const router = express.Router();

router.post(
  '/register',
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post('/login', validateBody(schemas.loginSchema), controllers.login);

router.get('/current', authenticate, controllers.current);

router.post('/logout', authenticate, controllers.logout);

router.patch(
  '/users',
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  controllers.updateSubscription
);

module.exports = router;
