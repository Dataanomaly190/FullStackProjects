import PageModel from "../pagesmodel.jsx";

export default function TopStories() {
    return (
        <PageModel
            title="Top Stories"
            endpoint="http://localhost:5500/topstories"
        />
    );
}