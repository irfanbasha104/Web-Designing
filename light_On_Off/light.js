var img=document.querySelector("img")
        img.onclick=function(){
            var get=img.getAttribute("src")
            if(get==="image/off.png")
            {
                img.setAttribute("src","image/on.png")
            }
            else
            {
                img.setAttribute("src","image/off.png")
            }
        }
