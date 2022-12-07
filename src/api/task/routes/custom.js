module.exports = {
    routes: [
        {
            method: 'DELETE',
            path: '/delCompleteTask',
            handler: 'task.deleteCompletedTask',
            config: {
              policies: ['is-authenticated']
            }
        },
        {
            method: 'DELETE',
            path: '/delIncompleteTask',
            handler: 'task.deleteIncompleteTask',
            config: {
              policies: ['is-authenticated']
            }
        },
        {
            method: 'GET',
            path: '/getTaskAndUserData',
            handler: 'task.getTaskAndUserData',
            config: {
              policies: ['is-authenticated']
            }
            
        }
    ]
}