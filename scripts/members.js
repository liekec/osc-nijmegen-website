fetch("data/members.json")
.then(response => response.json())
.then(members => {

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


});
