export const handleCheckbox = (
    id, 
    isSelectAllSelected, 
    setCheckedItem, 
    notifications,
    checkedItem
    )=>{
    if(id === 0){
        if(isSelectAllSelected){
            setCheckedItem([])
        }else{ 
            setCheckedItem(notifications?.map(data => data.id))   
        }
    }else {
        const index = checkedItem.indexOf(id);
        if(index === -1){
            setCheckedItem([id])
        }else{
            setCheckedItem([...checkedItem.slice(0, index), ...checkedItem.slice(index + 1)])
        }
    }
}