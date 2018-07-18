
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
    //this is the chat function section
    gettingAllMessagesFromDatabase: {
     value: () => {
         return fetch("http://localhost:5002/messages")
         .then(e => e.json())
     }
    }
})
export default Database