const loadComment = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(data => displayComment(data));
}

const displayComment = comments => {
    const sectionContainer = document.getElementById('section');
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.email}</p>
        <button onclick="commentDetails(${comment.id})">Details</button>`
        sectionContainer.appendChild(div);
        
        
    });
}

const commentDetails = name => {
    const url = `https://jsonplaceholder.typicode.com/comments/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayOneComment(data));
}
const displayOneComment = comment => {
    const commentShow = document.getElementById('comment-details');
    commentShow.innerHTML = `
    <h3>${comment.name}</h3>
    <p>${comment.body}</p>
    `
}
