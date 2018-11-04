$(function(){

    // passes the id of the burger to be set as devoured down the line, then reloads DOM on success.
$(".devour").on("click", function(event){
    event.preventDefault();
    var id= $(this).data("id");
    var state = $(this).data("devoured")
    $.ajax("/api/put/"+id, {
        type:"PUT",
        data: state,
    }).then(function(){
        console.log(`Burger #${id} Devoured`);
        location.reload();
    });
});
    // passed name of new burger down the line, then reloads DOM on success. 
$("#submit").on("click", function(event){
    event.preventDefault();
    var name=$("#burger-name").val().trim();

    var newBurger ={
        name: name
    }

    $.ajax("/api/post/"+name, {
        type:"POST",
        data:newBurger,
    }).then(function(){
        console.log(`New Burger ${name} Created`);
        location.reload();
    })
})

});