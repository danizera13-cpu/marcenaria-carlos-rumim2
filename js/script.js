function toggleDark(){
    document.body.classList.toggle("dark");
}

function abrirImagem(img){
    let fundo = document.createElement("div");
    fundo.style.position="fixed";
    fundo.style.top=0;
    fundo.style.left=0;
    fundo.style.width="100%";
    fundo.style.height="100%";
    fundo.style.background="rgba(0,0,0,.9)";
    fundo.style.display="flex";
    fundo.style.alignItems="center";
    fundo.style.justifyContent="center";
    fundo.style.zIndex=999;

    let imagem = document.createElement("img");
    imagem.src = img.src;
    imagem.style.maxWidth="90%";
    imagem.style.maxHeight="90%";
    imagem.style.borderRadius="20px";

    fundo.onclick = ()=>fundo.remove();

    fundo.appendChild(imagem);
    document.body.appendChild(fundo);
}
