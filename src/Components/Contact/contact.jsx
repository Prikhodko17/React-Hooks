import "./contact.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVenus, faMars} from '@fortawesome/free-solid-svg-icons'

function Contact({firstName, lastName, phone, gender}) {
    return (
        <div className="contact">
            <div className="contact-data">
                <p className="contact-name">{`${firstName} ${lastName}`}</p>
                <p className="contact-phone">{phone}</p>
                <p className="contact-phone">{gender}</p>
            </div>
            <div className="contact-gender">
                {
                    gender ?
                        (gender === 'male' ?
                            <FontAwesomeIcon icon={faMars}/> :
                            <FontAwesomeIcon icon={faVenus}/>)
                        : null
                }
            </div>
        </div>
    );
}
export default Contact;
    

        
 