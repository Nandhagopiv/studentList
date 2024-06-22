function StudList({ studArr, setFavStudArr, favStudArr }) {

    function handleAddFav(name) 
    {

            let newStudArr = studArr.filter((data) => {

                if (data === name) {
                    return true
                } else {
                    return false
                }
            })
            setFavStudArr([...favStudArr, newStudArr[0]])
    }
    return (
        <div className="p-5 px-2 md:px-20 bg-stone-300">
            {
                studArr.map((data, index) => {
                    return <>
                        <div className="p-2 flex justify-between"><p className="text-2xl flex-grow">{index + 1}. {data}</p><button disabled={favStudArr.includes(data)} onClick={() => handleAddFav(data)} className=" bg-black p-2 disabled:bg-slate-600 text-white rounded-md">Add to Favourites</button></div>
                    </>
                })
            }
        </div>
    )
}

export default StudList