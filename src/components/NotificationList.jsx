import { h, Component } from 'preact';
import NotificationItem from './NotificationItem.jsx';

class NotificationList extends Component {
    constructor(props) {
        super(props)
    }

    buildNotifications() {
        const notifications = this.props.notifications;
        return notifications.map(notification => {
            if (!notification.unread) {
                return;
            }
            
            return <NotificationItem title={notification.subject.title} type={notification.subject.type} owner={notification.repository.owner.login} repo={notification.repository.name} repo-url={notification.repository.url} date={notification.updated_at} />
        });
    }

    render() {
        return (
            <div>
                { this.buildNotifications() }
            </div>
        )
    }
}

export default NotificationList;