fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => {
    if (!response.ok) {
      throw new Error(`no dada. Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const Comments = data.slice(0, 20);

    const commentHtml = Comments.map(comment => `
      <div>
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
      </div>
      <hr>
    `).join('');

    document.getElementById('text').innerHTML = commentHtml;
  })
  .catch(error => console.error('Error:', error));

