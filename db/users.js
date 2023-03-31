const {v4 : uuid} = require('uuid');

let usersData={

    users : [{
        id : uuid(),
        username : "krishna",
        password : "1234",
        email_id : "k1234@gmail.com"
    },
    {
        id : uuid(),
        username : "krishna",
        password : "1235",
        email_id : "k1235@gmail.com"
    },
    {
        id : uuid(),
        username : "krishna",
        password : "1236",
        email_id : "k1236@gmail.com"
    }]



}

module.exports=usersData;