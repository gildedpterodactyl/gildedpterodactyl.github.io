let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
function like() {
    likeCount++;
    likeCount%=2;
    localStorage.setItem('likeCount', likeCount);
    document.getElementById('like-btn').innerText = (likeCount)? "Liked": "Like";
}
function submitComment() {
    const commentInput = document.getElementById('comment-input').value;
    if (commentInput.trim() !== "") {
        const commentList = document.getElementById('comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentInput;
        commentList.appendChild(newComment);
        document.getElementById('comment-input').value = "";

        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentInput);
        localStorage.setItem('comments', JSON.stringify(comments));
    }
}
window.onload = function () {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comments-list');
    comments.forEach(comment => {
        const newComment = document.createElement('li');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
    });

    document.getElementById('like-counter').innerText = likeCount;
};
function clearLocalStorage() {
    localStorage.clear();
    likeCount = 0;
    document.getElementById('like-counter').innerText = likeCount;
    const commentList = document.getElementById('comments-list');
    commentList.innerHTML = '';
}