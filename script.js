
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    themeBtn.textContent = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
});


const aboutBtn = document.getElementById("aboutBtn");
const extraAbout = document.getElementById("extraAbout");

aboutBtn.addEventListener("click", function () {
    extraAbout.hidden = !extraAbout.hidden;

    aboutBtn.textContent = extraAbout.hidden
        ? "Show More"
        : "Show Less";
});


const projects = [
    {
        title: "Musaned Visitor Management",
        description: "Developed a visitor management application with QR check-in, appointment management, reporting, and real-time updates.",
        category: "Web",
        technologies: "Ionic, Angular, TypeScript, Supabase"
    },
    {
        title: "Laundry Management System",
        description: "Analyzed and designed a laundry management system using UML diagrams and UI/UX design, with core functionality implemented in Java.",
        category: "Programming",
        technologies: "Java, UML"
    },
    {
        title: "Travel Agency Database System",
        description: "Designed ER diagrams, converted them into a relational schema, and implemented SQL queries.",
        category: "Programming",
        technologies: "SQL, Database Design"
    },
    {
        title: "Wasl",
        description: "Designed a platform connecting students with training opportunities, using strategies and data analysis to identify the problem.",
        category: "Web",
        technologies: "UI/UX Design, Data Analysis"
    }
];


const projectsContainer = document.getElementById("projectsContainer");

function renderProjects(category) {
    projectsContainer.innerHTML = "";

    const filteredProjects = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    filteredProjects.forEach(function (project) {
        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const type = document.createElement("p");
        type.classList.add("project-type");
        type.textContent = project.category;

        const description = document.createElement("p");
        description.textContent = project.description;

        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.technologies;

        card.appendChild(title);
        card.appendChild(type);
        card.appendChild(description);
        card.appendChild(technologies);

        projectsContainer.appendChild(card);
    });
}


const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderProjects(selectedCategory);
    });
});

renderProjects("All");


const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
    window.print();
});
