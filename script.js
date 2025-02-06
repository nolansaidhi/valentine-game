window.onload = function() {
    let months = document.querySelectorAll('.month');
    let finalMessage = document.getElementById('finalMessage');
    let nextBtn = document.getElementById('nextBtn');
    let currentMonthIndex = 0;
    let intro = document.querySelector('.intro');
    let question = document.getElementById('question');
    let response = document.getElementById('response');
    let yesBtn = document.getElementById('yesBtn');
    let noBtn = document.getElementById('noBtn');

    // Show the first month
    function showNextMonth() {
        if (currentMonthIndex === 0) {
            intro.style.opacity = 0;
        }
        if (currentMonthIndex < months.length) {
            months[currentMonthIndex].classList.add('active');
            currentMonthIndex++;
        } else if (currentMonthIndex === months.length) {
            question.style.display = 'block'; // Show the question after the last month
            nextBtn.style.display = 'none'; // Hide the Next button
        }
    }

    // Show the response based on button click
    yesBtn.addEventListener('click', function() {
        response.innerHTML = "obv lol #bestcoupleever";
        setTimeout(() => finalMessage.style.display = 'block', 2000);
    });

    noBtn.addEventListener('click', function() {
        response.innerHTML = "NOT AN OPTION. Rechoose!";
    });

    // Event listener for the Next button
    nextBtn.addEventListener('click', showNextMonth);

    // Automatically show the first month on page load
    showNextMonth();
};
