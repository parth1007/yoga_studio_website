import courseData from '../data/courses.json' assert { type: "json" };


export function renderTeamModal() {

    var container = document.getElementsByTagName("BODY")[0];

    for (var i = 0; i <courseData.length; i++){
        var htmlContent = `
            <div class="modal fade" id="courseModal-${i}" role="dialog" aria-labelledby="donateModalTitle" aria-hidden="true" data-backdrop="true">
                ${courseData[i].title}
            </div>
        `;
        container.innerHTML += htmlContent;
    }
}