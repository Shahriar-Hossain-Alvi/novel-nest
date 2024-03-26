//get stored wishlists in LS
const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wishList');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return [];
}

//set new wishList Items in LS
const saveWishList = id => {
    const storedWishList = getStoredWishList();

    // find if the item exist in the LS
    const isExist = storedWishList.find(listId => listId === id);
    if(!isExist){
        storedWishList.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedWishList));
    }
}



//get stored readList in LS
const getStoredReadList = () => {
    const storedReadList = localStorage.getItem('readList');
    if (storedReadList) {
        return JSON.parse(storedReadList);
    }
    return [];
}

//set new readList Items in LS
const saveReadList = id => {
    const storedReadList = getStoredReadList();

    // find if the item exist in the LS
    const isExist = storedReadList.find(listId => listId === id);
    if(!isExist){
        storedReadList.push(id);
        localStorage.setItem('readList', JSON.stringify(storedReadList));
    }
}

export {getStoredWishList, saveWishList, getStoredReadList, saveReadList}