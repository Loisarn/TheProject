const reactDom = require("react-dom");

class Hello extends React.Component {
    render() {
        return <h1>Hello world!</h1>;
    }
}

reactDom.render(
    <Hello />,
    document.getElementById("root")
);