import React from 'react'
import { CDBFooter,CDBBox} from 'cdbreact';
import Container from 'react-bootstrap/Container';


function Footer() {
  return (
    <div 
    style={{
        backgroundColor: 'black'
      }}>
    <CDBFooter className='shadow'>
    <Container>
    <CDBBox
      display="flex"
      justifyContent="between"
      alignItems="center"
      className="mx-auto py-2 flex-wrap"
      style={{ width: '80%' }}
    >
      <CDBBox display="flex" alignItems="center">
        <a href="/" className="d-flex align-items-center p-0 text-white">
          <img
            alt="logo"
            src="./logo.png"
            width="70px"
          />
        </a>
      </CDBBox>
      <CDBBox>
        <small className="ml-2 text-white">&copy; Cleaning Site, 2022. All rights reserved.</small>
      </CDBBox>
      <CDBBox className="text-white">
        +977 9843357731
      <br/>
        Kausaltar, Nepal
      </CDBBox>
    </CDBBox>
    </Container>
  </CDBFooter>
</div>
  )
}

export default Footer