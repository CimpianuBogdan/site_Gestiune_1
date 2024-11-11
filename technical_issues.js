function submitIssue() {
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const photo = document.getElementById("photo").files[0];

    // Verificăm dacă dimensiunea fotografiei depășește 2MB
    if (photo && photo.size > 2 * 1024 * 1024) {
        document.getElementById("errorMessage").style.display = "block";
        return false;  // Împiedicăm trimiterea formularului
    }

    // Simulăm trimiterea raportului și generăm un număr de referință
    const referenceNumber = Math.floor(Math.random() * 100000);
    document.getElementById("issueForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("referenceNumber").innerText = referenceNumber;
    document.getElementById("backButton").style.display = "block";

    return false;  // Prevenim reîncărcarea formularului
}
