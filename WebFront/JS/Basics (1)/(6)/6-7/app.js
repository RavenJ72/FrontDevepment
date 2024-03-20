function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');
    for (let profile of profiles) {
        let lockInput = profile.querySelector('input[value="lock"]');
        let unlockInput = profile.querySelector('input[value="unlock"]');
        let hiddenFields = profile.querySelector('.hidden-field');
        let showButton = profile.querySelector('button');

        showButton.addEventListener('click', function() {
            if (lockInput.checked) {
                return;
            }
            if(showButton.textContent === 'Show more'){
                    hiddenFields.style.display = 'block';
                    showButton.textContent = 'Hide it';
            }else{
                hiddenFields.style.display = 'none';
                showButton.textContent = 'Show more';
            }

        });
    }
}

