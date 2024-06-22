import { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import StudList from "./StudList"
import FavStud from "./FavStud";

function Header() {
    const StudArr = [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Emily Davis",
        "David Brown",
        "Sarah Wilson",
        "James Taylor",
        "Emma Martinez",
        "Daniel Anderson",
        "Olivia Garcia",
        "William Hernandez",
        "Sophia Lopez",
        "Alexander Gonzalez",
        "Ava Perez",
        "Benjamin Torres",
        "Isabella Flores",
        "Matthew Ramirez",
        "Mia Cruz",
        "Jacob Stewart",
        "Charlotte Reed",
        "Ethan Campbell",
        "Amelia Hill",
        "Logan Mitchell",
        "Ella Roberts",
        "Ryan Phillips"
      ]

    const [favStudArr, setFavStudArr] = useState([])

    const [bgGrey, setBgGrey] = useState(true)
    const [bgBlue, setBgBlue] = useState(false)

    function handleFavStud() {
        setBgGrey(false)
        setBgBlue(true)
    }

    function handleStudList() {
        setBgGrey(true)
        setBgBlue(false)
    }

    return (
        <>
            <BrowserRouter>
                <nav className="flex">
                    <Link onClick={handleStudList} style={{ backgroundColor: bgGrey ? 'rgb(87,83,78)' : 'rgb(168,162,158)', opacity: bgGrey ? '100%' : '50%' }} className="text-center flex-grow p-2" to={'/'}>
                        <div>
                            <h1 className="text-white text-xl font-bold">Student List</h1>
                        </div>
                    </Link>
                    <Link onClick={handleFavStud} style={{ backgroundColor: bgBlue ? 'rgb(2,132,199)' : 'rgb(125,211,252)', opacity: bgBlue ? '100%' : '50%' }} className="text-center flex-grow p-2" to={'/favstudents'}>
                        <div>
                            <h1 className="text-white text-xl font-bold">Favourite Student</h1>
                        </div>
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<StudList studArr={StudArr} favStudArr={favStudArr} setFavStudArr={setFavStudArr} />}></Route>
                    <Route path="/favstudents" element={<FavStud favStudArr={favStudArr} setFavStudArr={setFavStudArr} />}></Route>
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default Header