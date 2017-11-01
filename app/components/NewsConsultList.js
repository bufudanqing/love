import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import NewsConsultListStore from '../stores/NewsConsultListStore';
import NewsConsultListActions from '../actions/NewsConsultListActions';
import Pagination from './Page';

class NewsConsultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = NewsConsultListStore.getState();
        this.onChange = this.onChange.bind(this);
    }
//页面渲染完毕 获取数据
    componentDidMount() {
        NewsConsultListStore.listen(this.onChange);
        NewsConsultListActions.getNewsConsults();
    }
    pageChangeHandle(){
        console.info(JSON.stringify(this))
    }
    componentWillUnmount() {
        NewsConsultListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        NewsConsultListActions.delNewsConsult(event.target.name);
    }
    render() {
        let NewsConsultList = this.state.newsConsults.map((newsConsult, index) => {
            return (
                <div key={newsConsult.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='media-body'>
                            <div className='pull-left thumb-lg'>
                                <img className='media-object'  src={newsConsult.top_img} />
                            </div>
                            <h4 className='media-heading'>
                                <small>标题 <strong>
                                    <Link to={'/syxa/news-consult/getNewsConsult/' + newsConsult.id}>{newsConsult.title}</Link>
                                </strong></small>

                            </h4>
                            <small>作者 <strong>{newsConsult.author}</strong></small>
                            <br />
                            <small>类型 <strong>{newsConsult.type}</strong></small>
                            <br />
                            <div className="del-button">
                                <button>
                                    <Link to={'/syxa/news-consult/editNewsConsult/' + newsConsult.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={newsConsult.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>

                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {NewsConsultList}
                </div>
                {/*<Pagination key="cmk" start={this.state.start} size={this.state.size} total={this.state.total} pageIndexChange={this.pageChangeHandle} {...this.state} />*/}
            </div>
        );
    }
}

export default NewsConsultList;