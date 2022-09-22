let movies=[]

$('button').on('click', function (e) {    
    e.preventDefault();
   //check inputs
    if ($('input').eq(0).val().length > 2 &&isFinite($('input').eq(1).val()) && $('input').eq(1).val() >= 0 && $('input').eq(1).val() < 11) {
        
            $('.error').text("")
        
   
            $('table tr:last').after(`<tr id=${movies.length}><td><button class="removeBtn">X</button>
    ${$('input').eq(0).val()}
    </td>
    <td>${$('input').eq(1).val()}  
    </td></tr>`)
    
        movies.push({ movie: $('input').eq(0).val(), rating: $('input').eq(1).val() , id: movies.length})

    } 
    else {
        $('.error').text('Movie title must be > 2 characters and rating must be between 0 and 10')
    }
})

$('table').on('click', '.removeBtn', function () {
    //remove the same one in the array
    for (i = 0; i < movies.length; i++){
        if (movies[i].id.toString() == $(this).parent().parent().attr('id')) {
            movies.splice(i,1)
            break;
        }
    }
    $(this).parent().parent().remove()
})

$('table tr:first').on("click", "span", function () {
    $('tr:gt(0)').remove()
    if ($(this).attr('id') == 'titleSortUp') {
        movies.sort(movie_sortUp)

        makeTable()
    } else if ($(this).attr('id') == 'titleSortDown') {
        movies.sort(movie_sortDown)

        makeTable()
    }else if ($(this).attr('id') == 'ratingSortUp') {
        movies.sort(ratings_sortUp)

        makeTable()
    }else if ($(this).attr('id') == 'ratingSortDown') {
        movies.sort(ratings_sortDown)

        makeTable()
    }
    
})

function makeTable() {
    for (let movie of movies) {
        $('table tr:last').after(`<tr><td><button class="removeBtn">X</button>
        ${movie.movie}
        </td>
        <td>${movie.rating}  
        </td></tr>`)
    }
}

function movie_sortUp( a, b )
  {
  if ( a.movie.toLowerCase() < b.movie.toLowerCase()){
    return -1;
  }
  if ( a.movie.toLowerCase() > b.movie.toLowerCase()){
    return 1;
  }
  return 0;
}

function ratings_sortUp( a, b )
  {
  if ( a.rating< b.rating){
    return -1;
  }
  if ( a.rating > b.rating){
    return 1;
  }
  return 0;
}

function movie_sortDown( a, b )
  {
  if ( a.movie.toLowerCase() > b.movie.toLowerCase()){
    return -1;
  }
  if ( a.movie.toLowerCase() > b.movie.toLowerCase()){
    return 1;
  }
  return 0;
}

function ratings_sortDown( a, b )
  {
  if ( a.rating> b.rating){
    return -1;
  }
  if ( a.rating > b.rating){
    return 1;
  }
  return 0;
}