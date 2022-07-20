import '../assets/styles/ToastNotification.css';

function Notification(props) {
  return (
    <div className='alert-toast alert-success alert-dismissible fade show text-white col-md-6 offset-md-3 align-self-center' role='alert'>
      <p className='notification-message'>{props.content}</p>
      <img src='/svg/fi_x.svg' alt='' data-bs-dismiss='alert' aria-label='Close' className='notification-button-close' />
    </div>
  );
}

export default function ToastNotification(props) {
  return (
    <div className='fixed-top container toast-notification-container'>
      <Notification content={props.content} />
    </div>
  );
}
