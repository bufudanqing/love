import React from 'react';
import NewsConsultStore from '../stores/NewsConsultStore';
import NewsConsultActions from '../actions/NewsConsultActions'

class NewsConsult extends React.Component {
    constructor(props) {
        super(props);
        this.state = NewsConsultStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        NewsConsultActions.getNewsConsult(this.props.params.id);
    }
    componentDidMount() {
        NewsConsultStore.listen(this.onChange);
        NewsConsultActions.getNewsConsult(this.props.params.id);
        $("#showContent").html(this.state.content)
    }

    componentWillUnmount() {
        NewsConsultStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            NewsConsultActions.getNewsConsult(this.props.params.id);
        }

    }

    onChange(state) {
        this.setState(state);
        $("#showContent").html(this.state.content);
    }
    innerHtml(){

    }
    render() {
        let style={
            width:"200px",
            height:"200px"
        }
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>查看新闻资讯/公司动态</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <img width={style.width} height={style.height} src={this.state.top_img}/>
                                </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>标题</label>
                                        <input type='text' className='form-control' ref='nameTextField' defaultValue={this.state.title}
                                              />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>作者</label>
                                        <input type='text' className='form-control' ref='nameTextField' defaultValue={this.state.author}
                                               />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>子标题</label>
                                        <input type='text' className='form-control' ref='nameTextField' defaultValue={this.state.subtitle}
                                               />
                                    </div>

                                    <div className={'form-group '}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='female' defaultValue='1' checked={this.state.type === 1}
                                                   />
                                            <label htmlFor='female'>新闻咨询</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='male' defaultValue='2' checked={this.state.type === 2}
                                                   />
                                            <label htmlFor='male'>公司动态</label>
                                        </div>
                                        <div className={'form-group '}>
                                            <label className='control-label'>内容</label><br/>
                                            <div id="showContent" >
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewsConsult;