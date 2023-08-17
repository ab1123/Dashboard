let currX=250;
let currY=250;
document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.draggable');
  
  draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', e => {
      e.preventDefault();
      const initialX = e.clientX;
      const initialY = e.clientY;
      
      

      const handleMouseMove = e => {
        const dx = e.clientX - initialX;
        const dy = e.clientY - initialY;
        const rect = draggable.getBoundingClientRect();
        
        draggable.style.left = rect.left + dx + 'px';
        draggable.style.top = rect.top + dy + 'px';
        
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });
  });
});
