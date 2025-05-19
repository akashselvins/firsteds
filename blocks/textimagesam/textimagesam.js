export default function decorate(block){
    [...block.children].forEach((row)=>{
        const container=document.createElement('div');
        container.className='ela-row-ithu-child';

        const columns=row.querySelectorAll(':scope > div');

        columns.forEach((col,index) => {
            if(index===0){
                const image=col.querySelector('img');
               const imageclass= document.createElement('div');
               imageclass.className='first-col-div-created';
               const text=col.querySelector('h1');
                const textclass=document.createElement('div');
                textclass.className='second-col-div-created';

                if(image) imageclass.appendChild(image);
                if(text) imageclass.appendChild(text);
                container.appendChild(textclass);
                container.appendChild(imageclass);

            }
            else{
                const image=col.querySelector('img');
               const imageclass= document.createElement('div');
               imageclass.className='first-col-div-created';
               if (image) imageclass.appendChild(image);
               container.appendChild(imageclass);
            }
        });

        row.innerHTML = '';
        row.appendChild(container);


    });
}