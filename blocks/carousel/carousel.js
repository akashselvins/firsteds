export default function decorate(block) {
    const rows = [...block.children];
    const slides = rows.slice(1, -1); // middle rows are slides
    let currentSlide = 0;
  
    // Create Previous Button
    const prevRow = rows[0];
    const prevCell = prevRow.querySelector('div, p');
    const prevButton = document.createElement('button');
    prevButton.textContent = prevCell.textContent.trim(); // Use content author's text
    prevButton.classList.add('carousel-prev-button');
    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    prevCell.replaceWith(prevButton);
  
    // Create Next Button
    const nextRow = rows[rows.length - 1];
    const nextCell = nextRow.querySelector('div, p');
    const nextButton = document.createElement('button');
    nextButton.textContent = nextCell.textContent.trim(); // Use content author's text
    nextButton.classList.add('carousel-next-button');
    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
    nextCell.replaceWith(nextButton);
  
    // Format middle slides
    slides.forEach((slide) => {
      const cells = slide.querySelectorAll('div');
      if (cells.length < 2) return;
  
      const imgContainer = cells[0];
      const titleContainer = cells[1];
  

    
  

  
  
      const img = imgContainer.querySelector('img');
      if (img) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('carousel-slide');
        wrapper.appendChild(img);
        imgContainer.innerHTML = '';
        imgContainer.appendChild(wrapper);
      }
      imgContainer.classList.add('carousel-image-column');
    titleContainer.classList.add('carousel-text-column');
      slide.style.display = 'none'; // Hide all slides initially
      

    });
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
      });
    }
  
    // Show the first slide
    showSlide(currentSlide);
  }
  