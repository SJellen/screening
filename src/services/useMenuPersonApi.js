import {useState, useEffect} from 'react'

function useMenuPersonApi() {
    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [menuTrendingPersonPage1, setMenuTrendingPersonPage1] = useState([])
    const [menuTrendingPersonPage2, setMenuTrendingPersonPage2] = useState([])
    const [menuTrendingPersonPage3, setMenuTrendingPersonPage3] = useState([])
    const [menuTrendingPersonPage4, setMenuTrendingPersonPage4] = useState([])
    const [menuTrendingPersonPage5, setMenuTrendingPersonPage5] = useState([])
    const [menuTrendingPersonPage6, setMenuTrendingPersonPage6] = useState([])

    const [menuPopularPersonPage1, setMenuPopularPersonPage1] = useState([])
    const [menuPopularPersonPage2, setMenuPopularPersonPage2] = useState([])
    const [menuPopularPersonPage3, setMenuPopularPersonPage3] = useState([])
    const [menuPopularPersonPage4, setMenuPopularPersonPage4] = useState([])
    const [menuPopularPersonPage5, setMenuPopularPersonPage5] = useState([])
    const [menuPopularPersonPage6, setMenuPopularPersonPage6] = useState([])


    const fetchTrendingMenuPerson = async (num) => {
        await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKEY}&page=${num}`)
        .then(res => res.json())
        .then((data) => {

            if (num === 1) {
                setMenuTrendingPersonPage1(data.results)
            } else if (num === 2) {
                setMenuTrendingPersonPage2(data.results)
            } else if (num === 3) {
                setMenuTrendingPersonPage3(data.results)
            } else if (num === 4) {
                setMenuTrendingPersonPage4(data.results)
            } else if (num === 5) {
                setMenuTrendingPersonPage5(data.results)
            } else {
                setMenuTrendingPersonPage6(data.results)
            }    
        }
        )
        .catch(error => console.log(error))
        }  
        
    const fetchPopularMenuPerson = async (num) => {
            await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKEY}&language=en-US&page=${num}`)
            .then(res => res.json())
            .then((data) => {
    
                if (num === 1) {
                    setMenuPopularPersonPage1(data.results)
                } else if (num === 2) {
                    setMenuPopularPersonPage2(data.results)
                } else if (num === 3) {
                    setMenuPopularPersonPage3(data.results)
                } else if (num === 4) {
                    setMenuPopularPersonPage4(data.results)
                } else if (num === 5) {
                    setMenuPopularPersonPage5(data.results)
                } else {
                    setMenuPopularPersonPage6(data.results)
                }
    
                
            }
    
            )
            .catch(error => console.log(error))
            } 
        
        
        
        function handleMenuTrendingPersonClick() {
            fetchTrendingMenuPerson(1)
            fetchTrendingMenuPerson(2)
            fetchTrendingMenuPerson(3)
            fetchTrendingMenuPerson(4)
            fetchTrendingMenuPerson(5)
            fetchTrendingMenuPerson(6)
            window.scrollTo(0, 0)
        }

        function handleMenuPopularPersonClick() {
            fetchPopularMenuPerson(1)
            fetchPopularMenuPerson(2)
            fetchPopularMenuPerson(3)
            fetchPopularMenuPerson(4)
            fetchPopularMenuPerson(5)
            fetchPopularMenuPerson(6)
            window.scrollTo(0, 0)
        }


        useEffect(() => {
            const path = window.location.pathname
            const splitPath = path.split('/')
            const cleanPath = splitPath.filter(item => item !== '')
            const pathMediaType = cleanPath[0], pathMediaId = cleanPath[1]
            // console.log(cleanPath, pathMediaType, pathMediaId)
            if (pathMediaId === "trendingPerson") {
                fetchTrendingMenuPerson(1)
                fetchTrendingMenuPerson(2)
                fetchTrendingMenuPerson(3)
                fetchTrendingMenuPerson(4)
                fetchTrendingMenuPerson(5)
                fetchTrendingMenuPerson(6)
                window.scrollTo(0, 0)
            } else if (pathMediaId === "popularPerson") {
                fetchPopularMenuPerson(1)
                fetchPopularMenuPerson(2)
                fetchPopularMenuPerson(3)
                fetchPopularMenuPerson(4)
                fetchPopularMenuPerson(5)
                fetchPopularMenuPerson(6)
                window.scrollTo(0, 0) 
            }
               // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])   


    return {handleMenuTrendingPersonClick, menuTrendingPersonPage1, menuTrendingPersonPage2, menuTrendingPersonPage3, menuTrendingPersonPage4, menuTrendingPersonPage5, menuTrendingPersonPage6, handleMenuPopularPersonClick, menuPopularPersonPage1, menuPopularPersonPage2, menuPopularPersonPage3, menuPopularPersonPage4, menuPopularPersonPage5, menuPopularPersonPage6}
}

export default useMenuPersonApi