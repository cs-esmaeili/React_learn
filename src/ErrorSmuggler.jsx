const ErrorSmuggler = ({ errorGuy: { name, age } }) => {
    return (
        <div className="error-smuggler">
            {`This is ${name}, age ${age()} and his profession is`}
        </div>
    );
};

export default ErrorSmuggler;