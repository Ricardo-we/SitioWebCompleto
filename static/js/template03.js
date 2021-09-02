const container = document.getElementById("main_cont");
const base_dir = "../static/img/"

const images = [
    base_dir+"ic_quiz.png",
    base_dir+"ic_assignment.png",
    base_dir+"ic_holiday.png",
    base_dir+"ic_calendra.png",
    base_dir+"ic_results.png",
    base_dir+"ic_date_sheet.png",
    base_dir+"ic_doubts.png",
    base_dir+"ic_gallery.png",
    base_dir+"ic_leave.png",
    base_dir+"ic_password.png",
    base_dir+"ic_event.png",
    base_dir+"ic_logout.png",

];

const titles = [
    "Play quiz",
    "Assignment",
    "School Holiday",
    "Time Table",
    "Result",
    "Date Sheet",
    "Ask Doubts",
    "School Gallery",
    "Leave Application",
    "Change Password",
    "Events",
    "Logout"
];

let add_elements = ``;

function add_all_container(){
    for (let i = 0; i < images.length; i++){
        add_elements +=`
        <div class="min_container_2">
            <img src="${images[i]}" alt="">
            <h2>${titles[i]}</h2>
        </div>`
    }

    container.innerHTML = add_elements
}

add_all_container()
