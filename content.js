function saveElement() {
    console.log("Saved element number ");
    // TODO: Save each job as an unique object that we can refer to later.
    // Then refresh the page every 20 seconds and check if the status of the job has changed
    // from on called to details
    // When this happens, ping the user.
}

// For each job, (might be 0) draw a checkbox.
var links = document.getElementsByTagName('a');
var jobs = [];
for (var i=0; i<links.length; i++){
    if(links[i].textContent=="Details"){
        jobs.push(links[i]);

        var box = document.createElement("input");
        box.setAttribute("id", "BOX" + jobs.length.toString());
        box.setAttribute("type", "checkbox")
        box.setAttribute("onclick", "saveElement()");

        var label = document.createElement('label');
        //What does htmlFor do?
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('Start tracking'));

        links[i].parentElement.appendChild(box);
        links[i].parentElement.appendChild(label);
    }
}

