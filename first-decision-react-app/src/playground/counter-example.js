
class CounterApp extends React.Component{
    
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state ={
            count : 0
        };
    }

    handleAddOne(){
        console.log('handleAddOne')
        this.setState((prevState)=>{
            return {
                count : prevState.count+1
            }
        });
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count : prevState.count-1
            }
        });
    }

    handleReset(){
        // this.setState(() =>{
        //     return {
        //         count : 0
        //     }
        // });
        this.setState({
            count: 0
        })

        this.setState({
            count: this.state.count +1
        })
    }

    render(){
        return(
            <div>
            <h1>Counter : {this.state.count}</h1>
            <button onClick={this.handleAddOne}> +1 </button>
            <button onClick={this.handleMinusOne}> -1 </button>
            <button onClick={this.handleReset}> Reset </button>
            </div>
        )
    }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))
// let count = 0;
// const appRoot = document.getElementById('app')

// const addOne = () =>{
//     console.log('invoked addOne');
//     count++;
//     renderCountApp();
// }

// const minusOne = () =>{
//     console.log('invoked minusOne');
//     count--;
//     renderCountApp();
// }


// const reset = () =>{
//     count =0
//     renderCountApp();
// }

// const renderCountApp= () => {
//     const templateTwo = (
//         <div>
//             <h1>Count is : {count}</h1>
//             <button  onClick = {addOne}> +1 </button>
//             <button  onClick = {minusOne}> -1 </button>
//             <button  onClick = {reset}> Reset </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCountApp()