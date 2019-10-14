console.log('app.js running');

const app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle',
   options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{app.options && app.options.length>0 ? 'Here are your options : '+app.options : 'No Options' }</p>
        <ol>
            <li>first item</li>
            <li>second item</li>
        </ol>
    </div>
);

const user = {
    name: 'Dilip',
    age: '26',
    location: 'Minneapolis'
}

function getLocation(location){
    if(location)
        return  <p>Location is : {location}</p>
}

function renderAge(){
    return <p>Age is : {user.age}</p>
}

const templateTwo = (
    <div>
        <h1> {user.name ?  user.name : 'UnKNOWN'}</h1>
        {(user.age && user.age >=18) && renderAge()}
        {getLocation(user.location)} 
    </div>
);


//ReactDOM.render(templateTwo, document.getElementById('app'));
ReactDOM.render(template, document.getElementById('app'));
