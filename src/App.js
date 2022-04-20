import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Home from './components/Home';
import './App.css';

function App() {
  const [allJobOpps, setAllJobOpps] = useState([])
  const [displayJobs, setDisplayJobs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    email: "",
    skills: "",
    joboppId: ""
  })
  const [update, setUpdate] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() =>{
    fetch('http://localhost:8080/api/jobopps')
      .then(resp => resp.json())
      .then(data => {
        setAllJobOpps(data)
        setDisplayJobs(data)
        setIsLoaded(true)
        setUpdate(false)
      })
  }, [update])

  function handleCandidateForm(e) {
    setNewCandidate({...newCandidate, [e.target.name] : e.target.value})
    console.log(newCandidate)
  }

  function handleAdd(e, job) {
    e.preventDefault()
    newCandidate.joboppId = job.id
    fetch(`http://localhost:8080/api/candidates`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCandidate)
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setUpdate(true)
            setNewCandidate({
              name: "",
              email: "",
              skills: "",
              joboppId: ""
            })
        })
  }

  function handleSearch(e) {
    setSearch(e.target.value)
    const tempJobs = allJobOpps.filter(item => item.role.toLowerCase().includes(e.target.value.toLowerCase()))
    setDisplayJobs(tempJobs)
  }

  return (
    <>
      <Header />
      <Search search={search} handleSearch={handleSearch} />
      <Home allJobOpps={displayJobs} isLoaded={isLoaded} handleCandidateForm={handleCandidateForm} newCandidate={newCandidate} handleAdd={handleAdd}/>
    </>
  );
}

export default App;
