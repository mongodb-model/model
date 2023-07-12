 /*
|------------------------------------------------------------------------------------
| The post method or HTTPS POST method
|------------------------------------------------------------------------------------
|
| the post method has the following form:
|    async post(url = parse(url), data = JSON.stringify(data), callback = () => { }, headers = { 'Content-Type': 'application/json' })

*/

const postData =  {
    postId: 20,
    name: 'et sint quia dolor et est ea nulla cum',
    email: 'cool.javascript@gmail.com',
    body: 'Hello'
  }
  
  /**
  *  Promise 
  */
  // model.DELETE('http://localhost:3000/posts/1')
  // .then(result => console.log(result))
  // .catch(error => console.log(error));
  
  /**
  * Event 
  */
  
  // model.DELETE('http://localhost:3000/posts/1')
   
  // model.on('DELETE', result => console.log(result));
  // model.on('DELETE-error', error => console.error(error));
  
  /**
  * Callback
  */
  
  // model.DELETE('http://localhost:3000/posts/1', (err, result) =>{
  //   if(err) return console.error(err);
  //   console.log(result);
  // })
   