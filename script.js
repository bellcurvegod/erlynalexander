const editBiographyButton = document.getElementById('edit-bio');
const biographyContent = document.getElementById('bio-content');

const biographyEditor = document.getElementById('bio-editor');
const biographyTextArea = document.getElementById('bio-textarea');
const saveBiographyButton = document.getElementById('save-bio');

// Add click event listener to the edit bio button
editBiographyButton.addEventListener('click', () => {
  // Hide bio content, display editor and populate textarea
  biographyContent.style.display = 'none';
  biographyEditor.style.display = 'block';
  biographyTextArea.value = biographyContent.textContent;
});

// Add a click event listener to the "Save" button
saveBiographyButton.addEventListener('click', ()=> {
  // Update bio content with edited text
  biographyContent.textContent = biographyTextArea.value;

  // Hide editor and display updated biography content
  biographyEditor.style.display = 'none';
  biographyContent.style.display =  'block';
});

const uploadImageButton = document.getElementById('upload-image');

