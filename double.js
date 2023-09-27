const draggableDivs = document.querySelectorAll(".draggable");
const parentDiv = document.getElementById("parent");

draggableDivs.forEach(draggableDiv => {
  draggableDiv.addEventListener("dblclick", () => {
    // Increase size to fill full parent div
    //Hell0, this is a commit from Ayushi
    draggableDiv.style.width = "800px";
    draggableDiv.style.height = "600px";
    draggableDiv.style.marginLeft="400px"
    draggableDiv.style.top = "0px";
    draggableDiv.style.left = "0px";
    // draggableDiv.style.backgroundColor="rgba(67, 217, 251, 0.250)";
  });

  let isDragging = false;
  let dragStartX, dragStartY;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  draggableDiv.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("mousemove", handleMouseMove);

  function handleMouseDown(event) {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragOffsetX = draggableDiv.offsetLeft;
    dragOffsetY = draggableDiv.offsetTop;
    draggableDiv.style.cursor = "grabbing";
  }

  function handleMouseUp() {
    isDragging = false;
    draggableDiv.style.cursor = "grab";
  }

  function handleMouseMove(event) {
    if (!isDragging) return;

    const currentX = event.clientX;
    const currentY = event.clientY;

    const deltaX = currentX - dragStartX;
    const deltaY = currentY - dragStartY;

    draggableDiv.style.left = dragOffsetX + deltaX + "px";
    draggableDiv.style.top = dragOffsetY + deltaY + "px";
  }
});
