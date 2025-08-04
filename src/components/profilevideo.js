import { Container } from "react-bootstrap";
import video from '../assets/video/profile-pens.mp4';

export default function ProfileVideo() {
    return(
        <section className="bgvideo">
                    <video autoPlay loop muted playsInline className="backvideo">
                        <source src={video} type="video/mp4" />
                    </video>
        </section>
    )
}