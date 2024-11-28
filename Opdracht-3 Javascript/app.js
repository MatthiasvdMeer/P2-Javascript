function submitProduct() {
    // Haal de waarde uit het inputveld
    const product = document.getElementById("product").value;

    // Toon de waarde in de console
    console.log("Ingevuld product:", product);

    // Optioneel: leeg het formulier na het invullen
    document.getElementById("productForm").reset();
}