/* const locations = [
    { name: "Central Park, New York, USA", lat: 40.785091, lng: -73.968285 },
    { name: "Hyde Park, London, UK", lat: 51.507268, lng: -0.165730 },
    { name: "Kyoto Gardens, Japan", lat: 35.011636, lng: 135.768029 },
    { name: "Santorini, Greece", lat: 36.393156, lng: 25.461509 },
    { name: "Banff National Park, Canada", lat: 51.1784, lng: -115.5708 },
    { name: "Lake Bled, Slovenia", lat: 46.3636, lng: 14.0938 },
    { name: "The Maldives", lat: 3.2028, lng: 73.2207 },
    { name: "Bora Bora, French Polynesia", lat: -16.5004, lng: -151.7415 },
    { name: "Hallstatt, Austria", lat: 47.5613, lng: 13.6481 },
    { name: "Ubud, Bali, Indonesia", lat: -8.5069, lng: 115.2625 }
];

// Function to get a random location
function getRandomLocation() {
    return locations[Math.floor(Math.random() * locations.length)];
}

// Function to get a recommendation for a randomly selected location
async function getRecommendation() {
    const location = getRandomLocation();

    // Fetch the Street View image URL from the server
    const streetViewResponse = await fetch('http://localhost:3001/street-view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat: location.lat, lng: location.lng })
    });

    const streetViewData = await streetViewResponse.json();

    // Fetch the recommendation message from the server
    const recommendationResponse = await fetch('http://localhost:3001/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: { name: location.name, imageUrl: streetViewData.streetViewUrl } })
    });

    const recommendationData = await recommendationResponse.json();
    return recommendationData;
}

// Display the recommendation and image
document.getElementById("get-recommendation").addEventListener("click", async () => {
    // Clear any previous content
    const outputDiv = document.getElementById("recommendation-output");
    outputDiv.innerHTML = '';

    // Get and display recommendation
    const { text, imageUrl } = await getRecommendation();
    const recommendationElem = document.createElement("div");
    recommendationElem.className = "recommendation-text";
    recommendationElem.innerText = text;

    const imageElem = document.createElement("img");
    imageElem.src = imageUrl;
    imageElem.alt = "Scenic View Image";
    imageElem.style.width = "100%";

    outputDiv.appendChild(recommendationElem);
    outputDiv.appendChild(imageElem);
});

구 html
!DOCTYPE HTML>
<!--
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Strongly Typed by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<script>
			function showOptions() {
					// Hide the initial message and show the options container
					document.getElementById('chatMessage').style.display = 'none';
					document.getElementById('optionsContainer').classList.remove('hidden');
			}

			function showEmergencyOptions() {
					// Hide the initial options and show the emergency options
					document.getElementById('optionsContainer').style.display = 'none';
					document.getElementById('emergencyOptionsContainer').classList.remove('hidden');
			}

		</script>

	</head>
	<body class="homepage is-preload">
		<div id="page-wrapper">
			<!-- Header -->
			<section id="header" style="background-image: url('images/background.png'); background-size: cover; background-position: center;">
					<div class="container">
							<!-- Logo -->
							<h1 id="logo">
									<a href="index.html">
											<img src="images/goos-Photoroom.png" alt="Logo Description" class="logo-image" />
									</a>
							</h1>

							<!-- Chat Container -->
							<div class="chat-container" id="chatContainer" onclick="showOptions()">
									<div class="bubble received" id="chatMessage">
											“Hello, this is Jorge. What can I help you with today?”
									</div>
							</div>

							<!-- Options Container -->
							<div id="optionsContainer" class="options hidden">
									<div class="option" id="chatOption">
											<a href="chatbot.html">Chat with Jorge</a>
									</div>
									<div class="option" id="emergencyOption" onclick="showEmergencyOptions()">
											<a href="#">Emergency!</a>
									</div>
							</div>

							<!-- Emergency Options Container (Initially Hidden) -->
							<div id="emergencyOptionsContainer" class="options hidden">
									<div class="option">
											<a href="I-need-help.html">I need help</a>
									</div>
									<div class="option">
											<a href="help-a-friend.html">I want to help a friend</a>
									</div>
							</div>
					</div>
			</section>

							<!-- Nav -->
							<nav id="nav">
									<ul>
											<li><a class="icon solid fa-home" href="chatbot.html"><span>PHEWY</span></a></li>
									</ul>
							</nav>
					</div>
			</section>


			<!-- Features -->
				<section id="features">
					<div class="container">
						<header>
							<h2>Talk about it—someone is listening.</h2>
						</header>
						<div class="row aln-center">
							<div class="col-4 col-6-medium col-12-small">

								<!-- Feature -->
									<section>
										<a href="#" class="image featured"><img src="images/event1.jpeg" alt="" /></a>
										<header>
											<h3>Drop-in Talking</h3>
										</header>
										<p>Meeting on Mondays and Wednesdays in Blanchard, <a href="https://events.mtholyoke.edu/event/drop-in-talkin?utm_campaign=widget&utm_medium=widget&utm_source=Mount+Holyoke+College+Events&_ga=2.39313824.2006173762.1730999217-557548273.1730831162">Drop-in Talking</a>.
											Available to all students, no appointment necessary, first come first served.
.</p>
									</section>

							</div>
							<div class="col-4 col-6-medium col-12-small">

								<!-- Feature -->
									<section>
										<a href="#" class="image featured"><img src="images/event 2.jpeg" alt="" /></a>
										<header>
											<h3>Medication consultation</h3>
										</header>
										<p>The Counseling Service has two psychiatric providers available by appointment for consultation and/or medication management. To initiate 
<a href="https://www.mtholyoke.edu/directory/departments-offices-centers/counseling-service/medication-services"> medication services</a> for the first time, begin by scheduling a First Visit with one of our staff clinicians 
.</p>
									</section>

							</div>
							<div class="col-4 col-6-medium col-12-small">

								<!-- Feature -->
									<section>
										<a href="#" class="image featured"><img src="images/event3.jpeg" alt="" /></a>
										<header>
											<h3>Tea Time</h3>
										</header>
										<p>Meeting every Thursday (except the first Thursday of each month),  <a href="https://events.mtholyoke.edu/event/tea-time?utm_campaign=widget&utm_medium=widget&utm_source=Mount+Holyoke+College+Events&_ga=2.110029958.2006173762.1730999217-557548273.1730831162">Tea Time</a> is an Informal Drop-in Consultation for TGNC-identified students & students seeking support regarding gender-related topics.
</p>
									</section>

							</div>
							<div class="col-12">
								<ul class="actions">
									<li> <strong>WE'VE GOT YOUR BACK!</strong> </li>
								</ul>
							</div>
						</div>
					</div>
				</section>

			<!-- Banner -->
				<section id="banner">
					<div class="container">
						<p>"You are your greatest investment. Honor your needs and set boundaries. Self-care is an act of self-love."</p>
					</div>
				</section>

			<!-- Footer -->
				<section id="footer">
					<div class="container">
						<header>
							<h2>Questions or comments? <strong>Get in touch:</strong></h2>
						</header>
						<div class="row">
							<div class="col-6 col-12-medium">
								<section>
									<form method="post" action="#">
										<div class="row gtr-50">
											<div class="col-6 col-12-small">
												<input name="name" placeholder="Name" type="text" />
											</div>
											<div class="col-6 col-12-small">
												<input name="email" placeholder="Email" type="text" />
											</div>
											<div class="col-12">
												<textarea name="message" placeholder="Message"></textarea>
											</div>
											<div class="col-12">
												<a href="#" class="form-button-submit button icon solid fa-envelope">Send Message</a>
											</div>
										</div>
									</form>
								</section>
							</div>
							

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>


* 정상 server.js
import express from 'express';
import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config();


const app = express();
const __dirname = path.resolve();

// Middleware to parse incoming JSON requests
app.use(express.json()); 

// Serve static files from 'public' folder
app.use(express.static(__dirname)); // Serve files directly from the current directory (`HackH`)


// Route for the root URL to serve index.html
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html'); // Directly reference `index.html`
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error serving index.html:", err);
            res.status(500).send("Error serving the page");
        }
    });
});


// Route to fetch a Street View image based on coordinates
app.post('/street-view', async (req, res) => {
    const { lat, lng } = req.body;

    if (!lat || !lng) {
        return res.status(400).json({ error: 'Latitude and Longitude are required' });
    }

    // Fetch Street View image from Google API
    try {
        const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&fov=90&heading=235&pitch=10&key=${process.env.GOOGLE_MAPS_API_KEY}`;

        // Return the image URL for Street View
        res.json({ streetViewUrl });
    } catch (error) {
        console.error("Error fetching Street View:", error);
        res.status(500).json({ error: "Error fetching Street View data" });
    }
});


// Listen for requests on port 3001
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000`);
});
