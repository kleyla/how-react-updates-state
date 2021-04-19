# How React Updates State

## Asynchronously

```javascript
const doubleIncreaseHandler = () => {
  setCount(count + 1);
  setCount(count + 1);
};
```

Si 'count' es 0, entondes cuando llamamos `setCount(count + 1); setCount(count + 1);` slo que pasa en realidad es `setCount(0 + 1); setCount(0 + 1);` lo que hace que se renderize como 1

"The state update function setValue(newValue) of [value, setValue] = useState() updates the state asynchronously."

## Callback

La funcion state update tambien acepta un callback para procesar el nuevo estado usando el estado actual, en este caso podemos usar: `setCount(actualCount => actualCount + 1):`

```javascript
const doubleIncreaseHandler = () => {
  setCount((actualCount) => actualCount + 1);
  setCount((actualCount) => actualCount + 1);
};
```

Ejemplo de: https://dmitripavlutin.com/how-react-updates-state/
