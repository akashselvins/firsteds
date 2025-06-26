export default function decorate(block) {
    const section = block.closest('.section');
    const layout = section?.classList.contains('image-right') ? 'image-right' : 'image-left';
  
    const wrapper = block.querySelector(':scope > div');
    if (!wrapper) return;
  
    wrapper.classList.add('image-text-container');
  
    const [imageWrapper, textWrapper] = wrapper.children;
  
    // Add class to text wrapper for styling
    if (textWrapper) {
      textWrapper.classList.add('text-content');
    }
  
    // Reorder children based on layout
    if (layout === 'image-right') {
      wrapper.innerHTML = '';
      wrapper.appendChild(textWrapper);
      wrapper.appendChild(imageWrapper);
    }
  }
  