import './ModalLogin.scss';

const ModalLogin = ({ modal, toggleModal }) => {
  return (
    <div className={`modal_login-container ${modal}`}>
      <div className='modal'>
        <p className='modal_header'>Log in or sing up</p>
        <span className='close-icon' onClick={toggleModal}></span>

        <div className='hr'></div>

        <div className='modal_body'>
          <h2 className='modal_title'>Welcome to BS</h2>
          <div className='modal_input'>
            <p className='modal_text'>Phone number</p>
            <input type="number" placeholder='(555) 555 55 55'/>
          </div>
          <p className='modal_text'>Enter your number to log in or register. We will send you a verification code.</p>
        </div>

        <div className='hr'>
          <div className='modal_text above'>or</div>
        </div>

        <div className='modal_body'>
          <p className='modal_text'>Enter your number to log in or register. We will send you a verification code.</p>
          <div className='modal_btn'>
            <span className='modal_btn-icon facebook-icon'></span>
            <p>Continue with Facebook</p>
          </div>
          <div className='modal_btn'>
            <span className='modal_btn-icon twitter-icon'></span>
            <p>Continue with Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
