import trainerData from '../data/trainers.json' assert { type: "json" };


export function renderTeam() {
    var container = document.getElementById("teamContainer");
    var htmlContent = '';

    for (var i = 0; i < trainerData.length; i++) {
        var card = `
            <div class="col-md-6 col-lg-3 single-team">
                <div class="thumb">
                    <img class="img-fluid" style="margin-top:0.5rem;" src=${trainerData[i].img} alt="">
                    <div class="align-items-center justify-content-center d-flex">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="meta-text mt-30 text-center">
                    <h4>${trainerData[i].name}</h4>
                    <p>${trainerData[i].desc}</p>
                </div>
            </div>
        `;
        htmlContent += card
        }
        container.innerHTML = htmlContent;
    }

