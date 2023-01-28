import {useState, useEffect, Component} from 'react'

const GithubPopularRepos = () => {
  const [user, setUser] = useState({username: 'vinay'})
  const [count, setCount] = useState(0)

  const getApi = () => {
    console.log('success')
  }

  useEffect(() => {
    getApi()
    return () => {
      console.log('unmoungt')
    }
  }, [count])

  return (
    <div>
      <h1>Context</h1>
      <h1>{user.username}</h1>

      <button type="button" onClick={() => setUser({age: 20})}>
        click
      </button>
      <h1>messages {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        send message
      </button>
    </div>
  )
}
export default GithubPopularRepos

// class GithubPopularRepos extends Component {
//   state = {name: 'vinay'}

//   updateState = () => {
//     this.setState({age: 20})
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <button type="button" onClick={this.updateState}>
//           click
//         </button>
//       </div>
//     )
//   }
// }
// export default GithubPopularRepos
