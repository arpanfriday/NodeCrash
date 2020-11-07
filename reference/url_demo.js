const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=1001&status=active');

//Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//Root doamin
console.log(myUrl.host);
//Hostname(does not get port)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search);

//Params Search
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc', 'Hello');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})