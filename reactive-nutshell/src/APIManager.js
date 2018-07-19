
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
        //   console.log("User stuff", currentUserObject)
        return currentUserObject.currentUserId
        }
    },
    getFriends: {
        value: (currentUserId) => {
        return fetch (`http://localhost:5002/friends?userId=${currentUserId}`)
        .then(e => e.json())
        .then((friendInfo) =>
    {
        console.log(friendInfo)
        console.log(friendInfo[2].friendId)

        const promiseArray = friendInfo.map(element => {
            return  fetch (`http://localhost:5002/users/${element.friendId}`).then((Response) =>{
                return Response.json()
            })

        })
            console.log(promiseArray)
            console.log(Promise.all(promiseArray))
                return Promise.all(promiseArray)
                
            },
)
        }
    },

    deleteFriends: {
        value: (friendId) => {
        // Delete the specified friend
        return fetch(`http://localhost:5002/users/${friendId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of friends
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/users")
            })
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
        }
    },
    // deleteFriend: {
    //     value: (friendId) => {
    //     return fetch(`http://localhost:5002/users/${friendId}`, {
    //         method: "DELETE"
    //     })
    //     }
    // }




})
export default Database