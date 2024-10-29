import ProfileUpload from "./ProfileUpload";
import '../assets/styles/index.scss'

export default function Dashboard() {
    return (
        <section className="dashbord-container">
            <ProfileUpload />
            <ProfileUpload />
        </section>
    )
}