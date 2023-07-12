const Base = require('../base');

const base = new Base();


//get method : get(url = 'https://jsonplaceholder.typicode.com/comments', options = {}, fn = () => {}, data = [])

 base.get(); //default url : https://jsonplaceholder.typicode.com/comments
 base.on('get', data => console.log(data));
 base.on('get-error', error => console.error(error));

// base.get('https://jsonplaceholder.typicode.com/comments', (error, data) => {
//     console.log(data)
// })

//  base.delete('https://jsonplaceholder.typicode.com/comments/1'); //default url : https://jsonplaceholder.typicode.com/comments
//  base.on('delete', data => console.log(data));
//  base.on('delete-error', error => console.error(error));



// const data =  {
//     postId: 20,
//     name: 'laudantium delectus nam',
//     email: 'Hildegard.Aufderhar@howard.com',
//     body: 'NEW POST aut quam consequatur sit et\n' +
//       'repellat maiores laborum similique voluptatem necessitatibus nihil\n' +
//       'et debitis nemo occaecati cupiditate\n' +
//       'modi dolorum quia aut'
//   }

//  base.post('https://jsonplaceholder.typicode.com/comments/',data); //default url : https://jsonplaceholder.typicode.com/comments

//  base.on('post', data => console.log(data));
//  base.on('post-error', error => console.error(error));


//  base.put('https://jsonplaceholder.typicode.com/comments/1',data); //default url : https://jsonplaceholder.typicode.com/comments

//  base.on('put', data => console.log(data));
//  base.on('put-error', error => console.error(error));
// const putResult = base.put('https://jsonplaceholder.typicode.com/comments/1',data);
// console.log(putResult)

// base.put('https://jsonplaceholder.typicode.com/comments/1', data, (err, data) => {

// console.log(data)
// })
