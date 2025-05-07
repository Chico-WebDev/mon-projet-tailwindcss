

function picVideo() {
  
  document.getElementById("postImage").click();
  //let chooseFile = `<input type="file" id="postImage" class="flex text-gray-600" accept="image/">`;

}


function addPost() {

 // const imageVideo = `<input type="file" id="postImage" class="flex text-gray-600" accept="image/video*">`

  const content = document.getElementById("postContent").value.trim();
  const typeFile = document.getElementById("postImage");
  
  const file = typeFile.files[0];

  if(content === "" && !file) return;


const fileURL = URL.createObjectURL(file);

  const postsList = document.getElementById("postsList");
  const newPost = document.createElement("div");
  newPost.className = `bg-white rounded-lg p-4 shadow-md mt-4 shadow-white-700 flex flex-col gap-6`;

  let html = `<div class="flex justify-between items-center ">
    
                <div class="flex gap-2 items-center">
                  <img src="./images/IMG_0189.JPG" alt="photo de profil" class="w-11 h-11 rounded-full">  
                  
                  <div class="flex flex-col gap-2 items-center">
                    <p class="text-md font-bold text-gray-900">CHICO JD😎❤🎈📍</p>
                    <span class="text-sm font-semibold text-gray-600"></span>
                  </div>
                  
                </div>

                <span class="text-gray-400 text-xl"><i class="fas fa-ellipsis-v"></i></span>

              </div>`;

  if(content) {
    html += `<p class="text-lg flex-wrap text-gray-900">${content}</p>`
  }                 

  if(file.type.startsWith("image")) {
    html += `<div class="bg-gray-300">
              <img src="${fileURL}" alt="nouvelle photo" class="content-center w-[1200px] h-[600px] object-contain">
             </div> 
              `
}

  if(file.type.startsWith("video")) {
    html += `<div class="bg-gray-900">
              <video src="${fileURL}" controls alt=nouvelle video content-center class="w-[1080px] h-[600px] object-contain">
             </div>   
                `
  }

  html += `<hr class="text-gray-500">`

  html += `<div class="flex justify-between items-center">
    
            <div class="flex gap-6 items-center">

              
                <button class="flex gap-2 items-center text-md text-gray-600 font-semibold"><i class="far fa-heart"></i><span> 0 </span> Like </button>

                <button class="flex gap-2 items-center text-md text-gray-600 font-semibold"><i class="far fa-comment"></i><span> 0 </span> Comment </button>

                <button class="flex gap-2 items-center text-md text-gray-600 font-semibold"><i class="fas fa-share"></i><span> 0 </span>  Share </button>

            </div>

            <button class="text-md text-gray-600 font-semibold"><i class="far fa-bookmark"></i></button>

          </div>

          <div class="mt-4 hidden">
            <textarea type="text" placeholder="Ajouter un commentaire..." class="w-full p-2 rounded-lg bg-white text-gray-600 font-semibold mt-2" onkeydown="if(event.key==='Enter'){addComment(this)}">
            <div class="comments rounded-lg bg-gray-100 text-gray-900 font-semibold w-max mt-2 space-y-2"></div>
          </div>`

  newPost.innerHTML = html;
  postsList.prepend(newPost);
  document.getElementById("postContent").value = "";
  typeFile.value = "";


}




