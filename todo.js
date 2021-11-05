//add new task to 
function new_task() {
    formdata = sanitize(document.getElementById('newtask').value);
    tasks= document.getElementById('tasks').innerHTML;
    tasks = tasks + "<input class='mycb' type='checkbox' id='"+ formdata + "'>";
    tasks = tasks + "<label id='"+formdata+"' for='" + formdata + "'>" + formdata + "</label>";
    document.getElementById('tasks').innerHTML = tasks;
}

function tasks_done() {
    //iterate over all checkboxes
    var inputs = document.querySelectorAll('.mycb');
    //transfer checked elements
    for (var i=0; i<inputs.length; i++) {
        if (inputs[i].checked) {
            //remove label
            var label_id=inputs[i].id;
            document.getElementById(label_id).remove();
            //remove input
            inputs[i].remove();
            document.getElementById(label_id).remove();
        }
    }
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
