//http://localhost:6969/question/abcxyz
let questionId = window.location.pathname.split("/")[2];
console.log(questionId);

if(questionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:6969/question/${questionId}`,
        success: function(response) {
            console.log(response);
            $("#content").text(response.content);
            $("#totalVote").text(response.yes + response.no);
            $("#voteYes").text(response.yes);
            $("#voteNo").text(response.no);
        },  
        error: function (error){
            console.log("Loi roi",error);
        }
    })
}

$("#otherQuestion").on("click", function() {
    window.location.href = "http://localhost:6969/";
});
