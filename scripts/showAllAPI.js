const showAllLoadPosts = (posts) => {
  const contentContainer = document.getElementById("content-container");
  if (posts.length === 0) {
    contentContainer.innerHTML = `
    <img src="./images/searchNotFound.gif"/>
    `;
    handleSpinner(false);
    return;
  }

  posts.forEach((post) => {
    let {
      id,
      category,
      image,
      isActive,
      title,
      author: { name },
      description,
      comment_count,
      view_count,
      posted_time,
    } = post;
    title = title.replace(/'/g, "");
    const div = document.createElement("div");
    div.className =
      "bg-[#797DFC1A] p-4 rounded-lg flex flex-col lg:flex-row gap-6 hover:bg-sky-100 transition-all duration-400";
    div.innerHTML = `
        <div class=" relative">
        <img src="${image}" class="w-20 h-20 hover:scale-105 duration-300 ease-in-out transition-all cursor-pointer object-cover rounded-full"/>
   

        ${
          isActive
            ? `<p class="w-5 h-5  absolute -right-1 top-1 rounded-full  bg-green-700"></p>`
            : `<p class="w-5 h-5  absolute -right-1 top-1 rounded-full  bg-red-700"></p>`
        }

        </div>

       <div class="space-y-2 md:space-y-4 flex-1">
        <div class="flex flex-col md:flex-row gap-3  md:items-center">
            <div class="flex items-center">#<span class="ms-1 font-medium text-sm">${category}</span></div>
            <div class="md:flex-row flex-col items-center justify-center"><span class="inline">Author: </span><span class=" inline font-medium text-sm">${name}</span></div>
        </div>
        <h3 class="text-xl font-bold">${title}</h3>
        <p class="tracking-wide leading-6  text-gray-600">${description}</p>
        <p class="border-b-2 border-gray-500 border-dashed"></p>

        <div class="flex justify-between">

        <div class="flex gap-5 items-center">
            <div class="flex items-center gap-1">   
                <div>
                    <img src="./images/mgs.svg"/>
                </div>
                <div>
                    <p>${comment_count}</p>
                </div>

            </div>
            <div class="flex items-center gap-1">   
                <div>
                    <img src="./images/views.svg"/>
                </div>
                <div>
                    <p>${view_count}</p>
                </div>

            </div>
            <div class="flex items-center gap-1">   
                <div>
                    <img src="./images/time.svg"/>
                </div>
                <div>
                    <p>${posted_time}</p>
                </div>

            </div>
        </div>

        <div>
                <img onclick='envelopeClicked("${title}", "${view_count}", "${id}", this)' class="w-12 cursor-pointer  hover:scale-110 overflow-hidden transition-all duration-150" src="./images/read.svg" />
        </div>

        `;
    contentContainer.appendChild(div);
  });
  handleSpinner(false);
};

// Clicked Enveloped
let count = 1;
let unique = [];
const envelopeClicked = (title, view_count, id, event) => {
  const parseId = parseInt(id);
  if (!unique.includes(parseId)) {
    unique.push(parseId);
    const readCount = document.getElementById("readCounterIncrease");
    readCount.innerText = count;
    const readContainer = document.getElementById("read-status-container");
    const div = document.createElement("div");
    div.className = `flex justify-between  gap-4 flex-col md:flex-row items-center bg-white p-3 rounded-xl`;
    div.innerHTML = `
        <p class="font-semibold text-lg">${title}</p>    
        <p class="text-gray-500 text-xl flex items-center"><img src="./images/views.svg"> ${view_count}</p>    
        `;
    readContainer.appendChild(div);
    count++;
    document.getElementById("alreadyRead").classList.add("hidden");
    event.src = "./images/readme2.png";
  } else {
    document.getElementById("alreadyRead").classList.remove("hidden");
  }
};

// Handle Search

const handleSearch = () => {
  const inputValue = document.getElementById("input-field").value;
  if (!inputValue.trim()) {
    document.getElementById("write-alert").classList.remove("hidden");
  } else {
    document.getElementById("write-alert").classList.add("hidden");
  }
  handleSpinner(true);
  setTimeout(() => {
    loadAllPosts(`?category=${inputValue}`);
  }, 2000);
  document.getElementById("input-field").value = "";
};

// Show Latest Posts

const showLatestPosts = (posts) => {
  const latestPostsContainer = document.getElementById("latest-post-container");
  posts.forEach((post) => {
    const {
      cover_image,
      profile_image,
      title,
      description,
      author: { posted_date, name, designation },
    } = post;
    const div = document.createElement("div");
    div.className = `card bg-base-100 shadow-xl`;
    div.innerHTML = `
     <figure class="px-6 pt-5">
    <img
      src="${cover_image}"
      alt="${title}"
      class="rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"><img src="./images/calander.svg" /> ${
      posted_date ? posted_date : "No Publish Date"
    }</h2>
    <h2 class="font-semibold text-lg">${title}</h2>
    <p class="text-gray-600">${description}</p>
    <div class="flex gap-3 items-start">
      <div class="w-12 h-12">
          <img class="w-full h-full object-cover rounded-full" src="${profile_image}"/>
      </div>
      <div>
          <h3 class="font-semibold text-lg">${name}</h3>
          <small class="text-gray-600">${designation || "Unknown"}</small>
      </div>
    </div>
  </div>
    `;
    latestPostsContainer.appendChild(div);
  });
};

/* 
{
    "cover_image": "https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg",
    "profile_image": "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
    "title": "Gaming Enthusiast Expert in Play",
    "description": "Leading gaming expert with a wealth of knowledge and passion for all things gaming",
    "author": {
        "name": "John Doe",
        "designation": "ROR Developer",
        "posted_date": "29 January 2024"
    }
}
*/
