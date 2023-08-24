import ContactItem from "../../components/ContactItem";

const Contact = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center md:max-w-5xl 2xl:max-w-7xl flex-col flex items-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:leading-none lg:text-title lg:w-2/3 font-subtitle uppercase">
          Reach out For a Chat
        </h2>
        <p className="text-lg lg:text-xl leading-6 text-gray-600 my-4 sm:my-6 lg:my-8">
          Feel free to reach out via any of the following methods:
        </p>
        <div className="mt-6 justify-center px-6 w-full grid grid-cols-6 sm:gap-6 space">
          {/* space-x-0 sm:space-x-6 */}
          <ContactItem
            name="Email"
            link={"mailto:markwongmanchun@gmail.com"}
            icon={"envelope"}
            description="markwongmanchun@gmail.com"
            className="col-span-6 sm:col-span-2"
          />
          <ContactItem
            name="Github"
            link={"https://github.com/markmcwong"}
            icon="fa-brands fa-github"
            description="@markmcwong"
            className="col-span-6 sm:col-span-2"
          />
          <ContactItem
            name="Linkedin"
            link={"https://linkedin.com/in/markmcwong"}
            icon="fa-brands fa-linkedin"
            description="@markmcwong"
            className="col-span-6 sm:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
