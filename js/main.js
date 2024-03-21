const featuresWidget = document.querySelector('.features--widget')
const companyWidget = document.querySelector('.company--widget')
const openMenuIcon = document.querySelector('.open-menu-icon')
const closeMenuIcon = document.querySelector('.close-menu-icon')
const mobileMenu = document.querySelector('.mobile__menu')

class DesktopWidgets {
	constructor (featuresWidget, companyWidget) {
	  	this.featuresWidget = featuresWidget
	  	this.companyWidget = companyWidget
	  	this.featuresWidgetMenu = featuresWidget.querySelector('.features__list')
	  	this.companyWidgetMenu = companyWidget.querySelector('.company__list')
	  	this.arrowDown = featuresWidget.querySelector('.arrow-down')
	  	this.arrowDownTwo = companyWidget.querySelector('.arrow-down-two')
	  	this.arrowUp = featuresWidget.querySelector('.arrow-up')
	  	this.arrowUpTwo = companyWidget.querySelector('.arrow-up-two')

	  	this.init()
	}

	init () {
	  	this.arrowUp.style.display = 'none'
	  	this.arrowUpTwo.style.display = 'none'
	  	this.featuresWidgetMenu.style.display = 'none'
	  	this.companyWidgetMenu.style.display = 'none'

	  	this.featuresWidget.addEventListener('click', () => this.toggleWidget(this.featuresWidgetMenu, this.companyWidgetMenu, this.arrowUp, this.arrowUpTwo, this.arrowDown, this.arrowDownTwo))
	  	this.companyWidget.addEventListener('click', () => this.toggleWidget(this.companyWidgetMenu, this.featuresWidgetMenu, this.arrowUpTwo, this.arrowUp, this.arrowDownTwo, this.arrowDown))
	}

	toggleWidget (targetWidget, otherWidget, arrowUp, arrowUpOther, arrowDown, arrowDownOther) {
	  	arrowDown.style.display = arrowDown.style.display === 'none' ? 'block' : 'none'
	  	arrowDownOther.style.display = 'block'
	  	arrowUp.style.display = arrowUp.style.display === 'none' ? 'block' : 'none'
	  	arrowUpOther.style.display = 'none'
	  	targetWidget.style.display = targetWidget.style.display === 'none' ? 'flex' : 'none'
	  	otherWidget.style.display = 'none'
	}
}

class MobileMenu {
	constructor (openMenuIcon, closeMenuIcon, mobileMenu) {
	  	this.openMenuIcon = openMenuIcon
	  	this.closeMenuIcon = closeMenuIcon
	  	this.mobileMenu = mobileMenu

	  	this.init()
	}

	init () {
	  	this.openMenuIcon.addEventListener('click', () => this.openMobileMenu())
	  	this.closeMenuIcon.addEventListener('click', () => this.closeMobileMenu())
	}

	openMobileMenu () {
	  	this.mobileMenu.style.display = 'flex'
	}

	closeMobileMenu () {
	  	this.mobileMenu.style.display = 'none'
	}
}

const desktopWidgets = new DesktopWidgets(featuresWidget, companyWidget)
const mobileMenuInstance = new MobileMenu(openMenuIcon, closeMenuIcon, mobileMenu)
