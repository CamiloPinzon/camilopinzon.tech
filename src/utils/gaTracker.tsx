import { useEffect } from "react";
import ReactGA from "react-ga";
import { useParams } from "react-router-dom";

const GATracker = () => {
    const path = useParams();
    useEffect(() => {
        ReactGA.pageview(window.location.pathname+path + window.location.search);
    }, [])
}

export default GATracker;