import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import AcademicExchangeListStore from '../stores/AcademicExchangeListStore';
import AcademicExchangeListActions from '../actions/AcademicExchangeListActions';

class AcademicExchangeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = AcademicExchangeListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AcademicExchangeListStore.listen(this.onChange);
        AcademicExchangeListActions.getAcademicExchanges();
    }

    componentWillUnmount() {
        AcademicExchangeListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        AcademicExchangeListActions.delAcademicExchange(event.target.name);
    }
    render() {
        let AcademicExchangeList = this.state.academicExchanges.map((scademicExchange, index) => {
            return (
                <div key={scademicExchange.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <img className='media-object'  src={scademicExchange.url} />
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>标题 <strong>
                                    <Link to={'/yjzx/academic-exchange/getAcademicExchange/' + scademicExchange.id}>{scademicExchange.title}</Link>
                                </strong></small>

                            </h4>
                            <small>作者 <strong>{scademicExchange.author}</strong></small>
                            <br />
                            <small>地址 <strong>{scademicExchange.address}</strong></small>
                            <br />
                            <div className="del-button">
                                <button>
                                    <Link to={'/syxa/academic-exchange/editAcademicExchange/' + scademicExchange.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={scademicExchange.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {AcademicExchangeList}
                </div>
            </div>
        );
    }
}

export default AcademicExchangeList;