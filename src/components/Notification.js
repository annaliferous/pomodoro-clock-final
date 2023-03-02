


let permission = Notification.permission;
  if (permission == "granted") {
    showNotification();
  } else if (permission = "default") {
    requestAndShowNotification();
  } else{
    alert("Take a break!")
  }

function showNotification() {
    let title = "Times up!!"
    let body = "It's time to take a break!"
    let notification = new Notification(title, {body});
    notification.onclick = function(){
    window.parent.focus();
    notification.close();
  }
}

function requestAndShowNotification() {
  Notification.requestPermission(function (permission) {
    if (permission === "granted") {
      showNotification();
    }
  });
}




