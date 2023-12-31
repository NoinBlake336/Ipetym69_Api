const Joi = require('joi');

const promps = {
    id:Joi.string(),
    user:Joi.string(),
    title:Joi.string(),
    description:Joi.string(),
    image:Joi.string(),
}

const getRecourceSchema = Joi.object({
    id:promps.id.required(),
});

const createRecourceSchema = Joi.object({
    user:promps.user.required(),
    title:promps.title.required(),
    description:promps.description.required(),
    image:promps.image.required(),    
});

const updateRecourceSchema = Joi.object({
    title:promps.title,
    description:promps.description,
    image: promps.image,
});


module.exports = {getRecourceSchema,createRecourceSchema,updateRecourceSchema};