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
            
            return <NotificationItem title={notification.title} type={notification.type} repoId={notification.repo_id} repoName={notification.repo_full_name} url={notification.url} date={notification.updated_at} />
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