const $commentList = document.querySelector(".comment-list");
const $commentInput = document.querySelector(".comment-input").value; //textarea
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

}
$commentInput.addEventListener("keydown", handleWriting);