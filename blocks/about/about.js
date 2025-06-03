export default function decorate(block) {
  // Ensure the block is inside a #about container
  let parent = block.closest('#about');
  if (!parent) {
    parent = document.createElement('div');
    parent.id = 'about';
    block.parentNode.insertBefore(parent, block);
    parent.appendChild(block);
  }

  block.classList.add('custom-layout');

  const heading = block.querySelector('h3');
  const image = block.querySelector('img');
  let textContainer = block.querySelector('div[data-align="center"]');

  // Fallback: if no data-align="center", get the first div that contains text elements
  if (!textContainer) {
    const divs = block.querySelectorAll('div');
    divs.forEach(div => {
      if (div.querySelector('p, h1, h2, h3')) {
        textContainer = div;
      }
    });
  }

  const buttons = block.querySelectorAll('a');

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

  // Fourth row: buttons
  const row4 = document.createElement('div');
  row4.className = 'row row-4';
  buttons.forEach(button => {
    row4.appendChild(button);
  });

  // Append rows to block
  block.appendChild(row1);
  block.appendChild(row2);
  block.appendChild(row3);
  block.appendChild(row4);

  // Animate rows one by one
  [row1, row2, row3, row4].forEach((row, index) => {
    setTimeout(() => {
      row.classList.add('visible');
    }, index * 1000);
  });
}
