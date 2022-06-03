import { useAuth } from "hooks/useAuth";

const Profile = () => {
    const data = useAuth();
    console.log(data);
    return (
        <div class="wrapper" >
            <button class="back"><img src="assets/Back.png" alt="" /></button>
            <img class="profil-avatar" src="assets/userpic_100px.png" alt="" />
            <img class="profil-avatar-image" src="assets/Group.png" alt="" />
            <h4 class="Mr">Mr</h4>
            <div class="person-name"><h4>Andrei Smirnov</h4></div>
            <div class="person-ru-name"><p>Андрей Александрович Смирнов</p></div>
            <button class="copy-button">Copy link</button>

            <p class="general-info">GENERAL INFO</p>

            <p class="building">Building</p>
            <p class="building-info">Chekatilo 7a (Belarus)</p>

            <p class="department">Department</p>
            <p class="department-info">Web&Mobile</p>

            <p class="room">Room</p>
            <p class="room-info">1607</p>

            <p class="contacts">CONTACTS</p>

            <p class="mobile-phone">Mobile phone</p>
            <p class="mobile-phone-info">+375 29 1234567</p>

            <p class="email">Email</p>
            <p class="email-info">BogAnalov@bsuir.com</p>


            <p class="profile-info">PROFILE INFO</p>
            <p class="hire-date">Hire date</p>
            <p class="hire-date-info">12 Jan 2010</p>
            <p class="status">Status</p>
            <p class="status-info">Active</p>
            <div class="icons">
                <img class="build-icon" src="assets/building 1.png" alt="" />
                <img class="dep-icon" src="assets/department.png" alt="" />
                <img class="room-icon" src="assets/room.png" alt="" />
                <img class="phone-icon" src="assets/phone 2.png" alt="" />
                <img class="email-icon" src="assets/email.png" alt="" />
                <img class="date-icon" src="assets/calendar.png" alt="" />
                <img class="status-icon" src="assets/status.png" alt="" />
            </div>
            <button class="edit-details-button">EDIT DETAILS</button>
        </div>
    )
}
export default Profile;