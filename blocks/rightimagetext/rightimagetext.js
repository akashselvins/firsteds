export default function decorate(block) {
    block.classList.add('rightimagetext-block');
  
    // Optional: Add a class to each child div for styling
    [...block.children].forEach((row, index) => {
      row.classList.add(`rightimagetext-row-${index + 1}`);
    });
  }
  