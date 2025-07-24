const projects = [
    {
        title: "Project One",
        description: "A brief description of Project One, highlighting its features and technologies used.",
        link: "https://github.com/username/project-one",
        liveDemo: "https://username.github.io/project-one"
    },
    {
        title: "Project Two",
        description: "A brief description of Project Two, highlighting its features and technologies used.",
        link: "https://github.com/username/project-two",
        liveDemo: "https://username.github.io/project-two"
    },
    {
        title: "Project Three",
        description: "A brief description of Project Three, highlighting its features and technologies used.",
        link: "https://github.com/username/project-three",
        liveDemo: "https://username.github.io/project-three"
    }
];

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Code</a>
            <a href="${project.liveDemo}" target="_blank">Live Demo</a>
        `;

        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);