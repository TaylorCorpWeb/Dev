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

// parallax effect

// Add event listener
document.addEventListener("mousemove", parallax);
const elem = document.querySelector(".advantage__contentItem");


// Magic happens here
function parallax(e) {
  let _w = window.innerWidth/2;
  let _h = window.innerHeight/2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
  let _depth2 = `${50 - (_mouseX - _w) * 0.1}% ${50 - (_mouseY - _h) * 0.1}%`;
  let _depth3 = `${50 - (_mouseX - _w) * -(0.07)}% ${50 - (_mouseY - _h) * -(0.07)}%`;
  let x = `${_depth3}, ${_depth2}, ${_depth1}`
  console.log(x);
  elem.style.backgroundPosition = x;
}
