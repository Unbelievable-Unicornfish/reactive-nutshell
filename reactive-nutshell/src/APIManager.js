
const Database = Object.create({}, {

    //gett
    getUserByUserName: {
        value: (userName) => {
            return fetch(`http://localhost:5002/users?userName=${userName}`)
                .then(e => e.json())
        }
    },
    getIdOfCurrentUser: {
        value: () => {
            const databaseString = sessionStorage.getItem("credentials")
            const currentUserObject = JSON.parse(databaseString)
            console.log("User stuff", currentUserObject)
            return currentUserObject.currentUserId
        }
    },

    getAllArticles: {
        value: () => {
            return fetch("http://localhost:5002/articles")
                .then(e => e.json())
        }
    },
    addArticle: {
        value: (newObject) => {
            return fetch("http://localhost:5002/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            })
                // When add is finished, retrieve the new list of articles
                .then(() => {
                    // Remember you HAVE TO return this fetch to the subsequenet `then()`
                    return fetch("http://localhost:5002/articles")
                })
                // Once the new array of articles is retrieved, set the state
                .then(a => a.json())
        }
    },
    deleteArticle: {
        value: (articleId) => {
            // Delete the specified article
            return fetch(`http://localhost:5002/articles/${articleId}`, {
                method: "DELETE"
            })
                // When DELETE is finished, retrieve the new list of articles
                .then(() => {
                    // Remember you HAVE TO return this fetch to the subsequenet `then()`
                    return fetch("http://localhost:5002/articles")
                })
                // Once the new array of animals is retrieved, set the state
                .then(a => a.json())
        }
    },

    //this is the chat function section
    gettingAllMessagesFromDatabase: {

     value: () => {
         return fetch("http://localhost:5002/messages?_expand=user")
        //  .then(e => e.json())
     }

    },
    // this is the task function section
    getAllTasks: {
        value: () => {
            return fetch("http://localhost:5002/tasks?completed=false")
                .then(e => e.json())
        }
    },
    updateOneItem: {
        value: (itemId) => {
            console.log(itemId)
            return fetch(`http://localhost:5002/tasks/${itemId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    completed: true
                }),
                headers: { "Content-Type": "application/json" },
            })
            .then(e => e.json())
        }
    },

    addMessage: {
        value: (newObject) => {
        return fetch("http://localhost:5002/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        })
            // When POST is finished, retrieve the new list of tasks
            .then(() => {
                return fetch("http://localhost:5002/messages?_expand=user")
            })
            .then(a => a.json())
        }
    },
    
      getAllEvents: {
        value: () => {
            return fetch("http://localhost:5002/events")
            .then(e => e.json())
        }
    }

    })

    

export default Database