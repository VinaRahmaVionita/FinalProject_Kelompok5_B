document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.details-button');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSynopsis = document.getElementById('modal-synopsis');
    const modalRestricted = document.getElementById('modal-restricted');
    const modalSchedule = document.getElementById('modal-schedule');
    const modalTrailer = document.getElementById('modal-trailer');
    const closeButton = document.querySelector('.close-button');
  
    detailsButtons.forEach(button => {
      button.addEventListener('click', function() {
        const movie = button.closest('.movie');
        const title = movie.querySelector('h3').textContent;
        const synopsis = movie.dataset.synopsis;
        const restricted = movie.dataset.restricted;
        const schedule = movie.dataset.schedule;
        const trailer = movie.dataset.trailer;
  
        modalTitle.textContent = title;
        modalSynopsis.textContent = synopsis;
        modalRestricted.textContent = restricted;
        modalSchedule.textContent = schedule;
  
        if (trailer) {
          modalTrailer.innerHTML = `<iframe width="560" height="315" src="${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else {
          modalTrailer.innerHTML = '';
        }
  
        modal.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
      modalTrailer.innerHTML = '';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        modalTrailer.innerHTML = '';
      }
    });
  });
  