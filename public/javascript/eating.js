$(document).ready(function () {

    $("#menuAdditionForm").on("click", "#newFoodSubmit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newFoodName").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
                $("#notEaten").load(location.href + " #notEaten>*", "");
            }
        );
    });

    $("#notEaten").on("click", ".devour", function () {
        var id = $(this).data("id");
        var newStatus = $(this).data("eaten");

        var newDevouredState = {
            devoured: newStatus
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function () {
            $("#notEaten").load(location.href + " #notEaten>*", "");
            $("#iAteThat").load(location.href + " #iAteThat>*", "");
            $("#newFoodName").val("");
        });
    });
});