export const changeBackgroundImg = (backGImg1) => {
    const getBackground  = document.body;
    getBackground.className = '';
    getBackground.classList.add(backGImg1);

}

