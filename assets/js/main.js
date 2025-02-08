function updateProfileInfo(profileData){
    const photo = document.querySelector("#profile-photo");
    if(photo) photo.src = profileData.photo;

    const nome = document.querySelector("#profile-name");
    if(nome) nome.innerText = profileData.name;

    const job = document.querySelector("#profile-job");
    if(job) job.innerText = profileData.job;

    const location = document.querySelector("#profile-location");
    if(location) location.innerText = profileData.location;

    const phone = document.querySelector("#profile-phone");
    if(phone){
        phone.href = `tel:${profileData.phone}`;
        phone.innerText = profileData.phone;
    }

    const email = document.querySelector("#profile-email");
    if(email){
        email.href = `mailto:${profileData.email}`;
        email.innerText = profileData.email;
    }
}

function updateProfileSkills(profileData){
    const hardSkills = document.querySelector("#profile-skills-hardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills
        .map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`)
        .join("");

    const softSkills = document.querySelector("#profile-skills-softSkills");
    softSkills.innerHTML = profileData.skills.softSkills
        .map((skills) =>  `<li>${skills}</li>`)
        .join("");
}

function updateProfileLanguages(profileData){
    const languages = document.querySelector("#profile-languages");
    languages.innerHTML = profileData.languages
        .map((language) => `<li>${language}</li>`)
        .join("");
}

function verifyGitHub(portfolio){
    const response = portfolio.github ? 'class="github"' : '';
    return response;
}

function updateProfilePortfolio(profileData){
    const portfolio = document.querySelector("#profile-portfolio");
    portfolio.innerHTML = profileData.portfolio
        .map((portfolio) => {
            return `<li>
                <h3 ${verifyGitHub(portfolio)}>${portfolio.name}</h3>
                <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
            
            </li>`
        }).join("");
}

function updateProfileExperience(profileData){
    const experience = document.querySelector("#profile-professionalExperience");
    experience.innerHTML = profileData.professionalExperience.map((experience) => {
        return `<li>
            <h3 class="title">${experience.name}<h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`
    }).join("");
}

(async () =>{
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateProfileSkills(profileData);
    updateProfileLanguages(profileData);
    updateProfilePortfolio(profileData);
    updateProfileExperience(profileData);
})()

