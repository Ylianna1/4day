
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

function func1(){
  return new  Promise(function(resolve, reject) {
   setTimeout(function() { // <- Store this INSIDE the Promise you created!
       resolve('https://swapi.co/api/people/1');// Resolve the following URL: https://swapi.co/api/people/1
       console.log('resolved1');

      }, 3000);
  });
}

  // call to the value (= URL) you resolved (use a GET request)


  // Finally, output the "name" property of the data you got back (e.g. data.name) inside
  

  // Make sure to set the appropriate headers 
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

button.addEventListener('click', function() {
    func1()
    .then(promise =>{  // Handle the Promise "response" (=> the value you resolved) and return a fetch()
      fetch(promise)  // Handle the response of the fetch() call and extract the JSON data, return that
                      // and handle it in yet another then() block
      .then((response) =>{ 

        return response.json();
      }) 
      .then((response)=>{
        output.innerHTML=`${response.name}`  
      })
      // Repeat the exercise with a PUT request you send to https://httpbin.org/put
      .then(fetch('https://httpbin.org/put',{ 
        method:'PUT', body:JSON.stringify({person: {name: 'Max', age: 28}})
      })
          .then((response)=>{
            return response.json();
          })
          .then((response)=>{
            console.log('response2');
            output2.innerHTML=`${response.json.person.name}`
          })
          .catch(error => output.innerHTML=`error3`) // To finish the assignment, add an error to URL and add handle the error both as
                                                    // a second argument to then() as well as via the alternative taught in the module
      )
      .catch(error => output.innerHTML=`error2`) 
  })
  .catch(error => output.innerHTML=`error1`)

});