// //getting all required 
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


// // If start Quiz Button Clicked
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo"); //show the info box
    // alert("hi")
}

// If Exit Button CLiked
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); //hide the info box
}

// If Continue Button CLiked
continue_btn.onclick = () =>{
    // info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //hide the quiz box
}
