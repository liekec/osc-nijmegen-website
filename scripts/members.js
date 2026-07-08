let allMembers = [];


fetch("data/members.json")
.then(response => response.json())
.then(members => {

    allMembers = members;

    displayMembers(allMembers);


});



function displayMembers(members) {

    const container = document.querySelector(".members-grid");

    container.innerHTML = "";


    members.forEach(member => {


        const card = document.createElement("div");

        card.className = "member-card";


        card.innerHTML = `

        <h3>
        ${member.firstName} ${member.lastName}
        </h3>


        <p class="member-position">
        ${member.position}
        </p>


        <p>
        ${member.institute}<br>
        ${member.unit || ""}
        </p>


        <h4>Expertise</h4>

        <div class="tags">
        ${member.expertise.map(item =>
            `<span>${item}</span>`
        ).join("")}
        </div>


        <h4>Interested in</h4>

        <div class="tags">
        ${member.interests.map(item =>
            `<span>${item}</span>`
        ).join("")}
        </div>


        <p class="member-email">
        ✉ ${member.email}
        </p>


        `;


        container.appendChild(card);


    });

}




function filterMembers() {


    const search =
    document
    .getElementById("search-input")
    .value
    .toLowerCase();


    const institute =
    document
    .getElementById("institute-filter")
    .value;


    const position =
    document
    .getElementById("position-filter")
    .value;


    const expertise =
    document
    .getElementById("expertise-filter")
    .value;


    const interest =
    document
    .getElementById("interest-filter")
    .value;



    const filtered = allMembers.filter(member => {


        return (

        (
        `${member.firstName} ${member.lastName}`
        .toLowerCase()
        .includes(search)
        )


        &&

        (
        institute === "" ||
        member.institute === institute
        )


        &&

        (
        position === "" ||
        member.position === position
        )


        &&

        (
        expertise === "" ||
        member.expertise.includes(expertise)
        )


        &&

        (
        interest === "" ||
        member.interests.includes(interest)
        )


        );

    });


    displayMembers(filtered);

}





document
.getElementById("search-input")
.addEventListener("input", filterMembers);


document
.getElementById("institute-filter")
.addEventListener("change", filterMembers);


document
.getElementById("position-filter")
.addEventListener("change", filterMembers);


document
.getElementById("expertise-filter")
.addEventListener("change", filterMembers);


document
.getElementById("interest-filter")
.addEventListener("change", filterMembers);
