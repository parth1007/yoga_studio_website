import trainerData from '../data/trainers.json' assert { type: "json" };


export function renderTeamModal() {

    var container = document.getElementsByTagName("BODY")[0];

    for (var i = 0; i <trainerData.length; i++){
        var htmlContent = `
            <div class="modal fade" id="teamModal-${i}" role="dialog" aria-labelledby="donateModalTitle" aria-hidden="true" data-backdrop="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="donateModalLongTitle">${trainerData[i].name}</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body acc-body member-modal">
                            <div class="member-modal-img-div">
                                <img src=${trainerData[i].img} class="member-modal-img">
                            </div>
                            <div class="member-modal-details">
                                ${trainerData[i].about}
                                <br> 
                                ${trainerData[i].about}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += htmlContent;
    }

}

