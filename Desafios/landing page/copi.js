function copyPhoneNumber() {
    const phoneNumber = "21984263984"; // Substitua pelo número de telefone
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            alert("Número de telefone copiado!");
        })
        .catch(err => {
            console.error("Falha ao copiar o número: ", err);
            alert("Falha ao copiar o número.");
        });
}