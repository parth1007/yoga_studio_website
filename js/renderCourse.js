import courseData from '../data/courses.json' with { type: "json" };


export function renderCourseModal() {

    var container = document.getElementsByTagName("BODY")[0];

    for (var i = 0; i <courseData.length; i++){
        var htmlContent = `
            <div class="modal fade" id="courseModal-${i}" role="dialog" aria-labelledby="donateModalTitle" aria-hidden="true" data-backdrop="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="donateModalLongTitle">${courseData[i].title}</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += htmlContent;
    }
}