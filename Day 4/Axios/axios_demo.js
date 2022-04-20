
// GET REQUEST
//LONG WAY
function getTodos() {
//     //console.log('GET Request');
//     axios({
//         method: 'get',
//         url: "https://jsonplaceholder.typicode.com/todos",
//         params: {   // add url params to get specific return
//             _limit:20
//         }
//     }).then(res => showOutput(res))
//     .catch(err => alert(err));
// } 
//SHORT WAY
    //console.log('GET Request');
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then(res => showOutput(res))
      .catch(err => alert(err));
}

// GET ALL
function getAllPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts?_=5")
    .then(res => showOutput(res))
    .catch(err => alert(err));
  }

  // POST REQUEST 
  //LONG WAY 
  function addTodo() {
    // axios ({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data: {
    //         title:"i am new",
    //         completed: true
    //     }
    // }).then(res => showOutput(res))
    // .catch(err => alert(err));

    //SHORT WAY
    axios 
      .post('https://jsonplaceholder.typicode.com/todos', {
        title:"i am new",
        completed: true
      })
      .then(res => showOutput(res))
      .catch(err => alert(err));
  }


  // PUT/PATCH REQUEST  
  // put entire resource
  // post individual
  function updateTodo() {
    // we need to specify what we are changing
    // PATCH LONG WAY
    // axios ({
    //     method: "patch",
    //     url: 'https://jsonplaceholder.typicode.com/todos/5',
    //     data: {
    //         title: "Im watching you!"
    //     }
    // }).then(res => showOutput(res))
    // .catch(err => alert(err));
    // PATCH SHORT WAY
    // axios
    //   .patch("https://jsonplaceholder.typicode.com/todos/1", {
    //     title: "Updated Todo",
    //     completed: true
    // })
    // .then(res => showOutput(res))
    // .catch(err => alert(err));
    // // PUT SHORT WAY
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        title: "Updated Todo",
        completed: true
    })
    .then(res => showOutput(res))
    .catch(err => alert(err));
  }


  // DELETE REQUEST  
  function removeTodo() {
    // LONG WAY
    // axios({
    //     method:"DELETE",
    //     url: "https://jsonplaceholder.typicode.com/todos/5"
    //   }).then(res => showOutput(res))
    //   .catch(err => alert(err));
    // }
    // SHORT WAY
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => showOutput(res))
      .catch(err => alert(err));
  }

  // SIMULTANEOUS DATA  
  function getData() {
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    ])
      .then(axios.spread((todos, posts) => showOutput(posts)))
      .catch(err => alert(err));
  }

  // CUSTOM HEADERS  
  function customHeaders() {
    const config = {
      headers: {
        "Content-Type": "Application-Jason",
        Authorisation: "sometoken"
      }
    };
    axios 
      .post('https://jsonplaceholder.typicode.com/todos', {
        title:"i am new",
        completed: true
        }, 
        config
      )
      .then(res => showOutput(res))
      .catch(err => alert(err));
  }

  // TRANSFORMING REQUESTS & RESPONSES  
  function transformResponse() {
    console.log('Transform Response');
  }

  // ERROR HANDLING  
  function errorHandling() {
    console.log('Error Handling');
  }

  // CANCEL TOKEN  
  function cancelToken() {
    console.log('Cancel Token');
  }

  // INTERCEPTING REQUESTS & RESPONSES  
  axios.interceptors.request.use(
    config => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url} at ${new Date().getTime()}`);

      return config
    },
    error => {
      return Promise.reject(error);
    }
  );

  // AXIOS INSTANCES  
  // Show output in browser  
  function showOutput(res) {
    document.getElementById('res').innerHTML = `    
    <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

  // Event listeners  
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('get two').addEventListener('click', getAllPosts);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken); 