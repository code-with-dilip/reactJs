
let count = 0;
const appRoot = document.getElementById('app')

const addOne = () =>{
    console.log('invoked addOne');
    count++;
    renderCountApp();
}

const minusOne = () =>{
    console.log('invoked minusOne');
    count--;
    renderCountApp();
}


const reset = () =>{
    count =0
    renderCountApp();
}

const renderCountApp= () => {
    const templateTwo = (
        <div>
            <h1>Count is : {count}</h1>
            <button  onClick = {addOne}> +1 </button>
            <button  onClick = {minusOne}> -1 </button>
            <button  onClick = {reset}> Reset </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCountApp()