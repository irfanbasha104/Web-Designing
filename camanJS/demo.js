function demo(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        const ctx = canvas.getContext('2d');
        let img = new Image();
        let fileName = '';
        
        //Buttons
        const uploadButton = document.getElementById('upload-file');
        const removeButton = document.getElementById('remove-btn');
        
        //File Uploading Part - starts here
        uploadButton.addEventListener('change', (event)=>{
            const file = document.getElementById('upload-file').files[0];
            // File Reading
            const reader = new FileReader();
            if(file){
               fileName = file.name;
               reader.readAsDataURL(file);
               //alert(fileName);
               
            }
            
            //Display Image - Start here
            reader.addEventListener('load', () => 
            {
             img = new Image();
             img.src = reader.result;
             img.onload = function()
             {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0,img.width, img.height);
             }   
            }) 
            //Display Image - Ends here
        })
        
        //File Uploading Part - Ends here
        
        //Add Filters - starts here
        //Brightness Filter Starts here
        document.addEventListener('click', (event) => 
        {
            if(event.target.classList.contains('filter-btn'))
            {
                if(event.target.classList.contains('increase_bright'))
                {                                   
                    Caman('#canvas', img, function()
                    {
                        this.brightness(5);
                        this.render();
                    })
                }
                else if(event.target.classList.contains('decrease_bright'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.brightness(-5);
                        this.render();
                    })
                }
               else if(event.target.classList.contains('increase_contrast'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.contrast(5);
                        this.render();
                    })
                }
                else if(event.target.classList.contains('decrease_contrast'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.contrast(-5);
                        this.render();
                    })
                }
                else if(event.target.classList.contains('increase_saturation'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.saturation(5);
                        this.render();
                    })
                }
                else if(event.target.classList.contains('decrease_saturation'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.saturation(-5);
                        this.render();
                    })
                }
                else if(event.target.classList.contains('vintage'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.vintage();
                        this.render();
                    })
                }
                else if(event.target.classList.contains('lomo'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.lomo();
                        this.render();
                    })
                }
                else if(event.target.classList.contains('clarity'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.clarity();
                        this.render();
                    })
                }
                else if(event.target.classList.contains('sincity'))
                {
                    Caman('#canvas',img, function()
                    {
                        this.sincity();
                        this.render();
                    })
                }
   
            }
        });
            
        //Brightness Filter Ends here
        
        //Remove Filters Starts here
        removeButton.addEventListener('click', event => 
        {
          Caman('#canvas',img, function()
          {
            this.revert();
          });  
        });
        
        
        //Remove Filters Ends here
        
        //Add Filters - Ends here
    }
}


