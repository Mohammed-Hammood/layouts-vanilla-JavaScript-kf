const displayMenu = ()=> {
    let html = "";
    for(let i=0; i< menu.length; i++){
        let element = `<button type='button' onclick="toggleSubmenu(${menu[i].id})" id="${menu[i].id}" >${menu[i].title} </button>`;
        html += element;
        if(menu[i].submenu.length > 0){
            let submenu = `<div class='submenu hidden' id='submenu-${menu[i].id}'>`;
            for(let j =0; j < menu[i].submenu.length; j++){
                let element = `
                    <button type='button' onclick="handleArticles(${menu[i].id}, ${menu[i].submenu[j].id})">${menu[i].submenu[j].title } </button>    
                `;
                submenu += element;
            }
            submenu += "</div>";
            html += submenu;
        }
    }
    return html;
}
let activeLanguageId = 0;
let activeSubmenuId = 0;
const toggleSubmenu = (menuId) => {
    const submenu = document.getElementById("submenu-"+menuId);
    if(submenu.className.includes("hidden")){
        submenu.classList.remove("hidden");
        submenu.classList.add("show-f");
    }else {
        submenu.classList.add("hidden");
        submenu.classList.remove("show-f");
    }
}
const displayArticles = (articles) => {
    let html = "";
    for(let i = 0; i < articles.length; i++){
        let element = `<div class='article' onclick='displayArticleDetail(${articles[i].id})'> 
            <div class="head">${articles[i].title}</div> 
            <div class="body">${articles[i].text}</div>
        </div>`;
        html += element;
    }
    document.querySelector(".articles-container").innerHTML = html;
}
const handleArticles = (languageId, submenuId)=> {
    const articles = menu[languageId].submenu[submenuId].articles;
    activeLanguageId = languageId;
    activeSubmenuId = submenuId;
    displayArticles(articles);
}
const search = (event)=> {
    console.log(event.target.value)
    const q = event.target.value.trim();
    const articles = menu[activeLanguageId].submenu[activeSubmenuId].articles;
    let searchedArray = [];
    for(let i=0; i < articles.length; i++){
        if(articles[i].title.toLowerCase().includes(q.toLowerCase()) || articles[i].text.toLowerCase().includes(q.toLowerCase())){
            searchedArray.push(articles[i]);
        }
    }
    displayArticles(searchedArray);
}
const displayArticleDetail = (articleId)=> {
    const article = menu[activeLanguageId].submenu[activeSubmenuId].articles[articleId];
    const articlesLen = menu[activeLanguageId].submenu[activeSubmenuId].articles.length;
    const articles = document.querySelectorAll("#articles-container .article");
    for(let i =0; i < articlesLen; i++){
        articles[i].classList.remove('active');
        if(i === articleId){
            articles[i].classList.add("active");
        }
    }
    const container = document.querySelector('.right-container');
    let html = `
        <div class='article-detail-container'>
            <div class='title'><strong>Article:</strong> ${article.title}</div>
            <div class='language'><strong>Lanugage:</strong> ${article.language}</div>
            <div class='text'>${article.text}</div>
            <div class='footer'>
                <button type='button'>
                    <img src='/assets/svg/thumbsup.svg' />
                </button>
                <button type='button'>
                    <img src='/assets/svg/thumbsdown.svg' />
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}
document.querySelector(".left-container").innerHTML = displayMenu();