const express = require('express');
const controllers = require('../../controllers/authControllers');
const { validateBody, authenticate, upload } = require('../../middlewares');
const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  resendEmailVerifySchema,
} = require('../../utils/validation/authValidationSchemas');

const router = express.Router();

router.post('/register', validateBody(registerSchema), controllers.register);
router.get('/verify/:verifyToken', controllers.verifyEmail);

router.post(
  '/verify',
  validateBody(resendEmailVerifySchema),
  controllers.resendEmailVerify
);

router.post('/login', validateBody(loginSchema), controllers.login);

router.get('/current', authenticate, controllers.current);

router.post('/logout', authenticate, controllers.logout);

router.patch(
  '/users',
  authenticate,
  validateBody(updateSubscriptionSchema),
  controllers.updateSubscription
);

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  controllers.updateAvatar
);

module.exports = router;
