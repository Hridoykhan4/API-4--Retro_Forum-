const showAllLoadPosts = (posts) => {
  const contentContainer = document.getElementById("content-container");
  posts.forEach((post) => {
    const {
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
    const div = document.createElement("div");
    div.className = "bg-[#797DFC1A] p-4 rounded-lg flex gap-6";
    div.innerHTML = `
        <div class="w-20 h-20">
        <img src="${image}" class="w-full h-full object-cover rounded-full"/>
        </div>

       <div class="space-y-2 md:space-y-4 flex-1">
        <div class="flex flex-col md:flex-row gap-3 md:items-center">
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
                    <img src="../images/mgs.svg"/>
                </div>
                <div>
                    <p>${comment_count}</p>
                </div>

            </div>
            <div class="flex items-center gap-1">   
                <div>
                    <img src="../images/views.svg"/>
                </div>
                <div>
                    <p>${view_count}</p>
                </div>

            </div>
            <div class="flex items-center gap-1">   
                <div>
                    <img src="../images/time.svg"/>
                </div>
                <div>
                    <p>${posted_time}</p>
                </div>

            </div>
        </div>

        <div>
                <img class="w-12 cursor-pointer" src="../images/read.svg" />
        </div>

        `;
    contentContainer.appendChild(div);
  });
};

/* 
{
    "id": 101,
    "category": "Comedy",
    "image": "https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg",
    "isActive": true,
    "title": "10 Kids Unaware of Their Costume",
    "author": {
        "name": "John Doe"
    },
    "description": "It is one thing to subject yourself to a costume mishap",
    "comment_count": 560,
    "view_count": 1568,
    "posted_time": 5
}
*/
