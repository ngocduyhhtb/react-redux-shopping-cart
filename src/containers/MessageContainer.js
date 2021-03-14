import {connect} from 'react-redux';
import Message from '../components/Notifications/Message';

const MessageContainer = (props) => {
    const {message} = props;
    return (
        <Message message={message}/>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);