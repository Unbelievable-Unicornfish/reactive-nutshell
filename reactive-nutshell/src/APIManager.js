
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


    getHeadlinesFromNewsAPI: {
        value: () => {
            return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d7608690ec8d44f887731f41f9c64762")
                .then(e => e.json())

        }
    }

})
export default Database