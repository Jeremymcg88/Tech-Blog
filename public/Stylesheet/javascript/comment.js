async function commentFormHandler(event) {
    event.preventDefault();
  
    // textarea[name="comment-body"] is grabbing the information where <textarea name="comment-body"> in the document
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        // Reloads the page to display the added comment
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);