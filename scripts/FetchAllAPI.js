const loadAllPosts = async (cat = "") => {
  handleSpinner(true);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${cat}`
  );
  const data = await res.json();
  setTimeout(() => {
    showAllLoadPosts(data.posts);
  }, 1000);
};
document.getElementById(
  "copyright"
).innerHTML = `Copyright © ${new Date().getFullYear()} - All rights reserved by Retro Forum Association`;

const loadLatestPosts = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log("Fetching Data will be loaded");
  }
};

loadLatestPosts();

loadAllPosts();
