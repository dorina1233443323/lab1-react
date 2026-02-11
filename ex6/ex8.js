try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const data = await response.json();
    console.log(data);
}catch(e) {
    console.log("Error");
}