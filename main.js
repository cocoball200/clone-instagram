const $commentList = document.querySelector(".comment-list");
const $commentInput = document.querySelector(".comment-input"); //textarea
const $commentForm = document.querySelector(".comment-write-form");
const $commentSubmitButton = document.querySelector(".comment-submit-button");


const handleWriting = (event) => {
    if (event.keyCode === 13) {
        if (!event.shiftKey) {
            event.preventDefault(); // 서브밋이 안됨. 
            handleSubmit(event);
        }
    }
};

const handleSubmit = (event) => {
    const $eachCommentDiv = document.createElement("div");
    $eachCommentDiv.setAttribute("class", "each-comment-list")
    const $commentedId = document.createElement("p");
    $commentedId.setAttribute("class", "commented-user-id")
    const $commentedText = document.createElement("p");
    $commentedText.setAttribute("class", "commented-text");
    $commentedId.innerText = "hohohosia";
    $commentedText.innerText = event.target.value;
    $eachCommentDiv.appendChild($commentedId);
    $eachCommentDiv.appendChild($commentedText);
    $commentList.appendChild($eachCommentDiv);
    event.target.value = "";
}
$commentInput.addEventListener("keydown", handleWriting);