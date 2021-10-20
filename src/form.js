import React, { useState } from 'react'
import reactDom from 'react-dom'
import {Button} from 'react-bootstrap'
import {Col,Row} from 'react-bootstrap'

function Header(props) {
    const [name, setName] = useState('Taseen')
    function changeName(){
        let name = prompt("Enter Name");
        setName(name)
    }
    return <div className="container-fluid">
        <h2>Good Work! {name}</h2>
        <Button as={Col} variant="danger btn-sm"onClick={changeName}>Change Name</Button>
    </div>
}

export default Header