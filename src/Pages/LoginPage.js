import { Auth } from 'aws-amplify'

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => Auth.federatedSignIn({customProvider: "AmazonFederate"})}>Signin With Midway</button>
    </div>
  )
}

export default LoginPage
