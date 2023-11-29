function findUserByUsername(users, username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i];
      }
    }
  }

    function removeUser(usersArray, usernameToRemove) {
      const indexToRemove = usersArray.findIndex(user => user.username === usernameToRemove);
      if (indexToRemove !== -1) {
        const removedUser = usersArray.splice(indexToRemove, 1)[0];
        return removedUser;
      } else {
        
        return undefined;
      }
    }