//add new task to 
function new_task() {
    formdata = sanitize(document.getElementById('newtask').value);
    tasks= document.getElementById('tasks').innerHTML;
    tasks = tasks + "<input type=\"checkbox\" id=\""+ formdata + ">";
    tasks = tasks + "<label for=\"" + formdata + "\">" + formdata + "</label><br>";
    document.getElementById('tasks').innerHTML = tasks;
}

//sanitize user input through encoding
//probably unneccessary because page will be run locally
//taken from https://stackoverflow.com/questions/2794137/sanitizing-user-input-before-adding-it-to-the-dom-in-javascript
function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      "`": '&grave;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}
