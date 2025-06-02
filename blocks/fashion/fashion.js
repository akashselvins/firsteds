export default function decorate(block) {
    block.classList.add('fashion-block');
  
    // Optional: Add a class to each child div for styling
    [...block.children].forEach((row, index) => {
      row.classList.add(`fashion-row-${index + 1}`);
    });
  }
  