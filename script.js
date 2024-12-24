function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsDiv = document.getElementById('comments');

    if (commentInput.value.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentInput.value;
        commentsDiv.appendChild(commentDiv);

        // Clear the input field
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
}