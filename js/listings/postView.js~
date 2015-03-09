function post(id){

	$.get("https://api.reddit.com/comments/" + id, function(data) {
        var post = data[0].data.children[0].data
        console.log(post)
        $.get("/reddit-api/templates/postView.jade", function(template) {

            // render the template
            var html = jade.render(template, {item: post})            

            // assign the rendered html to the dom element whose id is #details
            $("#details").html(html)

        })

    })
}
