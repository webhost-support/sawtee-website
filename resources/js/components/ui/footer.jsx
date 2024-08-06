export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-700 py-4 text-slate-200 dark:bg-bgDarker">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-center">
          <div className="mt-0 w-full max-w-full shrink-0 px-3 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div className="text-md text-center leading-normal lg:text-left">
              © {new Date().getFullYear()} SAWTEE made &nbsp;by&nbsp;
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500"
              >
                Ankur Singh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>    
  );
}
