function SkillList({ src, skill }) {
  return (
    <span data-aos="flip-left" data-aos-duration="600">
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
