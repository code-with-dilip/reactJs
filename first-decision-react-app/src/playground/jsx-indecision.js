console.log('app.js running');

const app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle',
    toggle: true,
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

 const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
     alert(option);
    console.log(random);

 }

 const showOrHideSubtitle = () => {
    app.toggle = !app.toggle;
    renderIndecisionApp();

 }

 const numbers = [1, 2, 3 ];
 

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.toggle && <h2>{app.subtitle}</h2>}
            <button onClick={showOrHideSubtitle}>Show Sutitle</button>
            <p>{app.options && app.options.length>0 ? 'Here are your options : '+app.options : 'No Options' }</p>
            {/* <p>{app.options.length}</p> */}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do ?</button>
            <button onClick={removeAllAOptions}>Remove All </button>
    
            <ol>
            {
                app.options.map((option)=><li key={option}> Options is : {option}</li> )
            }
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