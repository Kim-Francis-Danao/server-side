'use strict';

/**
 * task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task', ({strapi}) => ({
    async deleteCompletedTask(ctx) {
        await strapi.db.query('api::task.task')
            .deleteMany({
                where: {
                    isDone: {
                        $eq: true
                    }
                }
            })
            .then( response => {
                ctx.body = response;
            })
            .catch(error => {
                ctx.badrequest = error;
            })
    },

    async deleteIncompleteTask(ctx) {
        await strapi.db.query('api::task.task')
            .deleteMany({
                where: {
                    isDone: {
                        $eq: false
                    }
                }
            })
            .then( response => {
                ctx.body = response;
            })
            .catch(error => {
                ctx.badrequest = error;
            })
    },

    async getTaskAndUserData(ctx) {
        await strapi.db.query('api::task.task')
            .findMany({
                populate: {
                    users_permissions_user: {
                        where: {
                            username: {
                                $eq: 'kim'
                            }
                        }
                    }
                }
            })
            .then(response => {
                ctx.body = response;
            })
            .catch(error => {
                ctx.badrequest = error.name;
            });          
    }
}));

