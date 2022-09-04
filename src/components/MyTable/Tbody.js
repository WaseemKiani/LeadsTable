import React, { useState } from 'react'
import "./Tbody.css";
import DownIcon from "../../Images/Search.png";
import Previos from "../../Images/Previous.png";
import Next from "../../Images/Next.png";
import Paginatin from '../../components/Pagination/Pagination';
import {DownloadCloud ,  Trash , Edit ,  ArrowDown} from "lucide-react"
import Data from "../TestData/CardData";

const Tbody = () => {

    const [data, setData] = useState(Data);
    console.log("This is my data",data);
    return (
        <div className='forthContainer'>
            <div className='FCR1'>
                <div className='FCR1D1'>
                    <input type="checkbox"/>
                    <text className='FCR1D1text'>Sr. No.</text>
                    <ArrowDown/>
                </div>
                            
                <div className='FCR1D2'><text className='FCR1DheaderData'>Date</text></div>
                <div className='FCR1D3'><text className='FCR1DheaderData'>Lead Name</text></div>                        
                <div className='FCR1D4'><text className='FCR1DheaderData'>BD Name</text></div>                        
                <div className='FCR1D5'><text className='FCR1DheaderData'>Email Address</text></div>                        
                <div className='FCR1D6'><text className='FCR1DheaderData'>Contact No.</text></div>                        
                <div className='FCR1D7'><text className='FCR1DheaderData'>Status</text></div>                        
                <div className='FCR1D8'><text className='FCR1DheaderData'></text></div>
            </div>

                    {/* ///////////////////////////////////////////////////////// */}

            <div className='Tabledata'>                  
            
                {data && data.map((val)=>(
                    <div className='FCR1'>
                        <div className='FCR1D1' style={{backgroundColor:"white"}}>
                            <input type="checkbox"/>
                            <text className='FCR1D1text' style={{fontWeight:"1000"}}>{val.code}</text>
                        </div>
                                
                        <div className='FCR1D2' style={{backgroundColor:"white"}}><text className='FCR1DheaderData'>{val.date}</text></div>
                        <div className='FCR1D3' style={{backgroundColor:"white"}}><text className='FCR1DheaderData'>{val.lead}</text></div>
                        <div className='FCR1D4' style={{backgroundColor:"white"}}><text className='FCR1DheaderData'>{val.bd}</text></div>
                        <div className='FCR1D5' style={{backgroundColor:"white"}}><text className='FCR1DheaderData'>{val.email}</text></div>
                        <div className='FCR1D6' style={{backgroundColor:"white"}}><text className='FCR1DNumberData'>{val.contact}</text></div>
                        <div className='FCR1D7' style={{backgroundColor:"white"}}><text className='FCR1DheaderData'>
                        <span className={val.status==="Lead"?"SLead":val.status==="Prospect"?"SProspect":val.status==="Client"?"SClient":""}>
                        {val.status}</span>
                        </text>
                        </div>
                                
                        <div className='FCR1D8' style={{backgroundColor:"white"}}> 
                            <DownloadCloud size={20}/> <Trash size={20}/> <Edit size={20}/>
                        </div>
                    </div>
                ))}
            </div>

            <div className='Pagination'>
                <div className='P1 Pall'>
                    <button>
                    <img style={{paddingRight:"5px", marginBottom:"4px"}} src={Previos}/>
                    <text>Previous</text>
                    </button>
                </div>
                <div className='P2'>
                    <Paginatin/>
                </div>    
                <div className='P3 Pall'>
                    <button>
                    <text>Next</text>
                    <img style={{paddingLeft:"5px", marginBottom:"2px"}} src={Next}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tbody