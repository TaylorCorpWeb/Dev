//TABS NEW

const TabItemSelector = '.advantage__tabItem';
const ContentItemSelector = '.advantage__contentItem';

class TabsManager {
  constructor(navNode){
    this.tabs = [];
    this.activeTab = null;

    this.initFromHtml(navNode);
    
    this.activateTab(this.tabs[0]);
  }

  initFromHtml (navNode) {
    const headers  = navNode.querySelectorAll(TabItemSelector);
    const contents = navNode.querySelectorAll(ContentItemSelector);

    for (var i = 0; i < headers.length; i++) {
        this.registerTab(headers[i], contents[i]);
    }
  }

  registerTab (header, content) {
    const tab = new TabItem(header, content);
    tab.onActivate(() => this.activateTab(tab));
    this.tabs.push(tab);
  }
  
  activateTab (tabItem) {
    if (this.activeTab) {
        this.activeTab.setActive(false);
    }

    this.activeTab = tabItem;
    this.activeTab.setActive(true);
  }
  
}

const ActiveTabHeaderClass = 'advantage__tabItem--active';
const ActiveTabContentClass = 'advantage__contentItem--active';

class TabItem {
    constructor (header, content) {
        this.header  = header;
        this.content = content;
    }
    onActivate (action) {
        this.header.addEventListener('click', () => action(this));
    }
    setActive(value) {
        this.header.classList.toggle(ActiveTabHeaderClass, value);
        this.content.classList.toggle(ActiveTabContentClass, value);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new TabsManager(document.querySelector('.advantage'));
})

//MENU
const menuIcon = document.querySelector('.mobile-menu__icon');
const menuContainer = document.querySelector('.mobile-menu__container');
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');

const menuOpen = () => {
  menuContainer.classList.toggle('mobile-menu__container--active');
  menuIcon.classList.toggle('mobile-menu__icon--active');
}

const menuClose = () => {
  menuContainer.classList.remove('mobile-menu__container--active');
  menuIcon.classList.remove('mobile-menu__icon--active');
}

menuIcon.addEventListener("click", menuOpen);
sections.forEach(section => { section.addEventListener("click", menuClose)} );
links.forEach(link => { link.addEventListener("click", menuClose) });

//SHOW MORE
const showMore = () => {
  const showMoreBtn = document.querySelector('.services__showMoreBtn');
  const photoContainer = document.querySelector('.services__photoContainer');

  showMoreBtn.classList.toggle('services__showMoreBtn--active');
  photoContainer.classList.toggle('.services__photoContainer--active');
}

showMoreBtn.addEventListener('click', showMore)