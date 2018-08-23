    // Grab defaultImage and thumbnail
      let defaultImage = document.getElementById('defaultImage');
      let thumb1 = document.getElementById('thumb1');
      let thumb2 = document.getElementById('thumb2');
      let thumb3 = document.getElementById('thumb3');
      let thumb4 = document.getElementById('thumb4');
    // Grab icons
    let singleRight = document.querySelector('.fa-angle-right');
    let singleLeft = document.querySelector('.fa-angle-left');
    let doubleRight = document.querySelector('.fa-angle-double-right');
    let doubleLeft = document.querySelector('.fa-angle-double-left');
    // Grab reading type input
    let readingType = document.getElementById('readingTypeInput');
    // Grab display all images tag - initilized empty div
    let displayAllImages = document.getElementById('displayAllImages');
    // Event listener on clicking default image
      defaultImage.addEventListener("click", firstImage);

    // Event listener on click on thumbnails
      thumb1.addEventListener("click", nextImage);
      thumb2.addEventListener("click", nextImage);
      thumb3.addEventListener("click", nextImage);
      thumb4.addEventListener("click", nextImage);

    // Event listener on navigation icons - used the same function as clicking thumbnails function
      // Single right navigator
      singleRight.addEventListener('click', firstImage);
      // Single left navigator
      singleLeft.addEventListener('click', leftImage);
      // Double left navigator
      doubleLeft.addEventListener('click', start);
      // Double right navigator
      doubleRight.addEventListener('click', end);

      // Event on change on the select for reading options
      readingType.addEventListener('change', readingOption);

    // Change the src of defaultImage to thumbnail
      function nextImage(e){
        defaultImage.src = this.src;
      }
    //When the default image is clicked the next thumbnail in line was displayed
      function firstImage(e){
        // Array of thumbnails
        let test123 = [thumb1, thumb2, thumb3, thumb4];
        // If clicked and default image is first image then set next image to first in thumbnails array
            if(defaultImage.src == "https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80"){
              defaultImage.src = test123[0].src;
            }
            // If default image is first of array then set to next image
            else if(defaultImage.src == test123[0].src){
              defaultImage.src = test123[1].src;
            }
            // If default image is second of array then set to next image
            else if(defaultImage.src == test123[1].src){
              defaultImage.src = test123[2].src;
            }
            // If default image is third of array then set to next image
            else if(defaultImage.src == test123[2].src){
              defaultImage.src = test123[3].src;
            }
            // If default image is fourth of array then set to first image
            else if(defaultImage.src == test123[3].src){
              defaultImage.src = test123[0].src;
            }
        }
        //When the default image is clicked the former thumbnail in line was displayed
          function leftImage(){
            // Array of thumbnails
            let test123 = [thumb1, thumb2, thumb3, thumb4];
            // If clicked and default image is first image then set next image to first in thumbnails array
                if(defaultImage.src == "https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80"){
                  defaultImage.src = test123[3].src;
                }
                // If default image is first of array then set to next image
                else if(defaultImage.src == test123[0].src){
                  defaultImage.src = test123[3].src;
                }
                // If default image is second of array then set to next image
                else if(defaultImage.src == test123[1].src){
                  defaultImage.src = test123[0].src;
                }
                // If default image is third of array then set to next image
                else if(defaultImage.src == test123[2].src){
                  defaultImage.src = test123[1].src;
                }
                // If default image is fourth of array then set to first image
                else if(defaultImage.src == test123[3].src){
                  defaultImage.src = test123[2].src;
                }
            }

          function start(){
            let test123 = [thumb1, thumb2, thumb3, thumb4];
            defaultImage.src = "https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80";
          }
          function end(){
            let test123 = [thumb1, thumb2, thumb3, thumb4];
            defaultImage.src = test123[3].src;
          }

          function readingOption(){
            // Condition if display all pages is selected
            let test123 = [thumb1, thumb2, thumb3, thumb4];
              if(document.getElementById('readingTypeInput').value == "Display All Pages"){
                // Append all images after default image
                displayAllImages.innerHTML += '<div id="displayAllImages">'+'<h2>Hello!</h2>'+'<img id="defaultImage" src="https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80">'
                                                +'<img id="defaultImage" src="https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c061931e7820a66c483fc8f6a6778bbe&auto=format&fit=crop&w=1352&q=80">'+
                                              '</div>';
                // To toggle: displayAllImages.style{"display:none"};
              }
          }

// 1.Clicked on the arrow icon to change the default image to the next
  // When single-icon right-side clicked, set src to be the next src in thumbnail-array -- End result: clicked to get the next image as default image
  // When single-icon left-side clicked, set src to be the former src in thumbnail-array

// 2. Reading type: when "display all" is selected: All images are stacked on top of eachother

// 3. Table of content

// 4. Link up Github

// 5. Navbar

// 6. Styling

// Later: bigger gallery, browse gallery etc.
