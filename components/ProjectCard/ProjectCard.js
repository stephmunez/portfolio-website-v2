import Image from 'next/image';

const ProjectCard = ({ project }) => {
  const { title, thumbnail, description, stack, repository, url } =
    project.fields;
  return (
    <div>
      <Image
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
        src={`https:${thumbnail.fields.file.url}`}
        alt={title}
      />
      <h2>{title}</h2>
    </div>
  );
};

export default ProjectCard;
