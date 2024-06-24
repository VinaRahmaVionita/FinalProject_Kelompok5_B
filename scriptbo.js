document.addEventListener('DOMContentLoaded', () => {
  const seats = document.querySelectorAll('.seat');
  const selectedSeatsInput = document.getElementById('selected-seats');
  let selectedSeats = [];

  seats.forEach(seat => {
      seat.addEventListener('click', () => {
          seat.classList.toggle('selected');
          const seatId = seat.getAttribute('data-seat');

          if (seat.classList.contains('selected')) {
              selectedSeats.push(seatId);
          } else {
              selectedSeats = selectedSeats.filter(id => id !== seatId);
          }

          selectedSeatsInput.value = selectedSeats.join(',');
      });
  });

  const form = document.getElementById('booking-form');
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const viewerName = document.getElementById('viewer-name').value;
      const movieName = document.getElementById('movie-name').value;
      const date = document.getElementById('date').value;
      const tickets = document.getElementById('tickets').value;
      const selectedSeats = selectedSeatsInput.value;

      // Menyusun rincian pesanan dalam bentuk tabel
      const bookingDetails = `
          <tr>
              <td>Name</td>
              <td>${viewerName}</td>
          </tr>
          <tr>
              <td>Movie</td>
              <td>${movieName}</td>
          </tr>
          <tr>
              <td>Date</td>
              <td>${date}</td>
          </tr>
          <tr>
              <td>Tickets</td>
              <td>${tickets}</td>
          </tr>
          <tr>
              <td>Seats</td>
              <td>${selectedSeats}</td>
          </tr>
      `;

      // Memasukkan rincian pesanan ke dalam tabel
      const bookingDetailsContainer = document.getElementById('booking-details');
      bookingDetailsContainer.innerHTML = bookingDetails;

      // Tampilkan alert (opsional) untuk debug atau pengujian
      alert('Booking Details:\nName: ${viewerName}\nMovie: ${movieName}\nDate: ${date}\nTickets: ${tickets}\nSeats: ${selectedSeats}');
  });
});