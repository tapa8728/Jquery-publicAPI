function usersList(){

    console.log('listing users')    
    
    $.get("https://api.github.com/users/nboneh/repos", reddit, function(data) {
        var users = data
        
        $.get("/reddit-api/templates/usersList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: users})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            user(users[0].full_name)

        })

    })

}
