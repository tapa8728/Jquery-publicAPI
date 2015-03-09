function hotList(){
     
    $.get("https://api.reddit.com/hot", function(data) {
        var posts = data.data.children

        $.get("/reddit-api/templates/list.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: posts})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first event to view
            post(posts[0].data)

        })

    })
}
