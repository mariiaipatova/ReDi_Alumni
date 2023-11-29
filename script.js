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
    { photo: 'default photo 3.png', name: 'Default Student 2', academicBackground: 'Business Administration', employmentStatus: 'Student', experience: 'Marketing Intern', skills: 'Marketing, Social Media', linkedin: 'https://www.linkedin.com/in/defaultstudent2/' },    // Add more default profiles as needed
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
    <p>LinkedIn ${profile.linkedin}</p>
  `;
  container.appendChild(card);
}

function addProfile() {
  const photo = document.getElementById('photo').value;
  const name = document.getElementById('name').value;
  const academicBackground = document.getElementById('academicBackground').value;
  const employmentStatus = document.getElementById('employmentStatus').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;
  const linkedin = document.getElementById('linkedin').value;

  // Check if required fields are not empty
  if (photo && name && academicBackground && employmentStatus && experience && skills && linkedin)   {
    // Retrieve existing profiles from local storage
    const storedProfiles = localStorage.getItem('profiles');
    const profiles = storedProfiles ? JSON.parse(storedProfiles) : [];

    // Add the new profile to the array
    profiles.push({ photo, name, academicBackground, employmentStatus, experience, skills, linkedin });

    // Save the updated profiles back to local storage
    localStorage.setItem('profiles', JSON.stringify(profiles));

    alert('Profile added successfully!');
    
    // After adding a new profile, re-render the profiles on the 4th page
    if (window.location.pathname.includes('page_3_leaveCV.html')) {
      window.location.href = "page_6.html";
    }
  } else {
    alert('Please fill in all required fields.');
  }

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('academicBackground').value = '';
  document.getElementById('employmentStatus').value = '';
}
