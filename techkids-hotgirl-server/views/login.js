$("submitButton").on("click", function() {
    fetch("localhost:6969/login", {
        method: 'POST'
    })
});
