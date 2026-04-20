import PageModel from "../pagesmodel.jsx";

export default function World() {
    return (
        <PageModel
            title="World"
            endpoint="http://localhost:5500/news/World"
        />
    );
}
