const Profile = () => {
  return (
    <div className="text-left">
      <h6 className="mb-6 sm:mb-12 text-sm sm:text-md 2xl:text-xl">ABOUT ME</h6>
      <div className="text-3xl uppercase font-title font-medium xl:text-4xl xl:leading-snug">
        I am Mark Wong, I develop
        <a className="text-orange-400 font-cursive normal-case">
          {" "}
          Data-Science{" "}
        </a>
        solutions in
        <a className="text-orange-400 font-cursive normal-case">
          {" "}
          Natural Language Processing{" "}
        </a>
        (<a className="text-orange-400 normal-case">NLP</a>) &{" "}
        <a className="text-orange-400 normal-case">LLMs</a> to solve real-world
        problems.
      </div>
      {/* <div>Contact Me</div> */}
    </div>
  );
};

export default Profile;
