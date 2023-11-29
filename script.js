document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('page_4_meetOurStudents.html')) {
    // If on page_4_meetOurStudents.html, render profiles
    renderProfiles();
  }
});

function renderProfiles() {
  const profilesGrid = document.querySelector('.profilesGrid');
  profilesGrid.innerHTML = '';

  // Retrieve profiles from local storage
  const storedProfiles = localStorage.getItem('profiles');
  const profiles = storedProfiles ? JSON.parse(storedProfiles) : [];

  profiles.forEach(profile => {
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
    profilesGrid.appendChild(card);
  });
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
