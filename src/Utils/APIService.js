// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8000/api';

const APIService = {
    ListaAutores: () =>{
        return fetch('http://localhost:8000/api/autor');
    },

    ListaAutoresId: (id) =>{
        return fetch(`http://localhost:8000/api/autor/${id}`);
    },

    CriaAutor :autor=>{
        return fetch('http://localhost:8000/api/autor', {method:'POST', headers:{'content-type':'application/json'}, body:autor})
    },

    ListaNomes:()=>{
        return fetch('http://localhost:8000/api/autor/nome');
    },

    ListaLivros:()=>{
        return fetch('http://localhost:8000/api/autor/livro');
    },

    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, {method: 'DELETE', headers:{'content-type':'application/json'}});
    },

    TrataError: res =>{
        if(!res.ok){
            throw Error(res.responseText);
        }else{
            return res.json();
        }
    }

}
export default APIService;