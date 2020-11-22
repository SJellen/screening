import {useState, useEffect} from 'react'


function useApiPerson() {

    const apiKEY = process.env.REACT_APP_TMDB_API_KEY
    const [personTrending, setPersonTrending] = useState([])
    const [popularPerson, setPopularPerson] = useState([])
    const [personId, setPersonId] = useState()
    const [lastPersonId, setLastPersonId] = useState()
    const [personDetails, setPersonDetails] = useState([])
    const [personCredits, setPersonCredits] = useState([])
    const [personImages, setPersonImages] = useState([])
   

    const fetchTrendingPerson = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            let trending = data.results
            let personArr = []
            for (let i=0; i < trending.length; i++) {
                if  (trending[i].media_type === "person") {
                    personArr.push(trending[i])
                } 
            }
            setPersonTrending(personArr)
           
        }
        )
        .catch(error => console.log(error))
        }
    
    const fetchPopularPerson = async () => {
        await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPopularPerson(data.results)
        }

        )
        .catch(error => console.log(error))
        }     
                
    useEffect(() => {
        fetchTrendingPerson()
        fetchPopularPerson()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const fetchPersonDetails = async (x) => {

        await fetch(`https://api.themoviedb.org/3/person/${x}?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPersonDetails(data)
        }

        )
        .catch(error => console.log(error))
        } 
            
         
    const fetchPersonCredits = async (x) => {

        await fetch(`https://api.themoviedb.org/3/person/${x}/combined_credits?api_key=${apiKEY}&language=en-US`)
        .then(res => res.json())
        .then((data) => {
            setPersonCredits(data)
        }

        )
        .catch(error => console.log(error))
        }   
        
    const fetchPersonImages = async (x) => {

        await fetch(`https://api.themoviedb.org/3/person/${x}/images?api_key=${apiKEY}`)
        .then(res => res.json())
        .then((data) => {
            setPersonImages(data)
        }

        )
        .catch(error => console.log(error))
            }       




    return {personTrending,popularPerson,setPersonId,fetchPersonDetails, personDetails,fetchPersonCredits, personCredits,personImages, setPersonImages, fetchPersonImages, personId, lastPersonId, setLastPersonId}
}

export default useApiPerson