let imdbParm;
let postParm;
let urlParm;
let imdbParm1;
let dataCount =0;

$(document).ready(() => {

   
    $('#imdbID').click(()=>{
	        
          imdbParm=$('#ipID').val();
          postParm=imdbID;
          urlParm='https://www.omdbapi.com/?i='+imdbParm+'&apikey=d10c03f';
          dataCount=dataCount+1;
          getAllData(); 
    })// end get data 


	  $('#byName').click(()=>{
          imdbParm=$('#mname').val();
          postParm=imdbID;
          urlParm='https://www.omdbapi.com/?t='+imdbParm+'&apikey=d10c03f';
            dataCount=dataCount+1;
          getAllData(); 
         

    })// end get data 
	
	 $('#byYear').click(()=>{
          imdbParm=$('#year').val();
          imdbParm1=$('#mname1').val();
          postParm=imdbID;
          urlParm='https://www.omdbapi.com/?y='+imdbParm+'&t='+imdbParm1+'&apikey=d10c03f';
          dataCount=dataCount+1;
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
           if (dataCount == 1)
           { 
           $('#poster').html('<img src="' + data.Poster + '" class="img-fluid" id="pster"/>');
           $('#title').append(data.Title);
            $('#act').append(data.Actors);
             $('#dir').append(data.Director);
              $('#gen').append(data.Genre);
               $('#ir').append(data.imdbRating);
                $('#rt').append(data.Runtime);
              }

              else 
              {

                 var divClone = $("#copy").clone();
                  divClone.attr("id","copy"+dataCount);
                  divClone.find("#poster").attr("id","poster"+dataCount);
                  divClone.find("#title").attr("id","title"+dataCount);
                  divClone.find("#act").attr("id","act"+dataCount);
                  divClone.find("#dir").attr("id","dir"+dataCount);
                  divClone.find("#gen").attr("id","gen"+dataCount);
                  divClone.find("#ir").attr("id","ir"+dataCount);
                  divClone.find("#rt").attr("id","rt"+dataCount);
                  divClone.appendTo("body").show();
                  
              $('#poster'+dataCount).html('<img src="' + data.Poster + '" class="img-fluid"/>');
              $('#title'+dataCount).append(data.Title);
               $('#act'+dataCount).append(data.Actors);
               $('#dir'+dataCount).append(data.Director);
                $('#gen'+dataCount).append(data.Genre);
                $('#ir'+dataCount).append(data.imdbRating);
                $('#rt'+dataCount).append(data.Runtime);
                 $('html, body').animate({
                  scrollTop: $("#copy"+dataCount).offset().top
                  }, 2000);
              }
           
        },
        error: (data) => { // in case of error response

            alert("Oops Enter correct Info and try again")

           
        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
       
        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData



