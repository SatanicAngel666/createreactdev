const darkModeToggles = document.querySelectorAll('.toggle-checkbox');

        
darkModeToggles.forEach((toggle, index) => {
    toggle.addEventListener('change', () => {
        const checked = toggle.checked;

        // Synchronize the state of other toggle buttons
        darkModeToggles.forEach((otherToggle, otherIndex) => {
            if (otherIndex !== index) {
                otherToggle.checked = checked;
            }
        });

        const sliders = document.querySelectorAll('.toggle-label .slider');
        sliders.forEach((slider, i) => {
            slider.style.transform = checked ? 'translateX(26px)' : 'translateX(0)';
        });

        document.body.classList.toggle('dark-mode', checked);
    });
});