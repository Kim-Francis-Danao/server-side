module.exports = {
    routes: [
        {
            method: 'DELETE',
            path: '/delCompleteTask',
            handler: 'task.deleteCompletedTask'
        },
        {
            method: 'DELETE',
            path: '/delIncompleteTask',
            handler: 'task.deleteIncompleteTask'
        }
    ]
}