fetch("task.json")
.then( (response)=> {return response.json();})
.then( (data)=> {display (data.employee);} )
var body=document.getElementsByTagName("body");
// document.body.style.backgroundImage = "C:\Users\VVITCODELABS\Downloads\kobe1.jpg";
function display(obj){
    // body.style.backgroundImage="C:\Users\VVITCODELABS\Downloads\kobe1.jpg";
    let Rectangle=document.createElement("div")
    Rectangle.classList.add("Rectangle")
    let x=document.createElement("h1");
    x.style.textAlign = "center";
    x.textContent=obj.name;
    let y=document.createElement("a");
    let z=document.createElement("hr");
    y.textContent=obj.email;
    y.href = obj.email;
    let b=document.createElement("br");
    let a=document.createElement("a");
    a.href=obj.mobile;
    a.textContent=obj.mobile;
    body[0].append(Rectangle);
    Rectangle.append(x);
    Rectangle.append(z);
    Rectangle.append(y);
    Rectangle.append(b);
    Rectangle.append(a);
    let c=document.createElement("br");
    Rectangle.append(c);
    let button=document.createElement("button");
    // button.classList.add("button")
    
    button.textContent="click";
    Rectangle.append(button);
}