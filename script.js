document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('page_4_meetOurStudents.html')) {
    renderProfiles();
  }
});

function renderProfiles() {
  const profilesGrid = document.querySelector('.profilesGrid');
  profilesGrid.innerHTML = '';

  const storedProfiles = localStorage.getItem('profiles');
  const profiles = storedProfiles ? JSON.parse(storedProfiles) : [];
  
  // Render default profiles
  renderDefaultProfiles(profilesGrid);

  profiles.forEach(profile => {
    createProfileCard(profilesGrid, profile);
  });
}

function renderDefaultProfiles(container) {
  const defaultProfiles = [
    { photo: 'default photo 1.png', name: 'Default Student 2', academicBackground: 'Business Administration', employmentStatus: 'Student', experience: 'Marketing Intern', skills: 'Marketing, Social Media', linkedin: 'https://www.linkedin.com/in/defaultstudent2/' },
    { photo: 'default photo 2.png', name: 'Default Student 1', academicBackground: 'Computer Science', employmentStatus: 'Student', experience: 'Intern', skills: 'JavaScript, HTML, CSS', linkedin: 'https://www.linkedin.com/in/defaultstudent1/' },
    { photo: 'default photo 3.png', name: 'Default Student 2', academicBackground: 'Business Administration', employmentStatus: 'Student', experience: 'Marketing Intern', skills: 'Marketing, Social Media', linkedin: 'https://www.linkedin.com/in/defaultstudent2/' },
    // Add more default profiles as needed
  ];

  defaultProfiles.forEach(profile => {
    createProfileCard(container, profile);
  });
}

function createProfileCard(container, profile) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${profile.photo}" alt="${profile.name}" style="width: 100%;">
    <h3>${profile.name}</h3>
    <p>Academic Background: ${profile.academicBackground}</p>
    <p>Current Employment Status: ${profile.employmentStatus}</p>
    <p>Professional Experience: ${profile.experience}</p>
    <p>Skills and Competences: ${profile.skills}</p>
    <p>LinkedIn: ${profile.linkedin}</p>
  `;
  container.appendChild(card);
}


