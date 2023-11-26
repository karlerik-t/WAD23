window.onload = function() {
    // task2: https://jsonlint.com/ 
    
    // task 3 & 4
    // fetch('https://raw.githubusercontent.com/karlerik-t/WAD23/main/res/json/posts.json') 

    // task 5
    fetch('./res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            for(var i=0; i<json.length; i++) {
              let sectionPost = document.createElement("section");
              let divPostHeading = document.createElement("div");
              let divPostBody = document.createElement("div");
              // img of a thumbs up at the bottom of the post
              let imgThumbsUp = document.createElement("img");

              /* values from json file */
              let imgAvatar = document.createElement("img");
              let h5Date = document.createElement("h5");
              let pContent = document.createElement("p");
              let pAuthorName = document.createElement("p");

              imgAvatar.src = json[i].authorAvatar;
              h5Date.innerHTML = json[i].date;
              pContent.innerHTML = json[i].content;
              pAuthorName.innerHTML = json[i].authorName;

              divPostHeading.className = "postheading";
              divPostBody.className = "postbody";

              /* move the date to the end */
              h5Date.style.flexGrow = "10";
              h5Date.style.textAlign = "end";

              imgThumbsUp.src = "res/images/thumbs-up.svg";
              imgThumbsUp.width = "20";
              imgThumbsUp.height = "20";

              imgAvatar.width = "20";
              imgAvatar.height = "20";

              /* adding the uploaded (if there was one) file to the post */
              if (json[i].uploadedFile != null) {
                if (json[i].fileType == "img") {
                  let imgFile = document.createElement("img");
                  imgFile.src = json[i].uploadedFile;
                  imgFile.style.maxWidth = "580px";
                  imgFile.style.maxHeight = "1000px";
                  divPostBody.appendChild(imgFile);
                }
              }

              /* structure */
              divPostHeading.appendChild(imgAvatar);
              divPostHeading.appendChild(pAuthorName);
              divPostHeading.appendChild(h5Date);

              divPostBody.appendChild(pContent);

              sectionPost.appendChild(divPostHeading);
              sectionPost.appendChild(divPostBody);
              sectionPost.appendChild(imgThumbsUp);

              // posts are added to a div with the class "posts"
              let posts = document.getElementsByClassName("posts")
              posts[0].appendChild(sectionPost)
            }
        })
        .catch(err => {
        })
        .finally(() => {
        })


}

//task 7
function show_hide() {
  document.getElementById("dropdown-list").classList.toggle("show");
};
