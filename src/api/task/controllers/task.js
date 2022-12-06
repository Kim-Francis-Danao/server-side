'use strict';

/**
 * task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task', ({strapi}) => ({
    async deleteCompletedTask(ctx) {
        try {
            const entries = await strapi.db.query('api::task.task').deleteMany({
                where: {
                    isDone: {
                        $eq: true
                    }
                }
            })
            return entries;
        } catch(error) {
            ctx.body = error; 
        }
    },

    async deleteIncompleteTask(ctx) {
        try {
            const entries = await strapi.db.query('api::task.task').deleteMany({
                where: {
                    isDone: {
                        $eq: false
                    }
                }
            })
            return entries;
        } catch(error) {
            ctx.body = error; 
        }
    }
}));

