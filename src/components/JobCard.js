import React, { useState } from "react";

const cardStyle = {
    border:"solid 1px lightgray", 
    width:"1000px", 
    margin:"20px 20px", 
    background:"white",
    padding: "15px",
    paddingBottom: "10px",
    boxShadow: "4px 4px 10px #A29e73",
    transition: "all .2s ease-in-out",
    position: "relative",
}


function JobCard({job, handleCandidateForm, newCandidate, handleAdd}) {
    const [clicked, setClicked] = useState(false)
    const [addClicked, setAddClicked] = useState(false)

    let candidates = job.candidates.map(candidate => {
        return <li key={candidate.id}>{candidate.name} | {candidate.email} | Skills: {candidate.skills}</li>
    })

    let urgency = "" 
    let urgencyStyle = {
        padding: "2px",
        background: ""
    }

    if (job.urgency === 1) {
        urgency = "High"
        urgencyStyle.background = "red"
    } else if (job.urgency === 2) {
        urgency = "Medium"
        urgencyStyle.background = "yellow"
    } else if (job.urgency === 3) {
        urgency = "Low"
        urgencyStyle.background = "green"
    }

    return (
        <>
            <div className="card" style={cardStyle}>
                <div style={{float: "right", textAlign: "right"}}>
                    <p><span style={urgencyStyle}>Urgency: {urgency}</span></p>
                    <p>Openings: {job.quantity}</p>
                    <p>Skills: {job.skills}</p>
                </div>
                <div style={{flexDirection: "column"}}>
                    <h3>{job.role}</h3>
                    <p>Client: {job.client}</p>
                    <p>PoC: {job.poc} | {job.email}</p>
                </div>
                {clicked ? 
                    <>
                        {addClicked ? 
                            <>
                                <form onSubmit={(e) => {handleAdd(e, job); setAddClicked(false)}}>
                                    <label>
                                        Name:<br />
                                        <input type="text" value={newCandidate.name} name="name" onChange={handleCandidateForm} />
                                    </label>
                                    <label> <br />
                                        Email:<br />
                                        <input type="text" value={newCandidate.email} name="email" onChange={handleCandidateForm} />
                                    </label>
                                    <label> <br />
                                        Skills:<br />
                                        <textarea value={newCandidate.skils} name="skills" onChange={handleCandidateForm} />
                                    </label>
                                    <input style={{width: "100px", alignSelf: "flex-end"}} type="submit" value="Submit" />
                                </form>
                            </>
                        :
                            <>
                                <button style={{float: "right"}} onClick={() => setAddClicked(true)}>Add a Candidate</button>
                                {candidates}
                                <button style={{marginTop: "15px"}} onClick={() => setClicked(false)}>Hide Candidates</button>
                            </>
                        }
                    </>
                :
                    <button onClick={() => setClicked(true)}>Show Candidates</button>
                }
            </div>
        </>
    )
}

export default JobCard