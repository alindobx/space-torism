export const changeBackgroundImg = (backGImg1, backGImg2) => {
    const getBackground  = document.body;
    getBackground.classList.add(backGImg1);
    getBackground.classList.remove(backGImg2)
}

