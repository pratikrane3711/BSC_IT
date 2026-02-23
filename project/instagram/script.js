let likes = 0;
let liked = false;

function likePost() {
  const likeCount = document.getElementById("likeCount");

  if(!liked) {
    likes++;
    liked = true;
  } else {
    likes--;
    liked = false;
  }

  likeCount.innerText = likes + " Likes";
}

