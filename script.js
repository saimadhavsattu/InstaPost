let post1 = {
    id: 1,
    author: 'John',
    content: 'My first Post!',
    likes: 10,
    comments: ['Great post!', 'Nice photo!'],
    image: 'https://files.codingninjas.in/image2-28694.jpg'
  };
  
  function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear previous posts
  
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    // Create author element
    const authorElement = document.createElement('h3');
    authorElement.textContent = post1.author;
  
    // Create content element
    const contentElement = document.createElement('p');
    contentElement.textContent = post1.content;
  
    // Create image element
    const imageElement = document.createElement('img');
    imageElement.src = post1.image;
    imageElement.alt = 'Post Image';
  
    // Create like button
    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
  
    // Add event listener to update likes
    likeButton.addEventListener('click', () => {
      post1.likes++; // Increment likes
      likeButton.style.color = 'red'; // Highlight the button
      likeButton.disabled = true; // Prevent multiple clicks
      updateFooter(); // Update footer to reflect the new like count
    });
  
    // Create comment input
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';
  
    // Create comment button
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button');
  
    // Add event listener to handle comment button click
    commentButton.addEventListener('click', () => {
      const newComment = commentInput.value.trim(); // Get the input text
      if (newComment) { // Only add the comment if input is not empty
        post1.comments.push(newComment); // Add new comment to the comments array
        updateComments(); // Update the comment section
        updateFooter(); // Update footer to reflect new comment count
      }
      commentInput.value = ''; // Clear the input field after adding the comment
    });
  
    // Create post footer
    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
  
    // Create comments container
    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none'; // Hide comments initially
  
    // Function to update the comment section
    function updateComments() {
      commentsContainer.innerHTML = ''; // Clear the existing comments
      post1.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
    }
  
    // Function to update the footer (likes and comments count)
    function updateFooter() {
      postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
    }
  
    // Initial update for comments and footer
    updateComments();
    updateFooter();
  
    // Append all elements to the post
    postElement.appendChild(authorElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);
  
    // Toggle comments visibility when footer is clicked
    postFooter.addEventListener('click', () => {
      commentsContainer.style.display =
        commentsContainer.style.display === 'none' ? 'block' : 'none';
    });
  
    // Append the post to the posts container
    postsContainer.appendChild(postElement);
  }
  
  // Initial rendering of the post
  renderPosts();
  