// This file contains the main functionality for the portfolio, including event listeners and dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamic content loading for the projects section
    loadProjects();
});

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://github.com/example/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://github.com/example/project-two'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://github.com/example/project-three'
        }
    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}