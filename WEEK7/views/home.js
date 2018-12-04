var questionId = null;
    
$.ajax({
    url: "http://localhost:6969/randomquestion",
    type: "GET",
    success: function(data) {
        console.log(data.question);
        $("#question").text(data.question.content);
        questionId = data.question._id;
        $("#question").attr("data-question", data.question._id);
    },
    error: function(err) {
        console.log(err); 
    }
});

$("#otherQuestion").on("click", function() {
    window.location.href = "http://localhost:6969/";
});

$("#viewQuestion").on("click", function() {
    window.location.href = "/questiondetail/" + questionId;
});

$("#no, #yes").on("click", function() {
    $.ajax({
        url: "http://localhost:6969/answer",
        type: "post",
        data: {
            questionId: $("#question").attr("data-question"),
            vote: $(this).attr("id") //"yes" || "no"
        },
        success: function(data) {
            console.log(data);
            window.location.href = "/questiondetail/"+ questionId;
        },
        error: function(err) {

        }
    })
});