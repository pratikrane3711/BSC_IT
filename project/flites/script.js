const flightForm = document.getElementById("flightForm");
const flightResults = document.getElementById("flightResults");
const bookingSection = document.getElementById("bookingSection");
const bookingForm = document.getElementById("bookingForm");
const selectedFlightText = document.getElementById("selectedFlight");

// Sample flight data
const flights = [
  { airline: "IndiGo", time: "08:00 AM", price: 3500 },
  { airline: "Air India", time: "11:30 AM", price: 4200 },
  { airline: "Vistara", time: "02:15 PM", price: 4800 },
  { airline: "SpiceJet", time: "06:45 PM", price: 3900 }
];

let chosenFlight = null;b

flightForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value; 
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  flightResults.innerHTML = "";

  flights.forEach((flight, index) => {
    const card = document.createElement("div");
    card.className = "flight-card";
    card.innerHTML = `
      <h3>${flight.airline}</h3>
      <p><strong>Route:</strong> ${from} ➝ ${to}</p>
      <p><strong>Time:</strong> ${flight.time}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Price:</strong> ₹${flight.price} per passenger</p>
      <p><strong>Total:</strong> ₹${flight.price * passengers}</p>
      <button onclick="bookFlight(${index}, '${from}', '${to}', '${date}', ${passengers})">Book Now</button>
    `;
    flightResults.appendChild(card);
  });
});

function bookFlight(index, from, to, date, passengers) {
  chosenFlight = flights[index];
  bookingSection.style.display = "block";
  selectedFlightText.innerHTML = `
    <strong>${chosenFlight.airline}</strong> | ${from} ➝ ${to} | ${date} | ${passengers} Passenger(s) | Total ₹${chosenFlight.price * passengers}
  `;
  window.scrollTo({ top: bookingSection.offsetTop, behavior: "smooth" });
}

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  alert(`✅ Booking Confirmed!\n\nThank you ${name}, your flight has been successfully booked. ✈️`);                      
  bookingForm.reset();
  bookingSection.style.display = "none";
});

