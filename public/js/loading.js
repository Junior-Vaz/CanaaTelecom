document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    
    // Simula o carregamento do conteúdo
    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
        document.body.style.overflow = "auto"; // Permite o scroll novamente
    }, 500); // 2 segundos de espera antes de mostrar o conteúdo

    // Adiciona evento de clique nos links
    const links = document.querySelectorAll(".load-link");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            loader.style.display = "flex";
            content.style.display = "none";
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                window.location.href = link.href;
                
            }, 1000); // 1 segundo de espera antes de redirecionar
        });
    });
});
