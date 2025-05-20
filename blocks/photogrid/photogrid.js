export default function decorate(block) {
  // Ensure the block is inside a #photogrid container
  let parent = block.closest('#photogrid');
  if (!parent) {
    parent = document.createElement('div');
    parent.id = 'photogrid';
    block.parentNode.insertBefore(parent, block);
    parent.appendChild(block);
  }

  block.classList.add('photogrid');

  [...block.children].forEach((row) => {
    const container = document.createElement('div');
    container.className = 'photo-container';

    const [imgCell, textCell] = row.children;

    const img = imgCell.querySelector('img');
    const h3 = textCell.querySelector('h3');
    const p = textCell.querySelector('p');

    if (img) container.appendChild(img);
    if (h3) container.appendChild(h3);
    if (p) container.appendChild(p);

    block.appendChild(container);
    row.remove(); // Remove original row
  });
}
