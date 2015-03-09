function frontPageList(){
     console.log('listing the front page')    
    
    $.get("https://api.github.com/users/nboneh/events", reddit, function(data) {
        var posts = data
        
        $.get("/reddit-api/templates/frontPageList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: posts})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first event to view
            post(posts[0].repo.name)

        })

    })
}
