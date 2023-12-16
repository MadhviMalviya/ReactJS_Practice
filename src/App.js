import Card from './components/Card';
import ColorGame from './components/ColorGame';
import CounterApp from './components/CounterApp';
import Footer from './components/Footer';
import Header from './components/Header';
import InputTypeColorChange from './components/InputTypeColorChange';
import  List from './components/List'
import NameGame from './components/NameGame';
// import './index.css';
const students=[
  {id:1,
    name:'bhupendrea jogi',
    role:'developer'
  
  },
  {id:2,
    name:'groot',
    role:'guardian'
  
  },
  {id:3,
    name:'rocket',
    role:'blaster'
  
  },
  {id:4,
    name:'rocket',
    role:'blaster'
  
  },
  {id:5,
    name:'rocket',
    role:'blaster'
  
  }
]

function App() {
  return (
    <div   >
{/* {
  students.map((item)=>{
return <div key={item.id}>
<h1>{item.name}</h1>
<p>{item.role}</p>
</div>
  })
} */}
    {/* <Header />
    <CounterApp/> */}
    <Card/>
    {/* <InputTypeColorChange/>
    <NameGame/>
    <ColorGame/>
    <List/>
    <Footer/> */}
    </div>
  );
}

export default App;
