import React from "react";
import {createRoot} from "react-dom/client";
import {BarChart,Bar,LineChart,Line,PieChart,Pie,Cell,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid,Legend} from "recharts";
import {LayoutDashboard,Users,ShoppingCart,TrendingUp,Search,Download} from "lucide-react";
import "./styles.css";

const sales=[{month:"Jan",sales:42000},{month:"Feb",sales:51000},{month:"Mar",sales:47000},{month:"Apr",sales:62000},{month:"May",sales:69000},{month:"Jun",sales:76000}];
const traffic=[{name:"Organic",value:44},{name:"Direct",value:27},{name:"Social",value:18},{name:"Referral",value:11}];
const orders=[["#10482","Nova Labs","₹84,500","Paid"],["#10481","Apex Systems","₹61,200","Paid"],["#10480","Blue Orbit","₹42,800","Pending"],["#10479","Vertex AI","₹95,100","Paid"],["#10478","Pixel Works","₹33,600","Refunded"]];

function App(){
 const [range,setRange]=React.useState("6 months");
 return <div className="shell">
  <aside><div className="logo"><LayoutDashboard/>Pulse</div><nav><a className="active">Overview</a><a>Customers</a><a>Orders</a><a>Reports</a></nav><div className="side-bottom">Analytics v1.0</div></aside>
  <main><header><div><span className="muted">Workspace /</span><h2>Analytics Overview</h2></div><button className="export"><Download size={16}/> Export</button></header>
   <div className="topline"><p>Track performance, revenue and customer activity.</p><select value={range} onChange={e=>setRange(e.target.value)}><option>6 months</option><option>3 months</option><option>30 days</option></select></div>
   <section className="cards">
    <Card icon={<TrendingUp/>} label="Revenue" value="₹3.47L" change="+18.4%"/>
    <Card icon={<Users/>} label="Active users" value="24,892" change="+12.8%"/>
    <Card icon={<ShoppingCart/>} label="Orders" value="8,421" change="+9.6%"/>
    <Card icon={<TrendingUp/>} label="Conversion" value="6.82%" change="+2.1%"/>
   </section>
   <section className="grid"><div className="panel large"><PanelHead title="Revenue trend"/><div className="chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={sales}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month"/><YAxis tickFormatter={v=>`₹${v/1000}k`}/><Tooltip/><Line type="monotone" dataKey="sales" strokeWidth={3}/></LineChart></ResponsiveContainer></div></div>
   <div className="panel"><PanelHead title="Traffic sources"/><div className="chart"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={traffic} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} label>{traffic.map((_,i)=><Cell key={i}/>)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer></div></div></section>
   <section className="panel"><PanelHead title="Monthly performance"/><div className="bar"><ResponsiveContainer width="100%" height="100%"><BarChart data={sales}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month"/><YAxis/><Tooltip/><Bar dataKey="sales" radius={[5,5,0,0]}/></BarChart></ResponsiveContainer></div></section>
   <section className="panel table-panel"><PanelHead title="Recent orders"/><div className="table"><div className="tr head"><span>Order</span><span>Customer</span><span>Amount</span><span>Status</span></div>{orders.map(o=><div className="tr" key={o[0]}><span>{o[0]}</span><span>{o[1]}</span><span>{o[2]}</span><span className="status">{o[3]}</span></div>)}</div></section>
  </main>
 </div>
}
function Card({icon,label,value,change}:{icon:React.ReactNode,label:string,value:string,change:string}){return <div className="card"><div className="card-icon">{icon}</div><span>{label}</span><b>{value}</b><small>{change} <em>vs previous period</em></small></div>}
function PanelHead({title}:{title:string}){return <div className="panel-head"><h3>{title}</h3><button aria-label="search"><Search size={17}/></button></div>}
createRoot(document.getElementById("root")!).render(<App/>);