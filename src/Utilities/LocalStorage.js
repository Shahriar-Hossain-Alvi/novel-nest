//get wishlists stored in LS
const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wishList');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return [];
}

//set new wishList ltems in LS
const saveWishList = id => {
    const storedWishList = getStoredWishList();

    // find if the item exist in the LS
    const isExist = storedWishList.find(listId => listId === id);
    if(!isExist){
        storedWishList.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedWishList));
    }
}

export {getStoredWishList, saveWishList}