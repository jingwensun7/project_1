dom_manipulation = {
    // Nested forEach functions to create divs with appropiate styling for each restaurant
    addSuggestions : function(businesses) {
        // splice to remove unnecessary amount of restaurants (6-19)
        businesses.splice(6,14);
        console.log(businesses)

        businesses.forEach(function(business) {
            var suggestion = $('<div>');
            suggestion.addClass('col-md-4 suggested');
            suggestion.append('<img class="imgportf suggested-rest" restaurant=' +business.name+ ' src="' +business.image_url+ '" />');
            suggestion.append('<h4 class="suggested-rest" restaurant=' +business.name+ ' >' +business.name+ '</h4>');
            $('#suggestions').append(suggestion);
        });

        // hides loading image and unhides suggestion divs once all suggestions are loadded above
        $('#loading').addClass('hidden');
        $('#suggestions').removeClass('hidden');
    },
}; 