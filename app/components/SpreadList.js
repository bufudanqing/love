import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import SpreadListStore from '../stores/SpreadListStore';
import SpreadListActions from '../actions/SpreadListActions';

class SpreadList extends React.Component {
    constructor(props) {
        super(props);
        this.state = SpreadListStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        SpreadListStore.listen(this.onChange);
    }
    componentDidMount() {
        SpreadListActions.getSpreads(this.props.params.type)
    }
    componentWillUnmount() {
        SpreadListStore.unlisten(this.onChange);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.params.type !== this.props.params.type) {
            SpreadListActions.getSpreads(this.props.params.id);
        }
    }
    onChange(state) {
        this.setState(state);
    }
    render() {
        let style={
            width:"200px",
            height:"200px"
        }
        let SpreadList = this.state.spreads.map((spread, index) => {
            return (
                <div key={spread.id} className="col-sm-2">
                           <img width={style.width} height={style.height} src={spread.url}/>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className="row">
                    {SpreadList}
                </div>
            </div>
        );
    }
}
export default SpreadList;