import { useEffect, useState } from "react";

/*Custom Hooks para manejar la lógica de localStorage
por convención iniciamos la función con use*/

function useLocalStorage(itemName, initialValue) {
  // este es mi estado inicial( initialValue es un array vació)
  const [item, setItem] = useState(initialValue);
  //  Creo un estado de carga y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        /*Creo esta variable para que cuando inicie la aplicación
      revise si hay alguna info en localStorage, este seria 
      mi estado inicial 
    */
        // accedo al valor guardado en localStorage
        const localStorageItem = localStorage.getItem(itemName);
        //lo convierto en código javascript
        let parsedItem;

        if (!localStorageItem) {
          /*en caso de entrar por primera vez a la aplicación
          si localStorage esta vació va a mostrar un array vació []*/
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  /*función que actualiza al estado y localStorage
    al mismo tiempo para actualizar el estado con persistencia*/
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export default useLocalStorage;
