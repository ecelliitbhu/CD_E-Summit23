import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import abc from '../pages/abc.jpg'
import {
    FaApple,
    FaGoogle,
    FaFacebook,
} from "react-icons/fa";
import { Form } from 'react-bootstrap';
const login = () => {
    return (
        <div style={{ backgroundColor: 'black', textColor: 'white',height:'590px', width:'1200px', margin:'auto',border:'2px solid black', borderRadius:'10px', position:'absolute', marginTop:'50px', marginLeft:'150px'}}>
            <Row >
                <Col>
                    <Image src={abc} alt='' />
                </Col>
                <Col>
                
                    <div style={{ margin:'20px auto',width:'70px'}}><h1>Sign in</h1></div>
                    <div className='team-social'>
                        <a><FaFacebook className='social-icons'></FaFacebook></a>
                        <a><FaApple className='social-icons'></FaApple></a>
                        <a><FaGoogle className='social-icons'></FaGoogle></a>
                    </div>
                    <div style={{ borderBottom: '1px solid white', margin:'0px 20px' }}></div>
                    <div style={{ margin:'auto', marginTop:'-12px',backgroundColor:'black', width:'125px' }}>or do it via E-mail</div>
                    <div style={{ margin:'auto',width:'300px' }}>
                        <p>E-mail</p>
                        <input placeholder=' Enter your email' type="text" style={{width:"300px", borderRadius:'5px',color:"black", fontFamily:"inherit",padding:'5px'}} />
                    </div>
                    <div style={{ margin:'30px auto', width :'300px' }}>
                        <p>Password</p>
                        <input placeholder=' Enter your password' type="text" style={{width:"300px",borderRadius:'5px', color:"black", fontFamily:"inherit",padding:'5px'}} />
                    </div>
                        <p style={{margin:'auto', width:'300px'}}>must be 8 characters at least</p>
                    <div style={{display:'flex', margin:'20px auto',width:'300px' ,alignItems:'center',justifyContent:'space-between'}}>
                       
                        <p> <input type="checkbox" />Remember me</p>
                        <p><a className='forgPas'>Forgot Password?</a></p>
                    </div>
                    <div style={{margin:'20px auto', width:'300px'}}><button type="button" className="btn btn-primary btn-block" style={{width:'300px'}}>Sign In</button></div>
                </Col>
            </Row>
        </div>
    )
}

export default login