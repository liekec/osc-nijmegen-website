const sheetURL = "https://opensheet.elk.sh/1-xLa6VPYhSVbPR40bHJCF8nnQgSGWAOa3sb4yjjVfkU/1";

let members = [];


fetch(sheetURL)
.then(response => response.json())
.then(data => {

    members = data;

    displayMembers(members);

})
.catch(error => {
    console.error("Error loading members:", error);
});



function displayMembers(list) {

    const grid = document.querySelector(".members-grid");

    grid.innerHTML = "";


    list.forEach(member => {

        grid.innerHTML += `

        <article class="team-card">

            <div class="team-card-content">

                <h3>
                    ${member.Name} ${member["Last name"]}
                </h3>


                <div class="role">
                    ${member.Position}
                </div>


                <p>
                    <strong>${member.Institute}</strong><br>
                    ${member["Faculty / Department"]}
                </p>


                <p>
                    <strong>Expertise</strong><br>
                    ${member.Expertise}
                </p>


                <p>
                    <a href="mailto:${member["E-mail"]}">
                        ${member["E-mail"]}
                    </a>
                </p>


            </div>

        </article>

        `;

    });

}
