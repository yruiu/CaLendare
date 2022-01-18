import './App.css';

function App() {
  let options = { weekday: 'long'};
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  function filterInt(value) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value)
    } else {
      return NaN
    }
  }
  let seco=today.toLocaleTimeString();

  
    
  let s=new Intl.DateTimeFormat('ua-UA', options).format(today)
  let l='';
  let q='';
  let a='';
  let b='';
  let as='';
  if (mm==2 ){
    for(let i=1; i <=7; i++){
      l+=String(i+' ')
      
    }
    for(let i=8; i <=14; i++){
      q+=String(i+' ')
      
     
    }
    for(let i=15; i <=21; i++){
      a+=String(i+' ')
      
    }
    for(let i=22; i <=28; i++){
      b+=String(i+' ')
      
     
    }
    
  }
  if (mm==4 || mm==6 || mm==9 || mm==11 ){
    for(let i=1; i <=7; i++){
      l+=String(i+' ')
      
    }
    for(let i=8; i <=14; i++){
      q+=String(i+' ')
      
     
    }
    for(let i=15; i <=21; i++){
      a+=String(i+' ')
     
      
    }
    for(let i=22; i <=28; i++){
      b+=String(i+' ')
      
     
    }
    for(let i=29; i <=30; i++){
      // eslint-disable-next-line no-unused-vars
      as+=String(i+' ')
      
     
    }
  }
  if (mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12 ){
    for(let i=1; i <=7; i++){
      l+=String(i+' ')
      
    }
    for(let i=8; i <=14; i++){
      q+=String(i+' ')
      
     
    }
    for(let i=15; i <=21; i++){
      a+=String(i+' ')
      
    }
    for(let i=22; i <=28; i++){
      b+=String(i+' ')
      
     
    }
    for(let i=29; i <=31; i++){
      // eslint-disable-next-line no-unused-vars
      as+=String(i+' ')
      
     
    }
  }
  today = mm + '/' + dd + '/' + yyyy;
  console.log(today);
  return (
    <div className="App">
      <header className='header'>
        <span className='spa'>{mm} місяць</span>
        <span className='spa'>{dd} число</span>
        <span className='spa'>{yyyy} рік</span>

      </header>
      <h3 className='s'>{s}</h3>
      <h3 className='seco'>{seco}</h3>
      <div className='date'>
        <h3>{l}</h3>
        <h3>{q}</h3>
        <h3>{a}</h3>
        <h3>{b}</h3>
        <h3>{as}</h3>
      </div>
      
    </div>
  );
}

export default App;
