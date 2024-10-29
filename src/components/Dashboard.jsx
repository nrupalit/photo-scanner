import ProfileUpload from "./ProfileUpload";
import '../assets/styles/index.scss'
import { Button } from "@mui/material";

export default function Dashboard() {
    const handleSubmit = () => { }
    return (
        <>
            <section className="dashbord-container">
                <ProfileUpload />
                <ProfileUpload />
            </section>
            <Button className="dashboard-submit" onClick={handleSubmit}>Submit</Button>
        </>
    )
}