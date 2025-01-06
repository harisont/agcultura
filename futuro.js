async function getICalText() {
    const url = "https://calendar.google.com/calendar/ical/86b3de7d54cbf43c02e332ea684f1715f014e463413e100a144d06ce30e441bf%40group.calendar.google.com/public/basic.ics";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const iCalText = await response.text()
      return iCalText
    } catch (error) {
      console.error(error.message);
    }
  }
  

window.onload = function(){
    iCalText = getICalText()
    const postContent = document.getElementsByClassName("post-content")[0];
    postContent.innerHTML = iCalText
};