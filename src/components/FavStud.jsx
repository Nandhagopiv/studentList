function FavStud({favStudArr, setFavStudArr}) {
    function handleRemove(name) {
        var newFav = favStudArr.filter((data)=>{
            if (name === data) {
                return false
            } else{
                return true
            }
        })
        setFavStudArr(newFav)
    }

    return(
        <div className="p-5 px-2 md:px-20 bg-sky-200">
            <p className="text-2xl text-center font-bold">
            {
                favStudArr.length === 0? "You have n't added any one as Favourite Student":''
            }
            </p>
    
        {
            favStudArr.map((data,index)=>{
                return <>
                <div className="p-2 flex justify-between"><p className="text-2xl">{index+1}. {data}</p><button onClick={()=>handleRemove(data)} className="bg-red-400 p-2 text-white rounded-md">Remove</button></div>
                </>
            })
        }
        </div>
    )
}

export default FavStud