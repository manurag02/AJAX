let imdbID;
let postParm;
$(document).ready(() => {

    $('#imdbID').click(()=>{
          imdbID=$('#ipID').val();
          postParm=imdbID;
          getAllData(); 
          getPoster(); 

    })// end get data 

  


}); // end of document.ready()

let getAllData = () => {

    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://www.omdbapi.com/?i='+imdbID+'&apikey=d10c03f', 
        success: (data) => { // in case of success response
            
            console.log(data)
            
           

           
        },
        error: (data) => { // in case of error response

            alert("some error occured 1")

        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData


let getPoster = () => {

    console.log("making poster request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://img.omdbapi.com/?'+postParm+'&apikey=d10c03f', 
        success: (data) => { // in case of success response
            
            console.log(data)
            
           

           
        },
        error: (data) => { // in case of error response

            alert("some error occured 2")

        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

