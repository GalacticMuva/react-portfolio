
const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-muted">{description}</p>

                <div className="mt-auto">
                    <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary w-100">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;