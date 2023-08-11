import galleryData from '../data/gallery.json' assert { type: "json" };


export function renderFolders() {
    
    var container = document.getElementById("galleryContainer");
    var htmlContent = '';
    
    for (var i = 0; i < galleryData.length; i++) {
        var card = `
            <div class="folder-card" >
                <div class="thumb" data-toggle="modal" data-target="#folderModal-${i}">
                    <img class="folder-img" src=${galleryData[i].cover_img} alt="">
                    <div class="align-items-center justify-content-center d-flex team-overlay" data-toggle="modal" data-target="#teamPage">
                        <button class="team-sbutton">
                            View Images
                        </button>
                    </div>
                </div>
                <div class="meta-text text-center mt-20"> 
                    <h3>${galleryData[i].folder_name}</h4>                
                </div> 
            </div>
        `;
        htmlContent += card
        
    }
    container.innerHTML = htmlContent;   
}


export function renderFolderModals() {

    var container = document.getElementsByTagName("BODY")[0];
    
    for (var i = 0; i <galleryData.length; i++){
        var htmlContent = `
        <div class="modal fade" id="folderModal-${i}" role="dialog" aria-labelledby="donateModalTitle" aria-hidden="true" data-backdrop="true">
            <div class="modal-dialog modal-lg modal-gallery" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="donateModalLongTitle">${galleryData[i].folder_name}</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body acc-body member-modal gallery-modal">
                            ${renderImages(galleryData[i].images,i)}
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += htmlContent;
    }
  
}



export function renderImages(images,j) {

    var htmlContent = "";
    for (var i = 0; i < images.length; i++) {
        var html = `
            <div class=" folder-item ">
                <a href=${images[i]} data-fancybox="gallery-${j}">
                    <img src=${images[i]} />
                </a>
            </div>
        `
        htmlContent += html;
    }

    
    return htmlContent;
}






// export function renderFolderModals() {

//     var container = document.getElementsByTagName("BODY")[0];
    
//     for (var i = 0; i <galleryData.length; i++){
//         var htmlContent = `
//         <div class="modal fade" id="folderModal-${i}" role="dialog" aria-labelledby="donateModalTitle" aria-hidden="true" data-backdrop="true">
//             <div class="modal-dialog modal-lg modal-gallery" role="document">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h3 class="modal-title" id="donateModalLongTitle">${galleryData[i].folder_name}</h3>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div class="modal-body acc-body member-modal gallery-modal">
//                             ${renderImages(galleryData[i].images)}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//         container.innerHTML += htmlContent;
//     }

//     container.innerHTML += `
//         <div id="imgModal" class="img-modal">
//             <span class="close img-close">&times;</span>
//             <img class="img-modal-content" id="modal-image">
//         </div>
//     `
    
//     var modal = document.getElementById("imgModal");
//     var closeButton = document.getElementsByClassName("img-close")[0];
//     var links = document.getElementsByClassName("gallery-img-modal-link");
//     var modalImage = document.getElementById("modal-image");

//     function openModal(imageSrc) {
//         modal.style.display = "block";
//         modalImage.src = imageSrc;
//     }

//     function closeModal() {
//         modal.style.display = "none";
//     }

//     Array.from(links).forEach(function(link) {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             openModal(this.href);
//         });
//     });

//     closeButton.addEventListener("click", closeModal);

//     window.addEventListener("click", function(event) {
//         if (event.target == modal) {
//             closeModal();
//         }
//     });

// }



// export function renderImages(images) {

//     var htmlContent = "";
//     for (var i = 0; i < images.length; i++) {
//         var card = `<img class="gallery-img" src=${images[i]} alt="">`;
//         var html = `
//           <div class="folder-item">
//                 <a href=${images[i]} class="gallery-img-modal-link">
//                 <img src=${images[i]} alt="">
//                 </a>
//         </div>
//         `
//         htmlContent +=    html;
//     }
//     return htmlContent;
// }





