import React from "react";
import JobCard from "./JobCard";

const homeStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    alignItems: "center",
}

function Home({allJobOpps, isLoaded, handleCandidateForm, newCandidate, handleAdd}) {
    const displayJobs = allJobOpps.map(job => <JobCard key={job.id} job={job} handleCandidateForm={handleCandidateForm} newCandidate={newCandidate} handleAdd={handleAdd} />)

    if (!isLoaded) {
        return (
            <p style={{textAlign: "center", marginTop: "20px"}}>Loading...</p>
        )
    }

    return (
        <div style={homeStyle}>
            {displayJobs}
        </div>
    )
}

export default Home