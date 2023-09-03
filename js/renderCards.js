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
      var card = document.createElement('div');
      card.className = 'col-lg-4 col-md-4 single-feature';

      var figure = document.createElement('figure');

      var image = document.createElement('img');
      image.className = 'img-fluid';
      image.src = data[i].img;
      image.alt = '';

      var overlay = document.createElement('div');
      overlay.className = 'overlay overlay-bg';

      figure.appendChild(image);
      figure.appendChild(overlay);

      var cardText = document.createElement('div');
      cardText.className = 'text-center';

      var title = document.createElement('h4');
      title.className = 'mb-10';
      title.textContent = data[i].title;

      var p1 = document.createElement('p1');
      p1.innerHTML = data[i].p1;

      var p2 = document.createElement('p2');
      p2.innerHTML = data[i].p2;

      var p3 = document.createElement('p3');
      p3.innerHTML = data[i].p3;


      cardText.appendChild(title);
      cardText.appendChild(p1);
      cardText.appendChild(document.createElement('br'));
      cardText.appendChild(p2);
      cardText.appendChild(document.createElement('br'));
      cardText.appendChild(p3);

      card.appendChild(figure);
      card.appendChild(cardText);

      cardContainer.appendChild(card);

      
  }
}



export function renderTestimonialCard() {
  var container = document.getElementById("testimonialContainer");


  for (var i = 0; i < testimonialData.length; i++) {
    var card = `
        <div class="single-testimonial item">
            <p>${testimonialData[i].feedback}<p>
            <h4 class="desc">${testimonialData[i].person}</h4>
        </div>
      `;
    
      var containerDiv = document.createElement("div");

      containerDiv.innerHTML = card;

    container.appendChild(containerDiv);

  }
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

