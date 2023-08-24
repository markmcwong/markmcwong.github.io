const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full px-8 z-20 bg-slate-100 text-black py-6 font-thin">
        <div className="col-span-2 sm:text-left sm:col-span-1">
          Licensed under the MIT license.
        </div>
        <div className="col-span-2 sm:text-right sm:col-span-1">
          Made with love by{" "}
          <a className="underline" href="https://github.com/markmcwong">
            Mark Wong
          </a>
          .
        </div>
      </div>
    </>
  );
};
export default Footer;
