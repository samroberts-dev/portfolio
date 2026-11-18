/* jshint esversion: 6 */
(function () {
    const selected = new URLSearchParams(window.location.search).get('project');
    const projects = document.querySelectorAll('[data-project]');
    projects.forEach(function (project) {
        if (project.dataset.project === selected) {
            project.classList.remove('hidden');
            document.querySelector('#project-picker').classList.add('hidden');
            document.title = project.querySelector('h2').textContent + ' | Samuel Roberts';
        }
    });
}());
