const jwt = require('jsonwebtoken');

const  generateTokenFromPromise = async email => {

    const token = await new Promise((resolve, reject) => jwt.sign({email: email},'secret3023', (error, token) => error ? reject(error) : resolve(token)));
    return token 
}

// const token = generateTokenFromPromise('ericson.weah@gmail.com')//.then(console.log).catch(console.error)

// console.log(token)

