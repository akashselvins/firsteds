export default function decorate(block) {
    block.classList.add('advertise');
  
    const rows = [...block.children];
  
    if (rows.length >= 2) {
      const titleRow = rows[0];
      const imageRow = rows[1];
  
      // Style the title
      titleRow.classList.add('title');
  
      // Style the image
      const img = imageRow.querySelector('img');
      if (img) {
        img.classList.add('image');
      }
    }
  }
  