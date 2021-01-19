const $commentList = document.querySelector(".comment-list");
//const $commentInput = document.getElementsByClassName("comment-input")[0];  // querySelector(".comment-input"); //textarea
const $commentInput = document.querySelector(".comment-input")
const $commentForm = document.querySelector(".comment-write-form");
const $commentSubmitButton = document.querySelector(".comment-submit-button");
const $commentedTextRemove = document.querySelector(".commented-text-remove");

const $commentListAll = document.querySelector(".comment-list").children;
console.log($commentListAll)



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
    const $commentedTextRemove = document.createElement("P");
    $commentedTextRemove.setAttribute("class", "commented-text-remove");
    $commentedId.textContent = "Sia💖";
    $commentedText.textContent = $commentInput.value;
    $commentedTextRemove.textContent = "삭제";
    $eachCommentDiv.appendChild($commentedId);
    $eachCommentDiv.appendChild($commentedText);
    $eachCommentDiv.appendChild($commentedTextRemove);
    $commentList.appendChild($eachCommentDiv);
    $commentInput.value = "";
    $commentInput.removeEventListener("keydown", handleSubmit, true);
    $commentSubmitButton.removeEventListener("click", handleSubmit, true);
}

const removeComment = (event) => {
    console.log($commentListAll)

}

// const init = () => {

// }

$commentInput.addEventListener("keydown", handleWriting);
$commentSubmitButton.addEventListener("click", handleSubmit);
$commentedTextRemove.addEventListener("click", removeComment);
