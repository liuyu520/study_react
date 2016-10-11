/**
 * Created by 黄威 on 9/30/16.
 */
import React from 'react';
class App extends React.Component {

    static propTypes = {
        routers: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Div>hello world</Div>
        );
    }
}

export default App;