const sent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, corrupti blanditiis aperiam repudiandae ea perferendis eaque architecto ratione quaerat asperiores ut, est totam error ullam distinctio rem quidem cupiditate debitis!"

// function bionicReading(sent){
//     for(let i=0; i<sent.length; i++){
//         if(sent[0].toUpperCase())
//     }
// }

const e = document.getElementById("edit"), r = document.getElementById("read");
const u = () => r.innerHTML = e.innerHTML.split(" ").map(w => `<b>${w.split("").slice(0,Math.ceil(w.length/2)).join("")}</b>${w.split("").slice(Math.ceil(w.length / 2),w.length).join("")} `).join(" ");
u();
e.addEventListener("input", u);

