import React from 'react';
import Main from './components/Routes/Main/Main';


class App extends React.Component {

    render() {

        /************ https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react */
        // return (
        //     <div className={styles.container}>
        //         {this.props.children}
        //     </div>
        // )
        return (
            <div className="App">
              <Main />
            </div>
          );

    }
}

export default App;