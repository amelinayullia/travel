// navigation
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

// modals
const countryItemButton = document.querySelector('.country-item__link');
const overlayElement = document.querySelector('.overlay');
const closeButtonElement = document.querySelector('.modal-form__button-close');
const modalBuy = document.querySelector('.modal-buy');
const pricesLinks = document.querySelectorAll('.prices__link');

const closeModal = () => {
    document.removeEventListener('keydown', onBuyTourClose);

    modalBuy.classList.remove('modal-buy--is-open')
    overlayElement.classList.remove('overlay--is-open');
    overlayElement.removeEventListener('click', closeModal)
    closeButtonElement.removeEventListener('click', closeModal)
}

const onBuyTourClose = (evt) => {
    isEscEvent(evt, closeModal)
}

const onBuyTourClick = (evt) => {
    evt.preventDefault()

    overlayElement.classList.add('overlay--is-open')
    modalBuy.classList.add('modal-buy--is-open')

    document.addEventListener('keydown', onBuyTourClose)
    closeButtonElement.addEventListener('click', closeModal);
    overlayElement.addEventListener('click', closeModal)
};

countryItemButton.addEventListener('click', onBuyTourClick)
pricesLinks.forEach((link) => {
    link.addEventListener('click', onBuyTourClick);
})

// forms
const form = document.querySelector('.form');
const messageModal = document.querySelector('.modal-message');
const messageModalClose = document.querySelector('.modal-message__button-close');
const modalForm = document.querySelector('.modal-buy__form');

const closeFormModal = () => {
    messageModal.classList.remove('modal-message--is-open');
}

const onFromClose = (evt) => {
    isEscEvent(evt, closeFormModal)
}

const onFormModalOpen = (evt) => {
    evt.preventDefault();

    messageModal.classList.add('modal-message--is-open');

    document.addEventListener('keydown', onFromClose)
    messageModalClose.addEventListener('click', closeFormModal);
    messageModal.addEventListener('click', closeFormModal)
};

modalForm.addEventListener('submit', onFormModalOpen)
form.addEventListener('submit', onFormModalOpen)


// tabs
const countryItemsTabs = document.querySelectorAll('.countries__item');
const countryItemsContent = document.querySelectorAll('.country-item');

countryItemsTabs.forEach((item, index) => {
    item.addEventListener('click', (evt) => {
        evt.preventDefault();

        countryItemsContent.forEach((item) => {
            item.classList.remove('country__item--active');
        })

        countryItemsContent[index].classList.add('country__item--active');
    })
})