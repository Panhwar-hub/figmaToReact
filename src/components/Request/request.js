import React from 'react'
import "./request.css"

const Request = () => {
  return (
    <div className='container'>
        <div className='nav'>
            <h2>LODGN</h2>
            <div className='links'>
                <a>Current Request</a>
            
                <a>Ongoing Stays</a>
              
                <a>Previous stays</a>
                
                <a>reports</a>
                
            </div>
            <div className='footer'>
                <button className='btnBottom'>Log-Out</button>
                <p>Help-Desk: <br/> 786-8749988</p>
            </div>
        </div>
        <div className='main'>
            <h3>You currently have 3 requests</h3>
            <div className='firstContainer'>
                <div className='inner-containt'>
                    <div className="row">
                        <div className="col-4">
                            <h2>St Junes Hospital </h2>
                            <span>Sarosata, FL 33178</span>
                        </div>
                        <div className="col-4">
                            <h2>10 - 17 </h2>
                            <span>October - December</span>
                        </div>
                        <div className="col-4">
                            <h2>20 Rooms </h2>
                            <span>10 singles, 10 doubles</span>
                        </div>
                    </div>
                </div>                
                <div>
                    <div className="row">
                        <div className="col-4">
                            <button className="fir_btn">Received</button>
                        </div>
                        <div className="col-4">
                            <button>Negotiating</button>
                        </div>
                        <div className="col-4">
                            <button className="lst_btn">Completed</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='secondContainer'>
                
            <div className='inner-containt'>
                    <div className="row">
                        <div className="col-4">
                            <h2>St Junes Hospital </h2>
                            <span>Sarosata, FL 33178</span>
                        </div>
                        <div className="col-4">
                            <h2>10 - 17 </h2>
                            <span>October - December</span>
                        </div>
                        <div className="col-4">
                            <h2>20 Rooms </h2>
                            <span>10 singles, 10 doubles</span>
                        </div>
                    </div>
                </div>
                <button className='btnComplete'> Completed</button>
                
                <div className='cards'>
                    <div className="row">
                        <div className="card">
                            <img src='https://st2.depositphotos.com/5142301/7765/v/600/depositphotos_77650432-stock-illustration-h-letter-with-green-leaves.jpg' className='Image' />
                            <div className='innerCard'>
                                <p>1.5 Miles away from joblocation</p>
                                <div className='Book'>
                                    <p>singles: $120 <br/> doubles: $145</p> <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                        <img src='https://st2.depositphotos.com/5142301/7765/v/600/depositphotos_77650432-stock-illustration-h-letter-with-green-leaves.jpg' className='Image' />
                            <div className='innerCard'>
                                <p>1.5 Miles away from joblocation</p>
                                <div className='Book'>
                                    <p>singles: $120 <br/> doubles: $145</p> <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                        <img src='https://st2.depositphotos.com/5142301/7765/v/600/depositphotos_77650432-stock-illustration-h-letter-with-green-leaves.jpg' className='Image' />
                            <div className='innerCard'>
                                <p>1.5 Miles away from joblocation</p>
                                <div className='Book'>
                                    <p>singles: $120 <br/> doubles: $145</p> <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>  
  )
}

export default Request