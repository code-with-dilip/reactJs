console.log('app.js running');

const app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle',
   options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit")
    const option = e.target.elements.option.value;
    if(option){
        console.log("option", option)
        app.options.push(option);
        renderIndecisionApp();
        e.target.elements.option.value = '';
    }
        
}
 const removeAllAOptions = () =>{
    app.options = [];
    renderIndecisionApp();
 }

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options && app.options.length>0 ? 'Here are your options : '+app.options : 'No Options' }</p>
            <p>{app.options.length}</p>

            <button onClick={removeAllAOptions}>Remove All </button>
            <ol>
                <li>first item</li>
                <li>second item</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text"  name="option"/> 
                <button >Add Option</button>
            </form>
        </div>
    );
    
    const appRoot = document.getElementById('app')
    ReactDOM.render(template, document.getElementById('app'));
}


renderIndecisionApp();