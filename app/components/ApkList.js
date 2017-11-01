import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import ApkListStore from '../stores/ApkListStore';
import ApkListActions from '../actions/ApkListActions';
class ApkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ApkListStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        ApkListStore.listen(this.onChange);
        ApkListActions.getApks();
    }
    componentWillUnmount() {
        ApkListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    render() {
        let ListApk = this.state.apks.map((apk, index) => {
            return (
                <div key={apk.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='media-body'>
                            <div className='pull-left thumb-lg'>
                                <img className='media-object'  src={apk.url} />
                            </div>
                            <h4 className='media-heading'>
                                <small>名字 <strong>
                                    <Link to={'/#' + apk.id}>{apk.name}</Link>
                                </strong></small>
                            </h4>
                            <br />
                            <small>版本 <strong>{apk.version}</strong></small>
                            <br />
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {ListApk}
                </div>
            </div>
        );
    }
}

export default ApkList;