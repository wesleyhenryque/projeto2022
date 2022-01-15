import react from 'react';
 
    function App (props) {
      const modificarNome = event => {
        console.log(event.target.value)
      }
      
      const criacombobox = () => {
        const opcoes = ["fulano"]
          const comboboxopcoes =  opcoes.map(opcao => <option>{opcao}</option>)
         
          return (
                  <select>
                      
                       {comboboxopcoes}
                  
                  </select>
          )
      }
        

     
      

       const meucombobox = () => criacombobox()
      
       return(
        <div>
             <input className="text-centralizado" type= "text" value={props.nome} onChange={ modificarNome}/>
             <h1>hello {props.nome} sua idade é {props.idade} </h1>
             <meucombobox/>
             
        </div>          
      ) 
      
       

    }  

 export default  App;