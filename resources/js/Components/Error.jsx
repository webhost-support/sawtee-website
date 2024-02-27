const Error = ({ status, message }) => {
    return (
        <div>
            This is the default error page.
            {(status, message)}
        </div>
    );
};

export default Error;
