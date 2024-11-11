function togglePaymentFields() {
    const method = document.getElementById("method").value;
    document.getElementById("cardFields").style.display = method === "card" ? "block" : "none";
    document.getElementById("transferFields").style.display = method === "transfer" ? "block" : "none";
}

function processPayment() {
    const method = document.getElementById("method").value;
    const utilityType = document.getElementById("utilityType").value;
    const amount = document.getElementById("amount").value;
    let isValid = true;

    if (!utilityType || !amount) {
        alert("Te rugăm să completezi toate câmpurile obligatorii.");
        return false;
    }

    if (method === "card") {
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;

        if (!cardNumber || !expiryDate || !cvv) {
            alert("Te rugăm să completezi toate câmpurile de card.");
            isValid = false;
        }
    } else if (method === "transfer") {
        alert("Pentru transfer bancar, folosește detaliile furnizate și confirmă plata după efectuare.");
    }

    if (isValid) {
        // Simulăm procesarea plății
        document.getElementById("paymentForm").style.display = "none";
        document.getElementById("confirmationMessage").innerText = "Plata a fost efectuată cu succes.";
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("downloadReceipt").style.display = "block";
        document.getElementById("backToMain").style.display = "block";
    }

    return false;  // Prevenim reîncărcarea formularului
}

function downloadReceipt() {
    const utilityType = document.getElementById("utilityType").value;
    const amount = document.getElementById("amount").value;
    const receiptText = `Chitanță pentru plata întreținerii\nTipul de utilitate: ${utilityType}\nSuma: ${amount} RON\nStatus: Plata efectuată cu succes`;
    
    const blob = new Blob([receiptText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "chitanta_plata.txt";
    link.click();
}
