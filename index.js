let imdbParm;
let postParm;
let urlParm;
$(document).ready(() => {
 
	 
    $('#imdbID').click(()=>{
	
          imdbParm=$('#ipID').val();
          postParm=imdbID;
          urlParm='http://www.omdbapi.com/?i='+imdbParm+'&apikey=d10c03f'
          getAllData(); 
         

    })// end get data 

	  $('#byName').click(()=>{
          imdbParm=$('#mname').val();
          postParm=imdbID;
          urlParm='http://www.omdbapi.com/?t='+imdbParm+'&apikey=d10c03f'
          getAllData(); 
         

    })// end get data 
	
	 $('#byYear').click(()=>{
          imdbParm=$('#year').val();
          postParm=imdbID;
          urlParm='http://www.omdbapi.com/?y='+imdbParm+'&apikey=d10c03f'
          getAllData(); 
           

    })// end get data 
  


}); // end of document.ready()

let getAllData = () => {

    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: urlParm, 
        success: (data) => { // in case of success response
            
            console.log(data)
            
           $('#poster').html('<img src="' + data.Poster + '" class="img-fluid"/>');

           
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



