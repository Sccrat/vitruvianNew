import {Form, FormLayout, Checkbox, TextField, Button,Page} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import axios from "axios";

export default function FormP() {
  const [producto, setproduct] = useState('');
  const [nombre, setName] = useState('');
  const [codigo, setCode] = useState('');

  const handleSubmit = ()=> {
    console.log('====================================');
    console.log(producto,nombre,codigo);
    console.log('====================================');
    // return;

    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
      
        },
        body:JSON.stringify({nombre,producto,codigo})
    };

    axios
      .post('/api/insertar', {
        body: {nombre,producto,codigo}
      })
      .then((response) => {
        console.log('====================================');
        console.log('se fue',response);
        console.log('====================================');
      });
    // fetch('http://localhost:57373/api/insertar', requestOptions)
    //     .then(res => res.json())
    //     .catch(error => console.error('Error:', error))
    //     .then(response => console.log('Success:', response));

  };

  const handleProductChange = useCallback((v) => setproduct(v),[]);

  const handleNameChange = useCallback((v1) => setName(v1),[]);

  const handleCodeChange = useCallback((v2) => setCode(v2),[]);

  return (
    <Page narrowWidth >
        <Form onSubmit={handleSubmit}>
        <FormLayout>
            <TextField
            value={nombre}
            onChange={handleNameChange}
            label="Nombre de la característica"
            type="text"
            />
            <TextField
            value={producto}
            onChange={handleProductChange}
            label="Producto asignado"
            type="text"
            />
            <TextField
            value={codigo}
            onChange={handleCodeChange}
            label="Código de la característica"
            type="text"
            />

            <Button submit primary>Guardar</Button>
        </FormLayout>
        </Form>
    </Page>
    
  );
}