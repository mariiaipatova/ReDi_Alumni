document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    categorySelect.addEventListener('change', function () {
      const selectedCategory = categorySelect.value;
      renderProfiles(selectedCategory);
    });
  
    // Retrieve profiles from local storage
    const storedProfiles = localStorage.getItem('profiles');
    profiles = storedProfiles ? JSON.parse(storedProfiles) : [];
  
    renderProfiles('all');
  });
  
  function renderProfiles(category) {
    const slider = document.querySelector('.slider');
    slider.innerHTML = '';
  
    let filteredProfiles = profiles;
    if (category !== 'all') {
      filteredProfiles = profiles.filter(profile => profile.category === category);
    }
  
    filteredProfiles.forEach(profile => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${profile.photo}" alt="${profile.name}" style="width: 100%;">
        <h3>${profile.name}</h3>
        <p>Category: ${profile.category}</p>
        <p>Skills: ${profile.skills}</p>
      `;
      slider.appendChild(card);
    });
  }
  
  function addProfile() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const skills = document.getElementById('skills').value;
    const photo = document.getElementById('photo').value;
  
    if (name && category && skills && photo) {
      profiles.push({ name, category, skills, photo });
  
      // Save updated profiles to local storage
      localStorage.setItem('profiles', JSON.stringify(profiles));
  
      alert('Profile added successfully!');
      // After adding a new profile, re-render the profiles on the 4th page
      window.location.href = "page_4_meetOurStudents.html";
    }
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('skills').value = '';
    document.getElementById('photo').value = '';
  }
  