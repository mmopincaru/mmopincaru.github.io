$(document).ready(function() {

        var addUsernameField = $('#searchusers');

        var addKeywordField = $('#searchkeys');

        var i = $('#searchusers p').size() + 1;

        var j = $('#searkeys p').size() + 1;
        
        $('#addUser').live('click', function() {
                if(i>10) {

                        alert("Only 10 usernames allowed");
    
                        return false;
         
                } 
                $('<p><label for="searchusers"> <input type="text" id="searchuser" size="20"name="searchuser_' + i +'" value="" placeholder="Username" /></label> <a href="#" id="remUser">Remove</a></p>').appendTo(addUsernameField);
                i++;
                return false;
        });

        $('#addKeyword').live('click', function() {
                $('<p><label for="searchkeys"> <input type="text" id="searchkey" size="20"name="searchkey_' + j +'" value="" placeholder="Keyword" /></label> <a href="#" id="remKeyword">Remove</a></p>').appendTo(addKeywordField);
                j++;
                return false;
        });
        
        $('#remUser').live('click', function() { 
                if( i > 2 ) {
                        $(this).parents('p').remove();
                        i--;
                }

                return false;
        });

        $('#remKeyword').live('click', function() { 
                if( j > 1 ) {
                        $(this).parents('p').remove();
                        j--;
                }

                return false;
        });
});