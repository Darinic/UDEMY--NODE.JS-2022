const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4]).then(values => {
    console.log(values)
})

// promise
//   .then(result => result + '!')
//   .then(result2 => result2 + '?')
//   .catch(() => console.log("error!"));
//   .then(result3 => {
//     console.log(result3 + '!');
//   })

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
.then(results => {
    console.log('users', results[0])
    console.log('posts', results[1])
    console.log('albums', results[2])
}).catch(err => {
    console.log(err)

})
}));

const getData = async function() {
    try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
         fetch(url).then(response => response.json())
    ))
    console.log('users', users[0])
    console.log('posts', posts[1])
    console.log('albums', albums[2])
    } catch (err) {
        console.log('oops', err)
    }
}

const animals = {
    tiger: 23, 
    lion: 5,
    monkey: 2,
    bird:40
}

const { tiger, lion, ...rest} = animals;

const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
    return a + b + c + d + e;
}

function objectSpread(p1,p2,p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

objectSpread(tiger, lion, rest)

// for await of 

const loopThroughUrls= url => {
    for (url of urls) {
        console.log(url)
    }
}

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await ( let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data)
    }
}

//parallel

const promisify = (item, delay) =>
    new Promise((resolve) => 
        setTimeout(() => {
            resolve(item)
        }, delay)
    )

    const a = () => promisify('a', 1000);
    const b = () => promisify('b', 50);
    const c = () => promisify('c', 3000);

    async function parallel() {
        const promises = [a(), b(), c()];
        const [output1, output2, output3] = await Promise.all(promises);
        return `parallel is done: ${output1}, ${output2}, ${output3}`;
    }

    async function race() {
        const promises = [a(), b(), c()]
        const output1 = await Promise.race(promises);
        return `race is done: ${output1}`
    }

    