// Array to hold posts
let posts = [];

// Add event listener to the form
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create new post object
    const newPost = {
        username,
        title,
        content,
        timestamp: new Date().toLocaleString()
    };

    // Add the new post to the posts array
    posts.unshift(newPost); // Add to the beginning

    // Update the posts UI
    updatePostsUI();

    // Clear form inputs
    document.getElementById('postForm').reset();
});

// Update the UI with new posts
function updatePostsUI() {
    const postList = document.getElementById('postList');
    postList.innerHTML = ''; // Clear current posts

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <div class="post-meta">Posted by ${post.username} on ${post.timestamp}</div>
        `;

        postList.appendChild(postCard);
    });
}
