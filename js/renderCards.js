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
    var truncatedFeedback = truncateText(feedbackText, 55,i); 
    
    var card = `
      <div class="single-testimonial item">
        
        <div class="feedback-person">
            <div class="test-avatar">${testimonialData[i].person[0]}</div>
            <div class="feedback-name"> 
                <h4 class="desc">${testimonialData[i].person}</h4>

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

  document.addEventListener('DOMContentLoaded', function() {
    var btnItems = document.querySelectorAll('.read-more-btn');

    btnItems.forEach(function (item,idx) {
      item.addEventListener('click',  () => {
        var box = document.getElementById(`feedbackText${idx-1}`)
        var feedbackText = testimonialData[idx-1].feedback;
        box.innerHTML = feedbackText; 
      
      });
    });
  });

}

function truncateText(text, maxWords) {
  var words = text.split(' ').slice(0, maxWords);
  var truncatedFeedback =  words.join(' ');

  var hasMoreText = text.split(' ').length > truncatedFeedback.split(' ').length;

  if(hasMoreText) truncatedFeedback += `<span class="read-more-btn"> ... Read more </span>`;

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

