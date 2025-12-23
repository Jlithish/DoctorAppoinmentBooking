let selectedDoctor = "";

    document.addEventListener("DOMContentLoaded", () => {
      const bookButtons = document.querySelectorAll(".book-slot-btn");
      bookButtons.forEach(button => {
        button.addEventListener("click", (e) => {
          const doctorCard = e.target.closest(".doctor-card");
          selectedDoctor = doctorCard.querySelector("h3").textContent;
          document.getElementById("slotModal").style.display = "flex";
        });
      });
    });

    function closeModal() {
      document.getElementById("slotModal").style.display = "none";
      document.getElementById("slotDropdown").value = "";
    }

    function confirmBooking() {
      const slot = document.getElementById("slotDropdown").value;
      if (!slot) {
        alert("Please select a time slot.");
        return;
      }

      alert(`Appointment booked with ${selectedDoctor} at ${slot}`);
      console.log(`Booking -> Doctor: ${selectedDoctor}, Slot: ${slot}`);
      closeModal();
    }