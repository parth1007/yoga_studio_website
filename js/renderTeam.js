import trainerData from '../data/trainers.json' assert { type: "json" };
import { renderTeamModal } from './teamModal.js';

export function renderTeam() {
    var container = document.getElementById("teamContainer");
    var htmlContent = '';

    for (var i = 0; i < trainerData.length; i++) {
        var card = `
            <div class="col-md-6 col-lg-3 single-team" >
                <div class="thumb" data-toggle="modal" data-target="#teamModal-${i}">
                    <img class="img-fluid" style="margin-top:0.5rem;" src=${trainerData[i].img} alt="">
                    <div class="align-items-center justify-content-center d-flex team-overlay" data-toggle="modal" data-target="#teamPage">
                        <button class="team-sbutton">
                            Read More
                        </button>
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