const loadAllPosts = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    showAllLoadPosts(data.posts);
}

loadAllPosts()