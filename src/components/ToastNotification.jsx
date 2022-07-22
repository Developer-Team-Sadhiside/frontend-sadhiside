import '../assets/styles/ToastNotification.css';

function Notification(props) {
  return (
    <div className='alert-toast alert-success alert-dismissible fade show text-white col-md-6 offset-md-3 align-self-center row' role='alert'>
      <p className='notification-message col-11'>{props.content}</p>
      <div className='col-1'>
        <img src='/svg/fi_x.svg' alt='' data-bs-dismiss='alert' aria-label='Close' className='notification-button-close' />
      </div>
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
