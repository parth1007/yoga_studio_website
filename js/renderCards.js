import classesData from '../data/classes.json' assert { type: "json" };
import courseData from '../data/courses.json' assert { type: "json" };
import blogData from '../data/blogs.json' assert { type: "json" };
import testimonialData from '../data/testimonials.json' assert { type: "json" };



export function renderCards(container) {
  var cardContainer = document.getElementById(container);

  var data = [];
  if (container == "coursesContainer")
    data = courseData

  else if(container == "classesContainer")
    data = classesData

    for (var i = 0; i < data.length; i++) {
        var card = `
          <div class="col-lg-4 col-md-4 single-feature">
            <a href=${data[i].link} target="_blank">
                <figure>
                  <img class="img-fluid course-card-img" src="${data[i].img}" alt="">
                  <div class="overlay overlay-bg"></div>
                </figure>
                <div class="text-center">
                  <h4 class="mb-10">${data[i].title}</h4>
                  <p1>${data[i].p1}</p1><br>
                  <p2>${data[i].p2}</p2><br>
                </div>
            </a>
          </div>
        `;

        cardContainer.innerHTML += card;
      }
}



// export function renderTestimonialCard() {
//   var container = document.getElementById("testimonialContainer");


//   for (var i = 0; i < testimonialData.length; i++) {
//     var card = `
//         <div class="single-testimonial item">
//             <div class="feedback-text">${testimonialData[i].feedback}<div>
//             <h4 class="desc">${testimonialData[i].person}</h4>
//         </div>
//       `;
    
//       var containerDiv = document.createElement("div");

//       containerDiv.innerHTML = card;

//     container.appendChild(containerDiv);

//   }
// }




export function renderTestimonialCard() {
  var container = document.getElementById("testimonialContainer");

  for (var i = 0; i < testimonialData.length; i++) {
    var feedbackText = testimonialData[i].feedback;
    var truncatedFeedback = truncateText(feedbackText, 45); 
    
    var card = `
      <div class="single-testimonial item">
        
        <div class="feedback-person">
            <div class="test-avatar">${testimonialData[i].person[0]}</div>
            <div class="feedback-name"> 
                <h4 class="desc">${testimonialData[i].person}</h4>
                <div class="stars"> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0011ff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0011ff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0011ff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0011ff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0011ff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                </div>
            </div>
        
        </div>
        
        <div class="feedback-text" id="feedbackText${i}">${truncatedFeedback}</div>
        <img class="quote-vec" src="img/quote.png">
      </div>
        


    `;

    var containerDiv = document.createElement("div");
    containerDiv.innerHTML = card;
    container.appendChild(containerDiv);
  }

}

function truncateText(text, maxWords) {
  var words = text.split(' ').slice(0, maxWords);
  var truncatedFeedback =  words.join(' ');

  var hasMoreText = text.split(' ').length > truncatedFeedback.split(' ').length;

  if(hasMoreText) truncatedFeedback += `<span class="read-more-btn"> ... Read more</span>`;

  return truncatedFeedback;
}





export function renderBlogCard() {
  var container = document.getElementById("blogContainer");

  var htmlContent = ""
  

  for (var i = 0; i < blogData.length; i++) {
    var card = `
        
        <div class="blog-card" onclick="window.open('${blogData[i].link}', '_blank') ">
          <img src=${blogData[i].img} class="blog-img">
          <div class="blog-details">
            <h4 style="font-weight:600">${blogData[i].name}</h4>
            <h6><b>BY - ${blogData[i].author}</b></h6>
          </div>
        </div>
      `;
    
      htmlContent += card;

  }
  container.innerHTML = htmlContent;
}

