import { Footer } from "flowbite-react";
const FooTer = () => {
    return (
        <Footer container className="bg-transparent">
            <Footer.Copyright href="#" by="ARSDEV" year={2023} />
            <Footer.LinkGroup>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
};

export default FooTer;