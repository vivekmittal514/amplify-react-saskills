import { Auth } from 'aws-amplify'

function InnerApp() {
  return (
    <div>
      <h1>Search SAs by skills</h1>
    <button id="requestOC" type="button" >Open Connection</button>
	<button id="requestCC" type="button" >Close Connection</button>
    <br></br>
    <label for="skill-names">Choose a skill name:</label> 
    <select name="skill-names" id="skill-names"> 
        <option value="Step Functions">Step Functions</option> 
        <option value="Direct Connect">Direct Connect</option> 
        <option value="Storage">Storage</option> 
        <option value="Redshift">Redshift</option> 
    </select>
    <button id="requestSubmit" type="button" >Submit</button>
    <table id="outputTable"> </table>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default InnerApp
