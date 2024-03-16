import styles from "../styles/navbar.module.css"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"

export default function FloatingNav() {

    const variants = {
        visible: { opacity: 1, top: "30px" },
        hidden: { opacity: 0, top: "-60px"}
    }

    const [floating, setFloating] = useState(true)

    const [y, setY] = useState(0);

    const handleNavigation = useCallback((e: { currentTarget: any }) => {
        const window = e.currentTarget;
        if (y - window.scrollY >= 2 || y <= 0 || window.scrollY <= 0) {
            setFloating(true)
        } else if (y - window.scrollY < -2) {
            setFloating(false)
        }
        setY(window.scrollY);
        
    }, [y]);

    useEffect(() => {

        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    


    return(
        <motion.div variants={variants} animate={floating ? "visible" : "hidden"} transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.4, }} className={`${styles.floatingContainer}`}>
            <Link className={`${styles.navButton}`} href="#skills">
                <p>Skills</p>
            </Link>
            <Link className={`${styles.navButton}`} href="#experience">
                <p>Experience</p>
            </Link>
            <Link className={`${styles.navButton}`} href="#projects">
                <p>Projects</p>
            </Link>
        </motion.div>
    )
}