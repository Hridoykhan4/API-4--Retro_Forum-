const loadAllPosts = async(cat="") => {
    handleSpinner(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${cat}`);
    const data = await res.json();
    setTimeout(() => {
        showAllLoadPosts(data.posts)
    }, 1000)
}

loadAllPosts()