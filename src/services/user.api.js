const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}

const addUser = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(value => value.json())
}

export {getUsers, addUser}