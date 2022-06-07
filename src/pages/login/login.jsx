import React from 'react'
import { Form,Button   } from 'react-bootstrap'
import './login.css'

// import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material'
// import FormControl from '@mui/material/FormControl'

class Login extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='branch1'>
                    
                </div>
                <div className='branch2'>
                    <br/><br/><br/><br/><p>LOGIN PAGE</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label><br/>
                            <Form.Control type="email" placeholder="input here" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label><br/>
                            <Form.Control type="email" placeholder="input here" />
                        </Form.Group>
                        <Button variant="secondary">LOGIN</Button>
                    </Form>
                </div>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}


                {/* <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl> */}

            </div>
        )
    }
}

export default Login