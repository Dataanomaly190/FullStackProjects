import PageModel from "../pagesmodel.jsx";

export default function Health() {
    return (
        <PageModel
            title="Health"
            endpoint="http://localhost:5500/news/Health"
        />
    );
}
