import { PropsWithChildren, ReactNode } from "react"

//type headerProps = PropsWithChildren<(src: string, alt: string)>;

type HeaderProps = {
    children: ReactNode,
    image: {
        src: string,
        alt: string,
    }
}
const Header = ({ children, image }: HeaderProps) => {
    return (
        <div>
            <img src={image.src} alt={image.alt} />
            <h1>{children}</h1>
        </div>
    );

};

export default Header;