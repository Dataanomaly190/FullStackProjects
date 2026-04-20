import PageModel from "../../pagesmodel.jsx";

export default function Weather() {
    return (
        <PageModel
            title="Weather"
            endpoint="http://localhost:5500/news/Weather"
        />
    );
}
