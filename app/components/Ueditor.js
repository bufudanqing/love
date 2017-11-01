import React from 'react';
class Ueditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.initEditor()
    }
    componentWillUnmount() {
        // 组件卸载后，清除放入库的id
        UE.delEditor(this.props.id);
    }
    initEditor() {
        const id = this.props.id;
        const cont=this.props.name;
        const ueEditor = UE.getEditor(this.props.id, {autoClearinitialContent:false});
        ueEditor.ready((ueditor) => {
            if (!ueditor) {
                UE.delEditor(id);
                self.initEditor();
            }
            ueEditor.setContent(cont);
        });

    }
    render(){
        return (
            <div id={this.props.id} name="content" type="text/plain">

            </div>
        )
    }
}
export default Ueditor;