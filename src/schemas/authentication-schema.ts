import Joi from "joi";

export const signInSchema = Joi.object({
    ra: Joi.number().required(),
    password: Joi.string().required().min(4),
    name: Joi.string().required().min(3),
})

export const signUpSchema = Joi.object({
    ra: Joi.number().required(),
    password: Joi.string().required().min(4),
})