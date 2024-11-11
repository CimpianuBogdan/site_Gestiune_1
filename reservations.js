function checkAvailability() {
    const space = document.getElementById("space").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const contact = document.getElementById("contact").value;

    // Simulăm o verificare a disponibilității
    const isAvailable = Math.random() > 0.5; // Doar o simulare

    if (!isAvailable) {
        document.getElementById("errorMessage").style.display = "block";
        return false; // Împiedicăm trimiterea formularului dacă spațiul nu e disponibil
    }

    // Dacă este disponibil, generăm un număr de rezervare și confirmăm
    const reservationNumber = Math.floor(Math.random() * 100000);
    document.getElementById("reservationForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("reservationNumber").innerText = reservationNumber;
    document.getElementById("backButton").style.display = "block";

    return false;  // Prevenim reîncărcarea formularului
}
