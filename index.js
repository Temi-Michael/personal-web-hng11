function currentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
  setInterval(() => {
    const time = currentTime();
    document.getElementById("currentTimeUTC").innerHTML = time;
  }, 1000);

