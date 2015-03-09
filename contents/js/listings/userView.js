function user(full_name){

    console.log('viewing user: ', full_name)

    $.get("https://api.github.com/repos/" + full_name, reddit, function(data) {
        
        var user = data
        
        $.get("/reddit-api/templates/userView.jade", function(template) {

            var html = jade.render(template, {item: user})
            
            $("#details").html(html)

        })

    })

}
