export default function decorate(block) {
    [...block.children].forEach((row) => {
      const columns = [...row.children];
      if (columns.length < 2) return; // Ensure there are at least two columns
  
      const textColumn = columns[0];
      const imageColumn = columns[1];
  
      // Find the first text element (h1, h2, p, etc.) in the text column
      const textElement = textColumn.querySelector('h1, h2, h3, h4, h5, h6, p');
      const imageContainer = imageColumn.querySelector('picture');
  
      if (!textElement || !imageContainer) return;
  
      // Create a wrapper to hold both image and text
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';
      wrapper.style.width = '100%';
  
      // Style the text to overlay the image
      textElement.style.position = 'absolute';
      textElement.style.top = '10%';
      textElement.style.left = '10%';
      textElement.style.color = 'white';
      textElement.style.fontSize = '2em';
      textElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      textElement.style.padding = '10px';
      textElement.style.borderRadius = '5px';
      textElement.style.zIndex = '2';
      textElement.style.margin = '0';
  
      // Move image and text into the wrapper
      wrapper.appendChild(imageContainer);
      wrapper.appendChild(textElement);
  
      // Clear the row and append the wrapper
      row.innerHTML = '';
      row.appendChild(wrapper);
    });
  }
  