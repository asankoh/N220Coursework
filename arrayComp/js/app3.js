let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   for (let i = 0; i < 3; i++) {
       var newDiv = document.createElement("div");
       newDiv.setAttribute("style", `background-color: ${objects[i].color}; height: ${objects[i].height}px; width: ${objects[i].width}px;`);
       document.body.appendChild(newEl);   
   }