/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
    const yearCount = {};

    data.asteroids.forEach((asteroid) => {
        const year = asteroid.discoveryYear;

        if (yearCount[year]) {
            yearCount[year]++;
        } else {
            yearCount[year] = 1;
        }
    });

    let maxYear = null;
    let maxCount = 0;

    for (let year in yearCount) {
        if (yearCount[year] > maxCount) {
            maxYear = year;
            maxCount = yearCount[year];
        }
    }

    return parseInt(maxYear, 10);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
