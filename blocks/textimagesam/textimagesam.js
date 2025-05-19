export default function decorate(block) {
    [...block.children].forEach((row) => {
      const textDiv = row.querySelector('h1');
      const imageContainer = row.querySelector('picture');
  
      // Wrap the image and text in a relative container
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';
      wrapper.style.width = '100%';
  
      // Style the text to overlay the image
      textDiv.style.position = 'absolute';
      textDiv.style.top = '10%';
      textDiv.style.left = '10%';
      textDiv.style.color = 'white';
      textDiv.style.fontSize = '2em';
      textDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      textDiv.style.padding = '10px';
      textDiv.style.borderRadius = '5px';
      textDiv.style.zIndex = '2';
      textDiv.style.margin = '0';
  
      // Move image and text into the wrapper
      wrapper.appendChild(imageContainer);
      wrapper.appendChild(textDiv);
  
      // Clear the row and append the wrapper
      row.innerHTML = '';
      row.appendChild(wrapper);
    });
  }
  