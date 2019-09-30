# ReactJs

## What is SPA ?
- There are three different types of applications in general
  - Static WebSites
  - Dynamic WebSites
  - SPA

### Static WebSites
- In a traditional system, when the browser talks to an URL the whole web page is send to the browser from the back end. The content is stored as an HTML in the server. This reloads the whole screen to reload the content.
### Dynamic WebSites
- In a traditional system, when the browser talks to an URL the whole web page is send to the browser from the back end. The HTML content is generated in the server dynamically. This reloads the whole screen to reload the content.

- In a nutshell, the HTML code is completly built on the server.
- The problem with both the approach is that it is really difficult to build a modern website using the above mentioned style of building websites.

### SPA
- The idea is inspired from Mobile Apps.
- SPA have a sevrer and a client. It just has one HTML file loaded with bunch of JS content loaded and started.As we all know JS runs on a browser.
-  So the idea is the JS code takes care of fetching the data and build the DOM in the browser. So, No server calls in here to reload the HTML.
- Basically no request is sent to the backend to load the retrieve the HTML.

### Why React?
- UI state becomes too difficult handle. Reacts helps taking care of the state of the application.
- React is backed by a Huge community and its pretty easy to find a solution to a problem.

### Single Page vs Multi Page Apps

| SPA  | MPA |
| ------------- | ------------- |
| Only one HTML Page, Content is rendered on client. After that everything is managed with **React**. | Multiple HTML Page and the content is rendered from Server. |
| Page is displayed as multiple Components and its managed by a framework like **React** | It can be displayed as components. But its a combination of individual HTML pages , css and etc. We can have react components to be part of it as widgets |
| Page is displayed as multiple Components and its managed by a framework like **React** | It can be displayed as components. But it's a combination of individual HTML pages , css and etc. We can have react components to be part of it as widgets |
| ReactDOM.render() call to rerender the page. Typical there is only one parent React Component is available.  | If React is included in MPA, then multiple ReactDOM.render() call for each component|

## Java Script Basics

- Click on the link below for JavaScript basics.

[Java Script Basics](https://github.com/code-with-dilip/reactJs/blob/master/JavaScript.md)

## React

### Set Up

- Update to latest version of node.

```
brew update && brew upgrade node && npm update -g npm
```

- Run the below command to set up the create-react-appp globally

```
sudo npm install create-react-app -g
```

### Build WorkFlow
**Dependency Management** - Use npm or yarn for dependency management.  
**WebPack** - This is a Bundler which takes care of bundle all the different types of files in the project in to its appropriate modules.  
**Babel** - This is a compiler to compile the java script code. Basically this is needed to translate the code from modern js code to a code that can work in old and modern browsers.
**Development Server** - We need a server to run our Java Script code, so that the app can be accessed as like a real app that we connect to in production.    


### React and React DOM

**React** - This takes for building the react components.  
**ReactDOM** - This takes for rendering the react components and display it in the browser.
