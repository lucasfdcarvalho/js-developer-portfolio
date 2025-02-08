
async function fetchProfileData() {
    try{
        const url = "https://raw.githubusercontent.com/lucasfdcarvalho/js-developer-portfolio/refs/heads/main/data/profile.json";
        const fetching = await fetch(url);
        if(!fetching.ok){
            console.log("Erro ao consultar a API");
            return;
        }
        const response = await fetching.json();
        return response;
    }catch(error){
        console.error(error);
    }
}