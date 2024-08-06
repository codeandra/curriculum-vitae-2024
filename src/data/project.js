import { faLaravel, faReact } from "@fortawesome/free-brands-svg-icons"
import IMG1 from "/img/web-ecommerce.png"
import IMG2 from "/img/web-film.png"
import IMG3 from "/img/web-shopping-order.png"

export const listProject = [
    {
        id: 1,
        name: "E - Commerce",
        frameworkUsed: faLaravel,
        img: IMG1,
        to: "https://github.com/vandraaa/E-Commerce-Website",
    },
    {
        id: 2,
        name: "Web Film (API)",
        frameworkUsed: faReact,
        img: IMG2,
        to: "https://github.com/vandraaa/Website-Film",
    },
    {
        id: 3,
        name: "Web Shopping Order to WhatsApp",
        frameworkUsed: faReact,
        img: IMG3,
        to: "https://kevcart.vercel.app",
    }
]