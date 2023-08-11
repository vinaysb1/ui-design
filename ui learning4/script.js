
const datas = [{
    imgurl: "https://klsvdit.edu.in/wp-content/uploads/2020/06/SD-768x576.jpg",
    alt: "vinay",
    active: true,
    user_name: "karnatak",
    message: "arrived",
    date_created: 2,
  },{
    imgurl: "https://klsvdit.edu.in/wp-content/uploads/2020/06/SD-768x576.jpg",
    alt: "Aravind",
    active: false,
    user_name: "Js expert",
    message: "Going to nepal",
    date_created: 2,
  },{
    imgurl: "https://klsvdit.edu.in/wp-content/uploads/2020/06/SD-768x576.jpg",
    alt: "Lucky",
    active: true,
    user_name: "React expert",
    message: "Teaching",
    date_created: 2,
  },{
    imgurl: "https://klsvdit.edu.in/wp-content/uploads/2020/06/SD-768x576.jpg",
    alt: "Sanjay Dambal",
    active: true,
    user_name: "Abagael Luth2",
    message: "deleted volley against violence",
    date_created: 2,
  }]
function run(){
  for(let i=0;i<datas.length;i++){
    addNotification(datas[i])
  }
  const button = document.createElement('button')
  const notification_box = document.getElementById("n");
  button.setAttribute('class','view')
  button.textContent = "View All"
  notification_box.appendChild(button);
}
function addNotification(notification_data) {
  const notification_item = document.createElement("div");
  notification_item.setAttribute("class", "notification-item");
  const notification_img = document.createElement("div");
  notification_img.setAttribute("class", "notification-img");
  const img = document.createElement("img");
  img.setAttribute("class", "image");
  img.setAttribute("src", notification_data.imgurl);
  img.setAttribute("alt", notification_data.alt);
  notification_img.appendChild(img);
  if (notification_data.active) {
    const status = document.createElement("span");
    status.setAttribute("class", "active");
    notification_img.appendChild(status);
  }

  const content = document.createElement("div");
  content.setAttribute("class", "notification-content");
  const action = document.createElement("p");
  action.setAttribute("class", "notification-action");
  const strong = document.createElement("strong");
  strong.setAttribute("class", "notification-name");
  strong.textContent = notification_data.user_name;
  action.appendChild(strong);
  const text = document.createElement("span");
  text.textContent = " " + notification_data.message;
  action.appendChild(text);

  const time = document.createElement("div");
  time.setAttribute("class", "notification-time");
  time.textContent = notification_data.date_created + " mins ago";
  content.appendChild(action);
  content.appendChild(time);

  notification_item.appendChild(notification_img);
  notification_item.appendChild(content);

  const notification_box = document.getElementById("n");
  notification_box.appendChild(notification_item);

  console.log("run");

  // const someContent = document.createElement('span');
  // someContent.innerText = 'something';
  // notification_item.appendChild(someContent);
}
// run();
