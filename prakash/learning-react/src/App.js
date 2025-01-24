// import logo from './logo.svg';
import { Fragment, useState } from 'react';
import './App.css';
import Profile from './Profile';
import About from './layout/About';
import {people, recipes} from './data';
import {getImageUrl} from './utill';
import TeaSet from './Cup';
import SideNav from './SideNav';
import Menu from './Menu';
import Count from './Count';

function App() {
  const profileList = [{ name: 'Dhana', show: true}, { name: 'Prakash', show: false}, { name: 'Shanmugam', show: false}];

  const p = 2;
  const [count, setCount] = useState(0)
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const handleCount = (e) => setCount(parseInt(e.target.value));
  
  return (
    
    <div className="App" >
      <Count count={count} increment={(e) => {
        e.stopPropagation(); 
        setCount(count+1)
      }} decrement={() => {
        count!==0 && setCount(count-1)
      }} handleCount = {handleCount}></Count>
      <TeaSet >
        <SideNav test={'Profile'}/>
        <Menu/>
      </TeaSet>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* {profileList.map((p) => (
        <Profile name={p.name} showContent={p.show}>
          <About />
        </Profile> 
        ))} */}
        <ul>{listItems}</ul>
       
       {/* { people.map((value, index) => (<Fragment key={index}><h1>Test</h1><Profile name={value.name}  showContent={false}/></Fragment>)) } */}
        {/* <ul>
        {
          profileList.sort((a,b) => {
            if(a.name > b.name){return -1;}
            return 1;
}).map((p, index) =>  (<Profile key={index} name={p.name} showContent={p.show}><About/></Profile>))
        }
        </ul> */}
        <Form/>
        <div>
          <h1>Recipes</h1>
          {recipes.map(r => (<><h2>{r.name}</h2><ul>{r.ingredients.map((i, index)=> (<li key={i + index}>{i}</li>))}</ul></>))}
        </div>
    </div>
  );
}
function Form() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('init');
  if(status === 'success') {
    return (<>Right answer</>)
  }
  const handlTextChange = (e) => {
    setName(e.target.value)
    console.log(e.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      await submitForm(name);
      setStatus('success');
    }catch(e) {
      setStatus('failed')
    }
  }
  
  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }
  return (
    <><form onSubmit={handleSubmitForm}>
    <input type="text" value={name} onChange={handlTextChange} />
    <button type="submit" disabled={name?.length === 0}>Submit</button>
    {status === 'failed' && <div>Good Try but correct answer try again</div>}
    </form>
    </>
  )
}
export default App;

const test = undefined ?? 0;

