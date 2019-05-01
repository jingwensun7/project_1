// 1. Pulls data on default restaurants
// 2. If the user inputs a restaurant, it navigates them to results and passes parameters
// 3. If the user inputs a restaurant, it navigates them to results and passes parameters



// Default restaurants
var default_settings = {
    fav_restaurants : ["akikos", "souvla", "cocobang","tonys pizza"
        ,"la taqueria","woodhouse fish company", "osha", 'mcdonalds'],
    default_location: "san francisco"
  };



// 1. On document load, makes a call to get the default restaurants
$(document).ready(function(){

    function pageloadCallback(result) {
        console.log("")
        console.log(result);
// --------------------------------------------------------------------------------
        // Add functionality to display recommended restaurants
// --------------------------------------------------------------------------------
        dom_manipulation.addSuggestions(result.businesses);
    };

    api_obj.yelpToCuisine (
        default_settings.fav_restaurants[Math.floor(Math.random()*default_settings.fav_restaurants.length)]
        , default_settings.default_location
        , [] 
        , [] 
        , [] 
        , pageloadCallback
        , "pageload" // - type of function
    )
});



// 2. When the user types in a restaurant and clicks search, this moves the user to results and passes param via the url
$("#search").on("click", function() {
    event.preventDefault();

    // navigates the user while manipulating the URL
    window.location.href = "result.html?restaurantstr=" + $("#restaurant-search-index").val() + "&" + "locationstr=SanFrancisco"
});



// 3. When the user clicks an image, it moves them to results
// --------------------------------------------------------------------------------
        // Add functionality to navigate the user when they click on an image of a restaurant
// --------------------------------------------------------------------------------
    $(document).on("click", '.suggested', function() {
    // event.preventDefault();

    // Updates the restaurantStr and restaruant searchbox on results.html
    restaurantStr = $(this).attr('restaurant');
    console.log(this);
    $('#restaurant-search-index').val($(this).attr('restaurant'));

    // this line in particular wouldn't work
    // navigates the user while manipulating the URL
    window.location.href = "result.html?";
    
});

