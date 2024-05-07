import classesData from '../data/classes.json' with { type: "json" };
import courseData from '../data/courses.json' with { type: "json" };
import blogData from '../data/blogs.json' with { type: "json" };
import testimonialData from '../data/testimonials.json' with { type: "json" };



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
    var isMoreText = feedbackText.split(' ').length > 55;
    
    var card = `
      <div class="single-testimonial item">
        
        <div class="feedback-person">
            <div class="test-avatar">${testimonialData[i].person[0]}</div>
            <div class="feedback-name"> 
                <h4 class="desc">${testimonialData[i].person}</h4>
            </div>
        </div>
        
        <div class="feedback-text" id="feedbackText${i}">${truncatedFeedback}</div>

        ${isMoreText ?
        `
          <button class="feedbackBtn readLessBtn" id="readLessBtn${i}"> Read less </button>
          <button class="feedbackBtn readMoreBtn" id="readMoreBtn${i}"> Read More </button>
        `:''
        }
        <img class="quote-vec" src="img/quote.png">
      </div>
    `;


    var containerDiv = document.createElement("div");
    containerDiv.innerHTML = card;
    container.appendChild(containerDiv);
  }

  document.addEventListener('DOMContentLoaded', function() {

    for (let i = 0; i < testimonialData.length; i++) {
        var readMoreBtn = document.getElementById(`readMoreBtn${i}`)

        readMoreBtn.addEventListener('click',  () => {
          console.log(readMoreBtn,i)
          var box = document.getElementById(`feedbackText${i}`)
          var feedbackText = testimonialData[i].feedback;
          box.innerHTML = feedbackText;    

          var read_less_btn = document.getElementById(`readLessBtn${i}`);
          read_less_btn.style.display = "block";
          
          var read_more_btn = document.getElementById(`readMoreBtn${i}`)
          read_more_btn.style.display = "none";
        });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {

    for (let i = 0; i < testimonialData.length; i++) {
      var readLessBtn = document.getElementById(`readLessBtn${i}`)

      readLessBtn.addEventListener('click',  () => {
        console.log(readLessBtn, i)
        var box = document.getElementById(`feedbackText${i}`)
        var feedbackText = testimonialData[i].feedback;
        box.innerHTML = truncateText(feedbackText,55,i);    

        var read_less_btn = document.getElementById(`readLessBtn${i}`);
        read_less_btn.style.display = "none";
        
        var read_more_btn = document.getElementById(`readMoreBtn${i}`)
        read_more_btn.style.display = "block";
      });
    }
  });

}

function truncateText(text, maxWords,i) {
  var words = text.split(' ').slice(0, maxWords);
  var truncatedFeedback =  words.join(' ');

  var hasMoreText = text.split(' ').length > truncatedFeedback.split(' ').length;

  // if(hasMoreText) truncatedFeedback += `<span class="read-more-btn" id="read-more-btn${i}"> ... Read more </span>`;
  if(hasMoreText) truncatedFeedback += ` ... `;

  return truncatedFeedback;
}


// btnItems.forEach(function (item,idx) {
//   item.addEventListener('click',  () => {
//     console.log(item,idx)
//     var box = document.getElementById(`feedbackText${idx}`)
//     var feedbackText = testimonialData[idx].feedback;
//     box.innerHTML = expandedText(feedbackText);    

//     var read_less_btn = document.getElementById(`readLessBtn${idx}`);
//     read_less_btn.style.display = "block";
//   });
// });


export function renderBlogCard() {
  var container = document.getElementById('blogContainer');

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

