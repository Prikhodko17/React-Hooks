import Contact from '../Contact/contact';
import './Contacts.css'
import {contacts as info} from '../../Constants';
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVenus, faMars, faMarsAndVenus} from '@fortawesome/free-solid-svg-icons';

function Contacts() {
    const [contacts, setContacts] = useState(info);
    const [search, setSearch] = useState('');
    const [genderSearch, setGenderSearch] = useState({male: true, female: true, unknownGender: true});
    useEffect(() => {
        setContacts(filterContacts());
    }, [search, genderSearch])

    const filterContacts = () => {
        const filteredByGender = info.filter(contact => genderSearch[contact.gender]
            || (!(contact.gender in genderSearch) && genderSearch.unknownGender));
        const searchResult = filteredByGender.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.phone}`.toLowerCase().includes(search));
        return searchResult;
    }

    const handleSearchChange = (event) => setSearch(event.target.value.toLowerCase());
    const handleSearchByGender = (event) => {
        const target = event.target;
        setGenderSearch({
            ...genderSearch,
            [event.target.name]: target.checked
        });
    }

    return (
        <div className='main contacts br-10'>
            <div className="main contact-search br-10 ">
                <input className="contact-search-main br-10" type="text" placeholder="Search..."
                       onChange={handleSearchChange}
                       value={search}/>
                <div className="main contact-gender-search">
                    <div className="main gender-checkbox">
                        <input name="male" type="checkbox"
                               onChange={handleSearchByGender}
                               checked={genderSearch.male}/>
                        <FontAwesomeIcon icon={faMars}/>
                    </div>
                    <div className="main gender-checkbox">
                        <input name="female" type="checkbox"
                               onChange={handleSearchByGender}
                               checked={genderSearch.female}/>
                        <FontAwesomeIcon icon={faVenus}/>
                    </div>
                    <div className="main gender-checkbox">
                        <input name="unknownGender" type="checkbox"
                               onChange={handleSearchByGender}
                               checked={genderSearch.unknownGender}/>
                        <FontAwesomeIcon icon={faMarsAndVenus}/>
                    </div>
                </div>
            </div>
            <div className="contacts-list">
                <ul>
                    {
                        contacts?.map(contact => <li className="br-10" key={uuidv4()}><Contact {...contact}/></li>)
                    }
                </ul>
            </div>

        </div>
    )
}

export default Contacts;