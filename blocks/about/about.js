export default function decorate(block) {
    block.classList.add('custom-layout');
  
    const heading = block.querySelector('h3');
    const image = block.querySelector('img');
    const textContainer = block.querySelector('div[data-align="center"]');
  
    // Clear original content
    block.innerHTML = '';
  
    // First row: heading
    const row1 = document.createElement('div');
    row1.className = 'row row-1';
    if (heading) row1.appendChild(heading);
  
    // Second row: image
    const row2 = document.createElement('div');
    row2.className = 'row row-2';
    if (image) row2.appendChild(image);
  
    // Third row: text content
    const row3 = document.createElement('div');
    row3.className = 'row row-3';
    if (textContainer) row3.appendChild(textContainer);
  
    // Append rows to block
    block.appendChild(row1);
    block.appendChild(row2);
    block.appendChild(row3);
  
    // Animate rows one by one
    [row1, row2, row3].forEach((row, index) => {
      setTimeout(() => {
        row.classList.add('visible');
      }, index * 1000);
    });
  }
  