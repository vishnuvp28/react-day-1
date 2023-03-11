import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App row col-lg-4">
     <Vp
     name="free"
     number="$0"
     line1="Single User"
     line2="5GB Storage"
      t1="&#10004; "t2="&#10004;" t3="&#10004;" t4="&#10004;"  t5="&#x2716;" t6="&#x2716;" t7="&#x2716;" t8="&#x2716;"

    />
    

     <Vp
     name="plus"
     number="$9"
     line1="5 Users"
     line2="50GB Storage"
     t1="&#10004;" t2="&#10004;" t3="&#10004;" t4="&#10004;" t5="&#10004;" t6="&#10004;" t7="&#10004;" t8="&#x2716;
     "
     />
   

     <Vp 
     name="pro"
     number="$49"
      line1="Unlimited Users" line2="150GB Storage" line7="Unlimited "
     t1="&#10004; " t2="&#10004; " t3="&#10004; " t4="&#10004; " t5="&#10004;" t6="&#10004;" t7="&#10004;" t8="&#10004;"
    />
    </div>
  );
}

export default App;


function Vp(props){
  return(

  <div class="container">
    <div class="row">
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.name}</h5>
        <h1 class="card-price text-center"><label>{props.number}</label><span class="period">/month</span></h1><hr></hr>
        <span class="fa-li"><span class="tick">{props.t1}</span>  {props.line1}</span><br></br><br></br>
        <span class="fa-li"><span class="tick">{props.t2}</span>  {props.line2}</span><br></br><br></br>
        <span class="fa-li"><span class="tick">{props.t3}</span>  Unlimited Public Projects</span><br></br><br></br>
        <span class="fa-li"><span class="tick">{props.t4}</span>  Community Access</span><br></br><br></br>
        <span class="fa"><span class="tick">{props.t5}</span>  Unlimited Private Projects</span><br></br><br></br>
        <span class="fa"><span class="tick">{props.t6}</span>  Dedicated Phone Support</span><br></br><br></br>
        <span class="fa"><span class="tick">{props.t7}</span> <b>{props.line7}</b> Free Subdomain</span><br></br><br></br>
        <span class="fa"><span class="tick">{props.t8}</span>  Monthly Status Reports</span><br></br><br></br>
        <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

