const Joi = require('joi');

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
  subscription: Joi.string().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

const resendEmailVerifySchema = Joi.object({
  email: Joi.string().required().messages({
    'any.required': `Missing required email field`,
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  resendEmailVerifySchema,
};
