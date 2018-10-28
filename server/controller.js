module.exports ={
    createUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;
        // let newUser = {username: username, password: password};

        dbInstance.create_user([username, password])
        .then( users => res.status(200).json(users[0]))
        .catch(error => {
            res.status(500).json({'post method attempt': error})
        })
    },
    loginUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;
        console.log('loginUser, before db check', username, password)
        // let newUser = {username: username, password: password};
        dbInstance.check_user([username, password])
        .then( users => {
        console.log('loginUser, after db check, users',s users)
        res.status(200).json(users)})
        .catch( error => {
            res.status(500).json({'post method attempt': error})
        })
    },
    
    // getUser: (req, res, next) => {

    // }
}

//res.status(200).json({message:res})